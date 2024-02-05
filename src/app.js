const cardContainer = document.querySelector(".photos-place");
const playButton = document.querySelector(".btn-1");
const restartButton = document.querySelector(".btn-2");
const closeButton = document.querySelector(".closebutton");
const acceptButton = document.querySelector(".acceptbutton");
const numCardsInput = document.querySelector(".card-opt1");
const NumMistakesInput = document.querySelector(".card-opt2");
const timerInput = document.querySelector(".card-opt3");
const mistakesthing = document.querySelector(".scores");
const timerthing = document.querySelector(".timer-sele");
const signOutBtn = document.querySelector(".sign-out");
// const usernameShown = document.querySelector(".username-1");
// const wins = document.querySelector(".wins");
// const loses = document.querySelector(".loses");
let numSuccs = document.querySelector(".num-2");
let numFail = document.querySelector(".num-3");
let awaitingEndMove = false;
let activeCard = null;
let firstCard = 0;
let secondCard = 0;
let selectedCards = [];
let timerCount = 0;

let numMistakesPlaying = 0;
numSuccs = 0;
numFail = 0;

const cards = [
  { id: 1, name: "Jordan", image: "./Flag/Jordan.png", isVisible: "hidden" },
  { id: -1, name: "Jordan", image: "./Flag/Jordan.png", isVisible: "hidden" },
  {
    id: 2,
    name: "Palestine",
    image: "./Flag/Palestine.png",
    isVisible: "hidden",
  },
  {
    id: -2,
    name: "Palestine",
    image: "./Flag/Palestine.png",
    isVisible: "hidden",
  },
  {
    id: 3,
    name: "Saudi",
    image: "./Flag/Saudi_Arabia.png",
    isVisible: "hidden",
  },
  {
    id: -3,
    name: "Saudi",
    image: "./Flag/Saudi_Arabia.png",
    isVisible: "hidden",
  },
  { id: 4, name: "Egypt", image: "./Flag/Egypt.png", isVisible: "hidden" },
  { id: -4, name: "Egypt", image: "./Flag/Egypt.png", isVisible: "hidden" },
  { id: 5, name: "Iraq", image: "./Flag/Iraq.png", isVisible: "hidden" },
  { id: -5, name: "Iraq", image: "./Flag/Iraq.png", isVisible: "hidden" },
  { id: 6, name: "Lebanon", image: "./Flag/Lebanon.png", isVisible: "hidden" },
  {
    id: -6,
    name: "Lebanon",
    image: "./Flag/Lebanon.png",
    isVisible: "hidden",
  },
  { id: 7, name: "Qatar", image: "./Flag/Qatar.png", isVisible: "hidden" },
  { id: -7, name: "Qatar", image: "./Flag/Qatar.png", isVisible: "hidden" },
  { id: 8, name: "Kuwait", image: "./Flag/Kuwait.png", isVisible: "hidden" },
  { id: -8, name: "Kuwait", image: "./Flag/Kuwait.png", isVisible: "hidden" },
  { id: 9, name: "Oman", image: "./Flag/Oman.png", isVisible: "hidden" },
  { id: -9, name: "Oman", image: "./Flag/Oman.png", isVisible: "hidden" },
  { id: 10, name: "Yemen", image: "./Flag/Yemen.png", isVisible: "hidden" },
  { id: -10, name: "Yemen", image: "./Flag/Yemen.png", isVisible: "hidden" },
];

let selectedNumOfCards = 0;
let selectedNumOfMistakes = 0;
let selectedTimer = 0;




// sign out
const signOut = () => {
  signOutBtn.addEventListener("click", signOutHandler);
};
const signOutHandler = () => {
  window.location.href = "account.html";
};
signOut();
// initializing the game by clicking play
const initializeGame = () => {
  playButton.addEventListener("click", () => {
    document.getElementById("overlay").style.display = "flex";
    acceptButton.addEventListener("click", acceptButtonClickHandler);
  });
};

//accept button handler to open and select
const acceptButtonClickHandler = () => {
  selectedNumOfCards = parseInt(numCardsInput.value);
  selectedNumOfMistakes = parseInt(NumMistakesInput.value);
  selectedTimer = parseInt(timerInput.value);

  createCards(selectedNumOfCards);
  document.getElementById("overlay").style.display = "none";
  setGameSettings(numFail, numSuccs);
  document.querySelector(".btn-1").style.display = "none";
};
initializeGame();

const mistakesDiv = document.createElement("h3");
const pointsDiv = document.createElement("h3");
const timerElement = document.createElement("div");

