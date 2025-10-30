import { describe, expect, it } from "vitest";
import { getYamsScore } from "./index.js";
// TODO: yams first tests
describe("yams", () => {
    it("should return the correct score", () => {
        expect(getYamsScore([1, 2, 3, 4, 5])).toBe(15);
    });

    it("should return 50 for a Yams", () => {   
        expect(getYamsScore([6, 6, 6, 6, 6])).toBe(50);
    });
});