// I want to select everything with the class box and save it to a variable
const boxes = document.querySelectorAll('.box');

const gameText = document.getElementById('gameText');

// this array will keep track of what boxes are available for a user to select
const boardSpaces = ['', '', '', '', '', '', '', '', '']

// player 1 will be 'O' and player 2 will be 'X'
const playerOne_O = "O";
const playerTwo_X = "X";

// starting player will be player 1
let currentPlayer = playerOne_O;

// Create tic tac toe board lines using the indexes of the boxes array
const createBoardLines = () => {
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

    if (playerWins()) {
      gameText.innerText = `${currentPlayer} has won`;
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
  if (boardSpaces[0] === currentPlayer) {
    if (boardSpaces[1] === currentPlayer && boardSpaces[2] === currentPlayer) {
      console.log(`${currentPlayer} wins up top`);
      return true;
    }
    if (boardSpaces[3] === currentPlayer && boardSpaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins on the left`);
      return true;
    }
    if (boardSpaces[4] === currentPlayer && boardSpaces[8] === currentPlayer) {
      console.log(`${currentPlayer} wins on the diagonal`);
      return true;
    }
  }
  //from bottom check up and across
  if (boardSpaces[8] === currentPlayer) {
    if (boardSpaces[2] === currentPlayer && boardSpaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins on the right`);
      return true;
    }
    if (boardSpaces[7] === currentPlayer && boardSpaces[6] === currentPlayer) {
      console.log(`${currentPlayer} wins on the bottom`);
      return true;
    }
  }
  //from middle check middle vertical and middle horizontal
  if (boardSpaces[4] === currentPlayer) {
    if (boardSpaces[3] === currentPlayer && boardSpaces[5] === currentPlayer) {
      console.log(`${currentPlayer} wins on the middle horizontal`);
      return true;
    }
    if (boardSpaces[1] === currentPlayer && boardSpaces[7] === currentPlayer) {
      console.log(`${currentPlayer} wins on the middle vertical`);
      return true;
    }
  }
};




createBoardLines();