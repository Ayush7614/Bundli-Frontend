var fs = require('fs');
var os = require('os');
var path = require('path');
var cp = require('child_process');
var async = require('async');
var request = require('request');
var walker = require('node-walker');
var _ = require('underscore');

var buildin_modules = ['assert', 'buffer_ieee754', 'buffer', 'child_process', 'cluster', 'console', 'constants', 'crypto', '_debugger', 'dgram', 'dns', 'domain', 'events', 'freelist', 'fs', 'http', 'https', '_linklist', 'module', 'net', 'os', 'path', 'punycode', 'querystring', 'readline', 'repl', 'stream', 'string_decoder', 'sys', 'timers', 'tls', 'tty', 'url', 'util', 'vm', 'zlib'];

function parse_file(file, callback) {
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) {
      return callback(err);
    }
    
    var regex = /require\s*\(\s*['"]([\w\-]+?)['"]\s*\)/g;
    var deps = [];
    var res = regex.exec(data);
    while (res) {
      deps.push(res[1]);
      res = regex.exec(data);
    }
    callback(null, deps);
  });
}

function parse_dir(dir, black_lists, callback) {
  dir = path.normalize(dir);
  var dependencies = [];
  walker(dir, function(err, file, next_file) {
    if (err) {
      return callback(err);
    }

    function next() {
      if (next_file) {
        next_file();
      } else {
        callback(null, dependencies);
      }
    }

    var black_regex = new RegExp(_.map(black_lists, function(x) {
      return path.join(dir, x);
    }).join('|'));

    file = path.normalize(file || '');
    if (file
        && path.extname(file) === '.js'
        && !black_regex.test(file)) {
      parse_file(file, function(err, deps) {
        if (err) {
          return callback(err);
        }
        
        dependencies = _.union(dependencies, _.filter(deps, function(dep) {
          return buildin_modules.indexOf(dep) < 0;
        }));
        next();
      });
    } else {
      next();      
    }
  });
}

function fetch_package_info(dep, cache, callback) {
  if (cache) {
    var cache_home = path.join(process.env.HOME, (os.platform() === 'linux' ? '.npm' : '.npm-cache'));
    var file = path.join(cache_home, dep, '.cache.json');
    console.log('Fetch from cache: %s', file);
    if (!fs.existsSync(file)) {
      var error = new Error('Fetch from cache failed, package: ' + dep + ', err: cache not found!');
      return callback(error, cache, dep);
    }
    
    fs.readFile(file, 'utf8', function(err, data) {
      var error = err ? new Error('Fetch from cache failed, package: ' + dep + ', err: ' +  err) : null;
      callback(error, cache, data);
    });
  } else {
    var url = 'https://registry.npmjs.org/' + dep;
    console.log('Fetch from server: %s', url);
    request(url, function(err, resp, body) {
      var error = err ? new Error('Fetch from server failed, package: ' + dep + ', err: ' + err) : null;
      callback(error, cache, body);
    });
  }
}

function fetch_version(deps, option, callback) {
  var version = {};
  var cache = option.cache;
  var latest = option.latest;

  function update_version(dep, data) {
    version[dep] = '*';
    var json = null;
    try {
      json = JSON.parse(data);
    } catch (e) {
      console.warn('Failed to parse package info, package: %s, err: %s.', dep, e);
      return false;
    }

    var v = (json
             && json['dist-tags']
             && (latest
                 ? (json['dist-tags']['latest'] || json['dist-tags']['stable'])
                 : (json['dist-tags']['stable'] || json['dist-tags']['latest'])))
      || json['version']
      || '*';

    version[dep] = v;
    return version[dep] !== '*';
  }


  async.forEachSeries(deps, function(dep, callback) {
    fetch_package_info(dep, cache, function(err, cache, data) {
      if (err) {
        console.error(err.message);
        if (cache) {
          fetch_package_info(dep, false, arguments.callee);
        } else {
          update_version(dep, data);
          callback();
        }
      } else {
        update_version(dep, data);
        callback();
      }
    });
  }, function(err) {
    callback(err, version);
  });
}

exports.analyze = function(dir, option, callback) {
  if (!callback) {
    callback = option;
    option = {
      cache: true,
      latest: false
    };
  }
  option.black_lists = _.union(['node_modules'], option.black_lists || []); 
  
  async.waterfall([
    function(callback) {
      parse_dir(dir, option.black_lists, callback);
    },
    function(deps, callback) {
      fetch_version(deps, option, callback);
    }
  ], function(err, version) {
    callback(err, version);
  });
};

