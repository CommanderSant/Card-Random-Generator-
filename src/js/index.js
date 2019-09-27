/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let cardNumber = document.querySelector(".number");
  cardNumber.innerHTML = generateRandomNumber();
  let suit = generateRandomSuit();
  document.querySelector(".top").classList.add(suit);
  document.querySelector(".bottom").classList.add(suit);
};

function generateRandomNumber() {
  let values = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
  let indexValues = Math.floor(Math.random() * values.length);
  return values[indexValues];
}
function generateRandomSuit() {
  let suits = ["spades", "clubs", "diamond", "hearts"];
  let indexSuits = Math.floor(Math.random() * suits.length);
  return suits[indexSuits];
}
