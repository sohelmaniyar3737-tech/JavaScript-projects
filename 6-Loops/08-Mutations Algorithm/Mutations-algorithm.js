function mutation(arr) {
  let first = arr[0].toLowerCase();
  let second = arr[1].toLowerCase();

  for (let letter of second) {
    if (!first.includes(letter)) {
      return false;
    }
  }

  return true;
}

console.log(mutation(["Mary", "Army"]));
console.log(mutation(["hello", "neo"]));