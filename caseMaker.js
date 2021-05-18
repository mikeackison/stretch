const camelCase = (string) => {
  let output = '';
  for (let i = 0; string.length > i; i++) {
    if (string[i] !== ' ') {
      output += string[i];
    } else {
      output += string[i + 1].toUpperCase();
      i++;
    }
  }
  return output;
};

console.log(camelCase('this is a string'));
console.log(camelCase('time travel function'));
console.log(camelCase('supercalifragalisticexpialidocious'));

/*
Expected output
thisIsAString
timeTravelFuntion
supercalifragalisticexpialidocious
*/
