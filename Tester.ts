function almostIncreasingSequence(sequence: number[]): boolean {
  let counter = 0;

  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      console.log(sequence[i], sequence[i + 1]);
      counter++;
      if (sequence[i - 1] >= sequence[i + 1]) {
        console.log(sequence[i - 1], sequence[i + 1]);
        return false;
      }
    }
  }
  return counter < 2;
}

console.log(almostIncreasingSequence([1, 3, 4, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2, 3, 4, 5]));
