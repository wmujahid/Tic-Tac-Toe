// I want to select everything with the class box and save it to a variable
const boxes = document.querySelectorAll('.box');

// this array will keep track of what boxes are available for a user to select
let boardSpaces = ['', '', '', '', '', '', '', '', '']

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
    event.target.innerHTML = currentPlayer
  }
}

createBoardLines();