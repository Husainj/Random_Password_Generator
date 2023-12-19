let generateBtn = document.getElementById("generateBtn")
let displayDiv = document.getElementById("display")
let inputChar = document.getElementById("inputChar")

let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
let unique = alpha.split("");
// console.log(unique)
// console.log(unique.length)

const randomAlphabetGen = () => {
  let random = Math.floor(Math.random() * 62 + 1);
  return unique[random];
};

const userIdGenerator = (noOfChar) => {
  var userId = randomAlphabetGen();
  for (i = 0; i < noOfChar - 1; i++) {
    userId = userId.concat(randomAlphabetGen());
  }
  return userId;
};

// console.log(userIdGenerator(5));

generateBtn.onclick = () =>{
  let num = inputChar.value
  displayDiv.innerText = userIdGenerator(num)
}