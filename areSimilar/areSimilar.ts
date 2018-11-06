function areSimilar(a: number[], b: number[]): boolean {
  if (a.length !== b.length) return false;
  let indexes = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      indexes.push(i);
    }
  }

  if (indexes.length > 2) {
    return false;
  } else {
    let temp = b[indexes[0]];
    b[indexes[0]] = b[indexes[1]];
    b[indexes[1]] = temp;

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
