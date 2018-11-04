function addTwoDigits(n) {
  n = n.toString();
  return parseInt(n[0]) + parseInt(n[1]);
}

console.log(addTwoDigits(59));
