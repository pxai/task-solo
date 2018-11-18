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

    describe("Output", () => {
        beforeEach(() => {
            sinon.stub(console, "log").callsFake( () => log.apply(log, arguments));
        });

        afterEach(() => {
          console = consoleBackup;
          console.log("After each");
        });

        it("should show a message when started", () => {
            const ui = new UI();
            const stdin = require("mock-stdin").stdin();

            process.nextTick(() => {
                stdin.send("4\n");
            });

            ui.start().then(() => {
                expect(console.log.calledOnce).to.be.true;
                process.exit();
            });
        });
    });
});
