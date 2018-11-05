function alternatingSums(array: number[]): number[] {
  let sumArray = [0, 0];
  for (var i = 0; i < array.length; i++) {
    i % 2 === 0 ? (sumArray[0] += array[i]) : (sumArray[1] += array[i]);
  }
  return sumArray;
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
