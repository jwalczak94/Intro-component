"use strict";

// form inputs
const firstName = document.forms.signUpForm.firstName.value;
const lastName = document.forms.signUpForm.lastName.value;
const email = document.forms.signUpForm.email.value;
const password = document.forms.signUpForm.password.value;
const inputs = [...document.querySelectorAll(".form-input")];

const inputsValues = [firstName, lastName, email, password];
const form = document.getElementById("sing-up");

//submit button
const btn = document.querySelector(".btn");

// warnings
const message = document.querySelectorAll(".input-message");
const svg = document.querySelectorAll(".warning");

form.addEventListener("submit", (e) => {
  let isValid = true;
  e.preventDefault();

  inputs.forEach(function (el) {
    const input = el.querySelector("input");
    const inputValue = input.value.trim();
    const message = el.querySelector(".input-message");
    const warning = el.querySelector(".warning");

    if (inputValue === "") {
      input.classList.add("invalid-input");
      message.classList.remove("hidden");
      warning.classList.remove("hidden");
      isValid = false;
    } else {
      input.classList.remove("invalid-input");
      message.classList.add("hidden");
      warning.classList.add("hidden");
    }
  });

  if (isValid) document.getElementById("sing-up").submit();
});
