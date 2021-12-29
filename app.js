// I want to select everything with the class box and save it to a variable
// returns an collection but i need it to be an array so i use spread
const boxes = [...document.getElementsByClassName('box')]

const gameText = document.getElementById('gameText')
const restartButton = document.getElementById('restartButton')

// this array will keep track of what boxes are available for a user to select
let boardSpaces = ['', '', '', '', '', '', '', '', ''];

// player 1 will be 'O' and player 2 will be 'X'
const playerOne_O = "🦶";
const playerTwo_X = "📌";

// starting player will be player 1
let currentPlayer;
let count = 0


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
  if (!boardSpaces[id]) {
    boardSpaces[id] = currentPlayer;
    event.target.innerHTML = currentPlayer;
    count++;

    if (playerWins()) {
      gameText.innerText = `${currentPlayer} has won`;
      return;
    }
    // after a box is clicked if the current player is X switch it to O and vice versa
    currentPlayer = currentPlayer === playerOne_O ? playerTwo_X : playerOne_O;
    if(count === 9){
      gameText.innerText = `Draw`
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
  // from bottom check up and across
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
  // from middle check middle vertical and middle horizontal
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
// for each index in your boardSpaces array set it to empty, set all boxes innerText to empty, and restore gameText
const restart = () => {
  boardSpaces = [];
  count = 0;
  boxes.forEach(box => {
    box.innerText = "";
  })
  gameText.innerText = `Lets Get Started!`
  currentPlayer = playerOne_O

}

restartButton.addEventListener('click', restart)

restart();
createBoardLines();