var assert, util, sinon;
assert = require("assert");
Util  = require("../lib/util");
sinon = require("sinon");

describe("util", function() {
  describe("sum関数のテスト", function() {
    var util,stub;

    before(function() {
      util = new Util();
      stub = sinon.stub(util, 'add');
      stub.returns(3);
    });

    it("1 + 1 = 3(use stub)", function() {
      assert.equal(util.sum(1,1), 3);
    });

    after(function() {
      stub.restore();
    });

  });
});
