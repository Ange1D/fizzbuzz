const Reader = require("../../lib/utils/Reader");

describe("Unit Tests for Reader Class", () => {
    test("1) Read explorers.json", () => {

        const explorers = Reader.readJsonFile("test/data/explorers_test_file_1.json");

        expect(explorers).not.toBeUndefined();
      

    });
});
  