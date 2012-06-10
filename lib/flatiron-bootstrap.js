/*
 * flatiron-bootstrap.js: A plugin to serve bootstrap in flatiron
 *
 * (C) 2012, Pavan Kumar Sunkara
 * MIT LICENSE
 *
 */

var path = require('path');

exports.name = 'bootstrap';

exports.attach = function (options) {
  var app = this;

  //
  // Serve `../assets` directory
  //
  app.static(path.join(__dirname, '..', 'assets'));

  return;
}
