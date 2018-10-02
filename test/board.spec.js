const chai = require('chai');
const expect = chai.expect;
const Board = require("../src/board");

describe("Board", () => {
  it("should exist", () => {
    expect(Board).to.exist; 
  });   

  it("should have a constructor with defaults", () => {
    const board = new Board();
  });
});
