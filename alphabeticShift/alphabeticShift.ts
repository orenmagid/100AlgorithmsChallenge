function alphabeticShift(string: string): string {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "z") {
      result += "a";
    } else {
      result += String.fromCharCode(string[i].charCodeAt(0) + 1);
    }
  }
  return result;
}

console.log(alphabeticShift("crazy"));
