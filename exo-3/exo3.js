// you can write js here
console.log('exo-3');

let playInput = prompt("Your choice (rock, paper, scissors) ?");
function getPlayerChoice(playInput){
    const lowerPlayerInput = playInput.toLowerCase();
    if(lowerPlayerInput === 'rock' || lowerPlayerInput === 'paper' || lowerPlayerInput === 'scissors'){
        return lowerPlayerInput;
    } else {
        console.log('erreur : rentre bien votre choix parmi rock, paper et scissors');
    }
}

function getComputerChoice(){
    number = Math.floor(Math.random() * 3);
    const arr = ['rock', 'paper', 'scissors'];
    for(i=number; i<arr.length; i++){   
        return arr[i];
    } 
}

function findWinner(playerChoice, computerChoice){
    if(playerChoice === computerChoice){
        return 'Tied';
    }
    /* utiliser if statements
    else if(playerChoice === 'rock' && computerChoice === 'scissors') {
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
                             }*/
    if(playerChoice === computerChoice){
        return 'Tied';
    }
    if(playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper'
    ){
        return 'Won';
    }else{
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