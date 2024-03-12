"use strict";
//selecting elememts
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const diceEl = document.querySelector(".dice");
const btnrollEl = document.querySelector(".btn--roll");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");

let curscore = 0;
let activeplayer = 0;

// starting conditions
score0El.textContent = 0;
score1El.textContent = 1;
diceEl.classList.add("hidden");

// rolling dice functionality

btnrollEl.addEventListener("click", function () {
  let ran = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  // dynamically load images
  diceEl.src = `dice-${ran}.png`;
  if (ran !== 1) {
    curscore += ran;
    document.getElementById(`current--${activeplayer}`).textContent = curscore;
  }
  // switching to a new player if ran ==1
  else {
    document.getElementById(`current--${activeplayer}`).textContent = 0;
    activeplayer = activeplayer === 0 ? 1 : 0;
    curscore = 0;
    // switching the background of sections to distinguish playerss
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
  }
});
