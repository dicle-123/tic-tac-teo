const GameBoard = function () {
  const board = Array.from({ length: 3 }, () => Array(3).fill(""));
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
      console.log("kazanan", board[a]);
    }
  }
};
