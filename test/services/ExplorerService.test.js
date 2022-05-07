const ExplorerService = require("../../lib/services/ExplorerService");

const explorers = [{mission:"node"}]

describe("Unit Tests for ExplorerService Class", () => {
    test('1) Filter Explorers By Mission', () => {

      const explorersInNode = ExplorerService.filterByMision(explorers,"node");

      expect(explorersInNode.length).toBe(1)
      

    });

    test('2) Amount Of Explorers By Mission', () => {

      const numberOfExplorerInNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");

      expect(numberOfExplorerInNode).toBe(1);
    });

  })