import React, { useEffect, useMemo, useState, useCallback } from 'react';
import styles from './GameBoard.module.scss';
import produce from 'immer';
// import useEffectAllDepsChange from '../hooks/useEffectAllDepsChange';

/* Terms for board state */
/* 0: Player 1 cell */
/* 1: player 2 cell */
/* 2: empty cell */

export type boardType = [number, number, number][];

const initBoardState: boardType = [
  [2, 2, 2],
  [2, 2, 2],
  [2, 2, 2],
];

const getCellCoors = (cellNum: number) => {
  return [Math.trunc(cellNum / 3), cellNum % 3];
};

function getCellState(this: [number, number, number][], cellNum: number) {
  const [row, col] = getCellCoors(cellNum);
  return this[row][col];
}

export const checkWinner = (boardState: boardType): boolean => {
  const checkSpanRow = [0, 1, 2].some((row) =>
    [0, 1, 2].every(
      (col) =>
        boardState[row][col] === boardState[row][0] && boardState[row][0] !== 2
    )
  );
  const checkSpanCol = [0, 1, 2].some((col) =>
    [0, 1, 2].every(
      (row) =>
        boardState[row][col] === boardState[0][col] && boardState[0][col] !== 2
    )
  );
  const checkDiagTLBR =
    boardState[0][0] !== 2 &&
    boardState[0][0] === boardState[1][1] &&
    boardState[0][0] === boardState[2][2];
  const checkDiagTRBL =
    boardState[0][2] !== 2 &&
    boardState[0][2] === boardState[1][1] &&
    boardState[0][2] === boardState[2][0];

  return checkSpanRow || checkSpanCol || checkDiagTLBR || checkDiagTRBL;
};

const checkGameOver = (boardState: boardType): boolean => {
  for (let i = 0; i < boardState.length; i++) {
    for (let j = 0; j < boardState[0].length; j++) {
      if (boardState[i][j] === 2) return false;
    }
  }
  return true;
};

const Cell = (props: {
  index: number;
  getCellStateMemo: (cellNum: number) => number;
  onClick: (cellNum: number) => void;
}) => {
  const { index, getCellStateMemo, onClick } = props;

  return (
    <div
      className={`cell${index} cell-status-${getCellStateMemo(index)}`}
      onClick={() => onClick(index)}
    ></div>
  );
};

const GameBoard = () => {
  const [player, setPlayer] = useState(true);
  const [boardState, setBoardState] = useState(() => initBoardState);

  const getCellStateMemo = useCallback(getCellState.bind(boardState), [
    boardState,
  ]);

  const resetBoard = () => setBoardState(initBoardState);

  const playerTakeCell = (cellNum: number) => {
    const [row, col] = getCellCoors(cellNum);
    const newBoardState = produce(boardState, (draftState) => {
      draftState[row][col] = player ? 1 : 0;
    });
    setBoardState(newBoardState);
    setPlayer((prevPlayer) => !prevPlayer);
  };

  return (
    <div className={styles.wrapper}>
      <div id="gameBoard">
        <p>{`Winner: ${
          checkWinner(boardState)
            ? player
              ? 'X'
              : 'O'
            : checkGameOver(boardState)
            ? 'Draw'
            : ''
        }`}</p>
        <p>{`Player ${player ? 'O' : 'X'}`}</p>
        <button onClick={resetBoard}>Reset</button>
        <div className={`board ${checkWinner(boardState) ? 'disabled' : ''}`}>
          {[...Array(9).keys()].map((index) => (
            <Cell
              key={index}
              {...{ index, getCellStateMemo }}
              onClick={playerTakeCell}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
