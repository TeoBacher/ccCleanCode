export const getYamsScore = (dice) => {
    // Number of points for a Yams
    let yamsScore = 0;

    // if all dice have the same value, return 50 points
    const firstDieValue = dice[0];
    const allDiceSame = dice.every(die => die === firstDieValue);
    if (allDiceSame) {
        return 50;
    }

    // Sum all dice values
    for (const die of dice) {
        yamsScore += die;
    }
    return yamsScore;
}