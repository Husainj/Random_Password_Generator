let generateBtn = document.getElementById("generateBtn")
let displayDiv = document.getElementById("display")
let inputChar = document.getElementById("inputChar")
let uppercase = document.getElementById("uppercase")
let lowercase = document.getElementById("lowercase")
let number = document.getElementById("number")
let specialChar = document.getElementById("specialChar")

let alpha = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  number: "1234567890",
  specialChar: "!@#$%^&*()_+-=[]{}|;:,.<>?`~"
};

let unique = "";

generateBtn.onclick = () => {
  let num = inputChar.value;
  unique = "";

  if (uppercase.checked) {
    unique += alpha.uppercase;
  }
  if (lowercase.checked) {
    unique += alpha.lowercase;
  }
  if (number.checked) {
    unique += alpha.number;
  }
  if (specialChar.checked) {
    unique += alpha.specialChar;
  }

  displayDiv.innerText = userIdGenerator(num);
};


const randomAlphabetGen = () => {
  let random = Math.floor(Math.random() * unique.length);
  return unique[random];
};

const userIdGenerator = (noOfChar) => {
  var userId = randomAlphabetGen();
  for (i = 0; i < noOfChar - 1; i++) {
    userId = userId.concat(randomAlphabetGen());
  }
  return userId;
};
