export default function ControlPad({ onMove }) {
  return (
    <div className="control-pad">
      <div><button onClick={() => onMove(0, -1)}>↑</button></div>
      <div>
        <button onClick={() => onMove(-1, 0)}>←</button>
        <button onClick={() => onMove(1, 0)}>→</button>
      </div>
      <div><button onClick={() => onMove(0, 1)}>↓</button></div>
    </div>
  )
}
