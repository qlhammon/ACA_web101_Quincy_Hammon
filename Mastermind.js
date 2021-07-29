'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const printBoard = () =>  {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

const generateSolution = () =>  {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateHint = (solution, guess) =>  {
  // your code here
  // Splits the string into an array so the solution and guess can be compared.
  function split(string) {
    return string.split('');
  }
  let boardSolution = split(solution);
  let boardGuess = split(guess);

  let correctLetterWrongSpot = 0;
  let correctLetterAndSpot = 0;
  /* When going through the arrays, if the solution and guess arrays are equal the letter and position 
  are correct (add 1 to ).*/
  for (let i = 0; i < boardSolution.length; i++) {
    // console.log(`solution: ${boardSolution}`)
    // console.log(`guess: ${boardGuess}`)
    if (boardSolution[i] === boardGuess[i]) {
      boardSolution[i] = null;
      // return(boardSolution);
      correctLetterAndSpot++;
    }
  }
  /* When going through the arrays, If the index is of the guess is wrong, but the letter is correct, 
  then correct letter is in the wrong place (add one to the corresponding hints).*/
  for (let i = 0; i< solution.length; i++ ){
    // console.log(`solution: ${boardSolution}`);
    // console.log(`guess: ${boardGuess}`);
    let found = boardSolution.indexOf(boardGuess[i])
    if (found > -1) {
    boardSolution[found] = null;
    // console.log(boardSolution);
        correctLetterWrongSpot++;
    }
  }

  var returnString = correctLetterAndSpot + '-' +correctLetterWrongSpot;
  return(returnString);

  
}
}

const mastermind = (guess) => {
  //solution = 'abcd'; 
  // your code here
  (board.push(guess));

  // If all 4 letters are in the correct index say 'You guessed it'.
  //add the hint in the format of '1-1'
  if (correctLetterAndSpot = 4) {
    return('You guessed it!');
  } else {
    generateHint(solution, guess);
    // getPrompt();
    // printBoard();
  };
}


const getPrompt = () =>  {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}