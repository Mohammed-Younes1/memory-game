const signInBtn = document.querySelector(".sign-in");
const signUpBtn = document.querySelector(".sign-up");
const cancelButton = document.querySelector(".cancelbutton");
const cancelButtons = document.querySelector(".cancelbuttons");
const signInButtonToPlay = document.querySelector(".signInButtonToPlay");
const signUpButtonToPlay = document.querySelector(".signUpButtonToPlay");
const signInInputUser = document.querySelector(".username-in");
const signinInputPass = document.querySelector(".password-in");
const signUpInputUser = document.querySelector(".username-up");
const signUpInputPass = document.querySelector(".password-up");
const usernameShown = document.getElementById("username-1");
// let winCounters = localStorage.getItem("user-wins") || 0;
// let loseCounters = localStorage.getItem("user-loses") || 0;

// starting the signin Processor
const initializeSignin = () => {
  signInBtn.addEventListener("click", () => {
    document.getElementById("userSettingsModel").style.display = "flex";
    signInButtonToPlay.addEventListener("click", signInButtonClickHandler);
  });
};
const username = localStorage.getItem("enter-user");
const password = localStorage.getItem("enter-pass");

// taking the signin info
const signInButtonClickHandler = () => {
  // showUsername();

  console.log(signInInputUser.value, signinInputPass.value);
  if (username == signInInputUser.value && password == signinInputPass.value) {
    showUsername();
    document.querySelector(".sign-page").style.display = "none";
    document.querySelector(".game-page").style.display = "inline";
  } else {
    alert("Make sure the username or password is correct");
  }
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
  localStorage.setItem("enter-user", signUpInputUser.value);
  localStorage.setItem("enter-pass", signUpInputPass.value);
  localStorage.setItem("user-wins", 0);
  localStorage.setItem("user-loses", 0);
  console.log(winCounter)
  document.getElementById("overlay-up").style.display = "none";
  console.log(localStorage.setItem("enter-user", signUpInputUser.value));
  window.location.reload();
};
initializeSignUp();

//Username and wins/loses
const showUsername = () => {
  const usernameDisplay = document.createElement("h1");
  usernameShown.innerHTML = `Username: ${username}`;
  usernameShown.appendChild(usernameDisplay);
};

const closePopup = () => {
  document.getElementById("userSettingsModel").style.display = "none";
  document.getElementById("settingsPlayModel").style.display = "none";
  document.getElementById("overlay-up").style.display = "none";
};
cancelButton.addEventListener("click", closePopup);
cancelButtons.addEventListener("click", closePopup);
