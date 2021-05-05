import * as ActionTypes from './ActionTypes.js';
import cloneDeep from 'lodash/cloneDeep';
import { sudokuSolution } from '../solution/sudoku-solution';

function boardData(state, action) {
  switch(action.type) {
    case ActionTypes.EDIT_BOX:
      let {row, col, val} = action;
			let changedRow = [
				...state[row].slice(0, col),
				val,
				...state[row].slice(col + 1)
			];		
			return [
				...state.slice(0, row),
				changedRow,
				...state.slice(row + 1)
      ];
    case ActionTypes.SOLVE_SUDOKU:
      let b = cloneDeep(action.board);
      let ans = sudokuSolution(b);
      return [...ans];
    case ActionTypes.CLEAR_SUDOKU:
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
    default:
      return state;
  }
}

export default boardData;