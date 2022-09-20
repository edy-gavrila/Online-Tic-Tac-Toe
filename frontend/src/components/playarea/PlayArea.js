import GameBoard from "./gameboard/GameBoard";
import styles from "./styles";

function PlayArea({ gameData }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        {gameData.player1.name} VS. {gameData.player2.name}
      </h2>
      <p className={styles.announcement}>
        {gameData.nextPlayer.name}. make your move!
      </p>
      <GameBoard
        gameData={{
          board: ["X", "X", "X", "X", "X", "X", "X", "X", "X"],
          nextPlayer: gameData.nextPlayer,
        }}
      />
    </div>
  );
}

export default PlayArea;
