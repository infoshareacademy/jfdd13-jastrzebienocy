const playerWidth = 245;
const fruitWidth = 40;
const playerHeight = 183;
const fruitHeight = 40;

let intervalOfFalling = 50;
let intervalOfNewFruit = 3000;
let minSpeed = 3;
// document.querySelectorAll('.dead').style.display = 'none';




class Player {
  constructor(human) {
    (this.x = human.offsetLeft),
      (this.y = human.offsetTop),
      this.points = 0,
      this.lifes = 5;
  }

  left() {
    this.x -= 10;
  }
  right() {
    this.x += 10;
  }

  down() {
    this.y += 10;
  }

  reset() {
    this.x = 750;
    this.y = 680;
  }
  addPoint() {
    this.points++;
    document.querySelector('.counterPlus').innerHTML = this.points;

    if (this.points >= 10) {
      intervalOfFalling = 15;
      intervalOfNewFruit = 1000;

      minSpeed = 7;

    }


  }



}

class Fruit {
  constructor(fruit, speed) {
    this.domFruit = fruit;
    this.speed = speed;
    this.x = Math.random() * 800;
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
    if (fruit.y > 790) {
      domFruit.style.backgroundImage = "url(./gameIMG/lost.png)";
      domFruit.style.height = '100px'
      domFruit.style.width = '100px'
      setTimeout(() => {
        domFruit.remove();
      }, 1000);
    } else {
      fruit.down();
      MoveFruits.RenderElement(fruit, domFruit);
    }
  }

}

class Move {
  static RenderElement(Player, ludzik) {
    ludzik.style.left = Player.x + "px";
    ludzik.style.top = Player.y + "px";
  }

  static move(event, Player1) {
    if (event.key === "ArrowLeft" && player1.x > 0) {
      Player1.left();
      Move.RenderElement(Player1, domRectagle);
      console.log("moved left");
    } else if (event.key === "ArrowRight" && player1.x < domContainer.offsetWidth - playerWidth - 10) {
      Player1.right();
      Move.RenderElement(Player1, domRectagle);
      console.log("moved right");
    }

    if (Player1.x >= domContainer.offsetWidth + 500) {
      alert("YOU LOST! PLAY AGAIN :)");
      Player1.reset();
      Move.RenderElement(Player1, domRectagle);
    } else if (Player1.x <= 0 - 200) {
      alert("YOU LOST! PLAY AGAIN :)");
      Player1.reset();
      Move.RenderElement(Player1, domRectagle);
    }
  }
}

const domContainer = document.querySelector(".container");
const domRectagle = document.querySelector(".human");
const player1 = new Player(domRectagle);



document.addEventListener("keydown", event => Move.move(event, player1));

var falling;
var newFruitInterval;
clearInterval(falling);
  clearInterval(newFruitInterval);
  console.log(clearInterval(falling));

function start() {
  document.querySelector('.human').style.opacity = '1';
  startGameBtn.disabled = true;
  

  player1.points = 0;
  document.querySelector('.counterPlus').innerHTML = player1.points;

  let fruitsFromDom = document.querySelectorAll('.fruit')

  fruitsFromDom.forEach(element => element.remove());

  let fruits = [];
  
  let counterMinus = document.querySelector('.counterMinus')
  counterMinus.innerHTML = `
    <div class="life"><i class="fas fa-heart"></i></div>
    <div class="life"><i class="fas fa-heart"></i></div>
    <div class="life"><i class="fas fa-heart"></i></div>
    <div class="life"><i class="fas fa-heart"></i></div>
    <div class="life"><i class="fas fa-heart"></i></div>
  `
  
  
  

  let lifes = document.querySelectorAll('.life');

  newFruitInterval = setInterval(() => {
    const newDomFruit = document.createElement("div");
    newDomFruit.classList.add("fruit");
    domContainer.appendChild(newDomFruit);
    Fruit;
    const newFruit = new Fruit(newDomFruit, Math.random() * 3 + minSpeed);

    fruits.push(newFruit);

    // MoveFruits.addFruit(newFruit)
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



      if ((
        (((leftEdgePplayer <= leftEdgeFruit) && (leftEdgeFruit <= rightEdgePlayer)) ||
          ((leftEdgePplayer <= rightEdgeFruit) && (rightEdgeFruit <= rightEdgePlayer))) &&
        ((bottomEdgeFruit >= topEdgePlayer) && (bottomEdgeFruit <= bottomEdgePlayer)))
        && fruit.firstTouch == false
      ) {
        fruit.firstTouch = true;
        console.log('KOLIZJA');
        fruit.domFruit.remove();
        player.addPoint();

      }
      else if (bottomEdgeFruit >= 820 && fruit.firstTouch == false) {
        fruit.firstTouch = true;
        console.log('looser');

        lifes[lifes.length - 1].remove()
        lifes = document.querySelectorAll('.life')
        if (lifes.length == 0){
          console.log('game over');
          //zapisz wynik
           clearInterval(falling);
            clearInterval(newFruitInterval);
          alert('GAME OVER');

        }
        // nieMaKolizji(); //uzytkownik traci punkt
      }
    };


  }

  falling = setInterval(() => {
    fruits.forEach(fruit => {
      MoveFruits.move(fruit, fruit.domFruit);
    });
    checkCollision(fruits, player1)

  }, intervalOfFalling);

}


const startGameBtn = document.querySelector('#startGame');

startGameBtn.addEventListener('click',  start);



// console.log(player1);
