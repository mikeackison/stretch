const numberOfVowels = (data) => {
  let vowel_list = 'aeiouAEIOU';
  let vcount = 0;

  /* The indexOf() method returns the index within the calling 
  String object of the first occurrence of the specified value,
  starting the search at fromIndex. Returns -1 if the value is not found.
  */

  /*
  has to be a for..in loop not for..of
  */

  for (let letter in data) {
    if (vowel_list.indexOf(data[letter]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;

  // let output = 0;

  // for (let letter of data) {
  //   switch (letter) {
  //     case 'a':
  //       output++;
  //       break;
  //     case 'e':
  //       output++;
  //       break;
  //     case 'i':
  //       output++;
  //       break;
  //     case 'o':
  //       output++;
  //       break;
  //     case 'u':
  //       output++;
  //       break;
  //     default:
  //   }
  // }
  // return output;
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
