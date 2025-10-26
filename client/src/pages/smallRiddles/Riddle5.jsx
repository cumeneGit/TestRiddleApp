import { useState } from "react";
import BoardWithWalls from "../../components/BoardWithWalls";
import ControlPad from "../../components/ControlPad";

export default function Riddle5({ onCorrect }) {
  const [player1, setPlayer1] = useState({ x: 0, y: 0 });
  const [player2, setPlayer2] = useState({ x: 4, y: 4 });
  const [message, setMessage] = useState("駒を動かしてゴールを目指そう！");

  // 壁の配置例（trueなら壁あり）
  const verticalWalls = [
    [false,true,false,false,false],
    [false,false,true,false,false],
    [true,false,false,true,false],
    [false,false,true,false,true],
    [false,false,false,false,false]
  ];

  const horizontalWalls = [
    [false,true,false,false,false],
    [false,false,false,true,false],
    [true,false,true,false,false],
    [false,false,false,false,true],
    [false,false,false,false,false]
  ];

  const move = (dx, dy) => {
    const tryMove = (p, dx, dy) => {
      const nx = Math.max(0, Math.min(4, p.x + dx));
      const ny = Math.max(0, Math.min(4, p.y + dy));

      // 壁チェック
      if (dx === 1 && vertical[p.y]?.[p.x]) return p; // 右壁
      if (dx === -1 && p.x > 0 && vertical[p.y]?.[p.x-1]) return p; // 左壁
      if (dy === 1 && horizontal[p.y]?.[p.x]) return p; // 下壁
      if (dy === -1 && p.y > 0 && horizontal[p.y-1]?.[p.x]) return p; // 上壁

      return { x: nx, y: ny };
    };

    setPlayer1((p) => tryMove(p, dx, dy));
    setPlayer2((p) => tryMove(p, -dx, -dy)); // 逆方向に動く
  };

  const handleCheck = () => {
    if (player1.x === player2.x && player1.y === player2.y) {
      setMessage("🎉 正解！二人の駒が出会った！");
      onCorrect?.();
    } else {
      setMessage("まだ出会っていない…");
    }
  };

  return (
    <div className="riddle5-container">
      <h2>Riddle 5: 壁を避けて駒を出会わせよう！</h2>
      <BoardWithWalls
        size={5}
        player1={player1}
        player2={player2}
        horizontal={horizontalWalls}
        vertical={verticalWalls}
      />
      <ControlPad onMove={move} />
      <button className="check-btn" onClick={handleCheck}>正解チェック</button>
      <p>{message}</p>
    </div>
  );
}
