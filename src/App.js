import React from 'react';
import './styles/App.css';
import Board from './components/Board';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Board />
    </ Provider>
  );
}

export default App;
