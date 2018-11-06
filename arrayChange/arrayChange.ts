function arrayChange(arr: number[]): number {
  let moves = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= arr[i - 1]) {
      moves += arr[i - 1] + 1 - arr[i];
      arr[i] = arr[i - 1] + 1;
    }
  }

  return moves;
}

console.log(arrayChange([1, 1, 1]));
