function playGame(playerMove){
  clearMessages

    
  function displayResult(argComputerMove, argPlayerMove) {
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  } 

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);

  printMessage('Ruch komputera to: ' + computerMove);

  //let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
  //console.log('Gracz wpisał: ' + playerInput);

  //let playerMove = getMoveName(playerInput);

  printMessage('Twój ruch to: ' + playerMove);

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
function buttonClicked(){
  printMessage('Zagrales kamien');
}

let playRock = document.getElementById('play-rock');

playRock.addEventListener('click', buttonClicked);

function buttonClicked(){
  printMessage('Zagrales papier');
}

let playPaper = document.getElementById('play-paper');

playPaper.addEventListener('click', buttonClicked);

function buttonClicked(){
  printMessage('Zagrales nozyczki');
}

let playScissors = document.getElementById('play-scissors');

playScissors.addEventListener('click', buttonClicked);


function getMoveName(argMoveId) {
  if (argMoveId == 1){
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}

//playGame(3);

