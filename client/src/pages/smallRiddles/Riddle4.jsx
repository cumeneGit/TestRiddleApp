import { useState } from "react";
import BoardWithWalls from "../../components/BoardWithWalls";
import ControlPad from "../../components/ControlPad";
import "./Riddle4.css";

export default function Riddle4({ onCorrect }) {
  const [player1, setPlayer1] = useState({ x: 0, y: 0 });
  const [player2, setPlayer2] = useState({ x: 4, y: 4 });
  const [message, setMessage] = useState("駒を動かしてゴールを目指そう！");

  // 壁の位置
  const walls = [
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 1 },
    { x: 1, y: 3 },
  ];

  // 移動関数（壁を考慮）
  const move = (dx, dy) => {
    const tryMove = (p, dx, dy) => {
      const nx = Math.max(0, Math.min(4, p.x + dx));
      const ny = Math.max(0, Math.min(4, p.y + dy));
      if (!walls.some((w) => w.x === nx && w.y === ny)) return { x: nx, y: ny };
      return p; // 壁なら動かない
    };
    setPlayer1((p) => tryMove(p, dx, dy));
    setPlayer2((p) => tryMove(p, dx, dy)); // 逆方向に動く
  };

  const handleCheck = () => {
    if (player1.x === player2.x && player1.y === player2.y) {
      setMessage("🎉 正解！2つの駒が出会った！");
      onCorrect?.();
    } else {
      setMessage("まだ出会っていない…");
    }
  };

  return (
    <div className="riddle4-container">
      <h2>Riddle 4: 壁に注意しながら駒を動かせ！</h2>
      <BoardWithWalls player1={player1} player2={player2} walls={walls} />
      <ControlPad onMove={move} />
      <button className="check-btn" onClick={handleCheck}>
        正解チェック
      </button>
      <p>{message}</p>
    </div>
  );
}
