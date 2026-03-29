export const grad_exam_11 = {
  id: 'grad_11', title: 'Đề TN-TN số 11', type: 'graduation', duration: 50, totalPoints: 10, icon: 'fa-graduation-cap', summary: '18 TN + 4 Đ/S + 6 TL ngắn',
  multipleChoice: { points: 4.5, pointPerQuestion: 0.25, title: 'PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (4,5 điểm)', instruction: 'Mỗi câu 0,25 điểm. Chọn MỘT đáp án đúng nhất.',
    questions: [
      { id: 'g11_mc1', text: 'Cho các KL: Na, Mg, Al, Fe. KL có tính khử mạnh nhất:', options: ['Fe', 'Al', 'Mg', 'Na'], correct: 3 },
      { id: 'g11_mc2', text: 'Phản ứng: 2Al + 2NaOH + 2H₂O → 2NaAlO₂ + 3H₂. Al đóng vai trò:', options: ['Chất oxi hóa', 'Chất khử', 'Acid', 'Base'], correct: 1 },
      { id: 'g11_mc3', text: 'Dãy oxit nào đều là oxit base?', options: ['Na₂O, Al₂O₃, MgO', 'Na₂O, CaO, FeO', 'Al₂O₃, MgO, CuO', 'CO₂, SO₃, P₂O₅'], correct: 1 },
      { id: 'g11_mc4', text: 'Cho Al vào dd hỗn hợp NaOH + NaAlO₂. Có phản ứng không?', options: ['Có, tạo H₂', 'Có, tạo kết tủa', 'Không phản ứng', 'Tùy nồng độ'], correct: 0 },
      { id: 'g11_mc5', text: 'KL nào sau đây vừa phản ứng với HCl, vừa phản ứng với NaOH?', options: ['Fe', 'Cu', 'Al', 'Mg'], correct: 2 },
      { id: 'g11_mc6', text: 'Cho Fe dư vào dd CuSO₄. Dd sau phản ứng chứa:', options: ['FeSO₄', 'CuSO₄', 'FeSO₄ + CuSO₄', 'Fe₂(SO₄)₃'], correct: 0 },
      { id: 'g11_mc7', text: 'Phản ứng: Mg + H₂SO₄(loãng) → MgSO₄ + H₂. Số electron Mg nhường:', options: ['1', '2', '3', '4'], correct: 1 },
      { id: 'g11_mc8', text: 'Kim loại Fe bị oxi hóa đến +3 khi tác dụng với:', options: ['HCl', 'H₂SO₄ loãng', 'Cl₂ dư', 'S'], correct: 2 },
      { id: 'g11_mc9', text: 'Phương pháp nào sau đây dùng để điều chế Ca?', options: ['Nhiệt luyện CaO', 'Điện phân nóng chảy CaCl₂', 'Thủy luyện', 'Điện phân dd'], correct: 1 },
      { id: 'g11_mc10', text: 'Trong quá trình điện phân dd CuSO₄ (cực trơ), pH dd:', options: ['Tăng', 'Giảm', 'Không đổi', 'Tăng rồi giảm'], correct: 1 },
      { id: 'g11_mc11', text: 'Fe₃O₄ + 8HCl → FeCl₂ + 2FeCl₃ + 4H₂O. Fe₃O₄ có tính chất:', options: ['Chỉ base', 'Chỉ acid', 'Lưỡng tính', 'Oxit hỗn hợp FeO.Fe₂O₃'], correct: 3 },
      { id: 'g11_mc12', text: 'CuO + CO → Cu + CO₂. CO đóng vai trò:', options: ['Chất oxi hóa', 'Chất khử', 'Chất acid', 'Chất xúc tác'], correct: 1 },
      { id: 'g11_mc13', text: 'Quặng xiđerit có công thức:', options: ['Fe₂O₃', 'Fe₃O₄', 'FeS₂', 'FeCO₃'], correct: 3 },
      { id: 'g11_mc14', text: 'Gang trắng dùng chủ yếu để:', options: ['Đúc bệ máy', 'Luyện thép', 'Làm ống dẫn', 'Trang trí'], correct: 1 },
      { id: 'g11_mc15', text: 'Cốc đựng dd NaCl, trong đó có 2 lá Fe và Cu tiếp xúc nhau. Kim loại bị ăn mòn trước:', options: ['Cu', 'Fe', 'Cả hai', 'Không bị ăn mòn'], correct: 1 },
      { id: 'g11_mc16', text: 'Ở cực dương của ăn mòn điện hóa Fe trong không khí ẩm xảy ra:', options: ['Fe → Fe²⁺ + 2e', 'O₂ + 2H₂O + 4e → 4OH⁻', 'H₂ → 2H⁺ + 2e', '2Cl⁻ → Cl₂ + 2e'], correct: 1 },
      { id: 'g11_mc17', text: 'Kim loại Fe phản ứng với dung dịch nào tạo muối Fe(III)?', options: ['HCl dư', 'CuSO₄', 'AgNO₃ dư', 'NaCl'], correct: 2 },
      { id: 'g11_mc18', text: 'Ứng dụng nào sau đây KHÔNG phải của Al?', options: ['Làm dây điện', 'Làm vỏ máy bay', 'Đúc tượng đài', 'Làm giấy gói thực phẩm'], correct: 2 }
    ]
  },
  trueFalse: { points: 4.0, title: 'PHẦN II. TRẮC NGHIỆM ĐÚNG SAI (4,0 điểm)', instruction: 'Đúng 1 ý: 0,1đ; 2 ý: 0,25đ; 3 ý: 0,5đ; 4 ý: 1,0đ.',
    questions: [
      { id: 'g11_tf1', text: 'Cho các phát biểu về Al:',
        statements: [
          { id: 'a', text: 'Al có lớp oxide bảo vệ trong HNO₃ đặc nguội.', correct: true },
          { id: 'b', text: 'Al tan trong dd NaOH tạo NaAlO₂ và H₂.', correct: true },
          { id: 'c', text: 'Al₂O₃ là oxide lưỡng tính.', correct: true },
          { id: 'd', text: 'Al dẫn điện tốt hơn Cu.', correct: false }
        ]
      },
      { id: 'g11_tf2', text: 'Cho các phát biểu về Fe trong dd muối:',
        statements: [
          { id: 'a', text: 'Fe + 2FeCl₃ → 3FeCl₂.', correct: true },
          { id: 'b', text: 'Fe + CuSO₄ → FeSO₄ + Cu.', correct: true },
          { id: 'c', text: 'Fe + ZnCl₂ → FeCl₂ + Zn (Fe mạnh hơn Zn).', correct: false },
          { id: 'd', text: 'Fe dư + AgNO₃ → Fe(NO₃)₂ + Ag.', correct: true }
        ]
      },
      { id: 'g11_tf3', text: 'Cho các phát biểu về quy trình luyện gang:',
        statements: [
          { id: 'a', text: 'Nguyên liệu: quặng sắt (Fe₂O₃), than cốc, CaCO₃.', correct: true },
          { id: 'b', text: 'Chất khử trực tiếp oxi hoá Fe₂O₃ là CO.', correct: true },
          { id: 'c', text: 'Xỉ = CaO + SiO₂ → CaSiO₃.', correct: true },
          { id: 'd', text: 'Than cốc trực tiếp khử Fe₂O₃ thành Fe.', correct: false }
        ]
      },
      { id: 'g11_tf4', text: 'Cho các phát biểu về hợp kim và ăn mòn:',
        statements: [
          { id: 'a', text: 'Gang giòn hơn thép.', correct: true },
          { id: 'b', text: 'Đồng thanh (Cu-Sn) dùng đúc tượng.', correct: true },
          { id: 'c', text: 'Trong Fe-Sn, nếu xước: Sn bị ăn mòn trước.', correct: false },
          { id: 'd', text: 'Tôn (Fe-Zn) bị xước: Zn bị ăn mòn trước bảo vệ Fe.', correct: true }
        ]
      }
    ]
  },
  shortAnswer: { points: 1.5, pointPerQuestion: 0.25, title: 'PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (1,5 điểm)', instruction: 'Mỗi câu 0,25 điểm.',
    questions: [
      { id: 'g11_sa1', text: 'Cho 2,7g Al + HCl dư. Số mol H₂ thu được:', correctAnswer: '0,15', acceptedAnswers: ['0,15', '0.15'] },
      { id: 'g11_sa2', text: 'Fe(Z=26) có bao nhiêu lớp electron?', correctAnswer: '4', acceptedAnswers: ['4'] },
      { id: 'g11_sa3', text: 'Quặng boxit chứa chủ yếu oxide của nguyên tố nào? (ký hiệu)', correctAnswer: 'Al', acceptedAnswers: ['Al', 'al', 'AL'] },
      { id: 'g11_sa4', text: 'Cho 1,12g Fe + Cl₂ dư. Khối lượng FeCl₃ (gam):', correctAnswer: '3,25', acceptedAnswers: ['3,25', '3.25'] },
      { id: 'g11_sa5', text: 'Cu + FeCl₃(dư) → CuCl₂ + FeCl₂. Mỗi mol Cu khử bao nhiêu mol FeCl₃?', correctAnswer: '2', acceptedAnswers: ['2'] },
      { id: 'g11_sa6', text: 'Cho Mg + 2HCl → MgCl₂ + H₂. Cho 0,3 mol Mg. Thể tích H₂ (đkc, lít) là:', correctAnswer: '7,437', acceptedAnswers: ['7,437', '7.437', '7,44', '7.44'] }
    ]
  }
}
