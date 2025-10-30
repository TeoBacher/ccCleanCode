import { describe, expect, it } from "vitest";
import { getYamsScore, ScoreCategory, sumScores } from "./index.js";
// TODO: yams first tests
describe("yams rules", () => {
    it.each([
        [[2, 2, 2, 2, 2], ScoreCategory.YAMS],
        [[3, 3, 3, 3, 1], ScoreCategory.SQUARE],
        [[4, 4, 4, 6, 5], ScoreCategory.BRELAN],
        [[5, 5, 5, 6, 6], ScoreCategory.FULL],
        [[1, 2, 3, 4, 5], ScoreCategory.SUITE],
        [[1, 2, 3, 4, 6], 16]
    ])("should return %s for dice %s", (dice, expectedScore) => {
        expect(getYamsScore(dice)).toBe(expectedScore);
    });
});

describe("sumScores", () => {
    it("should return the sum of scores in an array", () => {
        const scores = [10, 20, 30, 40, 50];
        const totalScore = sumScores(scores);
        expect(totalScore).toBe(150);
    });
});