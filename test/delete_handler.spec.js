const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
const DeleteHandler = require("../src/delete_handler");
chai.use(sinonChai);

describe("Update Handler", () => {
    it("exists a show_handler object",() => {
        expect(DeleteHandler).to.exist;
    });

    it("should have a constructor", () => {
       new DeleteHandler();
    });

    it("should show data", () => {
        const deleteHandler = new DeleteHandler();

        deleteHandler.handle();
    });
});
