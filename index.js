let messageEl = document.getElementById("message-el");

let sumEl = document.getElementById("sum-el");

let cardsEl = document.getElementById("cards-el");

let playerEl = document.getElementById("player-el");

let player = {

  name: "Nemanja",

  chips: 165,

}

playerEl.textContent = player.name + ": $" + player.chips

let cards = []

let sum = 0

let hasBlackJack = false;

let isAlive = false;

let message = "";

function getRandomCard() {

  let number = Math.floor(Math.random() * 12) + 1;

   if (number > 10) {
    
    return 10;

   } 
   
   else if (number === 1) {

    return 11;

   }

   else{

    return number

   }

}

function startGame(){

  isAlive = true;

  let firstCard = getRandomCard();

  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];

  sum = firstCard + secondCard;

  renderGame()

}


function renderGame(){

    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++){
      
      cardsEl.textContent += cards[i] + " "

    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {

      message = "Do you want to draw a new card?";
      
    } 
    
    else if (sum === 21) {

      message = "Wohoo! You've got Blackjack!";

      hasBlackJack = true;

    } 

    else {

      message = "You're out of the game!";

      isAlive = false;

    }

    messageEl.textContent = message;

}

function newCard(){

    if(isAlive === true && hasBlackJack === false){

      let card = getRandomCard();

      cards.push(card);

      sum += card;

      renderGame();

    }

}

/*for petlja
let messages = [
  "Hey, how's it going?",
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
];

for (let i = 0; i < messages.length; i += 1){
  console.log(messages[i])
}

/*if, else if, else uslovi
let player1Time = 102;
let player2Time = 107;

/*function getFastestRaceTime(){

  if(player1Time < player2Time){

   return player1Time

  }

  else if(player2Time < player1Time){

   return player2Time

  }

  else{

    return player1Time

  }

}

function totalRaceTime(){

  return player1Time + player2Time;

}

let finish = totalRaceTime()

console.log(finish)

let fastestRace = getFastestRaceTime()

console.log(fastestRace)*/

/*Math.random()
let randomNumber = Math.random() * 6;

console.log(randomNumber);*/

/*Math.floor()
let flooredNumber = Math.floor(3.45632);

console.log(flooredNumber);*/

/*function rollDice(){

  let randomNumber = Math.floor(Math.random() * 6) + 1;

  return randomNumber

}

console.log(rollDice())*/

/*logički operatori I (&&) i ILI (||)
let hasCompletedCourse = true;
let givesCertificate = true;

if(hasCompletedCourse === true &&,|| givesCertificate === true){
  generateCertificate()
}

function generateCertificate() {
  console.log("Generating certificate....");
}*/

/*Objekti i pozivanje njegovih svostava
let course = {

  title: "Learn CSS Grid for free",

  lessons: 16,

  creator: "Per Harald Borgen",

  length: 63,

  level: 2,

  isFree: true,

  tags: ["html", "css"]

}

console.log(course.tags)*/

/* === (strogo jednako), > (veće), < (manje), >= (veće ili jednako), <= (manje ili jednako)
console.log(4 === 3)  // False
console.log(5 > 2)    // True
console.log(12 > 12)  // False
console.log(3 < 0)    // False
console.log(3 >= 3)   // True
console.log(11 <= 11) // True
console.log(3 <= 2)   // False */