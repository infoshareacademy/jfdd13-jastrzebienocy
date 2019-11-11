//Variables
// for points
let points = document.querySelector(".counterPlus");
// let record = points.innerText;
// for playername - call it after game over
let playerName = localStorage.getItem("player:", "value");

// place for variable of ul  for ranking list
// Create List
// let createList = document.createElement("ol#list");
// Create list element
// let place = document.createElement("li");

// Variable for ranking list element getter
// let list = document.querySelector("#list");

// do tych amiennynch nie przypisałem ponieważ niestety nie odczyrywały podanych wartości
// Recording points from space in game
localStorage.setItem("playerPoints", points.innerText);
// Getting points from storage after gameover
localStorage.getItem("playerPoints", "value");

// Jeszcze nie dokończone
// let showRanking = (player, record) => {
//     if (gameover)
// };
