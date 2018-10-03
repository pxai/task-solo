const chai = require("chai");
const expect = chai.expect;
const UI = require("../src/ui");

describe("UI Object", () => {
  it("exists a ui object",() => {
    expect(UI).to.exist;  
  });

  it("should have a constructor", () => {
    const ui = new UI();
  });
 });
