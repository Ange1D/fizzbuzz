class ExplorerService{

    static filterByMision(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission)
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const amountOfExplorersByMission = explorers.filter((explorer) => explorer.mission == mission).length
        return amountOfExplorersByMission
    }
    

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission)
        return explorersByMission.map((explorer) => explorer.githubUsername);
    }
}

module.exports =ExplorerService