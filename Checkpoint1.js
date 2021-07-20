'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// This function will create the stacks for the pieces to go on.
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// This function will move the pieces from one stack to annother.
const movePiece = () => {
  // Your code here
  // Define startStack and endStack.
  // Take a piece from the end of the startStack and "push" it to the end stack.
  startStack = stacks[startStack];
  endStack = stacks[endStack];
  
  const piece = startStack.pop();
  endStack.push(piece);


}

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2
const isLegal = () => {
  // Your code here
  if (startStack[startStack.length-1] < endStack[endStack.length-1]){
    return true;
  }else if (endStack[endStack.length] == 0){
      return true;
  }else {
      return false;
  }

}

// What is a win in Towers of Hanoi? When should this function run?
const checkForWin = () => {
  // Your code here
  // Once the length of the endStack array is 4, it returns the win is true.
  if (endStack[endStack.length] == 4){
      return true;
  }else {
    return false;
  }

}

// When is this function called? What should it do with its argument?
const towersOfHanoi = (startStack, endStack) => {
  // Your code here
  // If the move is legal, and the win is not present, proceed to move the piece.
  if(isLegal() == true && checkForWin() == false){
      movePiece();
  }
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}