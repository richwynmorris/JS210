function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
      //      (100)         *       1        *         1.1         *     1.15
}


// The issue here, is that the function accepts arguments of different datatypes. This means a string value could be
// used as an argument in the expression on line 18. Using a string datatype in combination with a Number datatype to perform
// a multiplication operation will lead to string coercion and the incorrrect result being returned. The if conditional statements
// never reassign the values to Number datatypes because a string object is inherently a truthy, so the reassignment never takes place.

// console.log(processOrder(100, 1, 0, 0.1, 0.15));      // 126.5
// console.log(processOrder(100, 1, 0, 0.1, '0.15'));      // 1116.5000000000002