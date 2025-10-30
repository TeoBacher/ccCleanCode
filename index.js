export const getYamsScore = (dice) => {
    // Number of points for a Yams
    let yamsScore = 0;

    for (const die of dice) {
        yamsScore += die;
    }
    return yamsScore;
}