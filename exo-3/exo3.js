// you can write js here
console.log('exo-3');

let playInput = prompt("Your choice (rock, paper, scissors) ?");
function getPlayerChoice(playInput){
    playInput.toLowerCase();
    if(playInput === 'rock' || 'paper' || 'scissors'){
        return playInput;
    } else {
        console.log('erreur : rentre bien votre choix parmi rock, paper et scissors');
    }
}

function getComputerChoice(){
    const arr = ['rock', 'paper', 'scissors'];
    for(i=0; i<arr.length; i++){
        return Math.random(arr[i]);
    } 
}

function findWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return 'Tied';
    }else if(playerChoice === 'rock' && computerChoice === 'scissors') {
        return 'Won';
        }else if(playerChoice === 'rock' && computerChoice === 'paper') {
            return 'Lost';
            }else if(playerChoice === 'paper' && computerChoice === 'rock') {
                return 'Won';
                 }else if(playerChoice === 'paper' && computerChoice === 'scissors') {
                    return 'Lost';
                     }else if(playerChoice === 'scissors' && computerChoice === 'paper') {
                        return 'Won';
                         }else if(playerChoice === 'scissors' && computerChoice === 'rock') {
                            return 'Lost';
                             }
}

function playGame(){
    let playerChoice = getPlayerChoice(playInput);
    let computerChoice = getComputerChoice();
    console.log(playerChoice);
    console.log(computerChoice);
    console.log(findWinner(playerChoice, computerChoice));
}
playGame();