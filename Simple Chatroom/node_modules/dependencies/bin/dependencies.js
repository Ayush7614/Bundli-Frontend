#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var async = require('async');

function update(file) {
  async.waterfall([
    function(callback) {
      fs.readFile(file, 'utf8', function(err, data) {
        if (err) {
          return callback(err);
        }
        var json = null;
        try {
          json = JSON.parse(data);
        } cache (e) {
          return callback(e);
        }
        callback(null, json);
      });
    },
    function() {
      
    }
  ], function(err) {
    
  });
}

update();
