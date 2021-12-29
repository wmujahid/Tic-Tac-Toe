// I want to select everything with the class box and save it to a variable
const boxes = document.querySelectorAll('.box');

const restartButton = document.getElementById('restartButton');
const gameText = document.getElementById('gameText')

// this array will keep track of what boxes are available for a user to select
let boardSpaces = ['', '', '', '', '', '', '', '', '']

// player 1 will be 'O' and player 2 will be 'X'
const playerOne_O = "O";
const playerTwo_X = "X";

// starting player will be player 1
let currentPlayer = playerOne_O;

// Create tic tac toe board lines 
const createBoardLines = () => {
  // for each box in the array a border is placed based on its index
  boxes.forEach((box, index) => {
    let styleString = "";
    if (index < 3) {
      styleString += `border-bottom: 3px solid green;`;
    }
    if (index % 3 === 0) {
      styleString += `border-right: 3px solid green;`;
    }
    if (index % 3 === 2) {
      styleString += `border-left: 3px solid green;`;
    }
    if (index > 5) {
      styleString += `border-top: 3px solid green;`;
    }
    box.style = styleString;
    box.addEventListener('click', boxClicked)
  });
};

const boxClicked = (event) => {
  // refers to the id of the clicked box
  const id = event.target.id
  if (boardSpaces[id] === '') {
    boardSpaces[id] = currentPlayer;
    event.target.innerHTML = currentPlayer;

    // if a player has won change the text of the element with the gameText id to:
    if (playerWins()) {
      gameText.innerText = `${currentPlayer} has won!`;
      return;
    }
    // after a box is clicked if the current player is X switch it to O and vice versa
    if (currentPlayer === playerOne_O) {
      currentPlayer = playerTwo_X
    } else {
      currentPlayer = playerOne_O
    }
  }
};

const playerWins = () => {
  // winning scenarios starting from index 0
  if (boardSpaces[0] === currentPlayer) {
    if (boardSpaces[1] && boardSpaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins up top`)
      return true;
    }
    if (boardSpaces[3] && boardSpaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins down the left`)
      return true;
    }
    if (boardSpaces[4] && boardSpaces[8] === currentPlayer) {
      console.log(`${currentPlayer} wins diagonally`)
      return true;
    }
  }
  // winning scenarios starting from index 8
  if (boardSpaces[8] === currentPlayer) {
    if (boardSpaces[5] && boardSpaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins on the right`)
      return true;
    }
    if (boardSpaces[7] && boardSpaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins on the bottom`)
      return true;
    }
  }
  // winning scenarios starting from index 4
  if (boardSpaces[4] === currentPlayer) {
    if (boardSpaces[1] && boardSpaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins vertically in the middle`)
      return true;
    }
    if (boardSpaces[3] && boardSpaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins horizontally in the middle`)
      return true;
    }
  }
}

// restart button should clear values from the boardSpaces array remove text from the boxes and reset the game text message 
restartButton.addEventListener('click', () => {
  boardSpaces = ['', '', '', '', '', '', '', '', ''];
  boxes.innerText = '';

})

createBoardLines();