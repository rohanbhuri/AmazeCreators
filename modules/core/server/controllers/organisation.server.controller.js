'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Organisations = mongoose.model('organisations'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
  
  exports.list_organisations = function(req,res){
    console.log('aasasasa');
    Organisations.find().exec(function(err,data){
        if (!err){
         res.json(data);
        }

    });
  };
     exports.add_organisation = function(req,res){
    console.log(req.body);
    var organisations={};
    organisations.title=req.body.title;
    organisations.content=req.body.content;    
    organisations = new Organisations(organisations);

    organisations.save(function(err){
      if(err){
        console.log(err);
      }else{
        console.log('save');
        res.json("saved");
      }
    });
    // organisations.find().exec(function(err,data){
    //     if (!err){
    //      res.json(data);
    //     }

    // });
  };