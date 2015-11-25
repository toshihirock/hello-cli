var assert, cli;
assert = require("assert");
cli  = require("../lib/cli");

describe("cli", function() {
  describe("print", function() {
    it("should throw an error when empty options", function() {
      assert.throws(function () {
        cli.print();
      }, Error);
    });
  });
});
