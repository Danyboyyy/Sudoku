import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import boardData from './board-data';

const initialState = [
	[8, 0, 0, 4, 0, 6, 0, 0, 7],
	[0, 0, 0, 0, 0, 0, 4, 0, 0],
	[0, 1, 0, 0, 0, 0, 6, 5, 0],
	[5, 0, 9, 0, 3, 0, 7, 8, 0],
	[0, 0, 0, 0, 7, 0, 0, 0, 0],
	[0, 4, 8, 0, 2, 0, 1, 0, 3],
	[0, 5, 2, 0, 0, 0, 0, 9, 0],
	[0, 0, 1, 0, 0, 0, 0, 0, 0],
	[3, 0, 0, 9, 0, 2, 0, 0, 5]
];

export const store = createStore(
    boardData,
    initialState,
    applyMiddleware(thunk, logger)
);