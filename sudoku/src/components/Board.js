import React from 'react';
import { useSelector, useActions } from 'react-redux';
import Box from './Box';

const Board = () => {
  const board = useSelector((state) => state);

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
    <table>
      <tbody>
        {board.map(showRow)}
      </tbody>
    </table>
  );

}
export default Board;