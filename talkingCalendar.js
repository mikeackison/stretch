const talkingCalendar = (date) => {
  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let suffix = '';
  // slice() accepts two paramenters starting index and ending not inclusive.
  let year = date.slice(0, 4);
  let month = months[date.slice(5, 7) - 1];
  // make day a number, not a string.
  let day = Number(date.slice(-2));

  switch (day) {
    case 1 || 21 || 31:
      suffix = 'st';
      break;

    case 2 || 22:
      suffix = 'nd';
      break;

    case 3 || 23:
      suffix = 'rd';
      break;

    default:
      suffix = 'th';
      break;
  }

  return `${month} ${day}${suffix}, ${year}`;
};

console.log(talkingCalendar('2017/12/02'));
console.log(talkingCalendar('2007/11/11'));
console.log(talkingCalendar('1987/08/24'));

/*
Expected Output
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/
