const GameBoard = function () {
  const board = Array.from({ length: 3 }, () => Array(3).fill(""));
  const getBoard = () => board;
};

const Player = function (name, symbol) {
  return { name, symbol };
};
