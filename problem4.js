// Write some JavaScript that finds the average of the following array:

const array = [34, 203, 16, 46, 34, 432, 342, 124, 33, 188, 12];

let total = array.reduce(function(acc, current) {
  return acc + current;
});

let average = total / array.length;
console.log(`The average is ${average}`);
