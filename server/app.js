require('babel-register');
var express = require('express'),
    http = require('http'),
   React = require('react'),
   ReactDOMServer = require('react-dom/server'),
   HelloMessage = require('./../client/component'),
    path = require('path'),
    fs = require('fs'),
    _ = require('lodash'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, './../www');

var template = fs.readFileSync(publicPath + '/index.html', 'utf8');
var HelloComponent = React.createFactory(HelloMessage);

var server = http.createServer(function(req,res){
    
    if(req.url === '/'){
        res.setHeader('Content-Type', 'text/html');
        var data = {};
        data.body = ReactDOMServer.renderToString(HelloComponent());
        var html = _.template(template);
        res.end(html(data));
    }
});

if(!isProduction){
    var bundle = require('./index.js');
    bundle();
    server.on('request', function(req, res){
        if(req.url === '/bundle.js'){
            proxy.web(req, res, {
                target: 'http://localhost:8080'
            });
        }
    });
}

server.listen(port, function(err) {
    console.log('Listening on ' + port + '...');
});
proxy.on('error', function(e){
    console.log('Dit gaat niet goed, omdat' + e);
});

