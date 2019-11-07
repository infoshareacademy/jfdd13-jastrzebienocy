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
      (this.y = human.offsetTop), // UWAGI AS: wcięcia
      this.points = 0,
      this.lifes = 5;
  }

  left() {
    this.x -= 10; // UWAGI AS: wyciagnalbym do zmiennej
  }
  right() {
    this.x += 10; // UWAGI AS: j/w
  }

  down() {
    this.y += 10; // UWAGI AS: j/w
  }

  reset() {
    this.x = 750; // UWAGI AS: j/w albo obliczał dynamicznie na podstawie szerokosci gry
    this.y = 680; // UWAGI AS: j/w albo obliczał dynamicznie na podstawie wysokosci gry
  }
  addPoint() {
    this.points++; // UWAGI AS: zapis this.points += 1; jest optymalniejszy, szybciej sie wykonuje kod, zaleca sie stosowanie tej formy
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
    this.x = Math.random() * 800; // UWAGI AS: warto by zaokrąglic wartosc do liczb calkowitych
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
      // UWAGI AS: moim zdaniem usuwalbym natychmiast
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

  static move(event, Player1) { // UWAGI AS: zmiennych nie nazywamy z duzej litery (sa wyjatki, ale to akurat do tego nie nalezy), dodatkowo bedzie 2 player? jesli nie to ta 1 nie potrzebna
    if (event.key === "ArrowLeft") {
      Player1.left();
      Move.RenderElement(Player1, domRectagle);
      console.log("moved left"); // UWAGI AS: pamietaj by na mastera nie wrzucac console.logow
    } else if (event.key === "ArrowRight") {
      Player1.right();
      Move.RenderElement(Player1, domRectagle);
      console.log("moved right");
    }

    if (Player1.y >= 775) { // UWAGI AS: player moze sie poruszac w pionie? czemu sluzy to sprawdzenie?
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

// UWAGI AS: zmienne rzucilbym na sama gore kodu
const domContainer = document.querySelector(".container");
const domRectagle = document.querySelector(".human");
const player1 = new Player(domRectagle); // UWAGI AS: bedzie wiecej playerow?
let lifes = document.querySelectorAll('.life');


// UWAGI AS: eventy i wywolania funkcji na sam dol kodu
document.addEventListener("keydown", event => Move.move(event, player1));

function start() {
 // UWAGI AS: brakuje w tej funkcji porzadku. najpierw deklaracje zmiennych, funkcji, a dopiero potem wywołania funkcji, interwałow
  let fruits = [];
  setInterval(() => {
    const newDomFruit = document.createElement("div");
    newDomFruit.classList.add("fruit");
    domContainer.appendChild(newDomFruit);
    Fruit; // UWAGI AS: co to ma na celu?
    const newFruit = new Fruit(newDomFruit, Math.random() * 3 + minSpeed);

    fruits.push(newFruit);

    // MoveFruits.addFruit(newFruit)
  }, intervalOfNewFruit);


 // UWAGI AS: ta funkcja nie musi byc w funkcji start
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



      // UWAGI AS: nieczytelny if, nie kumam co sie w nim dzieje. męczy samo patrzenie na niego :(
      if ((
        (((leftEdgePplayer <= leftEdgeFruit) && (leftEdgeFruit <= rightEdgePlayer)) ||
          ((leftEdgePplayer <= rightEdgeFruit) && (rightEdgeFruit <= rightEdgePlayer))) &&
        ((bottomEdgeFruit >= topEdgePlayer) && (bottomEdgeFruit <= bottomEdgePlayer)))
        && fruit.firstTouch == false  // UWAGI AS: "fruit.firstTouch == false" to to samo co "!fruit.firstTouch"
      ) {
        fruit.firstTouch = true;
        console.log('KOLIZJA');
        fruit.domFruit.remove();
        player.addPoint();

      }
      else if (bottomEdgeFruit >= 720 && fruit.firstTouch == false) { // UWAGI AS: "fruit.firstTouch == false" to to samo co "!fruit.firstTouch"
        fruit.firstTouch = true;
        console.log('looser');


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
