"use strict";
// Selecting the HTML elements
const submitBtn = document.querySelector(".submit");
const firstContainer = document.querySelector(".first-container");
const secondContainer = document.querySelector(".second-container");
const numberSelector = document.querySelectorAll(".item");
const selectText = document.querySelector(".selection-text");

/* 
A variable to check when a number has been clicked.
To stop the submit button from submitting at first click (on page reload)
*/
let clicked;

// Submit button to listen foe clicks
submitBtn.addEventListener("click", function () {
  if (clicked) {
    secondContainer.classList.remove("hidden");
    firstContainer.classList.add("hidden");
  }
});

// To listen for clicks on  any of the numbers
numberSelector.forEach((el) =>
  el.addEventListener("click", function () {
    clicked = el.textContent;
    selectText.textContent = `You selected ${el.textContent} out of 5`;
  })
);
