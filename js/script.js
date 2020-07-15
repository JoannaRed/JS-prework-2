{
  const playGame = function (playerMove){
  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  const computerMove = getMoveName(randomNumber);
  
  printMessage('Zagrałem ' + computerMove + ', a Ty ' + playerMove);

  if (computerMove == 'kamień' && playerMove == 'papier') {
    printMessage('Ty wygrywasz!');
  }
  else if (computerMove == 'kamień' && playerMove == 'nożyce') {
    printMessage('Przegrywasz!');
  }
  else if (computerMove == 'kamień' && playerMove == 'kamień') {
    printMessage('Remis!');
  }
  else if (computerMove == 'papier' && playerMove == 'papier') {
    printMessage('Remis!');
  }
  else if (computerMove == 'papier' && playerMove == 'nożyce') {
    printMessage('Ty wygrywasz!');
  }
  else if (computerMove == 'papier' && playerMove == 'kamień') {
    printMessage('Przegrywasz!');
  }
  else if (computerMove == 'nożyce' && playerMove == 'papier') {
    printMessage('Przegrywasz!');
  }
  else if (computerMove == 'nożyce' && playerMove == 'nożyce') {
    printMessage('Remis!');
  }
  else if (computerMove == 'nożyce' && playerMove == 'kamień') {
    printMessage('Ty wygrywasz!');
  }
}

conts getMoveName = function (argMoveId){
  if (argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }

}
  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

const playRock = document.getElementById('play-rock');
playRock.addEventListener('click', function() {
  playGame('kamień');
});


conts playPaper = document.getElementById('play-paper');
playPaper.addEventListener('click', function() {
  playGame('papier');
});


const playScissors = document.getElementById('play-scissors');
playScissors.addEventListener('click', function() {
  playGame('nożyce');
});

}