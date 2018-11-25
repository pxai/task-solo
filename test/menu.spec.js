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
        expect(menu.show()).to.equal("\nChoose: 1.Add | 2.Change | 3.Delete | 4.Quit\n");

        menu = new Menu("This is content");

        expect(menu.show()).to.equal("This is content\nChoose: 1.Add | 2.Change | 3.Delete | 4.Quit");
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

    it("should say good bye", () => {
        expect(menu.bye()).to.equal("Thanks for using Task-Solo!");
    });
});
