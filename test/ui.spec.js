const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const UI = require("../src/ui");
require("mocha-sinon");

describe("UI Object", () => {
    const consoleBackup = console;

    it("exists a ui object",() => {
        expect(UI).to.exist;
    });

    it("should have a constructor", () => {
        const ui = new UI();
    });

    describe.skip("Output", () => {
        beforeEach(() => {
            sinon.stub(console, "log").callsFake( () => log.apply(log, arguments));
        });

        afterEach(() => {
          console = consoleBackup;
          console.log("After each");
        });
        it("should show a message when started", (done) => {
            const ui = new UI();
            ui.start().then(() => {
                return expect(console.log.calledOnce).to.be.true;
            });
        });
    });
});
