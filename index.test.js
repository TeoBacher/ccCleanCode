import { describe, expect, it } from "vitest";
import { figureOutScore, ScoreCategory, sumScores } from "./index.js";

describe("yams rules", () => {
    it.each([
        [[2, 2, 2, 2, 2], ScoreCategory.YAMS],
        [[1, 2, 3, 4, 5], ScoreCategory.SUITE],
        [[5, 5, 5, 6, 6], ScoreCategory.FULL],
        [[3, 3, 3, 3, 1], ScoreCategory.SQUARE],
        [[4, 4, 4, 6, 5], ScoreCategory.BRELAN],
        [[1, 2, 3, 4, 6], 16]
    ])("should return %s for dice %s", (dice, expectedScore) => {
        expect(figureOutScore(dice)).toBe(expectedScore);
    });
});


describe("sumScores", () => {
    it("should return the sum of scores for multiple dice sets", () => {
        const diceSets = [
                    [4, 4, 4, 4, 6],
                    [5, 5, 5, 6, 6],
                    [1, 2, 3, 4, 5],
                    [2, 2, 2, 2, 2],
                    [2, 2, 3, 4, 6]
                ];
        const totalScore = sumScores(diceSets);
        expect(totalScore).toBe(172);
    });
});