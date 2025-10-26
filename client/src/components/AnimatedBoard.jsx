// src/components/AnimatedBoard.jsx
import './AnimatedBoard.css';

export default function AnimatedBoard({ player, walls, goal }) {
  const cellSize = 60; // px

  return (
    <div className="animated-board" style={{ width: cellSize * 5, height: cellSize * 5 }}>
      {/* グリッド線と壁 */}
      {[...Array(5)].map((_, y) =>
        [...Array(5)].map((_, x) => {
          const wallRight = walls.some(w => w.x === x && w.y === y && w.dir === 'right');
          const wallDown = walls.some(w => w.x === x && w.y === y && w.dir === 'down');

          return (
            <div
              key={`${x}-${y}`}
              className="cell"
              style={{
                left: x * cellSize,
                top: y * cellSize,
                borderRight: wallRight ? '4px solid black' : '1px solid gray',
                borderBottom: wallDown ? '4px solid black' : '1px solid gray',
              }}
            ></div>
          );
        })
      )}

      {/* ゴール */}
      <div
        className="goal"
        style={{
          width: cellSize - 4,
          height: cellSize - 4,
          left: goal.x * cellSize + 2,
          top: goal.y * cellSize + 2,
        }}
      ></div>

      {/* プレイヤー（アニメーション付き） */}
      <div
        className="player"
        style={{
          transform: `translate(${player.x * cellSize}px, ${player.y * cellSize}px)`,
        }}
      ></div>
    </div>
  );
}
