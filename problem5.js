//Write some JavaScript to find the MOST frequent item, and the LEAST frequent
//item in the following array. The return should look like:
//The most frequent item is: b. The least frequent item is : d

function itemFrequency() {
  const array = ['a', 'b', 'c', 'd', 'c', 'b', 'b', 'c', 'a', 'e', 'b', 'e'];
  let occurences = {};

  array.forEach(char => {
    if (Object.keys(occurences).includes(char)) {
      occurences[char] += 1;
    } else occurences[char] = 1;
  });

  let sortedKeys = Object.keys(occurences).sort((a, b) => occurences[a] - occurences[b]);
  return `The most frequent item is: ${sortedKeys[sortedKeys.length - 1]}. The least frequent item is: ${sortedKeys[0]}.`;
}

console.log(itemFrequency());
