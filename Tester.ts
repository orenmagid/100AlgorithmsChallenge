// Given an array of 2k integers (for some integer k),
//
// -   On the 1st, 3rd, 5th, etc. iterations (1-based) replace each pair of consecutive elements with their sum;
// -   On the 2nd, 4th, 6th, etc. iterations replace each pair of consecutive elements with their product.
// After the algorithm has finished, there will be a single element left in the array. Return that element.

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
