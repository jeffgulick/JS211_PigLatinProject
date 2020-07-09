'use strict';
const getWord = () => {
  const word = document.getElementById('input').value;
  const newWord = pigLatin(word);
  console.log(newWord)
  document.getElementById('output').value = newWord;
}

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
  