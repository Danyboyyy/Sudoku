import React from 'react';
import { useDispatch } from 'react-redux';
import { editBox } from '../redux/ActionCreators';
import { palette } from '../styles/palette';

const getBoxColor = (box) => {

  let x = box.row - (box.row % 3); 
  let y = box.col - (box.col % 3);
  let z = x + y;

  if(z === 3 || z === 9)
    return palette[1];
  else
    return palette[2];
};

const Box = (props) => {
  const box = props;

  const dispatch = useDispatch();

  const onChange = event => {
    const { row, col } = props;
    const range = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const val = + event.target.value;
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