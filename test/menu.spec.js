const chai = require("chai");
const expect = chai.expect;
const Menu = require("../src/menu");

describe("Menu Object", () => {
    it("exists a menu object",() => {
        expect(Menu).to.exist;
    });

    it("should have a constructor", async () => {
        const menu = new Menu();

        return expect(await menu.show()).to.equal("Choose: 1.Add | 2.Change | 3.Delete | 4.Exit");
    });
});
