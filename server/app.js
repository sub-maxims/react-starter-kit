var express = require('express'),
    path = require('path'),
    httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer();
var app = express();

var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;
var publicPath = path.resolve(__dirname, './../www');

app.use(express.static(publicPath));

if(!isProduction){
    console.log('productie');
    var bundle = require('./index.js');
    bundle();
    app.all('/*', function(req, res){
        proxy.web(req, res, {
            target: 'http://localhost:8080'
        });
    });
}
proxy.on('error', function(e){
    console.log('Dit gaat niet goed, omdat' + e);
});

console.log(__dirname);
app.listen(port, function(){
    console.log('server running on yolo ' + port);
});

