function hasTargetSum(array, target) {
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

/* 
  Write the Big O time complexity of your function here
*/
// O(n^2)

/* 
  Add your pseudocode here
*/
/**  
 * 1. Add together a unique combination of numbers
 * 2. Check if the sum is equal to the target
 * 3. If it is, return true
 * 4. If it is not, continue to the next combination
 * 5. If there are no more combinations, return false
*/

/*
  Add written explanation of your solution here
*/
/** 
 * This function is O(n^2) because it loops through the array
 * checking every combination of 2 elements until a matching sum is found.
 * If no valid combination is found, it returns false.
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
