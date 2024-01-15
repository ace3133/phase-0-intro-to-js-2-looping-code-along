function writeCards(names) {
    const thankYouMessages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for your kindness!`;
      thankYouMessages.push(message);
    }
  
    return thankYouMessages;
  }
  function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
      console.log(i);
    }
  }
  function writeCards(names) {
    return names.map(name => `Thank you, ${name}, for the wonderful surprise gift!`);
  }
  const names = ["Guadalupe", "Ollie", "Aki"];
  const messages = writeCards(names);
  
  console.log(messages);