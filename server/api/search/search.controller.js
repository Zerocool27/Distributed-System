'use strict';

var _ = require('lodash');
var elasticsearch = require('elasticsearch');

var ELASTIC_INDEX = "ds_project"
var ELASTIC_TYPE = "review_data"

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