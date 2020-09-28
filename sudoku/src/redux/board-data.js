import * as ActionTypes from './ActionTypes.js';
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
      console.log(action.board);
      sudokuSolution(action.board);
      return state;
    default:
      return state;
  }
}

export default boardData;