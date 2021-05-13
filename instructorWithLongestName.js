const instructorWithLongestName = (instructors) => {
  let longName = '';
  let index = 0;

  for (let i = 0; i < instructors.length; i++) {
    // console.log(instructors[i]);

    if (longName.length < instructors[i].name.length) {
      longName = instructors[i].name;
      // console.log('current longName', longName);
      index = i;
    }
  }

  return instructors[index];
};

console.log(
  instructorWithLongestName([
    { name: 'Samuel', course: 'iOS' },
    { name: 'Jeremiah', course: 'Web' },
    { name: 'Ophilia', course: 'Web' },
    { name: 'Donald', course: 'Web' },
  ])
);
console.log(
  instructorWithLongestName([
    { name: 'Matthew', course: 'Web' },
    { name: 'David', course: 'iOS' },
    { name: 'Domascus', course: 'Web' },
  ])
);

/*
{name: "Jeremiah", course: "Web"}
{name: "Domascus", course: "Web"}
*/
