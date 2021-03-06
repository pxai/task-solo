const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
const UpdateHandler = require("../src/update_handler");
chai.use(sinonChai);

describe("Update Handler", () => {
    it("exists a show_handler object",() => {
        expect(UpdateHandler).to.exist;
    });

    it("should have a constructor", () => {
       new UpdateHandler();
    });

    it("should show data", () => {
        const updateHandler = new UpdateHandler();

        updateHandler.handle();
    });
});
