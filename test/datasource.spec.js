const fs = require('fs');
const chai = require("chai");
const expect = chai.expect;
const Datasource = require("../src/datasource");

describe("Datasource", () => {
  let data = [
    { id: 2, description: "test this"},
    { id: 5, description: "make it work" }
  ];

  let testDataFile = "./test.json";

  beforeEach( () => {
     fs.appendFileSync(testDataFile,"");
     fs.writeFileSync(testDataFile, JSON.stringify(data));
  });

  it("exists", () => {
    expect(Datasource).to.exist;
  });

  it("has a default constructor", () => {
    const datasource = new Datasource();

    expect(datasource.data.length).to.equal(0);
  });

  it("has a default data for test file", () => {
    const datasource = new Datasource(testDataFile);

    expect(datasource.data.length).to.equal(2);
  });
});
