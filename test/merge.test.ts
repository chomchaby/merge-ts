import { merge } from "../src/merge";

describe("merge function", () => {
  it("should merge and sort the arrays correctly", () => {
    const collection_1 = [1, 3, 5];
    const collection_2 = [2, 4, 6];
    const collection_3 = [9, 7, 5];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([1, 2, 3, 4, 5, 5, 6, 7, 9]);
  });

  it("should handle empty arrays", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];

    const result = merge(collection_1, collection_2, collection_3);
    expect(result).toEqual([]);
  });

  it("should handle arrays of different lengths", () => {
    const result = merge([], [2, 4, 6, 8], [5, 3, 1]);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 8]);
  });
});
