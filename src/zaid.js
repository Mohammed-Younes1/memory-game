 
  const flags = [
    { id: 1, name: "Jordan", image: "./Flag/Jordan.png" },
    { id: -1, name: "Jordan", image: "./Flag/Jordan.png" },
    { id: 2, name: "Palestine", image: "./Flag/Palestine.png" },
    { id: -2, name: "Palestine", image: "./Flag/Palestine.png" },
    { id: 3, name: "Saudi", image: "./Flag/Saudi_Arabia.png" },
    { id: -3, name: "Saudi", image: "./Flag/Saudi_Arabia.png" },
    { id: 4, name: "Egpyt", image: "./Flag/Egypt.png" },
    { id: -4, name: "Egpyt", image: "./Flag/Egypt.png" },
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

  const cardsContainer = document.getElementById("photos-place");

  // Iterate over each element with the class "photos-place"
  for (let card of flags) {
    // Create a div for the front of the card
    const cardFront = document.createElement("div");
    
    // Create an image element for the card
    const cardImg = document.createElement("img");
    cardImg.setAttribute("src",card.image)
    // Append the image to the front of the card
    cardFront.appendChild(cardImg);
    
    // Append the cardFront to the element with the id "photos-place"
    cardsContainer.appendChild(cardFront);
  }
  
function closePopup() {
  document.getElementById("overlay").style.display = "none";
}
// closePopup();
console.log("test")
