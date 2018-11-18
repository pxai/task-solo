const chai = require("chai");
const sinon = require("sinon");
const sinonChai = require("sinon-chai");
const expect = chai.expect;
const UI = require("../src/ui");
chai.use(sinonChai);

describe("UI Object", () => {
    const consoleBackup = console;

    it("exists a ui object",() => {
        expect(UI).to.exist;
    });

    it("should have a constructor", () => {
        const ui = new UI();
    });

    describe("Output", () => {
        it("should show a message when started", () => {
            const menu = {};
            menu.menu = sinon.stub().returns(Promise.resolve({}));
            const ui = new UI(menu);

            return ui.start().then(() => {
                expect(menu.menu).to.have.been.calledOnce;
            });
        });
    });
});
