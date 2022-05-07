class ExplorerService{

    static filterByMision(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission;
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const amountOfExplorersByMission = explorers.filter((explorer) => explorer.mission == mission).length;
        return amountOfExplorersByMission;
    }
    

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersByMission.map((explorer) => explorer.githubUsername);
    }

    static getExplorersByStack(explorers, stack){
        const explorersWithStack = explorers.filter((explorer) => {
            if(explorer.stacks.includes(stack))
                return explorer;
        });
        return explorersWithStack;
    }
}

module.exports =ExplorerService;