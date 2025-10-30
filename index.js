// enum for score categories
export const SCORE_CATEGORY = {
    BRELAN: 25,
    FULL: 30,
    SQUARE: 35,
    SUITE: 40,
    YAMS: 50,
    DEFAULT: 0
};

export const PLAYED_FIGURES = new Set();

export const figureOutScore = (dice) => {
    let score = 0;
    const firstDieValue = dice[0];
    const diceCount = {};
    
    // YAMS check
    const allDiceSame = dice.every(die => die === firstDieValue);
    if (allDiceSame) {
        PLAYED_FIGURES.add(SCORE_CATEGORY.YAMS);
        return SCORE_CATEGORY.YAMS;
    }

    // Suite check
    const sortedDice = [...new Set(dice)].sort((a, b) => a - b);
    const isSuite = sortedDice.length === 5 && sortedDice[4] - sortedDice[0] === 4;
    if (isSuite) {
        PLAYED_FIGURES.add(SCORE_CATEGORY.SUITE);
        return SCORE_CATEGORY.SUITE;
    }

    // Square check
    for (const die of dice) {
        diceCount[die] = (diceCount[die] || 0) + 1;
    }
    const hasSquare = Object.values(diceCount).some(count => count === 4);
    if (hasSquare) {
        PLAYED_FIGURES.add(SCORE_CATEGORY.SQUARE);
        return SCORE_CATEGORY.SQUARE;
    }

    // Full check
    const hasFull = Object.values(diceCount).includes(3) && Object.values(diceCount).includes(2);
    if (hasFull) {
        PLAYED_FIGURES.add(SCORE_CATEGORY.FULL);
        return SCORE_CATEGORY.FULL;
    }

    // Brelan check
    const hasBrelan = Object.values(diceCount).some(count => count === 3);
    if (hasBrelan) {
        PLAYED_FIGURES.add(SCORE_CATEGORY.BRELAN);
        return SCORE_CATEGORY.BRELAN;
    }

    // Sum of all dice values
    for (const die of dice) {
        PLAYED_FIGURES.add(SCORE_CATEGORY.DEFAULT);
        score += die;
    }
    
    return score;
}

// Function to sum scores in an array
export const sumScores = (scores) => {
    const actualScores = scores.map(dice => figureOutScore(dice));
    return actualScores.reduce((total, score) => total + score, 0);
};


