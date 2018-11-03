function addBorder(picture: string[]): string[] {
  let newPicture = picture.map(string => "*" + string + "*");
  newPicture.push("****");
  newPicture.unshift("****");
  return newPicture;
}

console.log(addBorder(["abc", "ded"]));
