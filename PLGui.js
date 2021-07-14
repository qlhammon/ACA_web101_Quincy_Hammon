let button = document.getElementById("inputButton");

button.addEventListener("click", function pigLatin (word){
    
    let vowels = /[aeiou]/gi;
    let newWord = word.toString().toLowerCase();
    let charIndex;

    // If the first letter of the word is a vowel(regEX), then add 'yay' at the end.
    if (newWord[0].match(vowels)) {
      return newWord + "yay";
    }
    // For the new word find the first vowel index.
    for (char of newWord) {
      if (char.match(vowels)) {
        charIndex = newWord.indexOf(char);
        break;
      }
    }

    // Return the word split at the vowel and add the beginning (if !vowel) + 'ay'. 
    return newWord.slice(charIndex) + newWord.slice(0, charIndex) + "ay";
  
  /* function(){
      console.log('clicked');
  })*/
// Get word from input box
let englishWord = document.getElementById("inputBox");

//pass word through translating function
let plWord = pigLatin(englishWord);

console.log(plWord);

//Create li element for word list
let li = document.createElement("li");

let ul = document.getElementById("translator");
// "push" li to ul
ul.appendChild(li);

//Place translated word into list
li.innerText = plWord;

})











