import * as ActionTypes from './ActionTypes.js';

function boardData(state, action) {
  switch(action.type) {
    case ActionTypes.SELECT_BOX:
      let {row, col} = action;
      let changedRow = [0, 0, 0, 0, 0, 0, 0, 0, 0];
      changedRow[col] = 1;
			return {
        ...state,
        selected: [
          ...state.selected.slice(0, row),
          changedRow,
          ...state.selected.slice(row + 1)
        ]
      }
    default:
      return state;
  }
}

export default boardData;