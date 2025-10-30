import { describe, expect, it } from "vitest";
import { figureOutScore, SCORE_CATEGORY, sumScores } from "./index.js";

describe("yams rules", () => {
    it.each([
        [[2, 2, 2, 2, 2], SCORE_CATEGORY.YAMS],
        [[1, 2, 3, 4, 5], SCORE_CATEGORY.SUITE],
        [[5, 5, 5, 6, 6], SCORE_CATEGORY.FULL],
        [[3, 3, 3, 3, 1], SCORE_CATEGORY.SQUARE],
        [[4, 4, 4, 6, 5], SCORE_CATEGORY.BRELAN],
        [[1, 2, 3, 4, 6], 16]
    ])("should return %s for dice %s", (dice, expectedScore) => {
        expect(figureOutScore(dice)).toBe(expectedScore);
    });
});


describe("sumScores", () => {
    it("should return the sum of scores for multiple dice sets", () => {
        const diceSets = [
                    [4, 4, 4, 4, 6], // square = 35
                    [5, 5, 5, 6, 6], // full = 30
                    [1, 2, 3, 4, 5], // suite = 40
                    [2, 2, 2, 2, 2], // yams = 50
                    [2, 2, 3, 4, 6]  // 17
                ];
        const totalScore = sumScores(diceSets);
        expect(totalScore).toBe(172);
    });

    it("should return 0 for an empty array", () => {
        expect(sumScores([])).toBe(0);
    });

    it("should handle single dice set", () => {
        const diceSets = [
            [3, 3, 3, 3, 3] // yams = 50
        ];
        expect(sumScores(diceSets)).toBe(50);
    });

});