const ExplorerService = require("../../lib/utils/ExplorerService");

describe("Unit Tests for ExplorerService Class", () => {
    test('1) Filter Explorers By Mission', () => {

      const explorers = [{mission:"node"}]

      const explorersInNode = ExplorerService.filterByMision(explorers,"node");

      expect(explorersInNode.length).toBe(1)
      

    });
  })