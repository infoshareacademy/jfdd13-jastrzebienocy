const InnerInstButton = document.querySelector("#instruction");
const overlay = document.querySelector(".game-instruction-overlay");
const InsBox = document.querySelector(".game-instruction-box");

const playerWidth = 160;
const fruitWidth = 30;
const playerHeight = 110;
const fruitHeight = 30;
const oneMove = 10;
const noMove = 0;
const domContainer = document.querySelector(".container");
const domRectagle = document.querySelector(".human");

let falling;
let newFruitInterval;
let intervalOfFalling;
let intervalOfNewFruit;
let minSpeed;
let check = false;

class Player {
  constructor(human) {
    (this.x = human.offsetLeft),
      (this.y = human.offsetTop),
      (this.points = 0),
      (this.lifes = 5);
  }

  left() {
    this.x -= oneMove;
  }
  right() {
    this.x += oneMove;
  }
  down() {
    this.y += oneMove;
  }
  stop(){
    this.x += 0;
  }

  addPoint() {
    this.points += 1;
    document.querySelector(".counterPlus").innerHTML = this.points;

    if (this.points >= 7) {
      intervalOfFalling = 15;
      intervalOfNewFruit = 1000;
      minSpeed = 7;
    } else if (this.points >= 15) {
      intervalOfFalling = 10;
      intervalOfNewFruit = 500;
      minSpeed = 15;
    }
  }
}

class Fruit {
  constructor(fruit, speed) {
    this.domFruit = fruit;
    this.speed = speed;
    this.x = Math.floor(Math.random() * 830);
    this.y = fruit.offsetTop;
    this.firstTouch = false;
  }

  down() {
    this.y += this.speed;
  }
}

class MoveFruits {
  static RenderElement(Fruit, domFruit) {
    domFruit.style.top = Fruit.y + "px";
    domFruit.style.left = Fruit.x + "px";
  }

  static move(fruit, domFruit) {
    if (fruit.y > 470) {
      domFruit.style.backgroundImage = "url(./gameIMG/lost.png)";
      domFruit.style.height = "80px";
      domFruit.style.width = "80px";

      setTimeout(() => {
        domFruit.remove();
      }, 1000);
      check = true;
    } else {
      fruit.down();
      MoveFruits.RenderElement(fruit, domFruit);
    }
  }
}

class Move {
  static RenderElement(player, ludzik) {
    ludzik.style.left = player.x + "px";
    ludzik.style.top = player.y + "px";
  }

  static move(event, player1) {
    if (event.key === "ArrowLeft" && player1.x > 0) {
      player1.left();
      Move.RenderElement(player1, domRectagle);
    } else if (
      event.key === "ArrowRight" &&
      player1.x < domContainer.offsetWidth - playerWidth
    ) {
      player1.right();
      Move.RenderElement(player1, domRectagle);
    }

    if (player1.x >= domContainer.offsetWidth) {
      Move.RenderElement(player1, domRectagle);
    } else if (player1.x <= 0) {
      Move.RenderElement(player1, domRectagle);
    }
  }

  static stop(event, player1) {
    if (event.key !== "ArrowLeft" && player1.x > 0) {
      player1.stop();
      Move.RenderElement(player1, domRectagle);
    } else if (
      event.key !== "ArrowRight" &&
      player1.x < domContainer.offsetWidth - playerWidth
    ) {
      player1.stop();
      Move.RenderElement(player1, domRectagle);
    }

    if (player1.x >= domContainer.offsetWidth) {
      Move.RenderElement(player1, domRectagle);
    } else if (player1.x <= 0) {
      Move.RenderElement(player1, domRectagle);
    }
  }

  
}

const player1 = new Player(domRectagle);
document.addEventListener("keydown", event => Move.move(event, player1));
document.addEventListener("keyup", event => Move.stop(event, player1));

