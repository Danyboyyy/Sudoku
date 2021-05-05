import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {

  render() {
    return (
      <Jumbotron>
        <div className="container">
          <div>
            <h1>Sudoku</h1>
            <p>Build your sudoku board and let me solve it</p>
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;