// Generated by CoffeeScript 1.6.3
var ViewComponent, ViewLeaf, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

ViewComponent = require('./view_component').ViewComponent;

ViewLeaf = (function(_super) {
  __extends(ViewLeaf, _super);

  function ViewLeaf() {
    _ref = ViewLeaf.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  return ViewLeaf;

})(ViewComponent);

exports.ViewLeaf = ViewLeaf;
