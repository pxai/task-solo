const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
const MenuHandler = require("../src/menu_handler");
chai.use(sinonChai);

describe("Menu Handler", () => {
    it("exists a menu_handler object",() => {
        expect(MenuHandler).to.exist;
    });

    it("should have a constructor", () => {
       new MenuHandler();
    });

    it("should menu data", () => {
        const menuHandler = new MenuHandler();

        menuHandler.handle();
    });
});
