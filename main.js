'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//func that converts words to pig latin. changes string into array and checks for vowel as first letter,
//manipulates array into correct pig latin form
const pigLatin = (word) => {
  let newArr = word.toLowerCase().trim().split('');
  const vowels = ['a', 'e', 'i', 'o', 'u'];
 
  if (vowels.includes(newArr[0])){
    return newArr.concat('yay').join().replace(/,/g, '');
  } 

  //below finds the first vowel and manipulates into pig latin
  else {
    for (let i = 0; i < newArr.length; i++){
      if (vowels.includes(newArr[i])){
        let leftOvers = newArr.splice(i);
        let tempo = newArr.concat('ay');
        return leftOvers.concat(tempo).join('').replace(/,/g, '').trim().toLowerCase(); 
      }
    }
  
  }
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}
// Unit Tests///////////////////////////////////////////////////////////////////////////////////////////////////////////
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins in with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.