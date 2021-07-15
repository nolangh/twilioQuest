function scanAndFilter(freightItems, forbiddenString) {
  let filteredItems = [];
  return (filteredItems = freightItems.filter(
    (item) => forbiddenString !== item
  ));
}

const filtered = scanAndFilter(
  ["dog", "ray gun", "cat", "zippers", "ray gun"],
  "ray gun"
);
console.log("Filtered Items");
console.log(filtered); // should be ['dog', 'cat', 'zippers']
