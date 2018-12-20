const chai = require("chai");
const expect = chai.expect;
const Menu = require("../src/menu");

describe("Menu Object", () => {
    let menu;

    beforeEach(() => {
        menu = new Menu();
    });

    it("exists a menu object",() => {
        expect(Menu).to.exist;
    });

    it("should show a menu with content", () => {
        expect(menu.show()).to.equal("\nChoose: 0.Show | 1.Add | 2.Change | 3.Delete | 4.Quit\n");

        menu = new Menu("This is content");

        expect(menu.show()).to.equal("This is content\nChoose: 0.Show | 1.Add | 2.Change | 3.Delete | 4.Quit\n");
    });

    it("should say good bye", () => {
        expect(menu.bye()).to.equal("Thanks for using Task-Solo!");
    });
});
