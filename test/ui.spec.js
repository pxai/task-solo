const chai = require("chai");
const sinon = require("sinon");
const expect = chai.expect;
const UI = require("../src/ui");
require("mocha-sinon");

describe("UI Object", () => {
  it("exists a ui object",() => {
    expect(UI).to.exist;  
  });

  it("should have a constructor", () => {
    const ui = new UI();
  });
  
  describe("Output", () => {
    beforeEach(() => {
        sinon.stub(console, "log").callsFake( () => log.apply(log, arguments));
    });  

    it("should show a message when started", () => {
        const ui = new UI(); 
        ui.start();
        
        expect(console.log.calledOnce).to.be.true;
    });
  });
});
