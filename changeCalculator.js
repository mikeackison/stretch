const calculateChange = (total, cash) => {
  const bills = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1,
  };

  let changeObject = {};

  let change = cash - total;
  console.log(change);

  for (let value in bills) {
    while (change >= bills[value]) {
      console.log('=', bills[value]);
      if (changeObject[value]) {
        changeObject[value] += 1;
        console.log('CHANGE OBJECT', changeObject[value]);
      } else {
        changeObject[value] = 1;
      }

      change = change - bills[value];
    }
  }

  return changeObject;
};

// console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));
