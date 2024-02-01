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
// let numAction = document.querySelector(".num-1");

// let selectedNumOfMistakes = parseInt(NumMistakesInput.value);

let numSuccs = document.querySelector(".num-2");
let numFail = document.querySelector(".num-3");
// let timer = document.querySelector(".timer");
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

let selectedNumOfCards = 0;
let selectedNumOfMistakes = 0;
let selectedTimer = 0;

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

    //   console.log(selectedNumOfMistakes, "ekfokefo")
    createCards(selectedNumOfCards);
    document.getElementById("overlay").style.display = "none";
    setGameSettings(numFail, numSuccs);

};
initializeGame();


const setGameSettings = (numFail, numSuccs) => {

    const mistakesElement = document.createElement("h3");
    const pointsElement = document.createElement("h3");
    const timerElement = document.createElement("div");

    mistakesElement.innerHTML = `Mistakes: <span style="color: red;">${numFail}</span> out of ${selectedNumOfMistakes}`;
    timerElement.textContent = `Timer: ${selectedTimer} sec`;
    pointsElement.innerHTML = `Points earned:<span style="color: #2c4c3b;"> ${numSuccs}</span>`;

    mistakesthing.innerHTML = "";
    mistakesthing.appendChild(pointsElement);
    mistakesthing.appendChild(mistakesElement);
    timerthing.innerHTML = "";
    timerthing.appendChild(timerElement);

};
const gameTimer = () => {
    setInterval(() => {
        selectedTimer.textContent = seconds;
        seconds--;

        if (seconds < 0) {
            clearInterval(countdown);
            selectedTimer.textContent = "the timer is over you lost!";
        }
    }, 1000);
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
            //   revealCard(imgElement, flagCard);
            numSuccs = 0;
            numFail = 0;
        });
    }, 1100);
};

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

    selectedCards = [];
    console.log(`failed times ${numFail} and points are ${numSuccs}`);
    if (numSuccs == selectedNumOfCards) {
        setTimeout(() => {
            alert("YOU HAVE WON!!!!!!!!!!!!!!!!!");
        }, 1500);
    }

    if (Math.abs(card1.flagCard.id) === Math.abs(card2.flagCard.id)) {
        numSuccs++;
        console.log("match");
        setTimeout(() => {
            cardContainer.removeChild(card1.imgElement);
            cardContainer.removeChild(card2.imgElement);
            console.log(card1.imgElement, card2.imgElement);
        }, 1200);
        setGameSettings(numFail, numSuccs);
    } else {
        setTimeout(() => {
            flipCardBack(card1.imgElement, card1.flagCard);
            flipCardBack(card2.imgElement, card2.flagCard);
            setGameSettings(numFail, numSuccs);
        }, 1000);
        numFail++;
    }
};

// flip cards to black side
const flipCardBack = (imgElement, flagCard) => {
    imgElement.src = "./Flag/black.png";
    imgElement.alt = "Black";
    flagCard.isVisible = "visible";
};


const closePopup = () => {
    document.getElementById("overlay").style.display = "none";
};

const startGame = () => {
    console.log("Start the game");
    document.getElementById("overlay").style.display = "flex";
};

const restartGame = () => {
    window.location.reload();
};

restartButton.addEventListener("click", restartGame);
closeButton.addEventListener("click", closePopup);
