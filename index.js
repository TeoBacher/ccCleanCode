// enum for score categories
export const ScoreCategory = {
    BRELAN: 25,
    FULL: 30,
    SQUARE: 35,
    SUITE: 40,
    YAMS: 50,
    DEFAULT: 0
};

export const figureOutScore = (dice) => {
    let yamsScore = 0;
    const firstDieValue = dice[0];
    const diceCount = {};
    
    // YAMS check
    const allDiceSame = dice.every(die => die === firstDieValue);
    if (allDiceSame) {
        return ScoreCategory.YAMS;
    }

    // Suite check
    const sortedDice = [...new Set(dice)].sort((a, b) => a - b);
    const isSuite = sortedDice.length === 5 && sortedDice[4] - sortedDice[0] === 4;
    if (isSuite) {
        return ScoreCategory.SUITE;
    }

    // Square check
    for (const die of dice) {
        diceCount[die] = (diceCount[die] || 0) + 1;
    }
    const hasSquare = Object.values(diceCount).some(count => count === 4);
    if (hasSquare) {
        return ScoreCategory.SQUARE;
    }

    // Full check
    const hasFull = Object.values(diceCount).includes(3) && Object.values(diceCount).includes(2);
    if (hasFull) {
        return ScoreCategory.FULL;
    }

    // Brelan check
    const hasBrelan = Object.values(diceCount).some(count => count === 3);
    if (hasBrelan) {
        return ScoreCategory.BRELAN;
    }

    // Sum of all dice values
    for (const die of dice) {
        yamsScore += die;
    }
    
    return yamsScore;
}

// Function to sum scores in an array
export const sumScores = (scores) => {
    const actualScores = scores.map(dice => figureOutScore(dice));
    return actualScores.reduce((total, score) => total + score, 0);
};
