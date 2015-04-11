'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
/* jshint -W079 */
var expect = chai.expect;

describe('Main View', function() {
  var page;

  beforeEach(function() {
    browser.get('/');
    page = require('./main.po');
  });

  it('Jumbotron に正しいデータが含まれる', function() {
    expect(page.h1El.getText()).to.eventually.equal('\'Allo, \'Allo!');
    expect(page.imgEl.getAttribute('src')).to.eventually.match(/assets\/images\/yeoman.png$/);
    expect(page.imgEl.getAttribute('alt')).to.eventually.equal('I\'m Yeoman');
  });


});
