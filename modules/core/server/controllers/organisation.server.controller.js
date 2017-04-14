'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  organisation = mongoose.model('organisation'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Create a organisation
 */
exports.create = function (req, res) {
  var organisation = new organisation(req.body);
  organisation.user = req.user;

  organisation.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(organisation);
    }
  });
};

/**
 * Show the current organisation
 */
exports.read = function (req, res) {
  res.json(req.organisation);
};

/**
 * Update a organisation
 */
exports.update = function (req, res) {
  var organisation = req.organisation;

  organisation.title = req.body.title;
  organisation.content = req.body.content;

  organisation.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(organisation);
    }
  });
};

/**
 * Delete an organisation
 */
exports.delete = function (req, res) {
  var organisation = req.organisation;

  organisation.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(organisation);
    }
  });
};

/**
 * List of organisations
 */
exports.list = function (req, res) {
  organisation.find().sort('-created').populate('user', 'displayName').exec(function (err, organisations) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      res.json(organisations);
    }
  });
};

/**
 * organisation middleware
 */
exports.organisationByID = function (req, res, next, id) {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'organisation is invalid'
    });
  }

  organisation.findById(id).populate('user', 'displayName').exec(function (err, organisation) {
    if (err) {
      return next(err);
    } else if (!organisation) {
      return res.status(404).send({
        message: 'No organisation with that identifier has been found'
      });
    }
    req.organisation = organisation;
    next();
  });
};
