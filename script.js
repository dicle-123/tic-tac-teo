const GameBoard = (function () {
  const board = Array(9).fill("");
  const getBoard = () => board;

  const checkWinner = function () {
    const winnerCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combo of winnerCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }

    if (board.every((el) => el !== "")) {
      return "tie";
    }
    return null;
  };

  const makeMove = function (index, currentValue) {
    if (board[index]) {
      return;
    }
    board[index] = currentValue;
    return board[index];
  };

  const reset = function () {
    board.fill("");
  };

  return {
    getBoard,
    checkWinner,
    makeMove,

    reset,
  };
})();

const Player = function (name, marker) {
  return { name, marker };
};

const DisplayController = (function () {
  const container = document.querySelector(".container");
  const strBtn = document.querySelector(".btn");
  const scoreEl = document.createElement("h2");

  const board = GameBoard.getBoard();

  const player1 = new Player("player-X", "X");
  const player2 = new Player("player-O", "O");
  let currentPlayer = player1;
  let gameIsOver = false;

  const createCell = function (val, i) {
    const celEl = document.createElement("div");
    celEl.classList.add("cell");
    celEl.dataset.id = i;
    celEl.textContent = val;

    return celEl;
  };
  const displayBoard = () => {
    container.innerHTML = "";
    let board = GameBoard.getBoard();
    board.forEach((val, i) => {
      container.appendChild(createCell(val, i));
    });
  };

  displayBoard();

  const declareWinner = (win) => {
    scoreEl.textContent =
      win === "tie" ? "It is tie" : `Game over! ${currentPlayer.name} wins`;
    gameIsOver = true;
    document.body.appendChild(scoreEl);
  };

  const changePlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };
  const clickHandler = (e) => {
    if (gameIsOver) {
      return;
    }
    const targetId = e.target.dataset.id;
    let result = GameBoard.makeMove(targetId, currentPlayer.marker);
    displayBoard();
    winner = GameBoard.checkWinner();
    winner ? declareWinner(winner) : result ? declareTurn() : null;
  };
  const declareTurn = () => {
    changePlayer();
    scoreEl.textContent = `${currentPlayer.name}'s turn`;
    document.body.appendChild(scoreEl);
    displayBoard();
  };

  const resetGame = () => {
    GameBoard.reset();
    displayBoard();
    scoreEl ? document.querySelector("h2").remove() : null;
    currentPlayer = player1;

    gameIsOver = false;
  };
  container.addEventListener("click", clickHandler);
  strBtn.addEventListener("click", resetGame);
})();
