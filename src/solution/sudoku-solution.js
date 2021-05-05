export let sudokuSolution = (b) => {
  if (checkInput(b)) {
    if (solveSudoku(b))
      return b
  }
  else {
    console.log('unsolvable');
    return [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
  }
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

function isValid2(board, row, col, val) {
  for (let i = 0; i < 9; i++) {
    const rowBox = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const colBox = 3 * Math.floor(col / 3) + i % 3;
    if (board[row][i] === val || board[i][col] === val || board[rowBox][colBox] === val) {
      if ((i !== col && i !== row) && (rowBox !== row || colBox !== col)) {
        return false; 
      }
    }
  }
  return true;
}

function checkInput(_board) {
  let aux = true;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (_board[i][j] !== 0) {
        if (!isValid2(_board, i, j, _board[i][j])) {
          return false;
        }
      }
    }
  }
  return aux;
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