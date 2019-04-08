var buttonRock = document.getElementById('rock');
var buttonScissors = document.getElementById('scissors');
var buttonPaper = document.getElementById('paper');
var buttonNewGame = document.getElementById('new-game');
var output = document.getElementById('output');
var result = document.getElementById('result');
var finalResult = document.getElementById('final-result');
var message = document.getElementById('message');

var roundNumber = 0;
var roundWonByComputerNumber = 0;
var roundWonByPlayerNumber = 0;
var roundToWinNumber = 0;

buttonNewGame.addEventListener ('click', function() {
    roundToWinNumber = window.prompt('Specify game distance (number of rounds to win)');
    roundNumber = 0;
    roundWonByComputerNumber = 0;
    roundWonByPlayerNumber = 0;
    output.innerHTML = 'You started a New Game';
    finalResult.innerHTML = '';
    display();
});

buttonRock.addEventListener ('click', function() {
    if ((roundToWinNumber > roundWonByComputerNumber) && (roundToWinNumber > roundWonByPlayerNumber)) {
        var computerMove = getRandomIntInclusive(1, 3);
        if (computerMove == 1) {
            output.innerHTML = 'TIE: you played ROCK, computer played ROCK';
            roundCount();
        } else if (computerMove == 2) {
            output.innerHTML = 'YOU WON: you played ROCK, computer played SCISSORS';
            playerWonGroupedFunctions();
        } else {
            output.innerHTML = 'YOU LOST: you played ROCK, computer played PAPER';
            computerWonGroupedFunctions();
        }
    } else {
        pleasePressTheNewGameButton();
    }
});

buttonScissors.addEventListener ('click', function() {
    if ((roundToWinNumber > roundWonByComputerNumber) && (roundToWinNumber > roundWonByPlayerNumber)) {
        var computerMove = getRandomIntInclusive(1, 3);
        if (computerMove == 1) {
            output.innerHTML = 'YOU LOST: you played SCISSORS, computer played ROCK';
            computerWonGroupedFunctions();
        } else if (computerMove == 2) {
            output.innerHTML = 'TIE: you played SCISSORS, computer played SCISSORS';
            roundCount();
        } else {
            output.innerHTML = 'YOU WON: you played SCISSORS, computer played PAPER';
            playerWonGroupedFunctions();
        }
    } else {
        pleasePressTheNewGameButton();
    }
});

buttonPaper.addEventListener ('click', function() {
    if ((roundToWinNumber > roundWonByComputerNumber) && (roundToWinNumber > roundWonByPlayerNumber)) {
        var computerMove = getRandomIntInclusive(1, 3);
        if (computerMove == 1) {
            output.innerHTML = 'YOU WON: you played PAPER, computer played ROCK';
            playerWonGroupedFunctions();
        } else if (computerMove == 2) {
            output.innerHTML = 'YOU LOST: you played PAPER, computer played SCISSORS';
            computerWonGroupedFunctions();
        } else {
            output.innerHTML = 'TIE: you played PAPER, computer played PAPER';
            roundCount();
        }
    } else {
        pleasePressTheNewGameButton();
    }
});

function pleasePressTheNewGameButton() {
    finalResult.innerHTML += 'Game over, please press the new game button !!!' + '<br>';
}

function computerWonGroupedFunctions() {
    roundCount();
    roundWonByComputerCount();
    winnerWonEntireGameDisplay();
}

function playerWonGroupedFunctions() {
    roundCount();
    roundWonByPlayerCount();
    winnerWonEntireGameDisplay();
}

function winnerWonEntireGameDisplay() {
    if (roundToWinNumber == roundWonByComputerNumber) {
        output.innerHTML += ', COMPUTER WON ENTIRE GAME !!!';
    }
    if (roundToWinNumber == roundWonByPlayerNumber) {
        output.innerHTML += ', YOU WON ENTIRE GAME !!!';
    }
}

function roundCount() {
    roundNumber++;
    display();
    return roundNumber;
}

function roundWonByComputerCount() {
    roundWonByComputerNumber++;
    display();
    return roundWonByComputerNumber;
}

function roundWonByPlayerCount() {
    roundWonByPlayerNumber++;
    display();
    return roundWonByPlayerNumber;
}

function display() {
    result.innerHTML = '(You) ' + roundWonByPlayerNumber + ' - ' + roundWonByComputerNumber + ' (Computer)';
    message.innerHTML = 'The first one who wins ' + roundToWinNumber + ' rounds is the entire game winner';
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
