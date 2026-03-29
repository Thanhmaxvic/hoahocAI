import { useState } from 'react'
import { questions } from '../data/questions'

const getBadgeColor = (l) => l === 'know' ? '#3b82f6' : l === 'understand' ? '#10b981' : '#f97316'
const getBadgeText = (l) => l === 'know' ? 'Nhận biết' : l === 'understand' ? 'Thông hiểu' : 'Vận dụng'
const getTypeColor = (t) => t === 'multipleChoice' ? '#8b5cf6' : t === 'trueFalse' ? '#06b6d4' : '#ec4899'
const getTypeText = (t) => t === 'multipleChoice' ? 'Trắc nghiệm' : t === 'trueFalse' ? 'Đúng/Sai' : 'Trả lời ngắn'
const getTypeIcon = (t) => t === 'multipleChoice' ? 'fa-list-ul' : t === 'trueFalse' ? 'fa-check-double' : 'fa-pen'

function PracticeTab({ showToast }) {
  const [diffFilter, setDiffFilter] = useState('all')
  const [topicFilter, setTopicFilter] = useState('all')
  const [typeFilter, setTypeFilter] = useState('all')
  const [quizState, setQuizState] = useState({ answered: [], correct: 0, wrong: 0 })
  const [tfAnswers, setTfAnswers] = useState({}) // { qId: { a: true/false, b: ... } }
  const [tfSubmitted, setTfSubmitted] = useState({}) // { qId: true }
  const [saAnswers, setSaAnswers] = useState({}) // { qId: 'text' }
  const [saSubmitted, setSaSubmitted] = useState({}) // { qId: true }

  let filtered = questions
  if (diffFilter !== 'all') filtered = filtered.filter(q => q.level === diffFilter)
  if (topicFilter !== 'all') filtered = filtered.filter(q => q.topic === topicFilter)
  if (typeFilter !== 'all') filtered = filtered.filter(q => q.type === typeFilter)

  // Multiple Choice handler
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

  // True/False handlers
  const handleTfAnswer = (qId, stmtId, value) => {
    if (tfSubmitted[qId]) return
    setTfAnswers(prev => ({
      ...prev,
      [qId]: { ...prev[qId], [stmtId]: value }
    }))
  }

  const submitTf = (q) => {
    const answers = tfAnswers[q.id] || {}
    const statementsCount = q.statements.length
    const answeredCount = Object.keys(answers).length
    if (answeredCount < statementsCount) {
      showToast('Hãy trả lời tất cả các phát biểu trước khi nộp.', 'error')
      return
    }
    let correctCount = 0
    q.statements.forEach(s => {
      if (answers[s.id] === s.correct) correctCount++
    })
    setTfSubmitted(prev => ({ ...prev, [q.id]: true }))

    const tfCorrectForOverall = correctCount === statementsCount
    setQuizState(prev => ({
      answered: [...prev.answered, { id: q.id, isCorrect: tfCorrectForOverall }],
      correct: prev.correct + (tfCorrectForOverall ? 1 : 0),
      wrong: prev.wrong + (tfCorrectForOverall ? 0 : 1),
    }))

    if (correctCount === statementsCount) {
      showToast(`Xuất sắc! Đúng ${correctCount}/${statementsCount} phát biểu!`, 'success')
    } else {
      showToast(`Đúng ${correctCount}/${statementsCount} phát biểu. Xem giải thích bên dưới.`, 'error')
    }
  }

  // Short Answer handlers
  const handleSaChange = (qId, value) => {
    if (saSubmitted[qId]) return
    setSaAnswers(prev => ({ ...prev, [qId]: value }))
  }

  const submitSa = (q) => {
    const answer = (saAnswers[q.id] || '').trim()
    if (!answer) {
      showToast('Hãy nhập đáp án trước khi nộp.', 'error')
      return
    }
    const isCorrect = q.acceptedAnswers.some(a => a.toLowerCase() === answer.toLowerCase())
    setSaSubmitted(prev => ({ ...prev, [q.id]: true }))
    setQuizState(prev => ({
      answered: [...prev.answered, { id: q.id, isCorrect }],
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
    setTfAnswers({})
    setTfSubmitted({})
    setSaAnswers({})
    setSaSubmitted({})
    showToast('Đã làm mới bộ câu hỏi', 'info')
  }

  const isAnswered = (qId) => quizState.answered.find(a => a.id === qId)

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
            <p className="quiz-desc">Luyện tập với 3 dạng câu hỏi: Trắc nghiệm, Đúng/Sai và Trả lời ngắn</p>
          </div>
          <div className="quiz-controls">
            <div className="filter-group">
              <label htmlFor="type-filter"><i className="fas fa-shapes"></i> Dạng:</label>
              <select id="type-filter" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
                <option value="all">Tất cả</option>
                <option value="multipleChoice">Trắc nghiệm</option>
                <option value="trueFalse">Đúng/Sai</option>
                <option value="shortAnswer">Trả lời ngắn</option>
              </select>
            </div>
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
              if (q.type === 'trueFalse') {
                return <TrueFalseCard key={q.id} q={q} idx={idx} tfAnswers={tfAnswers} tfSubmitted={tfSubmitted} handleTfAnswer={handleTfAnswer} submitTf={submitTf} isAnswered={isAnswered} />
              } else if (q.type === 'shortAnswer') {
                return <ShortAnswerCard key={q.id} q={q} idx={idx} saAnswers={saAnswers} saSubmitted={saSubmitted} handleSaChange={handleSaChange} submitSa={submitSa} isAnswered={isAnswered} />
              } else {
                return <MultipleChoiceCard key={q.id} q={q} idx={idx} quizState={quizState} checkAnswer={checkAnswer} />
              }
            })
          )}
        </div>
      </div>
    </div>
  )
}

