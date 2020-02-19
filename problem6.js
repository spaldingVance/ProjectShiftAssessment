function findOverlap() {
  let arr1 = ['a', 'b', 'c', 'a', 'a', 'b', 'd'];
  let arr2 = ['a', 'b', 'b', 'a', 'e', 'c', 'c', 'g'];

  arr1.sort();
  arr2.sort();

  const maxLength = Math.max(arr1.length, arr2.length);
  let overlap = [];

  for(let i = 0; i < maxLength; i++) {
    if (arr1[i] === arr2[i]) {
      overlap.push(arr1.shift());
      arr2.shift();
    } else {
      if (arr1.includes(arr1[i])) {
        arr1.shift();
      } else {
        arr2.shift();
      }
    }
  }
  return overlap;
}

console.log(findOverlap());
