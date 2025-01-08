// you can write js here

console.log('exo-5');
let input = 'Je suis heureuse.';
//let upperInput = input.toUpperCase();
//console.log(input.length);
//console.log(upperInput);
const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
let resultArray = [];

for(let i = 0; i < input.length; i++){
        
        console.log(input[i]);
            let currentLetter = input[i];
            if(vowels.indexOf(currentLetter)>= 0){
                    resultArray.push(currentLetter);
                    console.log(resultArray);

            }
            
    }
    