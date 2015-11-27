var assert, util, sinon;
assert = require("assert");
util  = require("../lib/util");
sinon = require("sinon");

describe("util", function() {
  describe("sum関数のテスト", function() {
    it("1 + 1 = 2", function() {
      assert(util.sum(1,1), 2);
    });

    it("0 + 1 = 1", function() {
      assert(util.sum(0,1), 1);
    });
  });
});
