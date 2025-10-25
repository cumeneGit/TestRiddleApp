import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  // server の API を呼ぶ
  useEffect(() => {
    if (activeTab === 'home') {
      fetch('https://testriddleapp-server.onrender.com/api/hello')
        .then(res => res.json())
        .then(data => setMessage(data.message))
        .catch(err => console.error(err));
    }
  }, [activeTab]);

  return (
    <div>
      {/* 上部タブバー */}
      <nav className="tab-bar">
        <button
          className={activeTab === 'home' ? 'active' : ''}
          onClick={() => setActiveTab('home')}
        >
          Home
        </button>
        <button
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => setActiveTab('about')}
        >
          About
        </button>
        <button
          className={activeTab === 'contact' ? 'active' : ''}
          onClick={() => setActiveTab('contact')}
        >
          Contact
        </button>
      </nav>

      {/* タブごとのコンテンツ */}
      <div className="tab-content">
        {activeTab === 'home' && (
          <div className="card">
            <h1>Vite + React</h1>
            <button onClick={() => setCount(count + 1)}>
              count is {count}
            </button>
            <p>Message from server: {message}</p>
          </div>
        )}
        {activeTab === 'about' && <div>About Content</div>}
        {activeTab === 'contact' && <div>Contact Content</div>}
      </div>
    </div>
  );
}

export default App;
