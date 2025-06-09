import { merge } from "../src/merge";

describe("merge function", () => {
  type MergeInputs = [number[], number[], number[]];

  const testCases: { name: string; inputs: MergeInputs; expected: number[] }[] =
    [
      {
        name: "should merge and sort the arrays correctly",
        inputs: [
          [1, 3, 5],
          [9, 7, 5],
          [2, 4, 6],
        ],
        expected: [1, 2, 3, 4, 5, 5, 6, 7, 9],
      },
      {
        name: "should handle empty arrays",
        inputs: [[], [], []],
        expected: [],
      },
      {
        name: "should handle arrays of different lengths",
        inputs: [[], [5, 3, 1], [2, 4, 6, 8]],
        expected: [1, 2, 3, 4, 5, 6, 8],
      },
      {
        name: "should handle arrays of equal value",
        inputs: [
          [1, 1],
          [1, 1],
          [1, 1],
        ],
        expected: [1, 1, 1, 1, 1, 1],
      },
    ];

  for (const testCase of testCases) {
    it(testCase.name, () => {
      const result = merge(...testCase.inputs);
      expect(result).toEqual(testCase.expected);
    });
  }

  it("should throw error if collection1 is not ascending", () => {
    expect(() => merge([1, 5, 3], [9, 7, 5], [2, 4, 6])).toThrow(
      "collection1 must be sorted in ascending order"
    );
  });

  it("should throw error if collection2 is not descending", () => {
    expect(() => merge([1, 3, 5], [5, 7, 9], [2, 4, 6])).toThrow(
      "collection2 must be sorted in descending order"
    );
  });

  it("should throw error if collection3 is not ascending", () => {
    expect(() => merge([1, 3, 5], [5, 7, 9], [6, 4, 2])).toThrow(
      "collection2 must be sorted in descending order"
    );
  });
});
