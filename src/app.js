const flagContainer = document.querySelector(".photos-place");
const playButton = document.querySelector(".btn-1");
const restartButton = document.querySelector(".btn-2");
let numAction = document.querySelector(".num-1");
let numSuccs = document.querySelector("num-2");
let numFail = document.querySelector("num-3");
let timer = document.querySelector("timer");
let awaitingEndMove=false;
let activeCard=null;


numAction = 0;
numSuccs = 0;
numFail = 0;
const flags = [
  { id: 1, name: "Jordan", image: "./Flag/Jordan.png" },
  { id: -1, name: "Jordan", image: "./Flag/Jordan.png" },
  { id: 2, name: "Palestine", image: "./Flag/Palestine.png" },
  { id: -2, name: "Palestine", image: "./Flag/Palestine.png" },
  { id: 3, name: "Saudi", image: "./Flag/Saudi_Arabia.png" },
  { id: -3, name: "Saudi", image: "./Flag/Saudi_Arabia.png" },
  { id: 4, name: "Egypt", image: "./Flag/Egypt.png" },
  { id: -4, name: "Egypt", image: "./Flag/Egypt.png" },
  { id: 5, name: "Iraq", image: "./Flag/Iraq.png" },
  { id: -5, name: "Iraq", image: "./Flag/Iraq.png" },
  { id: 6, name: "Lebanon", image: "./Flag/Lebanon.png" },
  { id: -6, name: "Lebanon", image: "./Flag/Lebanon.png" },
  { id: 7, name: "Qatar", image: "./Flag/Qatar.png" },
  { id: -7, name: "Qatar", image: "./Flag/Qatar.png" },
  { id: 8, name: "Kuwait", image: "./Flag/Kuwait.png" },
  { id: -8, name: "Kuwait", image: "./Flag/Kuwait.png" },
  { id: 9, name: "Oman", image: "./Flag/Oman.png" },
  { id: -9, name: "Oman", image: "./Flag/Oman.png" },
  { id: 10, name: "Yemen", image: "./Flag/Yemen.png" },
  { id: -10, name: "Yemen", image: "./Flag/Yemen.png" },
];
const flagsNumb=flags.length;


// for(let i = 0; i < flagsNumb; i++){
//     const randomIndex = Math.floor(Math.random() * flags.length);
//     const flagCard = flags[randomIndex];
//     console.log(randomIndex);
//     console.log("oskdoaskdo");
//     // console.log(flagCard);
//     flags.splice(randomIndex, 1);

// }
flags.forEach((flag) => {
  
    const imgElement = document.createElement("img");
  
    imgElement.src = flag.image;
    imgElement.alt = flag.name;
  
    // adding  image element container
    flagContainer.appendChild(imgElement);
  });



// for closing the popup

document.getElementById("overlay").style.display = "flex";

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}


const startScore = () => {
  numAction = 0;
  numSuccs = 0;
  numFail = 0;
  timer;
};
const startGame = () => {
  console.log("Start the game");
//   startScore()
};

const restartGame = () => {
    startScore()
  console.log("restart the game");
  console.log(startScore);
};
playButton.addEventListener("click", startGame);
restartButton.addEventListener("click", restartGame);
