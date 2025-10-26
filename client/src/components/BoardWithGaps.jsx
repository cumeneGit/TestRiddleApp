import React from "react";
import "./BoardWithGaps.css";

export default function BoardWithGaps({ size = 5, player1, player2, horizontal = [], vertical = [] }) {
  return (
    <div className="board">
      {Array.from({ length: size }).map((_, y) => (
        <div className="row" key={`row-${y}`}>
          {Array.from({ length: size }).map((_, x) => {
            const isP1 = player1.x === x && player1.y === y;
            const isP2 = player2.x === x && player2.y === y;

            const rightWall = vertical[y]?.[x];   // 右に壁があるか
            const bottomWall = horizontal[y]?.[x]; // 下に壁があるか

            return (
              <div
                key={`cell-${y}-${x}`} // ★一意の key
                className={`cell ${rightWall ? "wall-right" : ""} ${
                  bottomWall ? "wall-bottom" : ""
                }`}
              >
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
