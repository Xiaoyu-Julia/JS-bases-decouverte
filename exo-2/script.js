// you can write js here
const myDate = new Date();
let msgWeek = "pas encore le weekend";
switch (msgWeek) {
    case 'lundi' : 
       console.log('pas du tout le weekend');
       break;
    case 'mardi' : 
       console.log('pas encore le weekend');
       break;
    case 'mercredi' : 
       console.log('bientôt le weekend');
       break;
    case 'mardi' : 
       console.log('presque le weekend');
       break;
}
let msgWeekend = "c'est le weekend";
let today = myDate.getDay();
console.log(today);
