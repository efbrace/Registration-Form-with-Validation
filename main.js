const username = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const errMessage = document.getElementById("errMessage");

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  // USERNAME
  // if (username.value === " " || username.value === null) {
  //   errMessage.innerText = "please Enter Username.";
  //   username.classList.add("errorStyle");
  //   console.log(username);
  // } else if (username.value.length < 6) {
  //   errMessage.innerText = "username must be more than six(6) characters";
  //   username.classList.add("errorStyle");
  // } else if (username.value.length > 6) {
  //   username.classList.remove("errorStyle");
  // }
  // PASSWORD
  if (password.value === " " || password.value === null) {
    errMessage.innerText = "please Enter Password.";
    password.classList.add("errorStyle");
  } else if (password.value.length < 8) {
    errMessage.innerText = "Password must be more than eight(8) characters";
    password.classList.add("errorStyle");
  } else if (password.value !== confirmPassword.value) {
    errMessage.innerText = "Passwords don't match";
    password.classList.add("errorStyle");
    confirmPassword.classList.add("errorStyle");
  } else {
    errMessage.innerText = "Success!";
    password.classList.remove("errorStyle");
    confirmPassword.classList.remove("errorStyle");
    errMessage.id = "success";
  }
});
