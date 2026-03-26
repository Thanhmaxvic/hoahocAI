function Navbar({ activeTab, switchTab, theme, toggleTheme }) {
  const tabs = [
    { id: 'theory', icon: 'fa-book-open', label: 'Lý thuyết' },
    { id: 'practice', icon: 'fa-pen-to-square', label: 'Luyện tập' },
    { id: 'exam', icon: 'fa-file-lines', label: 'Đề kiểm tra' },
    { id: 'ai-tutor', icon: 'fa-robot', label: 'Gia sư AI' },
  ]

  return (
    <nav className="main-nav" id="main-nav">
      <div className="nav-container">
        <div className="nav-brand">
          <div className="brand-icon">
            <i className="fas fa-atom"></i>
          </div>
          <div className="brand-text">
            <span className="brand-title">Hóa Học 12</span>
            <span className="brand-subtitle">Kết nối tri thức</span>
          </div>
        </div>
        <div className="nav-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
              id={`btn-${tab.id}`}
            >
              <i className={`fas ${tab.icon}`}></i>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="nav-actions">
          <button className="theme-toggle" id="theme-toggle" onClick={toggleTheme} title="Chuyển chế độ sáng/tối">
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`} id="theme-icon"></i>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
