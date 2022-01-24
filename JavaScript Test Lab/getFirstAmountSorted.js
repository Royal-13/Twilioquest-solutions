function getFirstAmountSorted(inputArray, numberOfItems) {
    // Step 1: sort inputArray alphabetically
    inputArray.sort();
    // Step 2: create an array which contains the first N items of the sorted
    //         array - the number of items is provided in the numberOfItems 
    //         variable
    let arr= inputArray.slice(0,numberOfItems);
    // Step 3: return the new array you created at step 2
    return arr
  }

const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray); // << should print out ['apple', 'bat']
  