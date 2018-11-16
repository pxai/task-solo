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
});
