"use strict";
// 3x3 squares make up the board in the middle of the page.
// I click on X or O
// I then click on a square on the board and it places the piece i just picked
// The other piece will now be auto selected and the next click will place it
// When 3 squares in a row are filled by the same type of piece a winner will be declared
// A button to reset the game will show up.

// Gameboard stuff
const gameBoard = {
    gameBoardArray: ['','','','','','','','','','','',''],
}

const boardSquare = document.querySelector('.boardSquare');
let gameBoardDisplay = (array) => {
    for (let i = 0; i < array.length; i++) {
        const boardSquareDiv = document.createElement('div')
        boardSquareDiv.classList.add(`square${i}`)
        boardSquareDiv.textContent = array[i]
        boardSquare.appendChild(boardSquareDiv)
        boardSquareDiv.addEventListener('click', () => {
            if (gameBoard.gameBoardArray[i] === '') {
                gameBoard.gameBoardArray[i] = currentPiece
            }
            clearTheGameBoard(boardSquare) 
            gameBoardDisplay(gameBoard.gameBoardArray)
            document.querySelector('.buttonsDiv').style.display = 'none'
            if (currentPiece === 'x') {currentPiece = 'o'}
            else if (currentPiece === 'o') {currentPiece = 'x'}
        })
    } 
}

let clearTheGameBoard = (parent) => {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

gameBoardDisplay(gameBoard.gameBoardArray)

// Choose piece
let currentPiece;
const choosePieceButtonX = document.querySelector('.choosePieceButtonX')
const choosePieceButtonO = document.querySelector('.choosePieceButtonO')
choosePieceButtonO.addEventListener('click', () => {
    currentPiece = 'o'
})
choosePieceButtonX.addEventListener('click', () => {
    currentPiece = 'x'
})
