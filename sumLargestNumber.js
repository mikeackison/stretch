const sumLargestNumbers = (data) => {
  let highNum = 0;
  let secondHighNum = 0;
  
  for (let i of data) {
    if (data[i] > highNum) {
      // if iteration is greater than highNum
      secondHighNum = highNum;
      // if true, assign highNum to secondHighNum
      highNum = data[i];
      // assign iteration to highNum
      
    } else if (data[i] > secondHighNum) {
      // if itertain was not higher than high num, else if iteration it greater secondHighNum
      secondHighNum = data[i];
      // if true, assing iteration to secondHighNum
    } 
    // out of if loop, return to for loop and iterate
  }
  // add highNum and secondHighNum together
  return highNum + secondHighNum
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));