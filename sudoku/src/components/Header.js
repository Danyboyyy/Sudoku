import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class Header extends Component {

  render() {
    return (
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Sudoku</h1>
              <p>Play a Sudoku game!</p>
            </div>
          </div>
        </div>
      </Jumbotron>
    );
  }
}

export default Header;