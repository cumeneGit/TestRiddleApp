import { useState } from 'react'
import RiddleLayout from '../../components/RiddleLayout'

export default function Riddle10() {
  const [result, setResult] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const answer = e.target.answer.value.trim().toLowerCase()

    if (answer === 'moonlight') {
      setResult('正解！🌕')
    } else {
      setResult('不正解…もう一度！')
    }
  }

  return (
    <>
      <RiddleLayout
        title="Riddle 10: 光を持たないのに夜を照らすものは？"
        image="/images/riddle1.png"
        onSubmit={handleSubmit}
      />
      <p>{result}</p>
    </>
  )
}