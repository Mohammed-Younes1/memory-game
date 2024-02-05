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
const usernameShown = document.querySelector(".username-1");
const wins = document.querySelector(".wins");
const loses = document.querySelector(".loses");

// starting the signin Processor
const initializeSignin = () => {
  signInBtn.addEventListener("click", () => {
    document.getElementById("overlay").style.display = "flex";
    signInButtonToPlay.addEventListener("click", signInButtonClickHandler);
  });
};

// taking the signin info
const signInButtonClickHandler = () => {
  // showUsername();
  const username = localStorage.getItem("enter-user");
  const password = localStorage.getItem("enter-pass");
  console.log(signInInputUser.value, signinInputPass.value);
  if (username == signInInputUser.value && password == signinInputPass.value) {
    // showUsername();
    window.location.href = "Home.html";
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
  //   window.location.href = "Home.html";
  localStorage.setItem("enter-user", signUpInputUser.value);
  localStorage.setItem("enter-pass", signUpInputPass.value);
  document.getElementById("overlay-up").style.display = "none";
  console.log(localStorage.setItem("enter-user", signUpInputUser.value));
};
initializeSignUp();

//Username and wins/loses
// const showUsername = () => {
//   const usernameDisplay = document.createElement("h1");
//   const showWins = document.createElement("h2");
//   const showLoses = document.createElement("h2");
//   // debugger;
//   usernameDisplay.innerHTML = `Username: mohammed`;
//   showWins.innerHTML = `Wins: 20`;
//   showLoses.innerHTML = `Loses: 20`;
//   usernameShown.appendChild(usernameDisplay);
//   wins.appendChild(showWins);
//   loses.appendChild(showLoses);
// };

const closePopup = () => {
  document.getElementById("overlay").style.display = "none";
  document.getElementById("overlay-up").style.display = "none";
};
cancelButton.addEventListener("click", closePopup);
cancelButtons.addEventListener("click", closePopup);

