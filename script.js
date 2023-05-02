"use strict";
// Selecting the HTML elements
const submitBtn = document.querySelector(".submit");
const firstContainer = document.querySelector(".first-container");
const secondContainer = document.querySelector(".second-container");
const numbers = document.querySelectorAll(".item");
const selectText = document.querySelector(".selection-text");
const numberContainer = document.querySelector(".number-container");

// A variable to check when a number has been clicked.
let clicked;

// Submit button to listen foe clicks
submitBtn.addEventListener("click", function (e) {
  // To stop the submit button from submitting at first click (on page reload)
  e.preventDefault();
  if (clicked) {
    secondContainer.classList.remove("hidden");
    firstContainer.classList.add("hidden");
  } else {
    alert("Please select a number!");
  }
});

// To listen for clicks on any of the numbers

numberContainer.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("item")) {
    // Removing the active color from all the numbers

    numbers.forEach((el) => {
      el.classList.remove("active");
      clicked = e.target.id;
      selectText.textContent = `You selected ${clicked} out of 5`;
    });

    // Adding the active color to the clicked number
    e.target.classList.add("active");
  }
});
