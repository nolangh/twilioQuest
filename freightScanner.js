function scan(freightItems) {
  let count = 0;
  freightItems.forEach(function (item) {
    if (item === "contraband") {
      count++;
    }
  });
  return count;
}

const newCount = scan(["dog", "contraband", "cat", "zippers", "contraband"]);
console.log('Number of "contraband": ' + newCount); // should be 2
