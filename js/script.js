function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  }

  printMessage('Nie znam ruchu o id ' + argMoveId + '.');
  return 'nieznany ruch';
}









let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);



/*let computerMove = 'nieznany ruch';
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}
else(randomNumber == 2){
  computerMove = 'papier';
}
else if(randomNumber == 3){
  computerMove = 'nożyce';
}
*/
printMessage('Mój ruch to: ' + computerMove);



let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
}
else(playerInput == 2){
  playerMoveMove = 'papier';
}
else(playerInput == >3){
  playerMoveMove = 'nieznany ruch';
}
else if(playerInput == 3){
  playerMoveMove = 'nożyce';
}
printMessage('Twój ruch to: ' + playerMove);



if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}
else( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Przegrywasz!');
}
else( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
}
else( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
}
else( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}
else( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Przegrywasz!');
}
else( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Przegrywasz!');
}
else( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');
}
else if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}