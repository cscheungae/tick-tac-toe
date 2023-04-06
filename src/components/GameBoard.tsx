import React from 'react';
// import styles from '@/styles/GameBoard.module.scss';
import styles from './GameBoard.module.scss';

const GameBoard = () => {
  return (
    <div className={styles.wrapper}>
      <div id="gameBoard">
        <button>Reset</button>
        <div className="board">
          <div className="cell0"></div>
          <div className="cell1"></div>
          <div className="cell2"></div>
          <div className="cell3"></div>
          <div className="cell4"></div>
          <div className="cell5"></div>
          <div className="cell6"></div>
          <div className="cell7"></div>
          <div className="cell8"></div>
        </div>
      </div>
    </div>
  );
};

export default GameBoard;
