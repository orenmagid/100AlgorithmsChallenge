function add(param1, param2): number {
  return param1 + param2;
}

function add2(...args): number {
  let sum = 0;

  args.reduce(num => {
    return sum + num;
  });
}

// console.log(add(1, 2));
// console.log(add(3, 2));

// console.log(add2(1, 2, 3, 4, 5));
// console.log(add2(2, 3));
