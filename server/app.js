impot path from 'path'
import fs from 'fs'
import _ from 'lodash'
import http from 'http'
import httpProxy from 'http-proxy'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from './../route'

var proxy = httpProxy.createProxyServer();
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, './../www');
var template = fs.readFileSync(publicPath + '/index.html', 'utf8');
var server = http.createServer((req, res) => {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    
        if (error) {
            console.log('terrible' + error);
            //writeError('ERROR!', res)
        } else if (redirectLocation) {
            console.log('redirect');
            //redirect(redirectLocation, res)
        } else if (renderProps) {
            res.setHeader('Content-Type', 'text/html');
            var data = {};
            data.body = renderToString(<RoutingContext {...renderProps} />);
            var html = _.template(template);
            res.end(html(data));  
        } else {
            console.log('not found');
            //  writeNotFound(res)
        }
    })
})

if(!isProduction){
    var bundle = require('./../webpack/hot-server');
    bundle.default();
    server.on('request', function(req, res){
        if(req.url === '/bundle.js'){
            console.log('hier geweest');
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

