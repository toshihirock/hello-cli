var assert, util;
assert = require("assert");
util  = require("../lib/util");

describe("util", function() {
  describe("sum", function() {
    it("1 + 1 = 2", function() {
      assert(util.sum(1,1), 2);
    });

    it("0 + 1 = 1", function() {
      assert(util.sum(0,1), 1);
    });
  });
});
