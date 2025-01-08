// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
console.log(joeInfo.cars.length);
// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
console.log(joeInfo.bathrooms = 1);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
console.log(joeInfo.garage = 1);
//console.log(joeInfo);

let team = {
    players:  [{
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11
    }],
    games: [{
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
    }]
};

let addPlayer = newPlayer => {   
    newPlayer.firstName = 'Lily', 
    newPlayer.lastName = 'Sanchez',
    newPlayer.age = 13
};
addPlayer(team.players);
console.log(team.players);

let addGame = newGame => {
    newGame.opponent = "Bro",
    newGame.teamPoints = 38,
    newGame.opponentPoints = 39
};
addGame(team.games);
console.log(team.games);
