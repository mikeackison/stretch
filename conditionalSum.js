const conditionalSum = (values, condition) => {
  let output = 0;

  for (let i of values) {
    if (condition === 'even') {
      if (i % 2 === 0) {
        output += i;
      }
    } else if (condition === 'odd') {
      if (i % 1 === 0) {
        output += i;
      }
    } else {
      return 'Condition needs to be be even or odd';
    }
  }
  return output;
};

console.log(conditionalSum([1, 2, 3, 4, 5], 'even'));
console.log(conditionalSum([1, 2, 3, 4, 5], 'odd'));
console.log(conditionalSum([13, 88, 12, 44, 99], 'even'));
console.log(conditionalSum([], 'odd'));

/*
Expected output
6
9
144
0
*/
