function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== alphabet[alphabet.indexOf(str[0]) + i]) {
      return alphabet[alphabet.indexOf(str[0]) + i];
    }
  }

  return undefined;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));