function maskEmail(email) {
  const atIndex = email.indexOf("@");

  const username = email.slice(0, atIndex);
  const domain = email.slice(atIndex);

  const firstChar = username[0];
  const lastChar = username[username.length - 1];

  const maskedUsername =
    firstChar + "*".repeat(username.length - 2) + lastChar;

  return maskedUsername + domain;
}

let email = "apple.pie@example.com";

console.log(maskEmail(email));

console.log(maskEmail("apple.pie@example.com"));

console.log(maskEmail("freecodecamp@example.com"));

console.log(maskEmail("info@test.dev"));

console.log(maskEmail("user@domain.org"));