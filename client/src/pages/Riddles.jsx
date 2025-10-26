import { Link } from 'react-router-dom'

export default function Riddles() {
  const riddles = Array.from({ length: 10 }, (_, i) => i + 1)

  return (
    <div>
      <h1>小謎一覧</h1>
      <ul>
        {riddles.map(num => (
          <li key={num}>
            <Link to={`/riddle/${num}`}>Riddle {num}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
