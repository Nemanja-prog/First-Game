let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

let player = {
  name: "Nemanja",
  chips: 1,
};

playerEl.textContent = player.name + ": $" + player.chips;

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

// Utility sleep function for delay
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getRandomCard() {
  let number = Math.floor(Math.random() * 12) + 1;
  if (number > 10) {
    return 10;
  } else if (number === 1) {
    return 11;
  } else {
    return number;
  }
}

// Make startGame async to use await sleep
async function startGame() {
  if (isAlive === false) {
    isAlive = true;
    hasBlackJack = false;

    let firstCard = getRandomCard();

    // Show first card immediately
    cards = [firstCard];
    sum = firstCard;
    renderGame();

    await sleep(700); // delay before showing second card

    let secondCard = getRandomCard();
    cards.push(secondCard);
    sum += secondCard;
    renderGame();

    await sleep(700); // delay before showing sum
    // sum is already updated, so just re-render to emphasize delay (optional)
    renderGame();
  }
}

// Make renderGame async so we can delay sum display
async function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  // Delay sum display
  await sleep(400);
  sumEl.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
    isAlive = false;
    player.chips += 50;        // Add 20 chips here
    playerEl.textContent = player.name + ": $" + player.chips;  // Update display
}

   else {
    message = "You're out of the game!";
    isAlive = false;
    player.chips -= 1;        // Add 20 chips here
    playerEl.textContent = player.name + ": $" + player.chips;
    
  }

  messageEl.textContent = message;
}

// Make newCard async with delay before adding new card and sum update
async function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    await sleep(300); // delay before drawing card

    let card = getRandomCard();
    cards.push(card);
    sum += card;

    renderGame();
  }
  if (player.chips <= 0){
    player.chips = 0;

    
  };
};
