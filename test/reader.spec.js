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

   describe("readText", () => {
     it("should read text from console", async () => {
        let input = {};
        input.read = sinon.stub().returns(Promise.resolve("something"));
        const reader = new Reader(input);

        expect(await reader.readText("Please insert something")).to.equal("something");
     });

     it("should return cancel char when it is typed", async () => {
        let input = {};
        input.read = sinon.stub().returns(Promise.resolve("."));
        const reader = new Reader(input);

        expect(await reader.readText("Please insert something")).to.equal(".");
        sinon.assert.callCount(input.read, 1);
     });

     it("should not return until something valid is typed", async () => {
        let input = {};
        input.read = sinon.stub();
        input.read.onCall(0).returns("");
        input.read.onCall(1).returns("");
        input.read.onCall(2).returns("Yay");

        const reader = new Reader(input);

        expect(await reader.readText("Please insert something")).to.equal("Yay");
        sinon.assert.callCount(input.read, 3);
     });
   });

   describe("readId", () => {
     it("should read text from console", async () => {
        let input = {};
        input.read = sinon.stub().returns(Promise.resolve("1"));
        const reader = new Reader(input);

        expect(await reader.readId("Please insert something", [1, 2, 3])).to.equal("1");
     });

     it("should return cancel char when it is typed", async () => {
        let input = {};
        input.read = sinon.stub().returns(Promise.resolve("."));
        const reader = new Reader(input);

        expect(await reader.readId("Please insert something", [1, 2, 3])).to.equal(".");
        sinon.assert.callCount(input.read, 1);
     });

     it("should not return until something valid is typed", async () => {
        let input = {};
        input.read = sinon.stub();
        input.read.onCall(0).returns("");
        input.read.onCall(1).returns("");
        input.read.onCall(2).returns("2");

        const reader = new Reader(input);

        expect(await reader.readId("Please insert something", [1, 2, 3])).to.equal("2");
        sinon.assert.callCount(input.read, 3);
     });
   });
 });
