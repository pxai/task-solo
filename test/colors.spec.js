const chai = require('chai');
const expect = chai.expect;
const Colors = require("../src/colors");

describe("Colors", () => {
  it("should exist", () => {
    expect(Colors).to.exist; 
  });   

  it("should have a constructor with defaults", () => {
    const colors = new Colors();

  });

  describe("test print colors", () => {
    let colors; 

    beforeEach(() => {
      colors = new Colors();
    });

    it("should write on console in default -none-", () => {
      expect(colors.print("Hello")).to.equal("Hello"); 
    });
    
    it("should write on console in white", () => {
      expect(colors.white("Hello")).to.equal("\u001b[37mHello\u001b[0m"); 
    });
    
    it("should write on console in yellow", () => {
      expect(colors.yellow("Hello")).to.equal("\u001b[37mHello\u001b[0m"); 
    });

    it("should write on console in orange", () => {
      expect(colors.orange("Hello")).to.equal("\u001b[37mHello\u001b[0m"); 
    });
    
    it("should write on console in green", () => {
      expect(colors.green("Hello")).to.equal("\u001b[37mHello\u001b[0m"); 
    });
    
    it("should write on console in red", () => {
      expect(colors.red("Hello")).to.equal("\u001b[37mHello\u001b[0m"); 
    });
  });
});
