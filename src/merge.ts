function isAscending(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }
  return true;
}

function isDescending(arr: number[]): boolean {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) return false;
  }
  return true;
}

export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  if (!isAscending(collection1)) {
    throw new Error("collection1 must be sorted in ascending order");
  }
  if (!isDescending(collection2)) {
    throw new Error("collection2 must be sorted in descending order");
  }
  if (!isAscending(collection3)) {
    throw new Error("collection3 must be sorted in ascending order");
  }

  let result: number[] = [];
  let i = 0;
  let j = collection2.length - 1;
  let k = 0;

  while (i < collection1.length || j >= 0 || k < collection3.length) {
    const val1 = i < collection1.length ? collection1[i] : Infinity;
    const val2 = j >= 0 ? collection2[j] : Infinity;
    const val3 = k < collection3.length ? collection3[k] : Infinity;

    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      i++;
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      j--;
    } else {
      result.push(val3);
      k++;
    }
  }

  return result;
}
