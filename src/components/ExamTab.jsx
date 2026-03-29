import { useState } from 'react'
import { exams } from '../data/exams'

function ExamTab() {
  const [activeExamId, setActiveExamId] = useState(exams[0].id)
  const [filterType, setFilterType] = useState('all')
  
  const filteredExams = exams.filter(e => {
    if (filterType === 'all') return true
    if (filterType === 'graduation') return e.type === 'graduation'
    if (filterType === 'trac_nghiem') return e.multipleChoice !== undefined && e.type !== 'graduation'
    if (filterType === 'tu_luan') return e.type === 'essay'
    return true
  })

  const activeExam = exams.find(e => e.id === activeExamId) || exams[0]

  const pickRandom = () => {
    if (filteredExams.length === 0) return
    const randomIdx = Math.floor(Math.random() * filteredExams.length)
    setActiveExamId(filteredExams[randomIdx].id)
  }

  return (
    <div id="exam" className="tab-content active">
      <div className="exam-container">
        <div className="exam-hero">
          <div className="exam-hero-content">
            <h2 className="exam-hero-title">
              <i className="fas fa-file-lines"></i>
              Đề kiểm tra &amp; Đáp án
            </h2>
            <p className="exam-hero-desc">Luyện đề kiểm tra theo cấu trúc tốt nghiệp THPT, đề tự luận, có đáp án chi tiết.</p>
          </div>
          
          <div className="exam-controls" style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <div className="filter-group" style={{ background: 'var(--surface-color)', padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid var(--border-color)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}><i className="fas fa-filter"></i> Dạng đề:</label>
              <select 
                value={filterType} 
                onChange={e => {
                  setFilterType(e.target.value)
                  const newFiltered = exams.filter(ex => {
                    const f = e.target.value
                    if (f === 'all') return true
                    if (f === 'graduation') return ex.type === 'graduation'
                    if (f === 'trac_nghiem') return ex.multipleChoice !== undefined && ex.type !== 'graduation'
                    if (f === 'tu_luan') return ex.type === 'essay'
                    return true
                  })
                  if (newFiltered.length > 0 && !newFiltered.find(ex => ex.id === activeExamId)) {
                    setActiveExamId(newFiltered[0].id)
                  }
                }}
                style={{ border: 'none', background: 'transparent', color: 'var(--text-color)', fontWeight: 600, outline: 'none', cursor: 'pointer' }}
              >
                <option value="all">Tất cả ({exams.length} đề)</option>
                <option value="graduation">Cấu trúc TN-TN ({exams.filter(e => e.type === 'graduation').length} đề)</option>
                <option value="trac_nghiem">Có Trắc nghiệm</option>
                <option value="tu_luan">Tự luận ({exams.filter(e => e.type === 'essay').length} đề)</option>
              </select>
            </div>

            <button onClick={pickRandom} className="exam-tab-btn" style={{ margin: 0, padding: '0.5rem 1rem', background: 'linear-gradient(45deg, #10b981, #059669)', color: 'white', border: 'none' }}>
              <i className="fas fa-dice"></i> Chọn ngẫu nhiên
            </button>
          </div>
        </div>

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
            <div style={{ color: 'var(--text-muted)', padding: '1rem' }}>Không tìm thấy đề phù hợp.</div>
          )}
        </div>

        <ExamRenderer key={activeExamId} exam={activeExam} />
      </div>
    </div>
  )
}

