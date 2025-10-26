export default function BoardWithWalls({ player1, player2, walls }) {
  const size = 5;

  return (
    <div className="board">
      {Array.from({ length: size }).map((_, y) => (
        <div key={y} className="row">
          {Array.from({ length: size }).map((_, x) => {
            const isP1 = player1.x === x && player1.y === y;
            const isP2 = player2.x === x && player2.y === y;
            const isWall = walls.some((w) => w.x === x && w.y === y);

            return (
              <div key={x} className={`cell ${isWall ? "wall" : ""}`}>
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
