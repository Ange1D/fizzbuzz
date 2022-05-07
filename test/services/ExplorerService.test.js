const ExplorerService = require("../../lib/services/ExplorerService");

const Reader = require("../../lib/utils/Reader");

const explorers = Reader.readJsonFile("test/data/explorers_test_file_1.json");

describe("Unit Tests for ExplorerService Class", () => {
    test('1) Filter Explorers By Mission', () => {

      const explorersInNode = ExplorerService.filterByMision(explorers,"node");

      expect(explorersInNode.length).toBe(1)
      

    });

    test('2) Amount Of Explorers By Mission', () => {

      const numberOfExplorerInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");

      expect(numberOfExplorerInNode).toBe(1);
    });

    test("3) Explorers Usernames By Mission ", () => {

      const explorersUsername = ExplorerService.getExplorersUsernamesByMission(explorers, "node");

      expect(explorersUsername).not.toBe("");
  });

  })