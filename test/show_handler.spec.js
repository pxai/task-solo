const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
const ShowHandler = require("../src/show_handler");
chai.use(sinonChai);

describe("Show Handler", () => {
    it("exists a show_handler object",() => {
        expect(ShowHandler).to.exist;
    });

    it("should have a constructor", () => {
       new ShowHandler();
    });

    it("should show data", () => {
        const showHandler = new ShowHandler();

        showHandler.handle();
    });
});
