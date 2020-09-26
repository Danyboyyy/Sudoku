import React from 'react';
import { useDispatch } from 'react-redux';
import { editBox } from '../redux/ActionCreators';
import { palette } from '../styles/palette';

const getBoxColor = (box) => {

  let x = box.row - (box.row % 3); 
  let y = box.col - (box.col % 3);
  
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
  if(box.isSelected === 1)
    return palette[10];
};

const Box = (props) => {
  const box = props;

  const dispatch = useDispatch();

  const onChange = event => {
    const { row, col } = props;
		const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		const val = parseInt(event.target.value);
		const isDeleted = event.target.value === '';
		if (range.indexOf(val) > -1 || isDeleted) {
			dispatch(editBox(row, col, val));
		}
  }

  return(
    <td>
      <input 
        style={{backgroundColor: getBoxColor(box)}}
        value={box.val ? box.val : ''}
        onChange={onChange}
      />
    </td>
  );
}

export default Box;