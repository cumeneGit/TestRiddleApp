export default function Board({ player1, player2 }) {
  const size = 5; // 5x5 グリッド

  return (
    <div className="board">
      {Array.from({ length: size }).map((_, y) => (
        <div key={y} className="row">
          {Array.from({ length: size }).map((_, x) => {
            const isP1 = player1.x === x && player1.y === y;
            const isP2 = player2.x === x && player2.y === y;
            return (
              <div key={x} className="cell">
                {isP1 && <div className="player player1" />}
                {isP2 && <div className="player player2" />}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
