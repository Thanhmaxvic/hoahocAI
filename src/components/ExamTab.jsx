import { useState } from 'react'
import { examQuestions, examAnswerKey } from '../data/examData'

function ExamTab() {
  const [activeExam, setActiveExam] = useState('exam1')
  const [answer1Visible, setAnswer1Visible] = useState(false)
  const [answer2Visible, setAnswer2Visible] = useState(false)
  const [examAnswers, setExamAnswers] = useState({})
  const [examSubmitted, setExamSubmitted] = useState(false)

  const switchExam = (examId) => setActiveExam(examId)

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
  }

  const getExamScore = () => {
    let correct = 0
    examQuestions.forEach(q => {
      if (examAnswers[q.id] === q.correct) correct++
    })
    return correct
  }

  return (
    <div id="exam" className="tab-content active">
      <div className="exam-container">
        {/* Exam Header */}
        <div className="exam-hero">
          <div className="exam-hero-content">
            <h2 className="exam-hero-title">
              <i className="fas fa-file-lines"></i>
              Đề kiểm tra &amp; Đáp án
            </h2>
            <p className="exam-hero-desc">Luyện đề kiểm tra 45 phút — có đáp án, thang điểm và hướng dẫn chấm chi tiết</p>
          </div>
        </div>

        {/* Exam Selector */}
        <div className="exam-tabs">
          <button className={`exam-tab-btn ${activeExam === 'exam1' ? 'active' : ''}`} onClick={() => switchExam('exam1')} id="btn-exam1">
            <i className="fas fa-scroll"></i> Đề số 1 — Trắc nghiệm
          </button>
          <button className={`exam-tab-btn ${activeExam === 'exam2' ? 'active' : ''}`} onClick={() => switchExam('exam2')} id="btn-exam2">
            <i className="fas fa-pen-fancy"></i> Đề số 2 — Tự luận
          </button>
        </div>

        {/* ĐỀ SỐ 1: TRẮC NGHIỆM */}
        {activeExam === 'exam1' && (
          <div id="exam1" className="exam-paper active">
            <div className="exam-info-bar">
              <div className="exam-info-item"><i className="fas fa-clock"></i> Thời gian: <strong>45 phút</strong></div>
              <div className="exam-info-item"><i className="fas fa-list-ol"></i> Số câu: <strong>20 câu TN + 2 câu TL</strong></div>
              <div className="exam-info-item"><i className="fas fa-star"></i> Tổng điểm: <strong>10 điểm</strong></div>
            </div>

            {/* Score after submit */}
            {examSubmitted && (
              <div className="exam-score-bar">
                <div className="exam-score-content">
                  <i className="fas fa-trophy" style={{ color: '#f59e0b', fontSize: '1.5rem' }}></i>
                  <div>
                    <strong>Kết quả phần trắc nghiệm:</strong> {getExamScore()}/{examQuestions.length} câu đúng
                    <span style={{ marginLeft: '1rem', color: 'var(--emerald-500)', fontWeight: 700 }}>
                      ({(getExamScore() * 0.35).toFixed(2)} / 7.0 điểm)
                    </span>
                  </div>
                  <button onClick={resetExam} className="btn-reset" style={{ marginLeft: 'auto' }}>
                    <i className="fas fa-arrow-rotate-right"></i> Làm lại
                  </button>
                </div>
              </div>
            )}

            <div className="exam-section-card">
              <div className="exam-section-header">
                <h3>PHẦN I. TRẮC NGHIỆM (7,0 điểm)</h3>
                <p>Mỗi câu đúng được 0,35 điểm. Chọn <strong>MỘT</strong> đáp án đúng nhất.</p>
              </div>
              <div className="exam-questions" id="exam1-questions">
                {examQuestions.map((q, idx) => {
                  const selected = examAnswers[q.id]
                  const isAnswered = selected !== undefined

                  return (
                    <div className={`exam-q-card ${examSubmitted && isAnswered ? (selected === q.correct ? 'answered-correct' : 'answered-wrong') : ''}`} key={q.id}>
                      <div className="exam-q-num">Câu {idx + 1}</div>
                      <p className="exam-q-text">{q.text}</p>
                      <div className="exam-q-options">
                        {q.options.map((opt, i) => {
                          let optClass = 'exam-q-option exam-q-option-btn'
                          if (isAnswered && selected === i && !examSubmitted) {
                            optClass += ' selected'
                          }
                          if (examSubmitted) {
                            if (i === q.correct) {
                              optClass += ' correct'
                            } else if (i === selected && i !== q.correct) {
                              optClass += ' wrong'
                            }
                          }

                          return (
                            <button
                              key={i}
                              className={optClass}
                              onClick={() => selectAnswer(q.id, i)}
                              disabled={examSubmitted}
                            >
                              <span className={`exam-q-letter ${isAnswered && selected === i && !examSubmitted ? 'selected' : ''} ${examSubmitted && i === q.correct ? 'correct' : ''} ${examSubmitted && i === selected && i !== q.correct ? 'wrong' : ''}`}>
                                {String.fromCharCode(65 + i)}
                              </span>
                              <span>{opt}</span>
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

            {/* Submit button */}
            {!examSubmitted && (
              <button className="btn-toggle-answer" onClick={submitExam} style={{ background: 'linear-gradient(135deg, var(--primary), var(--primary-dark))' }}>
                <i className="fas fa-paper-plane"></i> Nộp bài ({Object.keys(examAnswers).length}/{examQuestions.length} câu đã chọn)
              </button>
            )}

            <div className="exam-section-card">
              <div className="exam-section-header">
                <h3>PHẦN II. TỰ LUẬN (3,0 điểm)</h3>
              </div>
              <div className="exam-essay">
                <div className="essay-question">
                  <h4>Câu 21 (1,5 điểm)</h4>
                  <p>Cho 5,4g bột nhôm (Al) tác dụng hoàn toàn với dung dịch HCl dư.</p>
                  <p>a) Viết phương trình hóa học của phản ứng. (0,5 điểm)</p>
                  <p>b) Tính thể tích khí H₂ sinh ra ở điều kiện chuẩn (25°C, 1 bar). (0,5 điểm)</p>
                  <p>c) Tính khối lượng muối AlCl₃ thu được. (0,5 điểm)</p>
                </div>
                <div className="essay-question">
                  <h4>Câu 22 (1,5 điểm)</h4>
                  <p>Một vật bằng thép (hợp kim Fe-C) bị ăn mòn trong môi trường không khí ẩm.</p>
                  <p>a) Xác định loại ăn mòn xảy ra. Giải thích tại sao. (0,5 điểm)</p>
                  <p>b) Viết các phản ứng xảy ra tại cực âm và cực dương. (0,5 điểm)</p>
                  <p>c) Nêu hai biện pháp bảo vệ vật bằng thép khỏi bị ăn mòn. (0,5 điểm)</p>
                </div>
              </div>
            </div>

            {/* ĐÁP ÁN ĐỀ 1 */}
            <button
              className={`btn-toggle-answer ${answer1Visible ? 'answer-visible' : ''}`}
              onClick={() => setAnswer1Visible(!answer1Visible)}
              id="btn-answer1"
            >
              <i className={`fas ${answer1Visible ? 'fa-eye-slash' : 'fa-key'}`}></i>
              {answer1Visible ? 'Ẩn Đáp án' : 'Xem Đáp án & Hướng dẫn chấm'}
            </button>
            {answer1Visible && (
              <div className="exam-answer-section" id="answer1">
                <div className="answer-header">
                  <h3><i className="fas fa-check-double"></i> ĐÁP ÁN &amp; HƯỚNG DẪN CHẤM — ĐỀ SỐ 1</h3>
                </div>
                <div className="answer-block">
                  <h4><i className="fas fa-table"></i> Phần I — Đáp án Trắc nghiệm (7,0 điểm — 0,35đ/câu)</h4>
                  <div className="answer-grid" id="exam1-answer-grid">
                    {examQuestions.map((q, idx) => (
                      <div className="answer-cell" key={q.id}>
                        <span className="answer-q-num">{idx + 1}</span>
                        <span className="answer-key">{examAnswerKey[idx]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="answer-block">
                  <h4><i className="fas fa-pen-ruler"></i> Phần II — Hướng dẫn chấm Tự luận (3,0 điểm)</h4>
                  <Rubric21 />
                  <Rubric22 />
                  <GradingNotes1 />
                </div>
              </div>
            )}
          </div>
        )}

        {/* ĐỀ SỐ 2: TỰ LUẬN */}
        {activeExam === 'exam2' && (
          <div id="exam2" className="exam-paper active">
            <div className="exam-info-bar">
              <div className="exam-info-item"><i className="fas fa-clock"></i> Thời gian: <strong>45 phút</strong></div>
              <div className="exam-info-item"><i className="fas fa-pen-fancy"></i> Hình thức: <strong>100% Tự luận</strong></div>
              <div className="exam-info-item"><i className="fas fa-star"></i> Tổng điểm: <strong>10 điểm</strong></div>
            </div>

            <div className="exam-section-card">
              <div className="exam-section-header">
                <h3>ĐỀ KIỂM TRA 45 PHÚT — TỰ LUẬN</h3>
                <p>Chương 6: Đại cương về Kim loại</p>
              </div>
              <div className="exam-essay">
                <Exam2Questions />
              </div>
            </div>

            <button
              className={`btn-toggle-answer ${answer2Visible ? 'answer-visible' : ''}`}
              onClick={() => setAnswer2Visible(!answer2Visible)}
              id="btn-answer2"
            >
              <i className={`fas ${answer2Visible ? 'fa-eye-slash' : 'fa-key'}`}></i>
              {answer2Visible ? 'Ẩn Đáp án' : 'Xem Đáp án & Hướng dẫn chấm'}
            </button>
            {answer2Visible && <Exam2Answers />}
          </div>
        )}
      </div>
    </div>
  )
}

function Rubric21() {
  return (
    <div className="rubric-card">
      <div className="rubric-header">Câu 21 (1,5 điểm)</div>
      <table className="rubric-table">
        <thead><tr><th>Ý</th><th>Nội dung</th><th>Điểm</th></tr></thead>
        <tbody>
          <tr>
            <td>a</td>
            <td><strong>PTHH:</strong> 2Al + 6HCl → 2AlCl₃ + 3H₂↑<br /><em className="rubric-note">• Viết đúng CTHH các chất: 0,25đ. Cân bằng đúng: 0,25đ</em></td>
            <td><strong>0,5</strong></td>
          </tr>
          <tr>
            <td>b</td>
            <td>n(Al) = 5,4 / 27 = 0,2 mol <span className="rubric-score-inline">0,25đ</span><br />Theo PTHH: n(H₂) = 3/2 × n(Al) = 0,3 mol<br />V(H₂) = 0,3 × 24,79 = 7,437 lít <span className="rubric-score-inline">0,25đ</span></td>
            <td><strong>0,5</strong></td>
          </tr>
          <tr>
            <td>c</td>
            <td>Theo PTHH: n(AlCl₃) = n(Al) = 0,2 mol <span className="rubric-score-inline">0,25đ</span><br />m(AlCl₃) = 0,2 × 133,5 = 26,7g <span className="rubric-score-inline">0,25đ</span></td>
            <td><strong>0,5</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function Rubric22() {
  return (
    <div className="rubric-card">
      <div className="rubric-header">Câu 22 (1,5 điểm)</div>
      <table className="rubric-table">
        <thead><tr><th>Ý</th><th>Nội dung</th><th>Điểm</th></tr></thead>
        <tbody>
          <tr>
            <td>a</td>
            <td>Ăn mòn <strong>điện hóa học.</strong> <span className="rubric-score-inline">0,25đ</span><br />Giải thích: Thỏa mãn 3 điều kiện: (1) Hai điện cực khác bản chất (Fe-C); (2) Tiếp xúc trực tiếp; (3) Cùng trong dd chất điện li (nước có hòa tan O₂, CO₂). <span className="rubric-score-inline">0,25đ</span></td>
            <td><strong>0,5</strong></td>
          </tr>
          <tr>
            <td>b</td>
            <td>Cực âm (Fe): Fe → Fe²⁺ + 2e <span className="rubric-score-inline">0,25đ</span><br />Cực dương (C): O₂ + 2H₂O + 4e → 4OH⁻ <span className="rubric-score-inline">0,25đ</span></td>
            <td><strong>0,5</strong></td>
          </tr>
          <tr>
            <td>c</td>
            <td>BP1: Bảo vệ bề mặt — sơn, mạ, tráng men, bôi dầu mỡ. <span className="rubric-score-inline">0,25đ</span><br />BP2: Bảo vệ điện hóa — gắn kim loại hoạt động mạnh hơn Fe (VD: Zn). <span className="rubric-score-inline">0,25đ</span></td>
            <td><strong>0,5</strong></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

function GradingNotes1() {
  return (
    <div className="grading-notes">
      <h5><i className="fas fa-info-circle"></i> Lưu ý khi chấm:</h5>
      <ul>
        <li>HS viết đúng PTHH nhưng không cân bằng: trừ 50% điểm câu đó.</li>
        <li>Tính toán đúng phương pháp nhưng sai kết quả số: trừ 0,25đ.</li>
        <li>HS trình bày cách khác nhưng đúng bản chất: cho điểm tối đa.</li>
        <li>Không yêu cầu ghi đơn vị ở bước trung gian, nhưng kết quả cuối phải có đơn vị.</li>
      </ul>
    </div>
  )
}

function Exam2Questions() {
  return (
    <>
      <div className="essay-question">
        <h4>Câu 1 (2,0 điểm)</h4>
        <p>a) Nêu tính chất vật lí chung của kim loại. Giải thích nguyên nhân gây ra những tính chất đó. (1,0 điểm)</p>
        <p>b) Sắp xếp các kim loại: Fe, Cu, Al, Ag theo thứ tự tính dẫn điện giảm dần. (0,5 điểm)</p>
        <p>c) Giải thích tại sao nhôm (Al) được dùng làm dây dẫn điện cao thế thay cho đồng (Cu). (0,5 điểm)</p>
      </div>
      <div className="essay-question">
        <h4>Câu 2 (2,5 điểm)</h4>
        <p>a) Viết phương trình hóa học các phản ứng xảy ra khi cho kim loại Fe tác dụng lần lượt với: (1) dung dịch HCl; (2) khí Cl₂; (3) dung dịch CuSO₄. Nêu rõ vai trò của Fe trong mỗi phản ứng. (1,5 điểm)</p>
        <p>b) Giải thích tại sao Fe nhường 2 electron khi tác dụng với HCl, nhưng nhường 3 electron khi tác dụng với Cl₂. (1,0 điểm)</p>
      </div>
      <div className="essay-question">
        <h4>Câu 3 (2,5 điểm)</h4>
        <p>a) Nêu nguyên tắc chung để điều chế kim loại. (0,5 điểm)</p>
        <p>b) Hoàn thành các PTHH điều chế kim loại sau và cho biết mỗi phản ứng thuộc phương pháp nào: (1,0 điểm)</p>
        <p className="exam-indent">• CuO + CO →</p>
        <p className="exam-indent">• 2NaCl(nc) → (đpnc)</p>
        <p className="exam-indent">• Fe + CuSO₄ →</p>
        <p className="exam-indent">• CuSO₄(dd) + H₂O → (đpdd)</p>
        <p>c) Từ quặng boxit (Al₂O₃), hãy trình bày phương pháp điều chế Al. Nêu vai trò của criolit (Na₃AlF₆). (1,0 điểm)</p>
      </div>
      <div className="essay-question">
        <h4>Câu 4 (3,0 điểm)</h4>
        <p>a) Phân biệt ăn mòn hóa học và ăn mòn điện hóa học. Nêu ba điều kiện để xảy ra ăn mòn điện hóa. (1,0 điểm)</p>
        <p>b) Cho thanh sắt (Fe) vào dung dịch CuSO₄. Sau một thời gian, lấy thanh sắt ra, rửa sạch, sấy khô thấy khối lượng thanh sắt tăng 1,6g. Tính khối lượng Fe đã phản ứng và khối lượng Cu bám vào thanh sắt. (1,0 điểm)</p>
        <p>c) Có 3 cốc đựng dung dịch HCl, trong mỗi cốc nhúng một thanh kim loại: (1) thanh Fe; (2) thanh Fe nối với thanh Cu; (3) thanh Fe nối với thanh Zn. Hãy cho biết thanh Fe trong cốc nào bị hòa tan nhanh nhất, chậm nhất. Giải thích. (1,0 điểm)</p>
      </div>
    </>
  )
}

