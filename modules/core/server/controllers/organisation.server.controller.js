'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  organisations = mongoose.model('organisations'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
  
  exports.list_organisations = function(req,res){
    console.log('aasasasa');
    organisations.find().exec(function(err,data){
        if (!err){
         res.json(data);
        }

    });
  };
     exports.add_organisations = function(req,res){
    console.log('aasasasa');
    // organisations.find().exec(function(err,data){
    //     if (!err){
    //      res.json(data);
    //     }

    // });
  };