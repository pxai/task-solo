const chai = require("chai");
const expect = chai.expect;
const Reader = require("../src/reader");

describe("Reader", () => {
    it("should exist", () => {
      expect(Reader).to.exist;
    });

   it("should read numbers from console", () => {
      const reader = new Reader();
   });

   it("should read text from console", () => {
      const reader = new Reader();
      const stdin = require("mock-stdin").stdin();

      process.nextTick(() => {
          stdin.send("This is a task\n");
      });

      return reader.readText("Please insert something").then( (response) => {
          expect(response).to.equal("I'm Batman");
      });
   });
 });
