const chai = require("chai");
const expect = chai.expect;
const Validator = require("../src/validator");

describe("Validator", () => {
  it("exists", () => {
    expect(Validator).to.exist;
  });

  it("has a constructor with defaults", () => {
    const validator = new Validator();
  });

  it("has a validation method", () => {
    const validator = new Validator();

    expect(validator.isEmpty("")).to.be.true;
  });

  it("says is empty for string with blank characters", () => {
    const validator = new Validator();

    expect(validator.isEmpty("  ")).to.be.true;
  });
});