function Exam2Answers() {
  return (
    <div className="exam-answer-section" id="answer2">
      <div className="answer-header">
        <h3><i className="fas fa-check-double"></i> ĐÁP ÁN &amp; HƯỚNG DẪN CHẤM — ĐỀ SỐ 2</h3>
      </div>
      <div className="answer-block">
        <div className="rubric-card">
          <div className="rubric-header">Câu 1 (2,0 điểm)</div>
          <table className="rubric-table">
            <thead><tr><th>Ý</th><th>Nội dung</th><th>Điểm</th></tr></thead>
            <tbody>
              <tr><td>a</td><td>4 tính chất vật lí chung: tính dẻo, dẫn điện, dẫn nhiệt, ánh kim. <span className="rubric-score-inline">0,5đ</span><br />Nguyên nhân: Do <strong>các electron tự do</strong> trong mạng tinh thể kim loại gây ra. <span className="rubric-score-inline">0,5đ</span></td><td><strong>1,0</strong></td></tr>
              <tr><td>b</td><td>Thứ tự giảm dần: <strong>Ag &gt; Cu &gt; Al &gt; Fe</strong></td><td><strong>0,5</strong></td></tr>
              <tr><td>c</td><td>Mặc dù Cu dẫn điện tốt hơn Al, nhưng Al có <strong>khối lượng riêng nhỏ hơn</strong> (Al: 2,7g/cm³ vs Cu: 8,9g/cm³), dây dẫn nhẹ hơn, giảm tải trọng cho cột điện, chi phí thấp hơn.</td><td><strong>0,5</strong></td></tr>
            </tbody>
          </table>
        </div>
        <div className="rubric-card">
          <div className="rubric-header">Câu 2 (2,5 điểm)</div>
          <table className="rubric-table">
            <thead><tr><th>Ý</th><th>Nội dung</th><th>Điểm</th></tr></thead>
            <tbody>
              <tr><td>a</td><td>(1) Fe + 2HCl → FeCl₂ + H₂↑ — Fe là chất khử <span className="rubric-score-inline">0,5đ</span><br />(2) 2Fe + 3Cl₂ → 2FeCl₃ — Fe là chất khử <span className="rubric-score-inline">0,5đ</span><br />(3) Fe + CuSO₄ → FeSO₄ + Cu↓ — Fe là chất khử <span className="rubric-score-inline">0,5đ</span></td><td><strong>1,5</strong></td></tr>
              <tr><td>b</td><td>HCl là acid thường → tính oxi hóa yếu (H⁺) → chỉ oxi hóa Fe lên Fe²⁺. <span className="rubric-score-inline">0,5đ</span><br />Cl₂ là chất oxi hóa mạnh → oxi hóa Fe lên Fe³⁺ (số OXH cao nhất). <span className="rubric-score-inline">0,5đ</span></td><td><strong>1,0</strong></td></tr>
            </tbody>
          </table>
        </div>
        <div className="rubric-card">
          <div className="rubric-header">Câu 3 (2,5 điểm)</div>
          <table className="rubric-table">
            <thead><tr><th>Ý</th><th>Nội dung</th><th>Điểm</th></tr></thead>
            <tbody>
              <tr><td>a</td><td>Nguyên tắc: Khử ion kim loại thành nguyên tử kim loại: M<sup>n+</sup> + ne → M</td><td><strong>0,5</strong></td></tr>
              <tr><td>b</td><td>CuO + CO → Cu + CO₂ — <em>Nhiệt luyện</em> <span className="rubric-score-inline">0,25đ</span><br />2NaCl → 2Na + Cl₂ — <em>Điện phân nóng chảy</em> <span className="rubric-score-inline">0,25đ</span><br />Fe + CuSO₄ → FeSO₄ + Cu — <em>Thủy luyện</em> <span className="rubric-score-inline">0,25đ</span><br />2CuSO₄ + 2H₂O → 2Cu + 2H₂SO₄ + O₂ — <em>Điện phân dd</em> <span className="rubric-score-inline">0,25đ</span></td><td><strong>1,0</strong></td></tr>
              <tr><td>c</td><td>Điện phân nóng chảy Al₂O₃ (có criolit): 2Al₂O₃ → 4Al + 3O₂ <span className="rubric-score-inline">0,5đ</span><br />Vai trò criolit: (1) Hạ nhiệt độ nóng chảy (2) Tăng tính dẫn điện (3) Tạo lớp ngăn Al khỏi bị OXH. <span className="rubric-score-inline">0,5đ</span></td><td><strong>1,0</strong></td></tr>
            </tbody>
          </table>
        </div>
        <div className="rubric-card">
          <div className="rubric-header">Câu 4 (3,0 điểm)</div>
          <table className="rubric-table">
            <thead><tr><th>Ý</th><th>Nội dung</th><th>Điểm</th></tr></thead>
            <tbody>
              <tr><td>a</td><td>Ăn mòn hóa học: KL phản ứng trực tiếp với chất oxi hóa, không phát sinh dòng điện. <span className="rubric-score-inline">0,25đ</span><br />Ăn mòn điện hóa: qua dây dẫn, phát sinh dòng điện. <span className="rubric-score-inline">0,25đ</span><br />3 ĐK ăn mòn điện hóa: (1) 2 điện cực khác bản chất (2) tiếp xúc nhau (3) trong dd chất điện li. <span className="rubric-score-inline">0,5đ</span></td><td><strong>1,0</strong></td></tr>
              <tr><td>b</td><td>Fe + CuSO₄ → FeSO₄ + Cu. Gọi x = n(Fe) phản ứng.<br />Khối lượng tăng = m(Cu bám) − m(Fe tan) = 64x − 56x = 8x = 1,6g → x = 0,2 mol <span className="rubric-score-inline">0,5đ</span><br />m(Fe pư) = 0,2 × 56 = 11,2g ; m(Cu bám) = 0,2 × 64 = 12,8g <span className="rubric-score-inline">0,5đ</span></td><td><strong>1,0</strong></td></tr>
              <tr><td>c</td><td><strong>Nhanh nhất:</strong> Cốc (2) Fe-Cu trong HCl. Fe là cực âm bị ăn mòn điện hóa, tốc độ nhanh hơn ăn mòn hóa học đơn thuần. <span className="rubric-score-inline">0,5đ</span><br /><strong>Chậm nhất:</strong> Cốc (3) Fe-Zn trong HCl. Zn hoạt động hơn Fe nên Zn là cực âm, Zn bị ăn mòn trước → bảo vệ Fe. <span className="rubric-score-inline">0,5đ</span></td><td><strong>1,0</strong></td></tr>
            </tbody>
          </table>
        </div>
        <div className="grading-notes">
          <h5><i className="fas fa-info-circle"></i> Lưu ý khi chấm:</h5>
          <ul>
            <li>HS viết đúng PTHH nhưng thiếu điều kiện/cân bằng: trừ 50% điểm câu nhỏ đó.</li>
            <li>Câu giải thích: HS diễn đạt khác nhưng đúng bản chất hóa học vẫn cho điểm tối đa.</li>
            <li>Câu tính toán: sai số liệu ở bước trung gian nhưng phương pháp đúng, cho 50% điểm.</li>
            <li>Không trừ điểm lỗi chính tả nếu không ảnh hưởng CTHH.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ExamTab