function start() {
  document.querySelector(".human").style.opacity = "1";
  document.querySelector(".points").style.opacity = "1";
  document.getElementById("end-game").classList.remove("shown");
  document.getElementById("score").classList.remove("shown");
  document.getElementById("score").innerText = " ";
  minSpeed = 3;
  intervalOfFalling = 50;
  intervalOfNewFruit = 3000;

  let pointsToShow = parseInt(localStorage.getItem("playerPoints"));
  pointsToShow = parseInt(localStorage.getItem("playerPoints"));
  let endOfWord;

  clearInterval(falling);
  clearInterval(newFruitInterval);

  player1.points = 0;
  document.querySelector(".counterPlus").innerHTML = player1.points;

  let fruitsFromDom = document.querySelectorAll(".fruit");
  fruitsFromDom.forEach(element => element.remove());
  let fruits = [];

  let counterMinus = document.querySelector(".counterMinus");
  counterMinus.innerHTML = `
    <div class="life"><i class="fas fa-heart"></i></div>
    <div class="life"><i class="fas fa-heart"></i></div>
    <div class="life"><i class="fas fa-heart"></i></div>
    <div class="life"><i class="fas fa-heart"></i></div>
    <div class="life"><i class="fas fa-heart"></i></div>
  `;

  let lifes = document.querySelectorAll(".life");

  newFruitInterval = setInterval(() => {
    const newDomFruit = document.createElement("div");
    newDomFruit.classList.add("fruit");

    if (Math.random() <= 0.25) {
      newDomFruit.classList.add("banana");
    } else if (Math.random() > 0.25 && Math.random() < 0.5) {
      newDomFruit.classList.add("peach");
    } else if (Math.random() >= 0.5 && Math.random() < 0.75) {
      newDomFruit.classList.add("strawberry");
    } else {
      newDomFruit.classList.add("grapes");
    }
    domContainer.appendChild(newDomFruit);
    const newFruit = new Fruit(newDomFruit, Math.random() * 3 + minSpeed);
    fruits.push(newFruit);
  }, intervalOfNewFruit);

  function checkCollision(fruits, player) {
    for (let i = 0; i < fruits.length; i++) {
      const fruit = fruits[i];
      let leftEdgeFruit = fruit.x;
      let rightEdgeFruit = fruit.x + fruitWidth;
      let leftEdgePplayer = player.x;
      let rightEdgePlayer = player.x + playerWidth;
      let bottomEdgeFruit = fruit.y + fruitHeight;
      let topEdgePlayer = player.y;
      let bottomEdgePlayer = player.y + playerHeight;
      let record = document.querySelector(".counterPlus").innerText;
      let playerName = localStorage.getItem("name");
      localStorage.setItem("playerPoints", record);
      let highscore = localStorage.getItem("highScore");
      let pointsToShow = parseInt(localStorage.getItem("playerPoints"));
      if (pointsToShow == 1) {
        endOfWord = "";
      } else if (pointsToShow > 1 && pointsToShow <= 4) {
        endOfWord = "y";
      } else if (pointsToShow > 4 || pointsToShow == 0) {
        endOfWord = "ów";
      }

      if (
        ((leftEdgePplayer <= leftEdgeFruit &&
          leftEdgeFruit <= rightEdgePlayer) ||
          (leftEdgePplayer <= rightEdgeFruit &&
            rightEdgeFruit <= rightEdgePlayer)) &&
        (bottomEdgeFruit >= topEdgePlayer &&
          bottomEdgeFruit <= bottomEdgePlayer) &&
        !fruit.firstTouch
      ) {
        fruit.firstTouch = true;
        fruit.domFruit.remove();
        player.addPoint();
      } else if (bottomEdgeFruit >= 500 && !fruit.firstTouch) {
        fruit.firstTouch = true;
        lifes[lifes.length - 1].remove();
        lifes = document.querySelectorAll(".life");
        if (lifes.length == 0 && check == true) {
          clearInterval(falling);
          clearInterval(newFruitInterval);

          document.querySelector(".points").style.opacity = "0";
          document.getElementById("end-game").classList.add("shown");
          document.getElementById("end-game").classList.add("cat");

          setTimeout(() => {
            document.getElementById("score").classList.add("shown");

            if (highscore === null) {
              localStorage.setItem("highScore", pointsToShow);
              highscore = localStorage.getItem("highScore");
            }
            if (highscore < pointsToShow) {
              localStorage.setItem("highScore", pointsToShow);
              highscore = localStorage.getItem("highScore");
              document.getElementById("score").classList.add("highscore");
              document.querySelector(".highscore").innerText = `${playerName}
              to Twój rekord!
              Zdobywasz ${pointsToShow} punkt${endOfWord}!`;
            } else if (highscore >= pointsToShow) {
              document.getElementById("score").classList.add("yourscore");
              document.querySelector(".yourscore").innerText = `${playerName} 
              zdobywasz ${pointsToShow} punkt${endOfWord}`;
            }
          }, 3400);
          document.getElementById("startGame").innerText = "Jeszcze raz!";
        }
      }
    }
  }

  falling = setInterval(() => {
    fruits.forEach(fruit => {
      MoveFruits.move(fruit, fruit.domFruit);
    });
    checkCollision(fruits, player1);
  }, intervalOfFalling);
}

const startGameBtn = document.querySelector("#startGame");
startGameBtn.addEventListener("click", start);

function InstInner() {
  overlay.style.display = "block";
  InsBox.style.display = "block";
}

InnerInstButton.addEventListener("click", InstInner);
