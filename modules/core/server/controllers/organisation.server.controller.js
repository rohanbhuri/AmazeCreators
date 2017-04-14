'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  organisations = mongoose.model('organisations'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

