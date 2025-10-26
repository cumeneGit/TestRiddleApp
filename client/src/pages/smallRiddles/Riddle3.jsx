import { useState } from "react";
import Board from "../../components/Board";
import ControlPad from "../../components/ControlPad";
import "./Riddle3.css";

export default function Riddle3({ onCorrect }) {
  const [player1, setPlayer1] = useState({ x: 0, y: 0 });
  const [player2, setPlayer2] = useState({ x: 4, y: 4 });
  const [message, setMessage] = useState("駒を動かしてみよう！");

  // 駒の移動
  const move = (dx, dy) => {
    setPlayer1((p) => ({
      x: Math.max(0, Math.min(4, p.x + dx)),
      y: Math.max(0, Math.min(4, p.y + dy)),
    }));
    setPlayer2((p) => ({
      x: Math.max(0, Math.min(4, p.x + dx)),
      y: Math.max(0, Math.min(4, p.y + dy)),
    }));
  };

  // 正解チェック
  const handleCheck = () => {
    if (player1.x === player2.x && player1.y === player2.y) {
      setMessage("🎉 正解！2つの駒が出会った！");
      onCorrect?.();
    } else {
      setMessage("まだ出会っていない…");
    }
  };

  return (
    <div className="riddle3-container">
      <h2>Riddle 3: ふたりの駒を動かせ！</h2>
      <Board player1={player1} player2={player2} />
      <ControlPad onMove={move} />
      <button className="check-btn" onClick={handleCheck}>
        正解チェック
      </button>
      <p>{message}</p>
    </div>
  );
}
