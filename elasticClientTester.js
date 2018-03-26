
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
	deadTimeout: 300000
})

elasticClient.ping({
	requestTimeout: 30000
}, function(error) {
	if (error) {
		console.trace('ERROR ELASTICSEARCH CONNECTION', error);
	} else {
		console.log('CONNECTED TO ELASTICSEARCH');
	}
	// on finish
	elasticClient.close();
});