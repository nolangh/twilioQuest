function getFirstAmountSorted(inputArray, numberOfItems) {
  let newArray = inputArray;
  newArray.sort().splice(numberOfItems);
  return newArray;
}

const sortedAndSpliced = getFirstAmountSorted(["cat", "apple", "bat"], 2);
console.log(sortedAndSpliced);