// ============== Multiple Choice Card ==============
function MultipleChoiceCard({ q, idx, quizState, checkAnswer }) {
  const answered = quizState.answered.find(a => a.id === q.id)
  let cardClass = 'quiz-card'
  if (answered) {
    cardClass += answered.isCorrect ? ' answered-correct' : ' answered-wrong'
  }

  return (
    <div className={cardClass} id={`quiz-card-${q.id}`}>
      <div className="quiz-meta">
        <span className="quiz-num">Câu {idx + 1}</span>
        <span className="quiz-type-badge" style={{ background: `${getTypeColor(q.type)}15`, color: getTypeColor(q.type) }}>
          <i className={`fas ${getTypeIcon(q.type)}`}></i> {getTypeText(q.type)}
        </span>
        <span className="quiz-level" style={{ background: `${getBadgeColor(q.level)}20`, color: getBadgeColor(q.level) }}>
          {getBadgeText(q.level)}
        </span>
      </div>
      <p className="quiz-question">{q.text}</p>
      <div className="quiz-options">
        {q.options.map((opt, i) => {
          let btnClass = 'quiz-option'
          let icon = ''
          const disabled = !!answered

          if (answered) {
            if (i === q.correct) {
              btnClass += ' correct'
              icon = <i className="fas fa-check-circle option-icon"></i>
            } else if (i === answered.selected) {
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
      <div className={`quiz-explanation ${answered ? 'show' : ''}`} id={`exp-${q.id}`}>
        <h5><i className="fas fa-lightbulb"></i> Giải thích chi tiết</h5>
        <p>{q.exp}</p>
      </div>
    </div>
  )
}

// ============== True/False Card ==============
function TrueFalseCard({ q, idx, tfAnswers, tfSubmitted, handleTfAnswer, submitTf, isAnswered }) {
  const submitted = tfSubmitted[q.id]
  const answers = tfAnswers[q.id] || {}
  const qAnswered = isAnswered(q.id)

  let correctCount = 0
  if (submitted) {
    q.statements.forEach(s => {
      if (answers[s.id] === s.correct) correctCount++
    })
  }

  let cardClass = 'quiz-card'
  if (submitted) {
    cardClass += correctCount === q.statements.length ? ' answered-correct' : ' answered-wrong'
  }

  return (
    <div className={cardClass} id={`quiz-card-${q.id}`}>
      <div className="quiz-meta">
        <span className="quiz-num">Câu {idx + 1}</span>
        <span className="quiz-type-badge" style={{ background: `${getTypeColor(q.type)}15`, color: getTypeColor(q.type) }}>
          <i className={`fas ${getTypeIcon(q.type)}`}></i> {getTypeText(q.type)}
        </span>
        <span className="quiz-level" style={{ background: `${getBadgeColor(q.level)}20`, color: getBadgeColor(q.level) }}>
          {getBadgeText(q.level)}
        </span>
      </div>
      <p className="quiz-question">{q.text}</p>

      <div className="tf-statements">
        {q.statements.map((s) => {
          const userAnswer = answers[s.id]
          const isSubmitted = submitted
          let stmtClass = 'tf-statement'
          if (isSubmitted) {
            if (userAnswer === s.correct) {
              stmtClass += ' tf-correct'
            } else {
              stmtClass += ' tf-wrong'
            }
          }

          return (
            <div className={stmtClass} key={s.id}>
              <span className="tf-label">{s.id})</span>
              <span className="tf-text">{s.text}</span>
              <div className="tf-buttons">
                <button
                  className={`tf-btn tf-btn-true ${userAnswer === true ? 'selected' : ''} ${isSubmitted && s.correct === true ? 'correct-answer' : ''}`}
                  onClick={() => handleTfAnswer(q.id, s.id, true)}
                  disabled={isSubmitted}
                >
                  <i className="fas fa-check"></i> Đúng
                </button>
                <button
                  className={`tf-btn tf-btn-false ${userAnswer === false ? 'selected' : ''} ${isSubmitted && s.correct === false ? 'correct-answer' : ''}`}
                  onClick={() => handleTfAnswer(q.id, s.id, false)}
                  disabled={isSubmitted}
                >
                  <i className="fas fa-times"></i> Sai
                </button>
              </div>
              {isSubmitted && (
                <span className="tf-result-icon">
                  {userAnswer === s.correct
                    ? <i className="fas fa-check-circle" style={{ color: 'var(--emerald-500)' }}></i>
                    : <i className="fas fa-times-circle" style={{ color: '#ef4444' }}></i>
                  }
                </span>
              )}
            </div>
          )
        })}
      </div>

      {!submitted && (
        <button className="tf-submit-btn" onClick={() => submitTf(q)}>
          <i className="fas fa-paper-plane"></i> Kiểm tra
        </button>
      )}

      {submitted && (
        <div className="tf-score-badge">
          <i className="fas fa-star"></i> Kết quả: {correctCount}/{q.statements.length} phát biểu đúng
          {correctCount === q.statements.length && <span className="tf-perfect"> — Hoàn hảo!</span>}
        </div>
      )}

      <div className={`quiz-explanation ${submitted ? 'show' : ''}`} id={`exp-${q.id}`}>
        <h5><i className="fas fa-lightbulb"></i> Giải thích chi tiết</h5>
        <p>{q.exp}</p>
      </div>
    </div>
  )
}

// ============== Short Answer Card ==============
function ShortAnswerCard({ q, idx, saAnswers, saSubmitted, handleSaChange, submitSa, isAnswered }) {
  const submitted = saSubmitted[q.id]
  const answer = saAnswers[q.id] || ''
  const qAnswered = isAnswered(q.id)
  const isCorrect = submitted && q.acceptedAnswers.some(a => a.toLowerCase() === answer.trim().toLowerCase())

  let cardClass = 'quiz-card'
  if (submitted) {
    cardClass += isCorrect ? ' answered-correct' : ' answered-wrong'
  }

  return (
    <div className={cardClass} id={`quiz-card-${q.id}`}>
      <div className="quiz-meta">
        <span className="quiz-num">Câu {idx + 1}</span>
        <span className="quiz-type-badge" style={{ background: `${getTypeColor(q.type)}15`, color: getTypeColor(q.type) }}>
          <i className={`fas ${getTypeIcon(q.type)}`}></i> {getTypeText(q.type)}
        </span>
        <span className="quiz-level" style={{ background: `${getBadgeColor(q.level)}20`, color: getBadgeColor(q.level) }}>
          {getBadgeText(q.level)}
        </span>
      </div>
      <p className="quiz-question">{q.text}</p>

      <div className="sa-input-group">
        <div className="sa-input-wrapper">
          <i className="fas fa-pencil-alt sa-input-icon"></i>
          <input
            type="text"
            className={`sa-input ${submitted ? (isCorrect ? 'sa-correct' : 'sa-wrong') : ''}`}
            placeholder="Nhập đáp án của bạn..."
            value={answer}
            onChange={e => handleSaChange(q.id, e.target.value)}
            disabled={submitted}
            onKeyDown={e => { if (e.key === 'Enter' && !submitted) submitSa(q) }}
          />
          {submitted && (
            <span className="sa-result-icon">
              {isCorrect
                ? <i className="fas fa-check-circle" style={{ color: 'var(--emerald-500)' }}></i>
                : <i className="fas fa-times-circle" style={{ color: '#ef4444' }}></i>
              }
            </span>
          )}
        </div>
        {!submitted && (
          <button className="sa-submit-btn" onClick={() => submitSa(q)} disabled={!answer.trim()}>
            <i className="fas fa-paper-plane"></i> Kiểm tra
          </button>
        )}
      </div>

      {submitted && !isCorrect && (
        <div className="sa-correct-answer">
          <i className="fas fa-key"></i> Đáp án đúng: <strong>{q.correctAnswer}</strong>
        </div>
      )}

      <div className={`quiz-explanation ${submitted ? 'show' : ''}`} id={`exp-${q.id}`}>
        <h5><i className="fas fa-lightbulb"></i> Giải thích chi tiết</h5>
        <p>{q.exp}</p>
      </div>
    </div>
  )
}

export default PracticeTab
