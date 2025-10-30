// enum for score categories
export const ScoreCategory = {
    YAMS: 50,
    SQUARE: 35,
    BRELAN: 25,
    DEFAULT: 0
};

export const getYamsScore = (dice) => {
    let yamsScore = 0;
    const firstDieValue = dice[0];
    const diceCount = {};
    
    // YAMS check
    const allDiceSame = dice.every(die => die === firstDieValue);
    if (allDiceSame) {
        return ScoreCategory.YAMS;
    }

    // Square check
    for (const die of dice) {
        diceCount[die] = (diceCount[die] || 0) + 1;
    }
    const hasSquare = Object.values(diceCount).some(count => count === 4);
    if (hasSquare) {
        return ScoreCategory.SQUARE;
    }

    // Brelan check
    const hasBrelan = Object.values(diceCount).some(count => count === 3);
    if (hasBrelan) {
        return ScoreCategory.BRELAN;
    }

    // Sum all dice values
    for (const die of dice) {
        yamsScore += die;
    }
    
    return yamsScore;
}

