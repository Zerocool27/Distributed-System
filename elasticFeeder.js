var elasticsearch = require('elasticsearch');
var elasticClient = new elasticsearch.Client({
    hosts: [{
        host: process.env.ELASTIC_HOST_1,
        port: process.env.ELASTIC_PORT
    }, {
        host: process.env.ELASTIC_HOST_2,
        port: process.env.ELASTIC_PORT
    }],
    maxRetries: 10,
    deadTimeout: 300000,
    requestTimeout: 60000
})

// NUMBER OF LINES 982619
var fs = require('fs');
var moment_tz = require('moment-timezone')

var stream = fs.createReadStream('kindle_reviews.json', {
    flags: 'r',
    encoding: 'utf-8'
});
var buf = '';

stream.on('data', function(d) {
    buf += d.toString(); // when data is read, stash it in a string buffer
    pump(); // then process the buffer
});
var currentCount = 0
var chunkSize = 10000
var chunk = []

var jobInterval = 5000;

function pump() {
    var pos;
    while ((pos = buf.indexOf('\n')) >= 0) { // keep going while there's a newline somewhere in the buffer
        if (pos == 0) { // if there's more than one newline in a row, the buffer will now start with a newline
            buf = buf.slice(1); // discard it
            continue; // so that the next iteration will start with data
        }
        processLine(buf.slice(0, pos)); // hand off the line
        buf = buf.slice(pos + 1); // and slice the processed data off the buffer
    }
}
var chunkCounter = 0

function processLine(line) { // here's where we do something with a line

    if (line[line.length - 1] == '\r') line = line.substr(0, line.length - 1); // discard CR (0x0D)

    if (line.length > 0) { // ignore empty lines
        currentCount = currentCount + 1
        var obj = JSON.parse(line); // parse the JSON
        if (currentCount < chunkSize) {
            chunk.push(obj) // Load up the chunks

        } else {
            //IMPLEMENT DATA INSERT WITH TIMEOUT
            chunkCounter = chunkCounter + 1
            console.log("10K CHUNK CREATED", chunkCounter)


            setTimeout(function() {
                indexChunkIntoElasticsearch(chunk)
            }, jobInterval)
            currentCount = 0 // UNLOAD TRACKERS
            chunk = []
            chunk.push(obj)
        }

    }
}


function indexChunkIntoElasticsearch(chunk) {

    var bulkBody = [];

    chunk.forEach(function(item) {
        var uniqueElasticId = ""

        var userId = item.reviewerID
        var reviewTime = item.unixReviewTime

        uniqueElasticId = userId + reviewTime

        bulkBody.push({
            index: {
                _index: 'ds_project',
                _type: 'review_data',
                _id: uniqueElasticId
            }
        });

        var reviewAt = moment_tz(item["unixReviewTime"] * 1000).tz("America/Los_Angeles").format("YYYY-MM-DD HH:mm:ss")
        item.unixReviewTimeFormatted = reviewAt
        bulkBody.push(item);

    });

    elasticClient.bulk({
        index: "ds_project",
        type: "review_data",
        body: bulkBody
    }, function(err, response) {
        if (err) {
            console.log("ELASTICSEARCH BULK INSERT ERROR", err);
        } else {
            console.log("ELASTICSEARCH SUCCESSFULLY INSERTED: %s RECORDS", bulkBody.length);
        }
    })
}