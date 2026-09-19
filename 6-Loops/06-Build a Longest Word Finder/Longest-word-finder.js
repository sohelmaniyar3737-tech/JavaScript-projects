function findLongestWordLength(str) {
  let longestWord = 0;
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].length > longestWord) {
        longestWord = arr[i].length;
      }
    }
  return longestWord;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))