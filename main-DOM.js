'use strict';
const getWord = () => {
  const word = document.getElementById('input').value;
  const newWord = pigLatin(word);
  console.log(newWord)
  document.getElementById('output').value = newWord;
}
  //function that converts a sentance to pig latin
  const sentence = (word) => {
    let newArr = word.toLowerCase().trim().split('');
    newArr.push(' ')
    let finalArr = [];
    let compArr = [];
  //loop that creates an array of words
    for (let i = 0; i < newArr.length; i++){
     //builds array of words 
      if (newArr[i]=== " "){
        let cut = newArr.splice(0, i+1);
        let temp = cut.join().replace(/,/g, '').trim()
        finalArr.push(temp);
        i = 0;
      }
    }  
    for (let i = 0; i < finalArr.length; i++){
      let temp2 = pigLatin(finalArr[i]);
      compArr.push(temp2);
    }    
    const sentence = compArr.join().replace(/,/g, ' ');
    return sentence;
  }  

//func that converts words to pig latin. changes string into array and checks for vowel as first letter,
//manipulates array into correct pig latin form
const pigLatin = (word) => {
  if (/\s/.test(word)){
    return sentence(word);
  }
  else {
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
}
  