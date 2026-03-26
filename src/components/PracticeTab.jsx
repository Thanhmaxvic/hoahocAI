import { useState } from 'react'
import { questions } from '../data/questions'

const getBadgeColor = (l) => l === 'know' ? '#3b82f6' : l === 'understand' ? '#10b981' : '#f97316'
const getBadgeText = (l) => l === 'know' ? 'Nhận biết' : l === 'understand' ? 'Thông hiểu' : 'Vận dụng'

function PracticeTab({ showToast }) {
  const [diffFilter, setDiffFilter] = useState('all')
  const [topicFilter, setTopicFilter] = useState('all')
  const [quizState, setQuizState] = useState({ answered: [], correct: 0, wrong: 0 })

  let filtered = questions
  if (diffFilter !== 'all') filtered = filtered.filter(q => q.level === diffFilter)
  if (topicFilter !== 'all') filtered = filtered.filter(q => q.topic === topicFilter)

  const checkAnswer = (qid, selectedIdx) => {
    const q = questions.find(x => x.id === qid)
    const isCorrect = (selectedIdx === q.correct)

    setQuizState(prev => ({
      answered: [...prev.answered, { id: qid, selected: selectedIdx, isCorrect }],
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong: prev.wrong + (isCorrect ? 0 : 1),
    }))

    if (isCorrect) {
      showToast('Chính xác!', 'success')
    } else {
      showToast('Chưa chính xác. Xem giải thích bên dưới.', 'error')
    }
  }

  const resetQuiz = () => {
    setQuizState({ answered: [], correct: 0, wrong: 0 })
    showToast('Đã làm mới bộ câu hỏi', 'info')
  }

  return (
    <div id="practice" className="tab-content active">
      <div className="practice-container">
        {/* Quiz Header */}
        <div className="quiz-header">
          <div className="quiz-header-content">
            <h2 className="quiz-title">
              <i className="fas fa-clipboard-question"></i>
              Trắc nghiệm ôn tập
            </h2>
            <p className="quiz-desc">Luyện tập với các câu hỏi từ cơ bản đến nâng cao</p>
          </div>
          <div className="quiz-controls">
            <div className="filter-group">
              <label htmlFor="difficulty-filter"><i className="fas fa-filter"></i> Mức độ:</label>
              <select id="difficulty-filter" value={diffFilter} onChange={e => setDiffFilter(e.target.value)}>
                <option value="all">Tất cả</option>
                <option value="know">Biết</option>
                <option value="understand">Hiểu</option>
                <option value="apply">Vận dụng</option>
              </select>
            </div>
            <div className="filter-group">
              <label htmlFor="topic-filter"><i className="fas fa-book"></i> Chuyên đề:</label>
              <select id="topic-filter" value={topicFilter} onChange={e => setTopicFilter(e.target.value)}>
                <option value="all">Tất cả</option>
                <option value="cd1">CĐ1: Cấu tạo &amp; TC vật lí</option>
                <option value="cd2">CĐ2: Tính chất hóa học</option>
                <option value="cd3">CĐ3: Tách kim loại</option>
                <option value="cd4">CĐ4: Hợp kim &amp; Ăn mòn</option>
              </select>
            </div>
            <button onClick={resetQuiz} className="btn-reset" title="Làm lại">
              <i className="fas fa-arrow-rotate-right"></i>
              Làm lại
            </button>
          </div>
        </div>

        {/* Score Display */}
        <div className="score-display" id="score-display">
          <div className="score-item score-correct">
            <i className="fas fa-circle-check"></i>
            <span id="correct-count">{quizState.correct}</span> Đúng
          </div>
          <div className="score-item score-wrong">
            <i className="fas fa-circle-xmark"></i>
            <span id="wrong-count">{quizState.wrong}</span> Sai
          </div>
          <div className="score-item score-total">
            <i className="fas fa-list-ol"></i>
            <span id="answered-count">{quizState.answered.length}</span> / <span id="total-count">{filtered.length}</span>
          </div>
        </div>

        {/* Quiz Container */}
        <div id="quiz-container" className="quiz-container">
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>
              <i className="fas fa-box-open" style={{ fontSize: '3rem', marginBottom: '1rem', opacity: 0.5 }}></i>
              <p>Không có câu hỏi nào phù hợp với bộ lọc.</p>
            </div>
          ) : (
            filtered.map((q, idx) => {
              const isAnswered = quizState.answered.find(a => a.id === q.id)
              let cardClass = 'quiz-card'
              if (isAnswered) {
                cardClass += isAnswered.isCorrect ? ' answered-correct' : ' answered-wrong'
              }

              return (
                <div className={cardClass} id={`quiz-card-${q.id}`} key={q.id}>
                  <div className="quiz-meta">
                    <span className="quiz-num">Câu {idx + 1}</span>
                    <span className="quiz-level" style={{ background: `${getBadgeColor(q.level)}20`, color: getBadgeColor(q.level) }}>
                      {getBadgeText(q.level)}
                    </span>
                  </div>
                  <p className="quiz-question">{q.text}</p>
                  <div className="quiz-options">
                    {q.options.map((opt, i) => {
                      let btnClass = 'quiz-option'
                      let icon = ''
                      const disabled = !!isAnswered

                      if (isAnswered) {
                        if (i === q.correct) {
                          btnClass += ' correct'
                          icon = <i className="fas fa-check-circle option-icon"></i>
                        } else if (i === isAnswered.selected) {
                          btnClass += ' wrong'
                          icon = <i className="fas fa-times-circle option-icon"></i>
                        }
                      }

                      return (
                        <button
                          key={i}
                          className={btnClass}
                          disabled={disabled}
                          onClick={() => checkAnswer(q.id, i)}
                          id={`opt-${q.id}-${i}`}
                        >
                          <span><b>{String.fromCharCode(65 + i)}.</b> {opt}</span>
                          {icon}
                        </button>
                      )
                    })}
                  </div>
                  <div className={`quiz-explanation ${isAnswered ? 'show' : ''}`} id={`exp-${q.id}`}>
                    <h5><i className="fas fa-lightbulb"></i> Giải thích chi tiết</h5>
                    <p>{q.exp}</p>
                  </div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default PracticeTab
