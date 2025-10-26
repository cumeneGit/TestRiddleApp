import { useState } from 'react';
import './App.css';
import TabBar from './components/TabBar';

// ページ読み込み
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import * as Riddles from './pages/smallRiddles/index'; // ← 一括インポート

function App() {
  const [activeTab, setActiveTab] = useState('home');

  // 謎が正解した時に呼ばれる関数（共通）
  const handleRiddleSolved = (nextTab) => {
    setActiveTab(nextTab);
  };

  // 表示切替
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'riddle1':
        return <Riddles.Riddle1 onCorrect={() => handleRiddleSolved('riddle2')} />;
      case 'riddle2':
        return <Riddles.Riddle2 onCorrect={() => handleRiddleSolved('riddle3')} />;
      case 'riddle3':
        return <Riddles.Riddle3 onCorrect={() => handleRiddleSolved('about')} />;
      case 'riddle4':
        return <Riddles.Riddle4 onCorrect={() => handleRiddleSolved('riddle5')} />;
      case 'riddle5':
        return <Riddles.Riddle5 onCorrect={() => handleRiddleSolved('riddle6')} />;
      case 'riddle6':
        return <Riddles.Riddle6 onCorrect={() => handleRiddleSolved('riddle7')} />;
      case 'riddle7':
        return <Riddles.Riddle7 onCorrect={() => handleRiddleSolved('riddle8')} />;
      case 'riddle8':
        return <Riddles.Riddle8 onCorrect={() => handleRiddleSolved('riddle9')} />;
      case 'riddle9':
        return <Riddles.Riddle9 onCorrect={() => handleRiddleSolved('riddle10')} />;
      case 'riddle10':
        return <Riddles.Riddle10 onCorrect={() => handleRiddleSolved('about')} />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="tab-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
