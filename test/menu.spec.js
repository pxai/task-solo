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

    it("should have a constructor", () => {
        expect(menu.show()).to.equal("Choose: 1.Add | 2.Change | 3.Delete | 4.Quit");
    });

    it("should show text to enter new", () => {
        expect(menu.add()).to.equal("Please enter a task: ");
    });

    it("should show text to enter task number to delete", () => {
        expect(menu.remove()).to.equal("Task number to remove: ");
    });

    it("should show text to enter task number to change", () => {
        expect(menu.change()).to.equal("Task number to change: ");
    });
});
