import { useState, useCallback } from 'react'
import Navbar from './components/Navbar'
import TheoryTab from './components/TheoryTab'
import PracticeTab from './components/PracticeTab'
import ExamTab from './components/ExamTab'
import AiTutorTab from './components/AiTutorTab'
import LoadingModal from './components/LoadingModal'
import Toast from './components/Toast'

function App() {
  const [activeTab, setActiveTab] = useState('theory')
  const [theme, setTheme] = useState('light')
  const [loading, setLoading] = useState(false)
  const [toasts, setToasts] = useState([])

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      document.body.setAttribute('data-theme', next)
      return next
    })
  }, [])

  const showToast = useCallback((message, type = 'info') => {
    const id = Date.now()
    setToasts(prev => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id))
    }, 3000)
  }, [])

  const switchTab = useCallback((tabId) => {
    setActiveTab(tabId)
    if (tabId !== 'theory') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <div className="bg-particles" id="bg-particles"></div>
      
      <Navbar 
        activeTab={activeTab} 
        switchTab={switchTab} 
        theme={theme} 
        toggleTheme={toggleTheme} 
      />

      <div className="progress-bar-container" id="progress-bar-container" style={{ display: activeTab === 'theory' ? 'block' : 'none' }}>
        <div className="progress-bar" id="progress-bar"></div>
      </div>

      <main className="main-content">
        {activeTab === 'theory' && <TheoryTab />}
        {activeTab === 'practice' && <PracticeTab showToast={showToast} />}
        {activeTab === 'exam' && <ExamTab />}
        {activeTab === 'ai-tutor' && <AiTutorTab showToast={showToast} setLoading={setLoading} />}
      </main>

      <ScrollTopButton />
      <LoadingModal visible={loading} />
      <Toast toasts={toasts} />
    </>
  )
}

function ScrollTopButton() {
  const [visible, setVisible] = useState(false)
  
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setVisible(window.scrollY > 300)
    })
  }

  return (
    <button 
      className={`scroll-top ${visible ? 'visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="fas fa-chevron-up"></i>
    </button>
  )
}

export default App
