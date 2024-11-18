export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  let result: number[] = [];
  let i = 0;
  let j = 0;
  let k = collection3.length - 1;

  while (i < collection1.length || j < collection2.length || k >= 0) {
    const val1 = i < collection1.length ? collection1[i] : Infinity;
    const val2 = j < collection2.length ? collection2[j] : Infinity;
    const val3 = k >= 0 ? collection3[k] : Infinity;

    if (val1 <= val2 && val1 <= val3) {
      result.push(val1);
      i++;
    } else if (val2 <= val1 && val2 <= val3) {
      result.push(val2);
      j++;
    } else {
      result.push(val3);
      k--;
    }
  }

  return result;
}
