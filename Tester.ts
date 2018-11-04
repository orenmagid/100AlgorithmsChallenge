function addBorder(picture: string[]): string[] {
  let wall = "";

  let length =
    picture[0].length >= picture[picture.length - 1].length
      ? picture[0].length + 2
      : picture[picture.length - 1].length + 2;

  for (let i = 0; i < length; i++) {
    wall += "*";
  }

  let newPicture = picture.map(string => "*" + string + "*");

  newPicture.push(wall);
  newPicture.unshift(wall);
  return newPicture;
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["abcdd", "ded"]));
console.log(addBorder(["abc", "deddd"]));
