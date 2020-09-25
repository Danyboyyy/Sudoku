import * as ActionTypes from './ActionTypes.js';

export const selectBox = (box) => ({
  type: ActionTypes.SELECT_BOX,
  row: box.row,
  col: box.col,
  val: box.val
});