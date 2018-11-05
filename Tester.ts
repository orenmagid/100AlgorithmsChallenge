function alphabeticShift(inputString: string): string {
  let array = inputString.split("");
  for (let i = 0; i < array.length; i++) {
    console.log(array[i].charCodeAt(0));
  }
}

console.log(alphabeticShift("crazy"));
