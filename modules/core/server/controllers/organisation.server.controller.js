'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  Organisations = mongoose.model('organisations'),
  User=mongoose.model('User'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
  
  exports.list_organisations = function(req,res){
    // console.log('aasasasa');
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
        res.json('saved');
      }
    });
  };
     










     
   
  exports.remove_organisation = function(req,res){
    console.log(req.body._id);
    var id =req.body._id;
    Organisations.findByIdAndRemove(id).exec(function(err){
        if (!err){
          console.log('removed');
         res.json('removed');
        }
    });
  };

  exports.update_organisation = function(req,res){
    console.log(req.body._id);
    var id =req.body._id;
    Organisations.findOneAndUpdate({_id: id}, {$set:{title:req.body.title,content:req.body.content}},function(err, doc){
    if(err){
        console.log('Something wrong when updating data!', err);
    }

    console.log(doc);
});
  };