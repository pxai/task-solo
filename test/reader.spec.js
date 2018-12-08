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

   it("should read text from console", async (done) => {
      let input = {};
   //   input.read = sinon.stub().returns(Promise.resolve("something"));
      const reader = new Reader(input);
      const stdin = require("mock-stdin").stdin();

      process.nextTick(() => {
          stdin.send("This is a task\n");
      });

      const result = await reader.readText("Please insert something");
      expect(result).to.equal("I'm Batman");
   });
 });
