const express = require('express');
const path = require('path');
var app = express();
var http = require('http');
var httpProxy = require('http-proxy');
var proxy = httpProxy.createProxyServer();


const port = 4000;


app.use('/:id',express.static(path.resolve(__dirname, '..', 'client', 'dist')));

const gallery = 'http://ec2-52-53-207-161.us-west-1.compute.amazonaws.com:3000';
const reservation = 'http://ec2-18-217-9-12.us-east-2.compute.amazonaws.com:3001';
const popular = 'http://ec2-3-95-234-77.compute-1.amazonaws.com';
const header = 'http://ec2-18-223-24-238.us-east-2.compute.amazonaws.com:3003';

app.all('/popular/:id', function(req, res) {
  console.log('I just want to see this');
  proxy.web(req, res, {target: popular });
});

app.all('/gallery/:id', function(req, res) {
  console.log('I just want to see this');
  proxy.web(req, res, {target: gallery });
});

app.all('/reservation/:id', function(req, res) {
  console.log('I just want to see this');
  proxy.web(req, res, {target: reservation });
});

app.all('/header/:id', function(req, res) {
  console.log('I just want to see this');
  proxy.web(req, res, {target: header });
});

app.listen(4000,() => console.log(`Example app listening on port ${port}!`));
