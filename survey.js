const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable? ", (answer1) => {
  rl.question("Where are you from? ", (answer2) => {
    rl.question("What do you aspire to do? ", (answer3) => {
      rl.question("What is your favourtite programming language ", (answer4) => {
        rl.question("How long have you been coding? ", (answer5) => {
          rl.question("Tell us a quirky fact about yourself ", (answer6) => {
            console.log(`Hello, met ${answer1}. ${answer1} is from ${answer2}, ${answer1} aspires to be the greatest ${answer3}. ${answer1} favourite programming language is ${answer4}, ${answer1} has been coding for ${answer5}. And wait for it ${answer1} quirky fact is ${answer6}`);
            rl.close();
          })
        })
      })
    })
  })
})