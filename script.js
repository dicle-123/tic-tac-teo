const gameBoard = (function () {
  const board = Array(9).fill("");
  const getBoard = () => board;

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

  if (board.every((el = el !== ""))) {
    return "Tie";
  }
  return null;

  const makeMove = function (currentValue, index) {
    if (board[index]) {
      return;
    }
    board[index] = currentValue;
    return currentValue;
  };

  return {
    getBoard,
    makeMove,
    winnerCombos,
  };
})();
