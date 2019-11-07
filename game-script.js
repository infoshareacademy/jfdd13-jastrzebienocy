const playerWidth = 30;
const fruitWidth = 30;
const playerHeight = 30;
const fruitHeight = 30;

let intervalOfFalling = 50;
let intervalOfNewFruit = 3000;
let minSpeed = 3;




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
    if (fruit.y > 760) {
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
    if (event.key === "ArrowLeft") {
      Player1.left();
      Move.RenderElement(Player1, domRectagle);
      console.log("moved left");
    } else if (event.key === "ArrowRight") {
      Player1.right();
      Move.RenderElement(Player1, domRectagle);
      console.log("moved right");
    }

    if (Player1.y >= 775) {
      alert("YOU LOST! PLAY AGAIN :)");
      Player1.reset();
      Move.RenderElement(Player1, domRectagle);
    } else if (Player1.y <= 0) {
      alert("YOU LOST! PLAY AGAIN :)");
      Player1.reset();
      Move.RenderElement(Player1, domRectagle);
    } else if (Player1.x >= 1600) {
      alert("YOU LOST! PLAY AGAIN :)");
      Player1.reset();
      Move.RenderElement(Player1, domRectagle);
    } else if (Player1.x <= 0) {
      alert("YOU LOST! PLAY AGAIN :)");
      Player1.reset();
      Move.RenderElement(Player1, domRectagle);
    }
  }
}

const domContainer = document.querySelector(".container");
const domRectagle = document.querySelector(".human");
const player1 = new Player(domRectagle);
let lifes = document.querySelectorAll('.life');


document.addEventListener("keydown", event => Move.move(event, player1));

function start() {

  let fruits = [];
  setInterval(() => {
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
        ((bottomEdgeFruit >= topEdgePlayer ) && (bottomEdgeFruit <= bottomEdgePlayer)) ) 
        && fruit.firstTouch == false
      ) {
        fruit.firstTouch = true;
        console.log('KOLIZJA');

        console.log(fruits);
        console.log(fruit);
        console.log(i);
        fruit.domFruit.remove();
        player.addPoint();

      }
      else {


        // nieMaKolizji(); //uzytkownik traci punkt

      }

     
      
  };


  }
  setInterval(() => {
    fruits.forEach(fruit => {
      MoveFruits.move(fruit, fruit.domFruit);
    });
    checkCollision(fruits, player1)

  }, intervalOfFalling);



  }

start();


// console.log(player1);
