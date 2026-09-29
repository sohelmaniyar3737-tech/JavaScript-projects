function isPalindrome(word) {
  word = word.toLowerCase();

  let reversed = word.split("").reverse().join("");

  return word === reversed;
}


function findPalindromeBreaks(words) {
  let result = [];

  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      result.push(i);
    }
  }

  return result;
}


function findRepeatedPhrases(words, phraseLength) {
  let result = [];

  if (phraseLength <= 0 || phraseLength >= words.length) {
    return [];
  }

  for (let i = 0; i <= words.length - phraseLength; i++) {

    let phrase = words.slice(i, i + phraseLength).join(" ");

    let count = 0;

    for (let j = 0; j <= words.length - phraseLength; j++) {
      let currentPhrase = words.slice(j, j + phraseLength).join(" ");

      if (phrase === currentPhrase) {
        count++;
      }
    }

    if (count > 1) {
      result.push(i);
    }
  }

  return result;
}


function analyzeTexts(texts, phraseLength) {
  let result = [];

  for (let i = 0; i < texts.length; i++) {
    let words = texts[i];

    result.push({
      repeatedPhrases: findRepeatedPhrases(words, phraseLength),
      palindromeBreaks: findPalindromeBreaks(words)
    });
  }

  return result;
}