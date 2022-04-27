const Reader = require("../../lib/utils/Reader");

describe("Unit Tests for Reader Class", () => {
    test('1) Read explorers.json', () => {

      const explorers = Reader.readJsonFile("explorers.json");

      expect(explorers).not.toBeUndefined()
      

    });
  })
  