const gameBoard = function (size) {
  const board = Array(9).fill(null);

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
};

const Player = function (name, marker) {
  const container = document.querySelector(".container");
  const cell = document.createElement("div");
  cell.classList.add("cell");
  container.appendChild(cell);

  function addMark() {}

  container.addEventListener("click", addMark);
};
