function mutate(freightItems) {
  let mutatedItems = [];
  return (mutatedItems = freightItems.map((item) =>
    item.toString().toUpperCase()
  ));
}

const mutated = mutate(["dog", "ray gun", "cat"]);
console.log("Mutated Items");
console.log(mutated); // should be ['DOG', 'CAT', 'ZIPPERS']
