(function() {
  (function(root, factory) {
    if (typeof define === 'function' && define.amd) {
      return define(factory);
    } else if (typeof exports === 'object') {
      return module.exports = factory();
    } else {
      if (root.Mimosas == null) {
        root.Mimosas = {};
      }
      return root.Mimosas.Observer = factory();
    }
  })(this, function() {
    var Observer;
    return Observer = (function() {
      function Observer() {}

      Observer.prototype.changed = function(theChangedSubject) {};

      return Observer;

    })();
  });

}).call(this);
