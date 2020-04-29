const express = require('express');
const cors = require('cors');
const app = express();
//whitelist contains all the origins
const whiteList = ['http://localhost:3000'];

var corsOptionsDelegate = (req,callback) =>{
    var corsOptions;
  //checks whether the request header consists of origin field
  //and whether it is present in the whiteList array
    if(whiteList.indexOf(req.header('Origin'))!==-1){
        //by setting origin true the cors module replies
        //back with Access-Control-Allow-Origin
        corsOptions = {origin:true};
    }
    else{
        corsOptions = {origin:false};
    }
    callback(null,corsOptions);
};
exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);