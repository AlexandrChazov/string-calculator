import { stringCalculator } from "../src/stringCalculator";

describe("stringCalculator", () => {
	test("must return correct value", () => {
		expect(stringCalculator.parse("0")).toBe(0);
		expect(stringCalculator.parse("1 +3/2*3")).toBe(5.5);
		expect(stringCalculator.parse("1--3")).toBe(4);
		expect(stringCalculator.parse("-1*-3")).toBe(3);
		expect(stringCalculator.parse("-1*3")).toBe(-3);
		expect(stringCalculator.parse("-1/0")).toBe(-Infinity);
		expect(stringCalculator.parse("-1/0")).toBe(-Infinity);
		expect(stringCalculator.parse("-0/2")).toBe(-0);
		expect(stringCalculator.parse("0/2")).toBe(0);
	});
});
