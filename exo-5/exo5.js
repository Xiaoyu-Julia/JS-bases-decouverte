// you can write js here

console.log('exo-5');
let input = 'Je suis heureuse.';
let upperInput = input.toUpperCase();
//console.log(upperInput);
const vowels = ['A', 'E', 'I', 'O', 'U', 'Y'];
let resultArray = [];

for(let i = 0; i < upperInput.length; i++){
        
        console.log(upperInput[i]);
            let currentLetter = upperInput[i];
            if(vowels.indexOf(currentLetter)>= 0){
                    resultArray.push(currentLetter);
                    console.log(resultArray);
                    console.log(resultArray.join(''));

            }
            
    }
    