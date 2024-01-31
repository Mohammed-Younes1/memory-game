const cardContainer = document.querySelector(".photos-place");
const playButton = document.querySelector(".btn-1");
const restartButton = document.querySelector(".btn-2");
const closeButton = document.querySelector(".closebutton");
const acceptButton = document.querySelector(".acceptbutton");
// let cardNumSelected = document.querySelector(".card-opt1");
let mistakesSelected = document.querySelector(".card-opt2");
let timerSelected = document.querySelector(".card-opt3");
// let numAction = document.querySelector(".num-1");
let numSuccs = document.querySelector(".num-2");
let numFail = document.querySelector(".num-3");
let timer = document.querySelector(".timer");
let awaitingEndMove = false;
let activeCard = null;
let firstCard = 0;
let secondCard = 0;
let selectedCards = [];
let timerCount = 0;
let timerSet;
let maxMistakes = 5;
numSuccs = 0;
numFail = 0;

// let selectedCardValue = cardNumSelected.value;
// let selectedMistakeValue = mistakesSelected.value;
// let selectedTimerValue = timerSelected.value;

// console.log("test",selectedCardValue,selectedMistakeValue,selectedTimerValue);
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

//creating the card list
const createCards = (numCards) => {
  const cardElements = [];
  newCardsnumb = numCards * 2;

  const selectedCardData = cards.slice(0, newCardsnumb);

  for (let j = 0; j < newCardsnumb; j++) {
    const cardShuffle = Math.floor(Math.random() * selectedCardData.length);
    const flagCard = selectedCardData[cardShuffle];
    selectedCardData.splice(cardShuffle, 1);
    const imgElement = document.createElement("img");

    imgElement.src = "./Flag/black.png";
    imgElement.alt = "black";
    imgElement.classList.add("flag");

    imgElement.addEventListener("click", () => {
      revealCard(imgElement, flagCard);
    });

    cardContainer.appendChild(imgElement);
    cardElements.push({ imgElement, flagCard });
  }

  flipCardsWhenStart(cardElements);
  console.log(cardElements, "herer");
};

// choosing how many cards
playButton.addEventListener("click", () => {
  document.getElementById("overlay").style.display = "flex";

  acceptButton.addEventListener("click", () => {
    const numCardsInput = document.querySelector(".card-opt1");
    selectedNumOfCards = parseInt(numCardsInput.value);

    console.log(selectedNumOfCards, "gygyug");

    createCards(selectedNumOfCards);
    document.getElementById("overlay").style.display = "none";
    acceptButton.style.display = "none";
  });
});
//fliping all the cards for 1 second when the game starts
const flipCardsWhenStart = (cardElements) => {
  setTimeout(() => {
    cardElements.forEach(({ imgElement, flagCard }) => {
      revealCard(imgElement, flagCard);
      numSuccs = 0;
      numFail = 0;
    });
  }, 1100);
};

const setGameSettings = (
  cardNumSelected,
  mistakesSelected,
  timerSelected
) => {};
//Show the card after being clicked
const revealCard = (imgElement, flagCard) => {
  if (flagCard === "hidden" || awaitingEndMove) {
    return;
  }
  imgElement.src = flagCard.image;
  imgElement.alt = flagCard.alt;
  flagCard.isVisible = "hidden";

  //   console.log(selectedCards[0]?.flagCard.id && selectedCards[0]?.flagCard.id === flagCard.id );
  if (
    selectedCards[0]?.flagCard.id &&
    selectedCards[0]?.flagCard.id === flagCard.id
  ) {
    return;
  }

  selectedCards.push({ imgElement, flagCard });
  if (selectedCards.length === 2) {
    handleSelectedCards();
  }
};
// comparing cards to show they are a match
const handleSelectedCards = () => {
  const [card1, card2] = selectedCards;

  if (Math.abs(card1.flagCard.id) === Math.abs(card2.flagCard.id)) {
    numSuccs++;
    console.log("match");
    setTimeout(() => {
      cardContainer.removeChild(card1.imgElement);
      cardContainer.removeChild(card2.imgElement);
    }, 1200);
  } else {
    setTimeout(() => {
      flipCardBack(card1.imgElement, card1.flagCard);
      flipCardBack(card2.imgElement, card2.flagCard);
    }, 1000);
    numFail++;
  }
  selectedCards = [];
  console.log(`failed times ${numFail} and points are ${numSuccs}`);
  if (numSuccs == selectedNumOfCards) {
    setTimeout(() => {
      alert("YOU HAVE WON!!!!!!!!!!!!!!!!!");
    },1500);
  }
};

// flip cards to black side
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

restartButton.addEventListener("click", restartGame);
closeButton.addEventListener("click", closePopup);
