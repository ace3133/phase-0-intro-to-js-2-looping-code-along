// Define the writeCards function
function writeCards(names) {
  return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
}

// Define the countDown function
function countDown(startingNumber) {
  for (let i = startingNumber; i >= 0; i--) {
    console.log(i);
  }
}

// Example usage:
const names = ["Guadalupe", "Ollie", "Aki"];
const messages = writeCards(names);

console.log(messages);

// Call countDown function
countDown(5);
