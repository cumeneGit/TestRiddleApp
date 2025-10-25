import { useState, useEffect } from 'react';
import styles from './Home.module.css';

export default function Home() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://testriddleapp-server.onrender.com/api/hello')
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className={styles.card}>
      <h1>Vite + React</h1>
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
      <p>Message from server: {message}</p>
    </div>
  );
}
