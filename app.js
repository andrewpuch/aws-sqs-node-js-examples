// Require objects.
var express = require('express');
var app     = express();
var aws     = require('aws-sdk');
    
// Load your AWS credentials and try to instantiate the object.
aws.config.loadFromPath(__dirname + '/config.json');

// Instantiate SQS.
var sqs = new aws.SQS();

// Start server.
var server = app.listen(80, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('AWS SQS example app listening at http://%s:%s', host, port);
});
