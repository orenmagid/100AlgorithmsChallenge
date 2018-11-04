function almostIncreasingSequence(sequence: number[]): boolean {
  let counter = 0;

  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] >= sequence[i + 1]) {
      counter++;
    }
  }
  return counter < 2;
}

console.log(almostIncreasingSequence([1, 3, 2, 1]));
console.log(almostIncreasingSequence([1, 3, 2]));
