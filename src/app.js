const flagContainer = document.querySelector(".photos-place");
let numAction=""
let numSuccs="";
let numFail="";
let time="";


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


  flags.forEach(flag => {
    console.log(flag);
    const imgElement = document.createElement("img");

    imgElement.src = flag.image;
    imgElement.alt = flag.name;

    // adding  image element container
    flagContainer.appendChild(imgElement);
  });



// for closing the popup
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("overlay").style.display = "flex";
});

function closePopup() {
  document.getElementById("overlay").style.display = "none";
}
