
const getStrategy = function (grid) {
    console.log('getting strategy');
    let strategy = "randomDiagonal"
    if (strategy === "randomDiagonal") {
        let plan = [];
        let isEven = Math.random() < 0.5
        for (let i = 0; i < 10; i++) {
            let sets = Math.round(Math.random() * 3) + 1;
            let isForwards = Math.random() < 0.5
            let aSet = Math.random() < 0.5
            isForwards 
                ? aSet ? getRandomDiagonalForwardsASets(grid.length, sets, isEven, true).forEach((set) => {
                    plan.push(set)
                }) : getRandomDiagonalForwardsBSets(grid.length, sets, isEven, true).forEach((set) => {
                    plan.push(set)
                })
                : aSet ? getRandomDiagonalBackwardsASets(grid.length, sets, isEven, true).forEach((set) => {
                    plan.push(set)
                }) : getRandomDiagonalBackwardsBSets(grid.length, sets, isEven, true).forEach((set) => {
                    plan.push(set)
                })
        }
        return plan;
    }
}

const strategyTypes = [
    "randomDiagonal",
    "diagonalAndRandom",
    "forwardDiagonal",
    "backwardDiagonal",
    "orderedDiagonal",
    "backAndForthDiagonal",
    "upAndDown",
    "random",
    "stepped"
]

const getRandomDiagonalForwardsASets = function (length, sets, even, random) {
    let result = [];
    let startingPoint = Math.round(Math.random()) * length;
    for (let i = 0; i < sets; i++) {
        let diagonalRow = [];
        let randomStart = Math.round(Math.random() * (length / 2)) * 2;
        if (!even) {
            randomStart = randomStart - 1 > 0 ? randomStart - 1 : 1
        }
        let fromSide = Math.random() < 0.5;
        let i = 0, j = random ? randomStart : startingPoint;
        while (i < length && j < length) {
            diagonalRow.push(fromSide ? [i, j] : [j, i])
            i++
            j++
        }
        startingPoint = startingPoint === length - 1 ? 0 : startingPoint + 2
        result.push(diagonalRow)
    }
    return result;
}

const getRandomDiagonalForwardsBSets = function (length, sets, even, random) {
    let result = [];
    let startingPoint = Math.round(Math.random()) * length - 1;
    for (let i = 0; i < sets; i++) {
        let diagonalRow = [];
        let randomStart = Math.round(Math.random() * (length / 2)) * 2 - 1;
        if (!even) {
            randomStart = randomStart - 1 > 0 ? randomStart - 1 : 1
        }
        let fromSide = Math.random() < 0.5;
        let i = length - 1, j = random ? randomStart : startingPoint;
        while (i >= 0 && j >= 0) {
            diagonalRow.push(fromSide ? [i, j] : [j, i])
            i--
            j--
        }
        startingPoint = startingPoint === length - 1 ? 0 : startingPoint + 2
        result.push(diagonalRow)
    }
    return result;
}

const getRandomDiagonalBackwardsASets = function (length, sets, even, random) {
    let result = [];
    let startingPoint = Math.round(Math.random()) * length;
    for (let i = 0; i < sets; i++) {
        let diagonalRow = [];
        let randomStart = Math.round(Math.random() * (length / 2)) * 2 - 1;
        if (!even) {
            randomStart = randomStart - 1 > 0 ? randomStart - 1 : 1
        }
        let fromSide = Math.random() < 0.5;
        let i = 0, j = random ? randomStart : startingPoint;
        while (i >= 0 && j >= 0) {
            diagonalRow.push(fromSide ? [i, j] : [j, i])
            i++
            j--
        }
        startingPoint = startingPoint === length - 1 ? 0 : startingPoint + 2
        result.push(diagonalRow)
    }
    return result;
}

const getRandomDiagonalBackwardsBSets = function (length, sets, even, random) {
    let result = [];
    let startingPoint = Math.round(Math.random()) * length;
    for (let i = 0; i < sets; i++) {
        let diagonalRow = [];
        let randomStart = Math.round(Math.random() * (length / 2)) * 2 - 1;
        if (!even) {
            randomStart = randomStart - 1 > 0 ? randomStart - 1 : 1
        }
        let fromSide = Math.random() < 0.5;
        let i = length - 1, j = random ? randomStart : startingPoint;
        while (i >= 0 && j >= 0) {
            diagonalRow.push(fromSide ? [i, j] : [j, i])
            i--
            j++
        }
        startingPoint = startingPoint === length - 1 ? 0 : startingPoint + 2
        result.push(diagonalRow)
    }
    return result;
}

module.exports = getStrategy;