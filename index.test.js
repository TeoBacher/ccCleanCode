import { describe, expect, it } from "vitest";
import { getYamsScore, ScoreCategory } from "./index.js";
// TODO: yams first tests
describe("yams rules", () => {
    it.each([
        [[2, 2, 2, 2, 2], ScoreCategory.YAMS],
        [[3, 3, 3, 3, 1], ScoreCategory.SQUARE],
        [[4, 4, 4, 6, 5], ScoreCategory.BRELAN],
        [[1, 2, 3, 4, 6], 16]
    ])("should return %s for dice %s", (dice, expectedScore) => {
        expect(getYamsScore(dice)).toBe(expectedScore);
    });
});