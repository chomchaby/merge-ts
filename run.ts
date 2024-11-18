import * as readline from "readline";
import { merge } from "./src/merge";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "Enter the first sorted array (comma-separated, sorted in ascending order): ",
  (input1) => {
    rl.question(
      "Enter the second sorted array (comma-separated, sorted in ascending order): ",
      (input2) => {
        rl.question(
          "Enter the third sorted array (comma-separated, sorted in descending order): ",
          (input3) => {
            const collection1 = input1.split(",").map(Number);
            const collection2 = input2.split(",").map(Number);
            const collection3 = input3.split(",").map(Number);

            const result = merge(collection1, collection2, collection3);
            console.log("Merged and sorted result:", result);

            rl.close();
          }
        );
      }
    );
  }
);
