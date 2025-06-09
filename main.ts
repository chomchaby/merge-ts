import * as readline from "readline";
import { merge } from "./src/merge";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const parseInput = (input: string): number[] =>
  input
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s !== "")
    .map(Number);

rl.question(
  "Enter the first sorted array (comma-separated, sorted in ascending order): ",
  (input1) => {
    rl.question(
      "Enter the second sorted array (comma-separated, sorted in descending order): ",
      (input2) => {
        rl.question(
          "Enter the third sorted array (comma-separated, sorted in ascending order): ",
          (input3) => {
            const collection1 = parseInput(input1);
            const collection2 = parseInput(input2);
            const collection3 = parseInput(input3);

            try {
              const result = merge(collection1, collection2, collection3);
              console.log("Merged and sorted result:", result);
            } catch (error) {
              console.error("Error:", (error as Error).message);
            }

            rl.close();
          }
        );
      }
    );
  }
);
