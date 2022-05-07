const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

const explorer1 = {name: "Explorer1", score: 1}
const explorer3 = {name: "Explorer3", score: 3}
const explorer5 = {name: "Explorer5", score: 5}
const explorer15 = {name: "Explorer15", score: 15}

describe("Unit Test FIZZBUZZ", () => {
    test('1) Apply Validation In Explorer Score', () => {

        const explorersValidation = FizzbuzzService.applyValidationInExplorer(explorer1)

        expect(explorersValidation.trick).toBe(1)
      

    });
    test('2) Apply Validation In Explorer FIZZ', () => {

        const explorersValidation = FizzbuzzService.applyValidationInExplorer(explorer3)

        expect(explorersValidation.trick).toBe("FIZZ")
      

    });

    test('3) Apply Validation In Explorer BUZZ', () => {

        const explorersValidation = FizzbuzzService.applyValidationInExplorer(explorer5)

        expect(explorersValidation.trick).toBe("BUZZ")
      

    });

    test('4) Apply Validation In Explorer FIZZBUZZ', () => {

        const explorersValidation = FizzbuzzService.applyValidationInExplorer(explorer15)

        expect(explorersValidation.trick).toBe("FIZZBUZZ")
      

    });

  })

