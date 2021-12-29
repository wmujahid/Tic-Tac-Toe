# Project: tic tac toe

## Installation: 
No need.

## Links:
- [Wireframe](images/wireframe.png)

- [Game link](https://zen-golick-e6325c.netlify.app/).

## Preview

This is a basic game of tic tac toe with a restart button, so you can play as many times as you like.

## Technology used:

- Vanilla Javascript, CSS and HTML.
- Canva for wireframe

## Approach:
My approach was to first create my game board, then use DOM manipulation to, interact with my board.
I used higher functions to build my board and to record my game results and store those results in arrays.

### How i solved for the winner:
i saved the entire state of the game in a 2d array, then used loops to check each row if it has the same value then alerting an adding scores.

## Main features:
- Restart Button
- clickable cells


## User Stories
- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should be shown a message after each turn for if I win, lose, tie
- As a user, I should not be able to click the same square twice
- As a user, I should be shown a message when I win, lose or tie
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

## Objectives
- title
- 3x3 grid
    * the grid should be clickable
    * the grid cells should have the correct player sign displayed an information display
- should display a message informing the current player it’s their turn
    * should show us who won the game
    * should show us if the game ended in a draw
- restart button
    * will restart the entire game
- needs to track any clicks that happen on our cells
- needs to check if a valid move has been made
    * needs to make sure nothing happens if an already played cell has been clicked
- we should update our game state
- we should validate the game state
    * check if a player has won
    * check if the game ended in a draw
- either stop the game or change the active player, depending on the above checks
- reflect the updates made on the UI
- rinse and repeat


