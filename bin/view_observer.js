// Generated by CoffeeScript 1.6.3
var Guid, ViewObserver;

Guid = require('./guid').Guid;

ViewObserver = (function() {
  function ViewObserver() {
    this.__POINTER__ = Guid.generate();
  }

  ViewObserver.prototype.changed = function(theChangedSubject) {};

  return ViewObserver;

})();

exports.ViewObserver = ViewObserver;
