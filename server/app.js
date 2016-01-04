'use strict;'

import path from 'path'
import fs from 'fs'
import _ from 'lodash'
import http from 'http'
import httpProxy from 'http-proxy'
import nodeStatic from 'node-static'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from './../routes/Index'

let proxy = httpProxy.createProxyServer(),
    staticAssets = new nodeStatic.Server('./public'),  
    isProduction = process.env.NODE_ENV === 'production',
    port = isProduction ? process.env.PORT : 3000,
    viewPath = path.resolve(__dirname, 'views'),
    template = fs.readFileSync(viewPath + '/index.html', 'utf8');

const server = http.createServer((req, res) => {
    match({ 
        routes, 
        location: req.url 
    }, (error, redirectLocation, renderProps) => {
        
        let data = {},
            html = _.template(template);

        if (error) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/html');
            data.body = 'Things happen:' + error;
            res.end(html(data));
        
        } else if (redirectLocation) {
            console.log('redirect');

        } else if (renderProps) {
            res.setHeader('Content-Type', 'text/html'); 
            data.body = renderToString(<RoutingContext {...renderProps} />);
            res.end(html(data));
            
        } else if (/__public__/.test(req.url) ) {
            
            if(isProduction) {
                req.addListener('end', function(){
                    staticAssets.serve(req, res);
                }).resume();
            }
            return;

        } else {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/html');
            res.write('Page not found');
            res.end();
        }
    })
})

if(!isProduction) {
    require('./../webpack/hot-server')();
    server.on('request', function(req, res){

        let publicFolder = '/__public__'; 

        if(req.url === publicFolder + '/bundle.js'){
            proxy.web(req, res, {
                target: 'http://localhost:8080/'
            });
        }

        if(req.url === publicFolder + '/style.css') {
            res.end();
        }
    });
}

server.listen(port, function(err) {
    console.log('Listening on ' + port + '...');
});
proxy.on('error', function(e){
    console.log('Dit gaat niet goed, omdat' + e);
});
