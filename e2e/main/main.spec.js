'use strict';

var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
/* jshint -W079 */
var expect = chai.expect;
var HttpBackend = require('httpbackend');
var backend = null;

describe('Main View', function() {
  var page = {};

  beforeEach(function() {
    backend = new HttpBackend(browser);
    backend.whenGET(/\//).passThrough();

    browser.get('/');
    page.main = require('./main.po');
  });

  afterEach(function() {
    backend.clear();
  });

  it('Jumbotron に正しいデータが含まれる', function() {
    backend.whenGET(/.*/).passThrough();

    expect(page.main.h1El.getText()).to.eventually.equal('\'Allo, \'Allo!');
    expect(page.main.imgEl.getAttribute('src')).to.eventually.match(/assets\/images\/yeoman.png$/);
    expect(page.main.imgEl.getAttribute('alt')).to.eventually.equal('I\'m Yeoman');
  });

  it('追加', function() {
    backend.whenGET(/.*/).passThrough();
    backend.whenPOST(/.*/).passThrough();
    
    page.main.nameEl.sendKeys('aaa');
    page.main.infoEl.sendKeys('bbb');
    page.main.createEl.click();

    expect(page.main.features.count()).to.eventually.equal(7);
  });

});
