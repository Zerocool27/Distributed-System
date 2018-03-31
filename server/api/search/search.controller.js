'use strict';

var _ = require('lodash');
var elasticsearch = require('elasticsearch');

var ELASTIC_INDEX = "ds_project"
var ELASTIC_TYPE = "review_data"

//process.env.ELASTIC_HOST_1 = "ec2-35-165-87-60.us-west-2.compute.amazonaws.com"
//process.env.ELASTIC_HOST_2 ="ec2-35-160-26-235.us-west-2.compute.amazonaws.com"
//process.env.ELASTIC_PORT = 9200


exports.search = function(req, res) {

    var searchWords = req.body.words
    console.log("SEARCH CALLED")
    var elasticClient = new elasticsearch.Client({
        hosts: [{
            host: process.env.ELASTIC_HOST_1,
            port: process.env.ELASTIC_PORT
        }, {
            host: process.env.ELASTIC_HOST_2,
            port: process.env.ELASTIC_PORT
        }],
        maxRetries: 10,
        deadTimeout: 30000
    })
    console.log("ELASTIC HOST 1", process.env.ELASTIC_HOST_1)
    console.log("ELASTIC HOST 2", process.env.ELASTIC_HOST_2)
    console.log("ELASTIC PORT", process.env.ELASTIC_PORT)
    var multiMatchQuery = {
        "query": {
            "multi_match": {
                "query": searchWords.toString(),
                "fields": ["summary", "reviewText"]
            }
        }
    }

    var shouldArr = []

    shouldArr.push(multiMatchQuery)

    var wordList = searchWords.split(" ")

    if (wordList.length > 0) {

        wordList.forEach(function(word) {
            var queryTemp = {
                "query": {
                    "multi_match": {
                        "query": word.toString(),
                        "fields": ["summary", "reviewText"]
                    }
                }
            }
            shouldArr.push(queryTemp)
        })

    }

    var elasticQuery = {
        "query": {
            "bool": {
                "should": shouldArr,
                "minimum_should_match": 1
            }
        }
    }
    console.log("ELASTIC QUERY", JSON.stringify(elasticQuery))

    elasticClient.search({
        index: ELASTIC_INDEX,
        type: ELASTIC_TYPE,
        body: JSON.stringify(elasticQuery)
    }).then(function(resp) {
        res.json(resp.hits.hits)
    }).catch(function(err) {
        res.status(400).json(err)
    })

}