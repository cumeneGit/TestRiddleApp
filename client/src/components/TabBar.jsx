import './TabBar.css';

export default function TabBar({ activeTab, setActiveTab }) {
  return (
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
      <button
        className={activeTab === 'riddle1' ? 'active' : ''}
        onClick={() => setActiveTab('riddle1')}
      >
        Riddle1
      </button>
      <button
        className={activeTab === 'riddle2' ? 'active' : ''}
        onClick={() => setActiveTab('riddle2')}
      >
        Riddle2
      </button>
      <button
        className={activeTab === 'riddle3' ? 'active' : ''}
        onClick={() => setActiveTab('riddle3')}
      >
        Riddle3
      </button>
      <button
        className={activeTab === 'riddle4' ? 'active' : ''}
        onClick={() => setActiveTab('riddle4')}
      >
        Riddle4
      </button>
      <button
        className={activeTab === 'riddle5' ? 'active' : ''}
        onClick={() => setActiveTab('riddle5')}
      >
        Riddle5
      </button>
      <button
        className={activeTab === 'riddle6' ? 'active' : ''}
        onClick={() => setActiveTab('riddle6')}
      >
        Riddle6
      </button>
      <button
        className={activeTab === 'riddle7' ? 'active' : ''}
        onClick={() => setActiveTab('riddle7')}
      >
        Riddle7
      </button>
      <button
        className={activeTab === 'riddle8' ? 'active' : ''}
        onClick={() => setActiveTab('riddle8')}
      >
        Riddle8
      </button>
      <button
        className={activeTab === 'riddle9' ? 'active' : ''}
        onClick={() => setActiveTab('riddle9')}
      >
        Riddle9
      </button>
      <button
        className={activeTab === 'riddle10' ? 'active' : ''}
        onClick={() => setActiveTab('riddle10')}
      >
        Riddle10
      </button>
    </nav>
  );
}
