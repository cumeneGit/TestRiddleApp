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
    </nav>
  );
}
