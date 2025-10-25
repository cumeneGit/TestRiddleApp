import { useState } from 'react';
import './App.css';
import TabBar from './components/TabBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Riddle1 from './pages/Riddle1';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  const handleRiddle1Correct = () => {
    setActiveTab('about'); // 正解したら About へ
  };

  return (
    <div className="app-container">
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="tab-content">
        {activeTab === 'home' && <Home />}
        {activeTab === 'about' && <About />}
        {activeTab === 'contact' && <Contact />}
        {activeTab === 'riddle1' && <Riddle1 onCorrect={handleRiddle1Correct} />}
      </div>
    </div>
  );
}

export default App;
