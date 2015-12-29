'use strict;'

import path from 'path'
import fs from 'fs'
import _ from 'lodash'
import http from 'http'
import httpProxy from 'http-proxy'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RoutingContext } from 'react-router'
import routes from './../route'

let proxy = httpProxy.createProxyServer(),
    isProduction = process.env.NODE_ENV === 'production',
    port = isProduction ? process.env.PORT : 3000,
    publicPath = path.resolve(__dirname, './../views'),
    template = fs.readFileSync(publicPath + '/index.html', 'utf8')

const server = http.createServer((req, res) => {
    match({ 
        routes, 
        location: req.url 
    }, (error, redirectLocation, renderProps) => {

        if (error) {
            console.log('terrible' + error);
            //writeError('ERROR!', res)
        
        } else if (redirectLocation) {
            console.log('redirect');
            //redirect(redirectLocation, res)

        } else if (renderProps) {
            let data = {},
                html = _.template(template);
            res.setHeader('Content-Type', 'text/html'); 
            data.body = renderToString(<RoutingContext {...renderProps} />);
            res.end(html(data));
            
        } else {
            console.log('not found, though not entirely');
            
            // this feels as a hacky way to distinct dev from prod server-logic
            if(isProduction) {
                res.end();
            }
            //  writeNotFound(res)
        }
    })
})

if(!isProduction) {
    let bundle = require('./../webpack/hot-server');
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
