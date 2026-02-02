const newGameButton = document.querySelector("#new-game");
const board = document.querySelector(".board");
const counter = document.querySelector(".counter");

const numberOfBombs = 10;

newGameButton.addEventListener("click", () => {
  newGameButton.disabled = true;
  board.innerHTML = "";
  counter.innerHTML = "0";
  let amIPlaying = true;

  function gameEnded(msgs) {
    amIPlaying = false;
    newGameButton.disabled = false;
    msgs.forEach((msg) => {
      alert(msg);
    });
  }

  generateBoard(board);
  let bombs = generateBombs(numberOfBombs);

  console.log(bombs);

  let openedCells = [];

  const cells = board.querySelectorAll(".cell");
  cells.forEach((cell, idx) => {
    cell.addEventListener(
      "click",
      () => {
        if (!amIPlaying /* || cell.classList.contains("open") */) {
          return;
        }
        let cellNumber = idx + 1; /* parseInt(cell.innerText) */
        if (bombs.includes(cellNumber)) {
          gameEnded(["booooom", "vuoi giocare ancora?"]);
          showAllBombs(bombs);
        } else if (!openedCells.includes(cellNumber)) {
          // else if (!cell.classList.contains("open")) {
          cell.classList.add("open");
          openedCells.push(cellNumber);
          // let nOpened = board.querySelectorAll('.open').length
          let nOpened = openedCells.length;
          counter.innerHTML = nOpened;
          if (nOpened === 100 - numberOfBombs) {
            gameEnded(["IMPOSSIBILE, ABBIAMO VINTO!"]);
          }
        }
      },
      /* {once: true} */
    );
  });

  // removeEventListener
  // ONCE

  // DOVE METTIAMO LE BOMBE???
});

function generateBoard(parent) {
  for (let i = 0; i < 100; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = i + 1;
    parent.append(cell);
  }
}

function generateBombs(nBombs) {
  // genero un array

  // pesco 10 numeri togliendoli

  // lo ordino casualmente e pesco i primi 10
  let supportArray = [...new Array(100)].map((_, idx) => idx + 1);

  let bombs = [];

  // supportArray [1 .. 100]

  for (let i = 0; i < nBombs; i++) {
    // 0: 100
    // 1: 99
    // 2: 98
    // 3:
    let index = Math.floor(Math.random() * supportArray.length);
    let rndItem = supportArray.splice(index, 1)[0];

    bombs.push(rndItem);
  }
  return bombs;

  /**
   * while (bombs.length < nBombs) {
   *    let newBomb = Math.floor(Math.random() * 100) + 1;
   *    if (!bombs.includes(newBomb)) {
   *     bombs.push(newBomb)
   *    }
   * }
   * return bombs;
   */
}

function showAllBombs(bombs) {
  board.querySelectorAll(".cell").forEach((cell) => {
    if (bombs.includes(parseInt(cell.innerHTML))) {
      cell.classList.add("open", "mine");
      cell.innerHTML = "";
    }
  });
}
