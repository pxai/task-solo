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

  it("has a method to check if is not cancel char", () => {
    const validator = new Validator();

    expect(validator.isNotCancel(" ")).to.be.true;
    expect(validator.isNotCancel("something")).to.be.true;

    expect(validator.isNotCancel(".")).to.be.false;
  });

  it("can set cancel char through constructor param", () => {
    const validator = new Validator("-");

    expect(validator.isNotCancel(".")).to.be.true;
    expect(validator.isNotCancel("something")).to.be.true;

    expect(validator.isNotCancel("-")).to.be.false;
  });

  it("can check for existing id in array", () => {
    const validator = new Validator("-");

    expect(validator.isNotValidId(6, [1,3,2,3])).to.be.true;
    expect(validator.isNotValidId(6, [])).to.be.true;
    expect(validator.isNotValidId(2, [1,3,2,3])).to.be.false;
  });
});
