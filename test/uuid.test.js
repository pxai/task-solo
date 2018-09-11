const chai = require("chai");
const expect = chai.expect;
const UUID = require("../src/uuid");

describe("UUID", () => {
  it("should generate valid uuids", () => {
    const uuid = UUID.generate();

    expect(uuid.length).to.equal(32);
    expect(uuid).to.match(/^[a-zA-Z0-9]{32}$/);
  });
});
