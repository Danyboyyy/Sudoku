import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { solveSudoku } from '../redux/ActionCreators';
import Box from './Box';

const Board = () => {
  const board = useSelector((state) => state);
  const dispatch = useDispatch();

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
  
  const solve = () => dispatch(solveSudoku(board));

  return(
    <div>
      <table>
        <tbody>
          {board.map(showRow)}
        </tbody>
      </table>
      <button onClick={solve}>Solve!</button>
    </div>
  );
}

export default Board;