import * as ActionTypes from './ActionTypes.js';

export const editBox = (row, col, val) => ({
  type: ActionTypes.EDIT_BOX,
  row,
  col,
  val
});

export const solveSudoku = (board) => ({
  type: ActionTypes.SOLVE_SUDOKU,
  board
});