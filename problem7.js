function budgetToBills(cost, bills = [100, 50, 20, 10, 5, 1]) {

  if (validateInput(cost, bills) === false) {
    console.log('Sorry! The input you entered is not valid!');
    console.log('Please try again with valid input.');
    return null;
  }

  let billBreakdown = {};
  bills = bills.sort((a, b) => b - a);

  for(let i = 0; i < bills.length; i++) {
    let billQuantity = Math.floor(cost / bills[i]);
    if (cost - billQuantity * bills[i] < 0) continue;
    if(billQuantity > 0) billBreakdown[bills[i]] = billQuantity;
    cost -= billQuantity * bills[i];
    if (cost === 0) break;
  }

  return billBreakdown;
}


function validateInput(cost, bills) {
  const acceptedBills = [100, 50, 20, 10, 5, 1];

  if (Number.isInteger(cost) === false) return false;

  for (let i = 0; i < bills.length; i++) {
    if (acceptedBills.includes(bills[i])) continue;
    return false;
  }

  return true;
}


console.log(budgetToBills(1754, [20, 10, 5, 1])); // { 20: 87, 10: 1, 1: 4 }
console.log(budgetToBills(1754, [100, 20, 50, 10, 5, 1])); // { 100: 17, 50: 1, 4: 1 }
console.log(budgetToBills(1754));
console.log(budgetToBills("forty-three"));
console.log(budgetToBills(1754, [100, 21, 1]));
