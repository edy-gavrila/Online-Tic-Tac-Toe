import { useState } from "react";
import styles from "./styles";

function GameBoard({ gameData }) {
  const { mark: playerMark } = gameData.nextPlayer;
  const [board, setBoard] = useState([...gameData.board]);

  const cellClickHandler = (mark, cellNumber) => {
    setBoard((prevState) => {
      const newState = [...prevState];
      newState[cellNumber] = mark;
      //TODO send new gameboard to server
      return newState;
    });
  };

  return (
    <div className={styles.container}>
      {/* Top row */}
      <div
        className={styles.cell + styles.topRowCell + styles.firstColumnCell}
        onClick={() => cellClickHandler(playerMark, 0)}
      >
        {board[0]}
      </div>
      <div
        className={styles.cell + styles.topRowCell}
        onClick={() => cellClickHandler(playerMark, 1)}
      >
        {board[1]}
      </div>
      <div
        className={styles.cell + styles.topRowCell + styles.lastColumnCell}
        onClick={() => cellClickHandler(playerMark, 2)}
      >
        {board[2]}
      </div>
      {/* Middle row */}
      <div
        className={styles.cell + styles.firstColumnCell}
        onClick={() => cellClickHandler(playerMark, 3)}
      >
        {board[3]}
      </div>
      <div
        className={styles.cell + styles.centerRowCell}
        onClick={() => cellClickHandler(playerMark, 4)}
      >
        {board[4]}
      </div>
      <div
        className={styles.cell + styles.lastColumnCell}
        onClick={() => cellClickHandler(playerMark, 5)}
      >
        {board[5]}
      </div>
      {/* Bottom row */}
      <div
        className={styles.cell + styles.bottomRowCell + styles.firstColumnCell}
        onClick={() => cellClickHandler(playerMark, 6)}
      >
        {board[6]}
      </div>
      <div
        className={styles.cell + styles.bottomRowCell}
        onClick={() => cellClickHandler(playerMark, 7)}
      >
        {board[7]}
      </div>
      <div
        className={styles.cell + styles.bottomRowCell + styles.lastColumnCell}
        onClick={() => cellClickHandler(playerMark, 8)}
      >
        {board[8]}
      </div>
    </div>
  );
}

export default GameBoard;
