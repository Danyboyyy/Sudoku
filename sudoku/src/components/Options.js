import React from 'react';
import '../styles/App.css'
import { palette } from '../styles/palette';

const Options = () => {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const getColor = (n) => {
    return palette[n];
  };

  const op = (n) => {
    return(
      <div key={n} className="numbers" style={{backgroundColor: getColor(n)}}>
       {n}
      </div>
    );
  }

  return(
    <div  className="options">
      {numbers.map(op)}
    </div>
  );
}

export default Options;