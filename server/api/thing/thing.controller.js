/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var things = [
  {
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Stylus, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  }
];

// Get list of things
exports.index = function(req, res) {
  console.log('index ' + req);
  res.json(things);
};

exports.create = function(req, res) {
  console.log('create ' + req);
  var name = req.param('name');
  var info = req.param('info');
  things.push({'name':name, 'info':info});
  res.json(true);
};

exports.show = function(req, res) {
  console.log('show ' + req);
  var id = req.param('id');
  res.json(things[id]);
};

exports.update = function(req, res) {
  console.log('update ' + req);
  var index = req.param('id');
  var name = req.param('name');
  var info = req.param('info');
  things[index] = {'name':name, 'info':info};
  res.json(true);
};

exports.destroy = function(req, res) {
  var index = req.param('id');
  console.log('destroy ' + index + ' ' + req);
  things.splice(index, 1);
  res.json(true);
};