function ExamRenderer({ exam }) {
  const [examAnswers, setExamAnswers] = useState({})
  const [examSubmitted, setExamSubmitted] = useState(false)
  const [answerVisible, setAnswerVisible] = useState(false)
  const [essayAnswers, setEssayAnswers] = useState({})
  const [essayFeedback, setEssayFeedback] = useState({})
  const [tfAnswers, setTfAnswers] = useState({})
  const [saAnswers, setSaAnswers] = useState({})

  const parseMarkdown = (text) => {
    if (!text) return ''
    let parsed = text
    parsed = parsed.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    parsed = parsed.replace(/`(.*?)`/g, '<code>$1</code>')
    parsed = parsed.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    parsed = parsed.replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '<em>$1</em>')
    parsed = parsed.replace(/^### (.*$)/gm, '<h4>$1</h4>')
    parsed = parsed.replace(/^## (.*$)/gm, '<h3>$1</h3>')
    parsed = parsed.replace(/^- (.*$)/gm, '• $1')
    parsed = parsed.replace(/\n\n/g, '<br><br>')
    parsed = parsed.replace(/\n/g, '<br>')
    return parsed
  }

  const handleEssayTextChange = (qId, text) => {
    setEssayAnswers(prev => ({ ...prev, [qId]: { ...prev[qId], text } }))
  }

  const handleFileUpload = (qId, e) => {
    const file = e.target.files[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = (event) => {
      setEssayAnswers(prev => ({
        ...prev, [qId]: { ...prev[qId], files: [...(prev[qId]?.files || []), { name: file.name, type: file.type, data: event.target.result }] }
      }))
    }
    reader.readAsDataURL(file)
  }

  const removeFile = (qId, fileIdx) => {
    setEssayAnswers(prev => {
      const newFiles = [...(prev[qId]?.files || [])]
      newFiles.splice(fileIdx, 1)
      return { ...prev, [qId]: { ...prev[qId], files: newFiles } }
    })
  }

  const submitEssay = async (q) => {
    const answer = essayAnswers[q.id]
    if (!answer || (!answer.text && (!answer.files || answer.files.length === 0))) return
    setEssayFeedback(prev => ({ ...prev, [q.id]: { loading: true } }))
    try {
      const rubricText = exam.rubric ? JSON.stringify(exam.rubric) : "Chấm theo chuẩn kiến thức Hóa học 12."
      const res = await fetch('/api/grade-essay', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ questionId: q.id, questionText: q.content, studentAnswer: answer.text || "", files: answer.files || [], rubric: rubricText })
      })
      const data = await res.json()
      setEssayFeedback(prev => ({ ...prev, [q.id]: { loading: false, result: data.feedback || data.message } }))
    } catch (error) {
      setEssayFeedback(prev => ({ ...prev, [q.id]: { loading: false, error: 'Lỗi khi kết nối AI' } }))
    }
  }

  const selectAnswer = (qId, optIdx) => { if (!examSubmitted) setExamAnswers(prev => ({ ...prev, [qId]: optIdx })) }
  const handleTfAnswer = (qId, stmtId, val) => { if (!examSubmitted) setTfAnswers(prev => ({ ...prev, [qId]: { ...prev[qId], [stmtId]: val } })) }
  const handleSaAnswer = (qId, val) => { if (!examSubmitted) setSaAnswers(prev => ({ ...prev, [qId]: val })) }

  const submitExam = () => setExamSubmitted(true)
  const resetExam = () => { setExamAnswers({}); setExamSubmitted(false); setAnswerVisible(false); setTfAnswers({}); setSaAnswers({}) }

  const getExamScore = () => {
    let score = 0
    // MC score
    if (exam.multipleChoice) {
      exam.multipleChoice.questions.forEach(q => { if (examAnswers[q.id] === q.correct) score += exam.multipleChoice.pointPerQuestion })
    }
    // TF score
    if (exam.trueFalse) {
      exam.trueFalse.questions.forEach(q => {
        const ans = tfAnswers[q.id] || {}
        let correctCount = 0
        q.statements.forEach(s => { if (ans[s.id] === s.correct) correctCount++ })
        if (correctCount === 4) score += 1.0
        else if (correctCount === 3) score += 0.5
        else if (correctCount === 2) score += 0.25
        else if (correctCount === 1) score += 0.1
      })
    }
    // SA score
    if (exam.shortAnswer) {
      exam.shortAnswer.questions.forEach(q => {
        const ans = (saAnswers[q.id] || '').trim()
        if (q.acceptedAnswers.some(a => a.toLowerCase() === ans.toLowerCase())) score += exam.shortAnswer.pointPerQuestion
      })
    }
    return score
  }

  if (!exam) return null

  return (
    <div className="exam-paper active animate-fade-in" style={{ animation: 'fadeIn 0.3s ease' }}>
      <div className="exam-info-bar">
        <div className="exam-info-item"><i className="fas fa-clock"></i> Thời gian: <strong>{exam.duration} phút</strong></div>
        <div className="exam-info-item"><i className="fas fa-list-ol"></i> Nội dung: <strong>{exam.summary}</strong></div>
        <div className="exam-info-item"><i className="fas fa-star"></i> Tổng điểm: <strong>{exam.totalPoints} điểm</strong></div>
        {exam.type === 'graduation' && <div className="exam-info-item" style={{background: 'linear-gradient(135deg, #f59e0b20, #d9770620)', color: '#d97706', fontWeight: 700}}><i className="fas fa-graduation-cap"></i> Cấu trúc TN-THPT</div>}
      </div>

      {/* Scoring bar */}
      {examSubmitted && (exam.multipleChoice || exam.trueFalse || exam.shortAnswer) && (
        <div className="exam-score-bar">
          <div className="exam-score-content">
            <i className="fas fa-trophy" style={{ color: '#f59e0b', fontSize: '1.5rem' }}></i>
            <div>
              <strong>Kết quả:</strong> <span style={{ color: 'var(--emerald-500)', fontWeight: 700, fontSize: '1.1rem' }}>{getExamScore().toFixed(2)} / {exam.totalPoints} điểm</span>
            </div>
            <button onClick={resetExam} className="btn-reset" style={{ marginLeft: 'auto' }}>
              <i className="fas fa-arrow-rotate-right"></i> Làm lại
            </button>
          </div>
        </div>
      )}

      {/* MULTIPLE CHOICE SECTION */}
      {exam.multipleChoice && (
        <div className="exam-section-card">
          <div className="exam-section-header"><h3>{exam.multipleChoice.title}</h3><p dangerouslySetInnerHTML={{ __html: exam.multipleChoice.instruction }}></p></div>
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
                          <span className={`exam-q-letter ${isAnswered && selected === i && !examSubmitted ? 'selected' : ''} ${examSubmitted && i === q.correct ? 'correct' : ''} ${examSubmitted && i === selected && i !== q.correct ? 'wrong' : ''}`}>{String.fromCharCode(65 + i)}</span>
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

      {/* TRUE/FALSE SECTION */}
      {exam.trueFalse && (
        <div className="exam-section-card">
          <div className="exam-section-header"><h3>{exam.trueFalse.title}</h3><p>{exam.trueFalse.instruction}</p></div>
          <div className="exam-questions">
            {exam.trueFalse.questions.map((q, idx) => {
              const answers = tfAnswers[q.id] || {}
              return (
                <div className="exam-q-card" key={q.id}>
                  <div className="exam-q-num">Câu {idx + 1}</div>
                  <p className="exam-q-text">{q.text}</p>
                  <div className="tf-statements">
                    {q.statements.map(s => {
                      const userAns = answers[s.id]
                      let stmtClass = 'tf-statement'
                      if (examSubmitted) stmtClass += userAns === s.correct ? ' tf-correct' : (userAns !== undefined ? ' tf-wrong' : ' tf-wrong')
                      return (
                        <div className={stmtClass} key={s.id}>
                          <span className="tf-label">{s.id})</span>
                          <span className="tf-text">{s.text}</span>
                          <div className="tf-buttons">
                            <button className={`tf-btn tf-btn-true ${userAns === true ? 'selected' : ''} ${examSubmitted && s.correct === true ? 'correct-answer' : ''}`} onClick={() => handleTfAnswer(q.id, s.id, true)} disabled={examSubmitted}><i className="fas fa-check"></i> Đ</button>
                            <button className={`tf-btn tf-btn-false ${userAns === false ? 'selected' : ''} ${examSubmitted && s.correct === false ? 'correct-answer' : ''}`} onClick={() => handleTfAnswer(q.id, s.id, false)} disabled={examSubmitted}><i className="fas fa-times"></i> S</button>
                          </div>
                          {examSubmitted && <span className="tf-result-icon">{userAns === s.correct ? <i className="fas fa-check-circle" style={{color:'var(--emerald-500)'}}></i> : <i className="fas fa-times-circle" style={{color:'#ef4444'}}></i>}</span>}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* SHORT ANSWER SECTION */}
      {exam.shortAnswer && (
        <div className="exam-section-card">
          <div className="exam-section-header"><h3>{exam.shortAnswer.title}</h3><p>{exam.shortAnswer.instruction}</p></div>
          <div className="exam-questions">
            {exam.shortAnswer.questions.map((q, idx) => {
              const ans = saAnswers[q.id] || ''
              const isCorrect = examSubmitted && q.acceptedAnswers.some(a => a.toLowerCase() === ans.trim().toLowerCase())
              return (
                <div className={`exam-q-card ${examSubmitted ? (isCorrect ? 'answered-correct' : 'answered-wrong') : ''}`} key={q.id}>
                  <div className="exam-q-num">Câu {idx + 1}</div>
                  <p className="exam-q-text">{q.text}</p>
                  <div className="sa-input-group">
                    <div className="sa-input-wrapper">
                      <i className="fas fa-pencil-alt sa-input-icon"></i>
                      <input type="text" className={`sa-input ${examSubmitted ? (isCorrect ? 'sa-correct' : 'sa-wrong') : ''}`} placeholder="Nhập đáp án..." value={ans} onChange={e => handleSaAnswer(q.id, e.target.value)} disabled={examSubmitted} />
                      {examSubmitted && <span className="sa-result-icon">{isCorrect ? <i className="fas fa-check-circle" style={{color:'var(--emerald-500)'}}></i> : <i className="fas fa-times-circle" style={{color:'#ef4444'}}></i>}</span>}
                    </div>
                  </div>
                  {examSubmitted && !isCorrect && <div className="sa-correct-answer"><i className="fas fa-key"></i> Đáp án: <strong>{q.correctAnswer}</strong></div>}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Submit button */}
      {(exam.multipleChoice || exam.trueFalse || exam.shortAnswer) && !examSubmitted && (
        <button className="btn-toggle-answer" onClick={submitExam} style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))', color: 'white' }}>
          <i className="fas fa-paper-plane"></i> Nộp bài
        </button>
      )}

      {/* ESSAY SECTION */}
      {exam.essay && (
        <div className="exam-section-card">
          <div className="exam-section-header"><h3>{exam.essay.title}</h3>{exam.essay.subtitle && <p>{exam.essay.subtitle}</p>}</div>
          <div className="exam-essay">
            {exam.essay.questions.map(q => (
              <div className="essay-question" key={q.id}>
                <h4>{q.title}</h4>
                <div dangerouslySetInnerHTML={{ __html: q.content }}></div>
                <div style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', background: 'var(--bg-main)', padding: '1rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
                  <textarea placeholder="Nhập phần trình bày tự luận..." value={essayAnswers[q.id]?.text || ''} onChange={e => handleEssayTextChange(q.id, e.target.value)} style={{ width: '100%', minHeight: '120px', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', fontSize: '0.95rem', resize: 'vertical', background: 'var(--bg-card)', color: 'var(--text-main)' }}></textarea>
                  {essayAnswers[q.id]?.files?.length > 0 && (
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {essayAnswers[q.id].files.map((f, idx) => (
                        <div key={idx} style={{ position: 'relative', border: '1px solid var(--border-color)', borderRadius: '8px', overflow: 'hidden', width: '80px', height: '80px', background: 'white' }}>
                          {f.type.includes('image') ? <img src={f.data} alt="preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8fafc', color: 'var(--blue-500)', fontSize: '2rem' }}><i className="fas fa-file-pdf"></i></div>}
                          <button onClick={() => removeFile(q.id, idx)} style={{ position: 'absolute', top: '2px', right: '2px', background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none', borderRadius: '50%', width: '20px', height: '20px', cursor: 'pointer', fontSize: '10px' }}><i className="fas fa-times"></i></button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <label style={{ padding: '0.5rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 600 }}><i className="fas fa-image" style={{color:'var(--primary)'}}></i> Ảnh<input type="file" accept="image/*" style={{ display: 'none' }} onChange={e => handleFileUpload(q.id, e)} /></label>
                      <label style={{ padding: '0.5rem 1rem', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-main)', fontSize: '0.9rem', fontWeight: 600 }}><i className="fas fa-file-pdf" style={{color:'var(--blue-500)'}}></i> PDF<input type="file" accept="application/pdf" style={{ display: 'none' }} onChange={e => handleFileUpload(q.id, e)} /></label>
                    </div>
                    <button onClick={() => submitEssay(q)} disabled={essayFeedback[q.id]?.loading || (!essayAnswers[q.id]?.text && (!essayAnswers[q.id]?.files || essayAnswers[q.id]?.files.length === 0))} style={{ padding: '0.5rem 1.25rem', background: 'var(--primary)', border: 'none', borderRadius: 'var(--radius-md)', cursor: 'pointer', color: 'white', fontSize: '0.9rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem', opacity: (!essayAnswers[q.id]?.text && (!essayAnswers[q.id]?.files || essayAnswers[q.id]?.files.length === 0)) ? 0.5 : 1 }}>
                      {essayFeedback[q.id]?.loading ? <span style={{width:'14px',height:'14px',border:'2px solid rgba(255,255,255,0.3)',borderTopColor:'white',borderRadius:'50%',display:'inline-block',animation:'spin 1s linear infinite'}}></span> : <i className="fas fa-robot"></i>} AI Chấm
                    </button>
                  </div>
                </div>
                {essayFeedback[q.id]?.result && (
                  <div style={{ marginTop: '1rem', background: 'rgba(59,130,246,0.05)', border: '1px solid var(--primary)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                    <h5 style={{ color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', fontSize: '1.1rem' }}><i className="fas fa-check-circle"></i> Giám khảo AI</h5>
                    <div className="message-content" dangerouslySetInnerHTML={{ __html: parseMarkdown(essayFeedback[q.id].result) }} style={{ lineHeight: '1.6' }}></div>
                  </div>
                )}
                {essayFeedback[q.id]?.error && <div style={{ marginTop: '1rem', color: '#ef4444', background: 'rgba(239,68,68,0.1)', padding: '1rem', borderRadius: 'var(--radius-md)' }}><i className="fas fa-exclamation-triangle"></i> {essayFeedback[q.id].error}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ANSWER KEY */}
      <button className={`btn-toggle-answer ${answerVisible ? 'answer-visible' : ''}`} onClick={() => setAnswerVisible(!answerVisible)} style={{ marginTop: '2rem' }}>
        <i className={`fas ${answerVisible ? 'fa-eye-slash' : 'fa-key'}`}></i>
        {answerVisible ? 'Ẩn Đáp án' : 'Xem Đáp án & Hướng dẫn chấm'}
      </button>

      {answerVisible && (
        <div className="exam-answer-section" style={{ marginTop: '1.5rem', display: 'block' }}>
          <div className="answer-header"><h3><i className="fas fa-check-double"></i> ĐÁP ÁN &amp; HƯỚNG DẪN CHẤM</h3></div>
          
          {exam.multipleChoice && (
            <div className="answer-block">
              <h4><i className="fas fa-table"></i> Phần Trắc nghiệm</h4>
              <div className="answer-grid">
                {exam.multipleChoice.questions.map((q, idx) => (
                  <div className="answer-cell" key={q.id}><span className="answer-q-num">{idx + 1}</span><span className="answer-key">{String.fromCharCode(65 + q.correct)}</span></div>
                ))}
              </div>
            </div>
          )}

          {exam.trueFalse && (
            <div className="answer-block">
              <h4><i className="fas fa-check-double"></i> Phần Đúng/Sai</h4>
              {exam.trueFalse.questions.map((q, idx) => (
                <div key={q.id} style={{ marginBottom: '1rem', padding: '1rem', background: 'var(--bg-main)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                  <strong>Câu {idx + 1}:</strong>
                  <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                    {q.statements.map(s => (
                      <span key={s.id} style={{ padding: '0.25rem 0.75rem', borderRadius: '8px', background: s.correct ? '#10b98120' : '#ef444420', color: s.correct ? '#10b981' : '#ef4444', fontWeight: 600 }}>
                        {s.id}) {s.correct ? 'Đúng' : 'Sai'}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {exam.shortAnswer && (
            <div className="answer-block">
              <h4><i className="fas fa-pen"></i> Phần Trả lời ngắn</h4>
              <div className="answer-grid">
                {exam.shortAnswer.questions.map((q, idx) => (
                  <div className="answer-cell" key={q.id}><span className="answer-q-num">{idx + 1}</span><span className="answer-key">{q.correctAnswer}</span></div>
                ))}
              </div>
            </div>
          )}

          {exam.rubric && exam.rubric.length > 0 && (
            <div className="answer-block">
              <h4><i className="fas fa-pen-ruler"></i> Hướng dẫn chấm</h4>
              {exam.rubric.map(rb => (
                <div className="rubric-card" key={rb.title}>
                  <div className="rubric-header">{rb.title}</div>
                  <table className="rubric-table"><thead><tr><th>Ý</th><th>Nội dung</th><th>Điểm</th></tr></thead>
                    <tbody>{rb.rows.map((row, i) => (<tr key={i}><td>{row.label}</td><td dangerouslySetInnerHTML={{ __html: row.content }}></td><td><strong>{row.score}</strong></td></tr>))}</tbody>
                  </table>
                </div>
              ))}
              {exam.gradingNotes?.length > 0 && (
                <div className="grading-notes"><h5><i className="fas fa-info-circle"></i> Lưu ý:</h5><ul>{exam.gradingNotes.map((note, i) => <li key={i}>{note}</li>)}</ul></div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default ExamTab
