function confirmEnding(str, target) {
let matchEnding = str.slice(str.length - target.length) === target;
return matchEnding;
}

console.log(confirmEnding("Open sesame", "same"));

console.log(confirmEnding("Open sesame", "sage"));