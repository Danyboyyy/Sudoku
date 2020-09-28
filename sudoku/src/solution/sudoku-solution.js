const validNum = (board, row, col, val) => {
  for (let i = 0; i < 9; i++) {
    if (board[row][i] === val)
      return false;
  }

  for (let i = 0; i < 9; i++) {
    if (board[i][col] === val)
      return false;
  }

  let gridRow = Math.floor(row / 3) * 3;
  let gridCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[gridRow + i][gridCol + j] === val)
        return false;
    }
  }
  return true;
}

export let sudokuSolution = (board) => {
  let sud = board;
  console.log(board);
  console.log(sud);
}

/*
export let sudokuSolution = (board) => {
  let sud = board;
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (sud[i][j] === 0) {
        for (let k = 1; k <= 9; k++) {
          if (validNum(sud, i, j, k)) {
            sud[i][j] = k;
            console.log(sud);
            sudokuSolution(sud);
            sud[i][j] = 0;
          }
        }
        return;
      }
    }
  }
  console.log(sud);
}*/