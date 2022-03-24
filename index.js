
// First Algorithm
function hasTargetSumFirstAttempt(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

// Second and Current Algorithm
function hasTargetSum(array, target) {
  // Write your algorithm here  
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (num >= target) {
      continue;
    }
    let complement = target - num;
    if (array.indexOf(complement) !== -1 && array.indexOf(complement) !== i) {
      return true;
    }
  };
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/
/**
 * First Algorithm: O(n^2)
 * Second Algorithm: O(n) 
*/

/* 
  Add your pseudocode here
*/
/**   
 * First Algorithm:
 * 1. Add together a unique combination of numbers
 * 2. Check if the sum is equal to the target
 * 3. If it is, return true
 * 4. If it is not, continue to the next combination
 * 5. If there are no more combinations, return false
 * 
 * Second Algorithm:
 * 1. Iterate through the array
 * 2. If the target is greater than the current number, continue to the next number
 * 3. Subtract the current number from the target to find the complement
 * 4. If the complement is in the array and not the current number, return true
 * 5. If the complement is not in the array, continue to the next number
 * 6. If there are no more numbers, return false
 * 
*/

/*
  Add written explanation of your solution here
*/
/** 
 * My first function is O(n^2) because it loops through the array
 * checking every combination of 2 elements until a matching sum is found.
 * If no valid combination is found, it returns false.
 * 
 * My second function is O(n) because it loops through the array
 * checking every number against the target. If the target is greater than the current number,
 * it continues to the next number. If the target is less than the current number,
 * it subtracts the current number from the target to find the complement.
 * If the complement is in the array and not the current number, it returns true.
 * If the complement is not in the array, it continues to the next number.
 * If there are no more numbers, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
