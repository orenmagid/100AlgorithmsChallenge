function allLongestStrings(inputArray: string[]): string[] {
  let length = 0;
  inputArray.forEach(string => {
    if (string.length > length) length = string.length;
  });
  return inputArray.filter(string => {
    return string.length === length;
  });
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
