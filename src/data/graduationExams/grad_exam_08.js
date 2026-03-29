export const grad_exam_08 = {
  id: 'grad_08', title: 'Đề TN-TN số 8', type: 'graduation', duration: 50, totalPoints: 10, icon: 'fa-graduation-cap', summary: '18 TN + 4 Đ/S + 6 TL ngắn',
  multipleChoice: { points: 4.5, pointPerQuestion: 0.25, title: 'PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (4,5 điểm)', instruction: 'Mỗi câu 0,25 điểm. Chọn MỘT đáp án đúng nhất.',
    questions: [
      { id: 'g8_mc1', text: 'Cho Fe vào dd hỗn hợp gồm AgNO₃ và Cu(NO₃)₂. Phản ứng xảy ra theo thứ tự:', options: ['Fe khử Ag⁺ trước, rồi Cu²⁺', 'Fe khử Cu²⁺ trước, rồi Ag⁺', 'Xảy ra đồng thời', 'Không phản ứng'], correct: 0 },
      { id: 'g8_mc2', text: 'Cho Cu vào dd FeCl₃ dư. Sản phẩm là:', options: ['CuCl₂ + Fe', 'CuCl₂ + FeCl₂', 'Cu(OH)₂ + Fe', 'Không phản ứng'], correct: 1 },
      { id: 'g8_mc3', text: 'Phương trình nào KHÔNG đúng?', options: ['Fe + 2HCl → FeCl₂ + H₂', 'Cu + 2HCl → CuCl₂ + H₂', 'Zn + H₂SO₄ → ZnSO₄ + H₂', '2Na + 2H₂O → 2NaOH + H₂'], correct: 1 },
      { id: 'g8_mc4', text: 'Cho Al vào dd HNO₃ rất loãng. Sản phẩm khử có thể là:', options: ['NO₂', 'NO', 'N₂O hoặc NH₄⁺', 'H₂'], correct: 2 },
      { id: 'g8_mc5', text: 'Kim loại nào KHÔNG phản ứng với H₂O ở điều kiện thường?', options: ['Na', 'K', 'Ba', 'Fe'], correct: 3 },
      { id: 'g8_mc6', text: 'Cho thanh Fe vào dd ZnSO₄. Hiện tượng:', options: ['Zn bám vào Fe', 'Fe tan', 'Không có hiện tượng', 'Sủi bọt khí'], correct: 2 },
      { id: 'g8_mc7', text: 'Dung dịch FeCl₃ có thể oxy hóa kim loại nào?', options: ['Ag', 'Au', 'Cu', 'Pt'], correct: 2 },
      { id: 'g8_mc8', text: 'Cho Al vào dd CuSO₄. Hiện tượng:', options: ['Cu đỏ bám vào Al, dd nhạt màu', 'Không phản ứng', 'Sủi bọt khí', 'Al không tan'], correct: 0 },
      { id: 'g8_mc9', text: 'Phương pháp thủy luyện sử dụng:', options: ['Dòng điện', 'Nhiệt độ cao', 'Dung dịch muối', 'Cốc than'], correct: 2 },
      { id: 'g8_mc10', text: 'Trong điện phân, cation di chuyển về:', options: ['Anot', 'Catot', 'Hai cực', 'Không di chuyển'], correct: 1 },
      { id: 'g8_mc11', text: 'Điện phân dd NaCl có màng ngăn, ở catot thu:', options: ['Na', 'Cl₂', 'H₂', 'NaOH'], correct: 2 },
      { id: 'g8_mc12', text: 'Phản ứng: Al₂O₃(nc) → Al + O₂ thuộc pp:', options: ['Nhiệt luyện', 'Thủy luyện', 'Điện phân nóng chảy', 'Nhiệt phân'], correct: 2 },
      { id: 'g8_mc13', text: 'Nguyên liệu để luyện thép từ gang:', options: ['Quặng sắt', 'Gang lỏng', 'Fe₂O₃', 'FeS₂'], correct: 1 },
      { id: 'g8_mc14', text: 'Hợp kim nào nhẹ, bền, dùng làm máy bay?', options: ['Gang', 'Thép', 'Đuyra', 'Inox'], correct: 2 },
      { id: 'g8_mc15', text: 'Trong ăn mòn điện hóa cặp Fe-C, tại cực dương (C) xảy ra:', options: ['Fe → Fe²⁺ + 2e', 'O₂ + 2H₂O + 4e → 4OH⁻', 'C → C⁴⁺ + 4e', 'H₂ → 2H⁺ + 2e'], correct: 1 },
      { id: 'g8_mc16', text: 'Để chống ăn mòn cho cầu sắt, người ta thường:', options: ['Gắn tấm Cu', 'Sơn phủ', 'Ngâm trong acid', 'Đốt nóng'], correct: 1 },
      { id: 'g8_mc17', text: 'Cho bột Al vào dd NaOH dư. Phản ứng:', options: ['Không xảy ra', 'Al tan, có khí H₂', 'Al tan, có khí O₂', 'Tạo kết tủa trắng'], correct: 1 },
      { id: 'g8_mc18', text: 'Fe có các số oxi hóa phổ biến là:', options: ['+1, +2', '+2, +3', '+1, +3', '+2, +4'], correct: 1 }
    ]
  },
  trueFalse: { points: 4.0, title: 'PHẦN II. TRẮC NGHIỆM ĐÚNG SAI (4,0 điểm)', instruction: 'Mỗi câu gồm 4 phát biểu (a,b,c,d). Đúng 1 ý: 0,1đ; 2 ý: 0,25đ; 3 ý: 0,5đ; 4 ý: 1,0đ.',
    questions: [
      { id: 'g8_tf1', text: 'Cho các phát biểu về Fe:',
        statements: [
          { id: 'a', text: 'Fe có tính từ.', correct: true },
          { id: 'b', text: 'Fe + Cl₂ tạo FeCl₂.', correct: false },
          { id: 'c', text: 'Fe + S tạo FeS.', correct: true },
          { id: 'd', text: 'Fe dư + HNO₃ loãng tạo Fe(NO₃)₂.', correct: true }
        ]
      },
      { id: 'g8_tf2', text: 'Cho các phát biểu về phản ứng kim loại với dd muối:',
        statements: [
          { id: 'a', text: 'Fe + CuSO₄ → FeSO₄ + Cu (Fe mạnh hơn Cu).', correct: true },
          { id: 'b', text: 'Cu + Fe₂(SO₄)₃ → CuSO₄ + 2FeSO₄ (Cu khử Fe³⁺).', correct: true },
          { id: 'c', text: 'Ag + Cu(NO₃)₂ → AgNO₃ + Cu (Ag mạnh hơn Cu).', correct: false },
          { id: 'd', text: 'Zn + 2AgNO₃ → Zn(NO₃)₂ + 2Ag.', correct: true }
        ]
      },
      { id: 'g8_tf3', text: 'Cho các phát biểu về điện phân dd:',
        statements: [
          { id: 'a', text: 'Thứ tự điện phân tại catot: Ag⁺ > Cu²⁺ > H⁺ > Fe²⁺.', correct: true },
          { id: 'b', text: 'Điện phân dd CuSO₄ cực trơ: catot Cu, anot O₂.', correct: true },
          { id: 'c', text: 'Điện phân dd NaCl không màng ngăn tạo nước Gia-ven.', correct: true },
          { id: 'd', text: 'Điện phân dd KI: catot I₂, anot H₂.', correct: false }
        ]
      },
      { id: 'g8_tf4', text: 'Cho các phát biểu về ăn mòn:',
        statements: [
          { id: 'a', text: 'Fe nguyên chất bị ăn mòn chậm hơn gang.', correct: true },
          { id: 'b', text: 'Vật Fe tráng Zn bị xước: Zn ăn mòn trước.', correct: true },
          { id: 'c', text: 'Vật Fe tráng Sn bị xước: Sn ăn mòn trước.', correct: false },
          { id: 'd', text: 'Fe trong HCl ăn mòn chậm hơn Fe-Cu trong HCl.', correct: true }
        ]
      }
    ]
  },
  shortAnswer: { points: 1.5, pointPerQuestion: 0.25, title: 'PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (1,5 điểm)', instruction: 'Mỗi câu 0,25 điểm. Điền đáp án vào ô trống.',
    questions: [
      { id: 'g8_sa1', text: 'Cho Cu + 2FeCl₃ → CuCl₂ + 2FeCl₂. Mỗi mol Cu khử bao nhiêu mol Fe³⁺?', correctAnswer: '2', acceptedAnswers: ['2', '2,0', '2.0'] },
      { id: 'g8_sa2', text: 'Cho 0,1 mol Zn vào dd AgNO₃ dư. Khối lượng Ag thu được (gam):', correctAnswer: '21,6', acceptedAnswers: ['21,6', '21.6', '21,60'] },
      { id: 'g8_sa3', text: 'Fe có bao nhiêu electron ở phân lớp 4s?', correctAnswer: '2', acceptedAnswers: ['2'] },
      { id: 'g8_sa4', text: 'Quặng manhetit có công thức là:', correctAnswer: 'Fe₃O₄', acceptedAnswers: ['Fe₃O₄', 'Fe3O4', 'fe3o4'] },
      { id: 'g8_sa5', text: 'Cho 5,6g Fe + HCl dư → FeCl₂ + H₂. Thể tích H₂ (đkc, lít) là:', correctAnswer: '2,479', acceptedAnswers: ['2,479', '2.479', '2,48', '2.48'] },
      { id: 'g8_sa6', text: 'Cho Al vào dd NaOH. Tỉ lệ mol Al : H₂ = ?', correctAnswer: '2:3', acceptedAnswers: ['2:3', '2/3', '2 : 3'] }
    ]
  }
}
