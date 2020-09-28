import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearSudoku, solveSudoku } from '../redux/ActionCreators';
import Box from './Box';

const Board = () => {
  const board = useSelector((state) => state);
  const dispatch = useDispatch();
  const solve = () => dispatch(solveSudoku(board));
  const clear = () => dispatch(clearSudoku());

  const renderBox = (row, val, col) => {
    return (
      <Box
        key={col}
        row={row}
        col={col}
        val={val}
      />
    );
  };

  const showRow = (arr, row) => {
    return(
      <tr key={row}>
        {arr.map(renderBox.bind(this, row))}
      </tr>
    );
  };

  return(
    <div>
      <table>
        <tbody>
          {board.map(showRow)}
        </tbody>
      </table>
      <button onClick={solve}>Solve!</button>
      <button onClick={clear}>Reset</button>
    </div>
  );
}

export default Board;