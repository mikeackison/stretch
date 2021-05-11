const numberOfVowels = (data) => {
  let output = 0;

  for (let letter of data) {
    switch (letter) {
      case 'a':
        output++;
        break;
      case 'e':
        output++;
        break;
      case 'i':
        output++;
        break;
      case 'o':
        output++;
        break;
      case 'u':
        output++;
        break;
      default:
    }
  }
  return output;
};

console.log(numberOfVowels('orange'));
console.log(numberOfVowels('banana-rama'));
console.log(numberOfVowels('aeiou'));
console.log(numberOfVowels('sdfgh'));

/*
Expected output
3
5
5
*/
