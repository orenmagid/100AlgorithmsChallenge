function arrayConversion(inputArray: number[]): number {
  let shouldAdd = true;
  while (inputArray.length > 1) {
    console.log(inputArray);
    let tempArray = [];
    if (shouldAdd) {
      for (let i = 0; i < inputArray.length; i += 2) {
        tempArray.push(inputArray[i] + inputArray[i + 1]);
      }
      inputArray = tempArray;
      shouldAdd = !shouldAdd;
    } else {
      for (let i = 0; i < inputArray.length; i += 2) {
        tempArray.push(inputArray[i] * inputArray[i + 1]);
      }
      inputArray = tempArray;
      shouldAdd = !shouldAdd;
    }
  }
  return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
