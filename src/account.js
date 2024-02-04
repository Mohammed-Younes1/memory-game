const signInBtn = document.querySelector(".sign-in");
const signUpBtn = document.querySelector(".sign-up");
const signOutBtn = document.querySelector(".sign-out");
const cancelButton = document.querySelector(".cancelbutton");
const cancelButtons = document.querySelector(".cancelbuttons");
const signInButtonToPlay = document.querySelector(".signInButtonToPlay");
const signUpButtonToPlay = document.querySelector(".signUpButtonToPlay");
// starting the signin Processor
const initializeSignin = () => {
  signInBtn.addEventListener("click", () => {
    document.getElementById("overlay").style.display = "flex";
    signInButtonToPlay.addEventListener("click", signInButtonClickHandler);
  });
};
// taking the signin info
const signInButtonClickHandler = () => {
  document.getElementById("overlay").style.display = "none";
  document.querySelector(".sign-in").style.display = "none";
  document.querySelector(".sign-up").style.display = "none";
  document.querySelector(".sign-out").style.display = "inline";
};
initializeSignin();
// starting the signup Processor
const initializeSignUp = () => {
  signUpBtn.addEventListener("click", () => {
    document.getElementById("overlay-up").style.display = "flex";
    signUpButtonToPlay.addEventListener("click", signUpButtonClickHandler);
  });
};
// taking the signup info
const signUpButtonClickHandler = () => {
  document.getElementById("overlay-up").style.display = "none";
  document.querySelector(".sign-in").style.display = "none";
  document.querySelector(".sign-up").style.display = "none";
  document.querySelector(".sign-out").style.display = "inline";
};
initializeSignUp();
// SignOut prossess
const signOut=()=>{
    signOutBtn.addEventListener("click",signOutHandler);
}
const signOutHandler = () => {
  document.querySelector(".sign-out").style.display = "none";
  document.querySelector(".sign-in").style.display = "inline";
  document.querySelector(".sign-up").style.display = "inline";
};
signOut()
// closing the Popup
const closePopup = () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlay-up").style.display = "none";
};
cancelButton.addEventListener("click", closePopup);
cancelButtons.addEventListener("click", closePopup);
