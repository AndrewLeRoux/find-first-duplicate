function findFirstDuplicate(arr) {
  for (let i = 1; i < arr.length; i++){
    for (let j = i - 1; j >=0; j--){
      if (arr[j] === arr[i]){
        return arr[i]
      }
    }
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution
