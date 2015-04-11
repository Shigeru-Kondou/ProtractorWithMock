/**
 * This file uses the Page Object pattern to define the main page for tests
 * https://docs.google.com/presentation/d/1B6manhG0zEXkC-H-tPo2vwU06JhL8w9-XCF9oehXzAQ
 */

'use strict';

var MainPage = function() {
  this.heroEl = element(by.css('.hero-unit'));
  this.h1El  = this.heroEl.element(by.css('h1'));
  this.imgEl = this.heroEl.element(by.css('img'));

  this.nameEl = element(by.id('nameInput'));
  this.infoEl = element(by.id('infoInput'));
  this.createEl = element(by.id('createOrUpdate'));

  this.features = element.all(by.repeater('thing in awesomeThings'));
};

module.exports = new MainPage();

