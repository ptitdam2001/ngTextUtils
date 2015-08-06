'use strict';

var port =3000;
var host ='localhost';
var serverPath ='/';
var staticPath ='demo/';
var staticFilePath = __dirname + serverPath;

// remove trailing slash if present
if(staticFilePath.substr(-1) === '/'){
    staticFilePath = staticFilePath.substr(0, staticFilePath.length - 1);
}

var express = require("express");
var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'OPTIONS,GET,POST,PUT,DELETE');
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
    if ('OPTIONS' == req.method){
        return res.send(200);
    }
    next();
});

app.use(express.static(staticFilePath));

var server = app.listen(port, function() {
    var port = server.address().port;

    console.log('app listening at http://localhost:%s', port);
});