// enum for score categories
export const ScoreCategory = {
    YAMS: 50,
    SQUARE: 35,
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

    // Sum all dice values
    for (const die of dice) {
        yamsScore += die;
    }
    
    return yamsScore;
}