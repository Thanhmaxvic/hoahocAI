import { useState } from 'react'
import { exams } from '../data/exams'

function ExamTab() {
  const [activeExamId, setActiveExamId] = useState(exams[0].id)
  const [filterType, setFilterType] = useState('all') // 'all', 'trac_nghiem', 'tu_luan'
  
  // Lọc đề thi theo loại
  const filteredExams = exams.filter(e => {
    if (filterType === 'all') return true
    if (filterType === 'trac_nghiem') return e.multipleChoice !== undefined
    if (filterType === 'tu_luan') return e.essay !== undefined
    return true
  })

  // Tìm đề thi hiện hành
  const activeExam = exams.find(e => e.id === activeExamId) || exams[0]

  const pickRandom = () => {
    if (filteredExams.length === 0) return
    const randomIdx = Math.floor(Math.random() * filteredExams.length)
    setActiveExamId(filteredExams[randomIdx].id)
  }

  return (
    <div id="exam" className="tab-content active">
      <div className="exam-container">
        {/* Exam Hero */}
        <div className="exam-hero">
          <div className="exam-hero-content">
            <h2 className="exam-hero-title">
              <i className="fas fa-file-lines"></i>
              Đề kiểm tra &amp; Đáp án
            </h2>
            <p className="exam-hero-desc">Luyện đề kiểm tra đánh giá năng lực tích hợp hệ thống chấm tự động, có đáp án chi tiết.</p>
          </div>
          
          {/* Controls Bar */}
          <div className="exam-controls" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="filter-group" style={{ background: 'var(--surface-color)', padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}><i className="fas fa-filter"></i> Dạng đề:</label>
              <select 
                value={filterType} 
                onChange={e => {
                  setFilterType(e.target.value)
                  // Reset active if hidden by filter
                  const newFiltered = exams.filter(ex => {
                    const f = e.target.value
                    if (f === 'all') return true
                    if (f === 'trac_nghiem') return ex.multipleChoice !== undefined
                    if (f === 'tu_luan') return ex.essay !== undefined
                    return true
                  })
                  if (newFiltered.length > 0 && !newFiltered.find(ex => ex.id === activeExamId)) {
                    setActiveExamId(newFiltered[0].id)
                  }
                }}
                style={{ border: 'none', background: 'transparent', color: 'var(--text-color)', fontWeight: 600, outline: 'none', cursor: 'pointer' }}
              >
                <option value="all">Tất cả đề</option>
                <option value="trac_nghiem">Có Trắc nghiệm</option>
                <option value="tu_luan">Có Tự luận</option>
              </select>
            </div>

            <button onClick={pickRandom} className="exam-tab-btn" style={{ margin: 0, padding: '0.5rem 1rem', background: 'linear-gradient(45deg, #10b981, #059669)', color: 'white', border: 'none' }}>
              <i className="fas fa-dice"></i> Chọn ngẫu nhiên
            </button>
          </div>
        </div>

        {/* Danh sách đề Menu Ngang */}
        <div className="exam-tabs" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {filteredExams.map(ex => (
            <button 
              key={ex.id}
              className={`exam-tab-btn ${activeExamId === ex.id ? 'active' : ''}`} 
              onClick={() => setActiveExamId(ex.id)}
            >
              <i className={`fas ${ex.icon || 'fa-file-alt'}`}></i> {ex.title}
            </button>
          ))}
          {filteredExams.length === 0 && (
            <div style={{ color: 'var(--text-muted)', padding: '1rem' }}>Không tìm thấy đề phù hợp với bộ lọc.</div>
          )}
        </div>

        {/* Rendere Đề Thi Tự Động */}
        <ExamRenderer key={activeExamId} exam={activeExam} />

      </div>
    </div>
  )
}

function ExamRenderer({ exam }) {
  const [examAnswers, setExamAnswers] = useState({})
  const [examSubmitted, setExamSubmitted] = useState(false)
  const [answerVisible, setAnswerVisible] = useState(false)

  const selectAnswer = (qId, optIdx) => {
    if (examSubmitted) return
    setExamAnswers(prev => ({ ...prev, [qId]: optIdx }))
  }

  const submitExam = () => {
    setExamSubmitted(true)
  }

  const resetExam = () => {
    setExamAnswers({})
    setExamSubmitted(false)
    setAnswerVisible(false) // hidden upon try again
  }

  const getExamScore = () => {
    let correct = 0
    if (exam.multipleChoice) {
      exam.multipleChoice.questions.forEach(q => {
        if (examAnswers[q.id] === q.correct) correct++
      })
    }
    return correct
  }

  if (!exam) return null

  return (
    <div className="exam-paper active animate-fade-in" style={{ animation: 'fadeIn 0.3s ease' }}>
      <div className="exam-info-bar">
        <div className="exam-info-item"><i className="fas fa-clock"></i> Thời gian: <strong>{exam.duration} phút</strong></div>
        <div className="exam-info-item"><i className="fas fa-list-ol"></i> Nội dung: <strong>{exam.summary}</strong></div>
        <div className="exam-info-item"><i className="fas fa-star"></i> Tổng điểm: <strong>{exam.totalPoints} điểm</strong></div>
      </div>

      {/* Trắc nghiệm Scoring Bar */}
      {examSubmitted && exam.multipleChoice && (
        <div className="exam-score-bar">
          <div className="exam-score-content">
            <i className="fas fa-trophy" style={{ color: '#f59e0b', fontSize: '1.5rem' }}></i>
            <div>
              <strong>Kết quả phần trắc nghiệm:</strong> {getExamScore()}/{exam.multipleChoice.questions.length} câu đúng
              <span style={{ marginLeft: '1rem', color: 'var(--emerald-500)', fontWeight: 700 }}>
                ({(getExamScore() * exam.multipleChoice.pointPerQuestion).toFixed(2)} / {exam.multipleChoice.points} điểm)
              </span>
            </div>
            <button onClick={resetExam} className="btn-reset" style={{ marginLeft: 'auto' }}>
              <i className="fas fa-arrow-rotate-right"></i> Làm lại
            </button>
          </div>
        </div>
      )}

      {/* RENDER MULTIPLE CHOICE */}
      {exam.multipleChoice && (
        <div className="exam-section-card">
          <div className="exam-section-header">
            <h3>{exam.multipleChoice.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: exam.multipleChoice.instruction }}></p>
          </div>
          <div className="exam-questions">
            {exam.multipleChoice.questions.map((q, idx) => {
              const selected = examAnswers[q.id]
              const isAnswered = selected !== undefined

              return (
                <div className={`exam-q-card ${examSubmitted && isAnswered ? (selected === q.correct ? 'answered-correct' : 'answered-wrong') : ''}`} key={q.id}>
                  <div className="exam-q-num">Câu {idx + 1}</div>
                  <p className="exam-q-text" dangerouslySetInnerHTML={{ __html: q.text }}></p>
                  <div className="exam-q-options">
                    {q.options.map((opt, i) => {
                      let optClass = 'exam-q-option exam-q-option-btn'
                      if (isAnswered && selected === i && !examSubmitted) optClass += ' selected'
                      if (examSubmitted) {
                        if (i === q.correct) optClass += ' correct'
                        else if (i === selected && i !== q.correct) optClass += ' wrong'
                      }

                      return (
                        <button key={i} className={optClass} onClick={() => selectAnswer(q.id, i)} disabled={examSubmitted}>
                          <span className={`exam-q-letter ${isAnswered && selected === i && !examSubmitted ? 'selected' : ''} ${examSubmitted && i === q.correct ? 'correct' : ''} ${examSubmitted && i === selected && i !== q.correct ? 'wrong' : ''}`}>
                            {String.fromCharCode(65 + i)}
                          </span>
                          <span dangerouslySetInnerHTML={{ __html: opt }}></span>
                          {examSubmitted && i === q.correct && <i className="fas fa-check-circle" style={{ color: 'var(--emerald-500)', marginLeft: 'auto' }}></i>}
                          {examSubmitted && i === selected && i !== q.correct && <i className="fas fa-times-circle" style={{ color: '#ef4444', marginLeft: 'auto' }}></i>}
                        </button>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* VĂN BẢN TRÊN NÚT NỘP BÀI */}
      {exam.multipleChoice && !examSubmitted && (
         <button className="btn-toggle-answer" onClick={submitExam} style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', color: 'white' }}>
          <i className="fas fa-paper-plane"></i> Nộp bài trắc nghiệm ({Object.keys(examAnswers).length}/{exam.multipleChoice.questions.length} câu)
        </button>
      )}

      {/* RENDER ESSAY */}
      {exam.essay && (
        <div className="exam-section-card">
          <div className="exam-section-header">
            <h3>{exam.essay.title}</h3>
            {exam.essay.subtitle && <p>{exam.essay.subtitle}</p>}
          </div>
          <div className="exam-essay">
            {exam.essay.questions.map((q) => (
              <div className="essay-question" key={q.id}>
                <h4>{q.title}</h4>
                <div dangerouslySetInnerHTML={{ __html: q.content }}></div>
                
                {/* Khu vực nhập liệu tự luận */}
                <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                  <textarea 
                    placeholder="Nhập phần trình bày tự luận của bạn vào đây..." 
                    style={{ 
                      width: '100%', 
                      minHeight: '120px', 
                      padding: '1rem', 
                      borderRadius: 'var(--radius-md)', 
                      border: '1px solid var(--border-color)', 
                      outline: 'none', 
                      fontFamily: 'inherit',
                      fontSize: '0.95rem',
                      resize: 'vertical',
                      background: 'var(--bg-card)',
                      color: 'var(--text-main)'
                    }}
                  ></textarea>
                  
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <button style={{ padding: '0.5rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 600, transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.borderColor='var(--primary)'} onMouseOut={e=>e.currentTarget.style.borderColor='var(--border-color)'}>
                      <i className="fas fa-image" style={{color: 'var(--primary)'}}></i> Đính kèm ảnh
                    </button>
                    <button style={{ padding: '0.5rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 600, transition: 'all 0.2s' }} onMouseOver={e=>e.currentTarget.style.borderColor='var(--blue-500)'} onMouseOut={e=>e.currentTarget.style.borderColor='var(--border-color)'}>
                      <i className="fas fa-file-word" style={{color: 'var(--blue-500)'}}></i> Nộp File (.docx, .pdf)
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ĐÁP ÁN & HƯỚNG DẪN CHẤM */}
      <button
        className={`btn-toggle-answer ${answerVisible ? 'answer-visible' : ''}`}
        onClick={() => setAnswerVisible(!answerVisible)}
        style={{ marginTop: '2rem' }}
      >
        <i className={`fas ${answerVisible ? 'fa-eye-slash' : 'fa-key'}`}></i>
        {answerVisible ? 'Ẩn Đáp án' : 'Xem Đáp án & Hướng dẫn chấm'}
      </button>

      {answerVisible && (
        <div className="exam-answer-section" style={{ marginTop: '1.5rem', display: 'block' }}>
          <div className="answer-header">
            <h3><i className="fas fa-check-double"></i> ĐÁP ÁN &amp; HƯỚNG DẪN CHẤM</h3>
          </div>
          
          {/* Đáp án Trắc nghiệm Grid */}
          {exam.multipleChoice && (
            <div className="answer-block">
              <h4><i className="fas fa-table"></i> Phần Trắc nghiệm</h4>
              <div className="answer-grid">
                {exam.multipleChoice.questions.map((q, idx) => (
                   <div className="answer-cell" key={q.id}>
                     <span className="answer-q-num">{idx + 1}</span>
                     <span className="answer-key">{String.fromCharCode(65 + q.correct)}</span>
                   </div>
                ))}
              </div>
            </div>
          )}

          {/* Đáp án Tự luận Rubric */}
          {exam.rubric && exam.rubric.length > 0 && (
            <div className="answer-block">
              <h4><i className="fas fa-pen-ruler"></i> Hướng dẫn chấm</h4>
              {exam.rubric.map(rb => (
                <div className="rubric-card" key={rb.title}>
                  <div className="rubric-header">{rb.title}</div>
                  <table className="rubric-table">
                    <thead><tr><th>Ý</th><th>Nội dung</th><th>Điểm</th></tr></thead>
                    <tbody>
                      {rb.rows.map((row, i) => (
                        <tr key={i}>
                          <td>{row.label}</td>
                          <td dangerouslySetInnerHTML={{ __html: row.content }}></td>
                          <td><strong>{row.score}</strong></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ))}
              
              {exam.gradingNotes && exam.gradingNotes.length > 0 && (
                <div className="grading-notes">
                  <h5><i className="fas fa-info-circle"></i> Lưu ý khi chấm:</h5>
                  <ul>
                    {exam.gradingNotes.map((note, i) => <li key={i}>{note}</li>)}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ExamTab
