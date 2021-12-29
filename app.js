// I want to select everything with the class box
const boxes = document.querySelectorAll('.box');
/* const boxes = [...document.querySelectorAll('.box')]; */
console.log(boxes)

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
  });
};

createBoardLines();