let scoreRate = 0;
const setGameSettings = (numFail, numSuccs) => {
  scoreRate = 100 / numCardsInput.value;
  gameTimer();
  mistakesDiv.innerHTML = `Mistakes: <span style="color: red;">${numFail}</span> out of ${selectedNumOfMistakes}`;
  pointsDiv.innerHTML = `Score earned:<span style="color: #2c4c3b;"> ${
    scoreRate * numSuccs
  }%</span>`;
  mistakesthing.innerHTML = "";
  mistakesthing.appendChild(pointsDiv);
  mistakesthing.appendChild(mistakesDiv);
  timerthing.innerHTML = "";
  timerthing.appendChild(timerElement);
};
//timer count down
const gameTimer = () => {
  timerElement.innerText = String(`Timer: ${selectedTimer} sec`);
  if (selectedTimer > 0) {
    selectedTimer--;
    setTimeout(() => gameTimer(), 1000);
  } else if (selectedTimer === -1) {
    restartGame();
  } else {
    alert("Time's up! Game Over!");
    restartGame();
  }
};
//creating the card list
const createCards = (numCards) => {
  const cardElements = [];
  let newCardsnumb = numCards * 2;

  const selectedCardData = cards.slice(0, newCardsnumb);
  for (let j = 0; j < newCardsnumb; j++) {
    const cardShuffleIndex = Math.floor(
      Math.random() * selectedCardData.length
    );
    const flagCard = selectedCardData[cardShuffleIndex];

    const imgElement = document.createElement("img");
    imgElement.src = flagCard.image;
    imgElement.alt = flagCard.alt;

    imgElement.addEventListener("click", () => {
      revealCard(imgElement, flagCard);
    });

    cardContainer.appendChild(imgElement);
    cardElements.push({ imgElement, flagCard });
    selectedCardData.splice(cardShuffleIndex, 1);
  }

  flipCardsWhenStart(cardElements);
};

//hoisting

//fliping all the cards for 1 second when the game starts
const flipCardsWhenStart = (cardElements) => {
  setTimeout(() => {
    cardElements.forEach(({ imgElement, flagCard }) => {
      flipCardBack(imgElement, flagCard);
      numSuccs = 0;
      numFail = 0;
    });
  }, 1100);
};
let isComparing = false;

//Show the card after being clicked
const revealCard = (imgElement, flagCard) => {
  if (flagCard === "visible" || awaitingEndMove || isComparing) {
    return;
  }

  imgElement.src = flagCard.image;
  imgElement.alt = flagCard.alt;
  flagCard.isVisible = "visible";

  if (
    selectedCards[0]?.flagCard.id &&
    selectedCards[0]?.flagCard.id === flagCard.id
  ) {
    return;
  }

  selectedCards.push({ imgElement, flagCard });
  if (selectedCards.length === 2) {
    isComparing = true;
    handleSelectedCards();
  }
};
// comparing cards to show they are a match
const handleSelectedCards = () => {
  const [card1, card2] = selectedCards;

  selectedCards = [];

  if (Math.abs(card1.flagCard.id) === Math.abs(card2.flagCard.id)) {
    numSuccs++;

    pointsDiv.innerHTML = `Score :<span style="color: #2c4c3b;"> ${
      scoreRate * numSuccs
    }%</span>`;
    console.log("match", numSuccs);

    setTimeout(() => {
      setTimeout(() => {
        cardContainer.removeChild(card1.imgElement);
        cardContainer.removeChild(card2.imgElement);
        console.log(card1.imgElement, card2.imgElement);
        isComparing = false;
      }, 500);

      //   setGameSettings(numFail, numSuccs);
    }, 1200);
    if (numSuccs == numCardsInput.value) {
      setTimeout(() => {
        alert("You won the game");
        console.log("player has won the game is over");
        restartGame();
      }, 2000);
    }
    // console.log("player has won the game is over");
  } else {
    setTimeout(() => {
      setTimeout(() => {
        flipCardBack(card1.imgElement, card1.flagCard);
        flipCardBack(card2.imgElement, card2.flagCard);

        // setGameSettings(numFail, numSuccs);
        isComparing = false;
      }, 500);
      numFail++;
      mistakesDiv.innerHTML = `Mistakes: <span style="color: red;">${numFail}</span> out of ${selectedNumOfMistakes}`;
      if (numFail == NumMistakesInput.value) {
        setTimeout(() => {
          alert("you failed ");
          restartGame();
        }, 1500);
        console.log("player lost the game is over");
      }
    }, 1000);
  }
};

// flip cards to black side
const flipCardBack = (imgElement, flagCard) => {
  imgElement.src = "./Flag/black.png";
  imgElement.alt = "Black";
  flagCard.isVisible = "hidden";
};
// closing the Popup
const closePopups = () => {
  document.getElementById("overlay").style.display = "none";
};
//restarting game
const restartGame = () => {
  cardContainer.innerHTML = "";
  mistakesthing.innerHTML = "";
  timerthing.innerHTML = "";
  numSuccs = 0;
  numFail = 0;
  selectedTimer = -1;
  document.querySelector(".btn-1").style.display = "inline";
};

restartButton.addEventListener("click", restartGame);
closeButton.addEventListener("click", closePopups);
