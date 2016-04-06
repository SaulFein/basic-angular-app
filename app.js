'use strict';

var app = angular.module('app', []);
app.controller('h1Controller', function() {
  this.word = 'Hello';
  this.click = function() {
    console.log(this.word);
    this.word = '';
  };
});
