var Util = function() {
}

Util.prototype.sum = function(a, b) {
  return this.add(a, b);
}

Util.prototype.add = function(a, b) {
  return a + b;
}

module.exports = Util;
