import { useState } from 'react';
import styles from './Riddle1.module.css';
import riddleImage from '../assets/riddle1.png'; // 謎の画像

export default function Riddle1({ onCorrect }) {
  const [answer, setAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === '答え') {
      setFeedback('正解！🎉');
      onCorrect();
    } else {
      setFeedback('不正解…もう一度試してみてください。');
    }
  };

  return (
    <div className={styles.card}>
      <h2>Riddle 1</h2>
      <img src={riddleImage} alt="Riddle" className={styles.image} />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="答えを入力"
        />
        <button type="submit">回答</button>
      </form>
      <p className={styles.feedback}>{feedback}</p>
    </div>
  );
}
