const chai = require("chai");
const expect = chai.expect;
const Console = require("../src/console");

describe("Console", () => {
    it("should exist", () => {
        expect(Console).to.exist;
    });

    it("should have a constructor with defaults", () => {
        const consol = new Console();
    });

    it("should ask a question", () => {
        const stdin = require("mock-stdin").stdin();
        const consol = new Console();

        process.nextTick(() => {
            stdin.send("I'm Batman\n");
        });

        return consol.read("who are you").then( (response) => {
            expect(response).to.equal("I'm Batman");
        });
    });
});
