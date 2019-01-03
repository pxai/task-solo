const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
const AddHandler = require("../src/add_handler");
chai.use(sinonChai);

describe("Show Handler", () => {
    it("exists a show_handler object",() => {
        expect(AddHandler).to.exist;
    });

    it("should have a constructor", () => {
       new AddHandler();
    });

    it("should show data", () => {
        const addHandler = new AddHandler();

        addHandler.handle();
    });
});
