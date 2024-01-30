const flagContainer = document.querySelector(".photos-place");
const playButton = document.querySelector(".btn-1");
const restartButton = document.querySelector(".btn-2");
const closeButton = document.querySelector(".closebutton");
const acceptButton = document.querySelector(".acceptbutton");
let cardNumSelected = document.querySelector(".cards-opt1");
let mistakesSelected = document.querySelector(".cards-opt2");
let timerSelected = document.querySelector(".cards-opt3");
let numAction = document.querySelector(".num-1");
let numSuccs = document.querySelector(".num-2");
let numFail = document.querySelector(".num-3");
let timer = document.querySelector(".timer");
let awaitingEndMove = false;
let activeCard = null;
let firstCard = 0;
let secondCard = 0;
let selectedCards = [];

numAction = 0;
numSuccs = 0;
numFail = 0;
const cards = [
  { id: 1, name: "Jordan", image: "./Flag/Jordan.png", isVisible: "visible" },
  { id: -1, name: "Jordan", image: "./Flag/Jordan.png", isVisible: "visible" },
  {
    id: 2,
    name: "Palestine",
    image: "./Flag/Palestine.png",
    isVisible: "visible",
  },
  {
    id: -2,
    name: "Palestine",
    image: "./Flag/Palestine.png",
    isVisible: "visible",
  },
  {
    id: 3,
    name: "Saudi",
    image: "./Flag/Saudi_Arabia.png",
    isVisible: "visible",
  },
  {
    id: -3,
    name: "Saudi",
    image: "./Flag/Saudi_Arabia.png",
    isVisible: "visible",
  },
  { id: 4, name: "Egypt", image: "./Flag/Egypt.png", isVisible: "visible" },
  { id: -4, name: "Egypt", image: "./Flag/Egypt.png", isVisible: "visible" },
  { id: 5, name: "Iraq", image: "./Flag/Iraq.png", isVisible: "visible" },
  { id: -5, name: "Iraq", image: "./Flag/Iraq.png", isVisible: "visible" },
  { id: 6, name: "Lebanon", image: "./Flag/Lebanon.png", isVisible: "visible" },
  {
    id: -6,
    name: "Lebanon",
    image: "./Flag/Lebanon.png",
    isVisible: "visible",
  },
  { id: 7, name: "Qatar", image: "./Flag/Qatar.png", isVisible: "visible" },
  { id: -7, name: "Qatar", image: "./Flag/Qatar.png", isVisible: "visible" },
  { id: 8, name: "Kuwait", image: "./Flag/Kuwait.png", isVisible: "visible" },
  { id: -8, name: "Kuwait", image: "./Flag/Kuwait.png", isVisible: "visible" },
  { id: 9, name: "Oman", image: "./Flag/Oman.png", isVisible: "visible" },
  { id: -9, name: "Oman", image: "./Flag/Oman.png", isVisible: "visible" },
  { id: 10, name: "Yemen", image: "./Flag/Yemen.png", isVisible: "visible" },
  { id: -10, name: "Yemen", image: "./Flag/Yemen.png", isVisible: "visible" },
];

const flagsNumb = cards.length;

console.log(cards.length);
for (let i = 0; i < flagsNumb; i++) {
  const cardShuffle = Math.floor(Math.random() * cards.length);
  const flagCard = cards[cardShuffle];
//  
  cards.splice(cardShuffle, 1);
  const imgElement = document.createElement("img");

  imgElement.src = "./Flag/black.png";
  imgElement.alt = "black";
  imgElement.classList.add("flag");

  imgElement.addEventListener("click", () => {
    revealFlag(imgElement, flagCard);
  });
//   imgElement.addEventListener("click", () => {
//     passCard(imgElement.id);
//   });
  flagContainer.appendChild(imgElement);
}
const passCard = (cardId) => {
  if (selectedCards.length == 0) {
    // firstCard=cardId.push(selectedCards);
    firstCard = cardId;
    selectedCards.push(firstCard);
  } else if (firstCard != cardId) {
    secondCard = cardId;
    selectedCards.push(secondCard);
    handleSelectedCards();
  }
};
const revealFlag = (imgElement, flagCard) => {
  if (flagCard === "hidden" || awaitingEndMove) {
    return;
  }
  imgElement.src = flagCard.image;
  imgElement.alt = flagCard.alt;
  flagCard.isVisible = "hidden";

  if (selectedCards.length == 0) {
  }
  selectedCards.push({ imgElement, flagCard });
  if (selectedCards.length === 2) {
    handleSelectedCards();
  }
};

const handleSelectedCards = () => {
  const [card1, card2] = selectedCards;

  if (Math.abs(card1.flagCard.id) === Math.abs(card2.flagCard.id)) {
    numSuccs++;
    console.log("match");
  } else {
    setTimeout(() => {
      flipCardBack(card1.imgElement, card1.flagCard);
      flipCardBack(card2.imgElement, card2.flagCard);
    }, 1000);
    numFail++;
  }
  selectedCards = [];
  console.log(`failed times ${numFail} and points are ${numSuccs}`);
};
const flipCardBack = (imgElement, flagCard) => {
  imgElement.src = "./Flag/black.png";
  imgElement.alt = "Black";
  flagCard.isVisible = "visible";
};

const startScore = () => {
  numAction = 0;
  numSuccs = 0;
  numFail = 0;
  timer;
};
const closePopup = () => {
  document.getElementById("overlay").style.display = "none";
};

const startGame = () => {
  console.log("Start the game");
  document.getElementById("overlay").style.display = "flex";
};

const restartGame = () => {
  startScore();
  console.log("restart the game");
  console.log(startScore);
};

playButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);
closeButton.addEventListener("click", closePopup);
acceptButton.addEventListener("click", closePopup);
