// assigning variables//
let cards = [];
let player = {
  name: "Congratulation Reward",
  score: 10,
};
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let playerEl = document.getElementById("player-el");

//functions//

function getrandomCard() {
  let randomnumber = Math.floor(Math.random() * 13) + 1;
  if (randomnumber > 10) {
    return 10;
  } else if (randomnumber === 1) {
    return 11;
  } else {
    return randomnumber;
  }
}
function startGame() {
  isAlive = true;
  let firstcard = getrandomCard();
  let secondcard = getrandomCard();
  cards = [firstcard, secondcard];
  sum = firstcard + secondcard;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "cards :";
  //for loop that render out all the cards//
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card? 😊";
  } else if (sum === 21) {
    message = "wow!congratulations,You've got Blackjack!😍";
    hasBlackJack = true;
  } else {
    message = "you're out of the game! 😥";
    isAlive = false;
  }
  //display the message in messageEl using messageEl.textcontent
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getrandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  }
}
