// The getSelectedColumns function selects and extracts specific columns to a new array. 

// Currently, the function is not producing the expected result. 

// Go over the function and the sample runs shown below. What do you think the problem is?

function getSelectedColumns(numbers, cols) {
  var result = [];

  for (var i = 0, length = numbers.length; i < length; i += 1) {
    for (var j = 0, length = cols.length; j < length; j += 1) {
      if (!result[j]) { // if the index doesn't exist, add an array
        result[j] = [];
      }

      result[j][i] = numbers[i][cols[j]];
    }
  }

  console.log(result);
}

// given the following arrays of number arrays
const array1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
const array2 = [[1, 2, 3], [1, 2, 3], [1, 2, 3]];

// `array1` in row/column format
// [[1, 2, 3],
//  [4, 5, 6],
//  [7, 8, 9]]

getSelectedColumns(array1, [0]);     // [[1]];            expected: [[1, 4, 7]]
getSelectedColumns(array1, [0, 2]);  // [[1, 4], [3, 6]]; expected: [[1, 4, 7], [3, 6, 9]]
getSelectedColumns(array2, [1, 2]);  // [[2, 2], [3, 3]]; expected: [[2, 2, 2], [3, 3, 3]]

// The reason the above does not output the expected result is because of the variable reassignment on line
// 11. Length is first initialized on line 10 and assigned a value. ON line 11, the length variable is then used
// again as a variable to be used as the break condition for the while statement in the inner for loop. As a result,
// the reassignment of this variable shadows the outter variable, modifying the break condition in the inner loop. 
// To resolve this issue, you need to use a different variable name for length in the inner for loop of the function. 

// for (var i = 0, length = numbers.length; i < length; i += 1) {
//   for (var j = 0, colslength = cols.length; j < colslength; j += 1) {