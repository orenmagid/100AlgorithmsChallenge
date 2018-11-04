function adjacentElementsProduct(inputArray: number[]): number {
  let product = -Infinity;
  inputArray.forEach((num, i) => {
    let temp = num * inputArray[i + 1];
    if (temp > product) product = temp;
  });
  return product;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
