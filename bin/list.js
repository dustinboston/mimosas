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
      return root.Mimosas.List = factory();
    }
  })(this, function() {
    var List;
    return List = (function() {
      function List() {
        var items, pointers;
        pointers = [];
        items = {};
        this.count = function() {
          return pointers.length;
        };
        this.get = function(pointer) {
          return items[pointer];
        };
        this.getByIndex = function(index) {
          if (index >= this.count()) {
            throw new Error('ArrayOutOfBoundsException');
          }
          if (index < 0) {
            throw new Error('ArrayOutOfBoundsException');
          }
          return items[pointers[index]];
        };
        this.first = function() {
          return items[pointers[0]];
        };
        this.last = function() {
          return items[pointers[pointers.length - 1]];
        };
        this.append = function(item) {
          var pointer;
          if (item.__POINTER__ == null) {
            throw new Error('NullPointerException');
          }
          pointer = item.__POINTER__;
          pointers.push(pointer);
          return items[pointer] = item;
        };
        this.remove = function(pointer) {
          var i, index, item, _i, _len;
          if (pointer == null) {
            throw new Error('ArgumentException');
          }
          if (items[pointer] == null) {
            throw new Error('ListItemUndefined');
          }
          index = -1;
          for (i = _i = 0, _len = pointers.length; _i < _len; i = ++_i) {
            item = pointers[i];
            if (item === pointer) {
              index = i;
              break;
            }
          }
          if (index === -1) {
            throw new Error('ListItemUndefined');
          }
          delete items[pointer];
          return pointers.splice(index, 1);
        };
        this.removeLast = function() {
          var item;
          item = this.last();
          return this.remove(item.__POINTER__);
        };
        this.removeFirst = function() {
          var item;
          item = this.first();
          return this.remove(item.__POINTER__);
        };
        this.removeAll = function() {
          pointers = [];
          return items = {};
        };
      }

      return List;

    })();
  });

}).call(this);
