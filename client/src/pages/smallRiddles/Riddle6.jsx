import { useState } from 'react'
import RiddleLayout from '../../components/RiddleLayout'
import riddleImage from '../../assets/smallRiddles/riddle1.png'  

export default function Riddle6() {
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
        title="Riddle 6: 光を持たないのに夜を照らすものは？"
        image={riddleImage}
        onSubmit={handleSubmit}
      />
      <p>{result}</p>
    </>
  )
}