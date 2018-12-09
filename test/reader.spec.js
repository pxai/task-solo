const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
chai.use(sinonChai);
const Reader = require("../src/reader");

describe("Reader", () => {
    it("should exist", () => {
      expect(Reader).to.exist;
    });

   it("should read numbers from console", () => {
      const reader = new Reader();
   });

   it("should read text from console", async () => {
      let input = {};
      input.read = sinon.stub().returns(Promise.resolve("something"));
      const reader = new Reader(input);

      expect(await reader.readText("Please insert something")).to.equal("something");
   });
 });
