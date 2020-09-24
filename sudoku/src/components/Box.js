import React from 'react';
import { palette } from '../styles/palette';

const getBoxColor = (row, col) => {
  let x = row - (row % 3); 
	let y = col - (col % 3);
	if(x === 0 && y === 0)
    return palette[1];
  if(x === 0 && y === 3)
    return palette[2];
  if(x === 0 && y === 6)
    return palette[3];
  if(x === 3 && y === 0)
    return palette[4];
  if(x === 3 && y === 3)
    return palette[5];
  if(x === 3 && y === 6)
    return palette[6];
  if(x === 6 && y === 0)
    return palette[7];
  if(x === 6 && y === 3)
    return palette[8];
  if(x === 6 && y === 6)
    return palette[9];
};

const Box = (props) => {
  return(
    <td  style={{backgroundColor: getBoxColor(props.row, props.col)}}>
      <div>
        {props.val ? props.val : ''}
      </div>
    </td>
  );
}

export default Box;