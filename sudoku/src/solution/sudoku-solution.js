export let sudokuSolution = (b) => {
  if (solveSudoku(b))
    return b;
}

function isValid(board, row, col, val) {
  for (let i = 0; i < 9; i++) {
    const rowBox = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const colBox = 3 * Math.floor(col / 3) + i % 3;
    if (board[row][i] === val || board[i][col] === val || board[rowBox][colBox] === val)
      return false;
  }
  return true;
}

function solveSudoku(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        for (let k = 1; k <= 9; k++) {
          if (isValid(board, i, j, k)) {
            board[i][j] = k;
            if (solveSudoku(board))
              return true;
            else
              board[i][j] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}