export const grad_exam_10 = {
  id: 'grad_10', title: 'Đề TN-TN số 10', type: 'graduation', duration: 50, totalPoints: 10, icon: 'fa-graduation-cap', summary: '18 TN + 4 Đ/S + 6 TL ngắn',
  multipleChoice: { points: 4.5, pointPerQuestion: 0.25, title: 'PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (4,5 điểm)', instruction: 'Mỗi câu 0,25 điểm. Chọn MỘT đáp án đúng nhất.',
    questions: [
      { id: 'g10_mc1', text: 'Câu nào đúng về tính chất của hợp kim?', options: ['Hợp kim dẻo hơn KL nguyên chất', 'Hợp kim dẫn điện tốt hơn', 'Hợp kim cứng hơn KL nguyên chất', 'Hợp kim nhẹ hơn KL thành phần'], correct: 2 },
      { id: 'g10_mc2', text: 'Thép không gỉ (inox) chứa chủ yếu:', options: ['Fe, Mn, Si', 'Fe, Cr, Ni', 'Fe, C, S', 'Al, Cu, Mg'], correct: 1 },
      { id: 'g10_mc3', text: 'Cho Fe vào dd CuSO₄. Sau phản ứng, dd chứa:', options: ['FeSO₄', 'CuSO₄', 'FeSO₄ + CuSO₄', 'Fe₂(SO₄)₃'], correct: 0 },
      { id: 'g10_mc4', text: 'Kim loại nào sau đây phản ứng với H₂SO₄ đặc nóng tạo SO₂?', options: ['Cu', 'Au', 'Pt', 'Ag(dư)'], correct: 0 },
      { id: 'g10_mc5', text: 'Al + HNO₃ đặc nguội →', options: ['Al(NO₃)₃ + NO₂ + H₂O', 'Al(NO₃)₃ + NO + H₂O', 'Không phản ứng (thụ động)', 'Al₂O₃ + NO'], correct: 2 },
      { id: 'g10_mc6', text: 'Cho Mg vào dd CuSO₄ và FeSO₄. Mg phản ứng với ion nào trước?', options: ['Fe²⁺', 'Cu²⁺', 'Cả hai cùng lúc', 'SO₄²⁻'], correct: 1 },
      { id: 'g10_mc7', text: 'Cho Cu vào dd AgNO₃ dư. Dd sau phản ứng có:', options: ['Cu(NO₃)₂, AgNO₃', 'Cu(NO₃)₂', 'AgNO₃', 'Cu(NO₃)₂, Ag'], correct: 0 },
      { id: 'g10_mc8', text: 'Kim loại Ag có khả năng đặc biệt:', options: ['Cứng nhất', 'Nhẹ nhất', 'Dẫn điện tốt nhất', 'Nhiệt độ nóng chảy cao nhất'], correct: 2 },
      { id: 'g10_mc9', text: 'Chất nào sau đây KHÔNG thể dùng làm chất khử trong nhiệt luyện?', options: ['CO', 'H₂', 'C', 'CuO'], correct: 3 },
      { id: 'g10_mc10', text: 'Điện phân dd AgNO₃ cực trơ. Ở catot thu:', options: ['Ag', 'O₂', 'H₂', 'NO₂'], correct: 0 },
      { id: 'g10_mc11', text: 'Trong bình chứa dd CuSO₄, cho Fe vào. Thanh Fe:', options: ['Tăng khối lượng', 'Giảm khối lượng', 'Không đổi', 'Bị ăn mòn'], correct: 0 },
      { id: 'g10_mc12', text: 'Phản ứng nhiệt nhôm tỏa nhiệt lượng lớn. Ứng dụng:', options: ['Điều chế gang', 'Hàn đường ray', 'Sản xuất phân bón', 'Mạ kim loại'], correct: 1 },
      { id: 'g10_mc13', text: 'Quặng đôlômit có công thức:', options: ['FeCO₃', 'CaCO₃.MgCO₃', 'Al₂O₃.2H₂O', 'CuFeS₂'], correct: 1 },
      { id: 'g10_mc14', text: 'Gang xám dùng để:', options: ['Luyện thép', 'Đúc bệ máy, ống nước', 'Làm dây điện', 'Làm kim cương nhân tạo'], correct: 1 },
      { id: 'g10_mc15', text: 'Ăn mòn nào xảy ra nhanh hơn?', options: ['Hóa học', 'Điện hóa', 'Như nhau', 'Tùy kim loại'], correct: 1 },
      { id: 'g10_mc16', text: 'Fe-Zn trong dd NaCl. Cực âm là:', options: ['Fe', 'Zn', 'Cả hai', 'Không xác định'], correct: 1 },
      { id: 'g10_mc17', text: 'Mạ kẽm lên sắt: vật cần mạ (Fe) đặt ở:', options: ['Anot', 'Catot', 'Giữa hai cực', 'Bên ngoài'], correct: 1 },
      { id: 'g10_mc18', text: 'Kim loại Ca phản ứng với nước tạo:', options: ['CaO + H₂', 'Ca(OH)₂ + H₂', 'CaCl₂ + H₂', 'Ca(OH)₂ + O₂'], correct: 1 }
    ]
  },
  trueFalse: { points: 4.0, title: 'PHẦN II. TRẮC NGHIỆM ĐÚNG SAI (4,0 điểm)', instruction: 'Mỗi câu gồm 4 phát biểu (a,b,c,d). Đúng 1 ý: 0,1đ; 2 ý: 0,25đ; 3 ý: 0,5đ; 4 ý: 1,0đ.',
    questions: [
      { id: 'g10_tf1', text: 'Phát biểu về tính chất hóa học chung:',
        statements: [
          { id: 'a', text: 'Kim loại phản ứng với phi kim: 2Mg + O₂ → 2MgO.', correct: true },
          { id: 'b', text: 'Kim loại phản ứng với acid: Zn + H₂SO₄ → ZnSO₄ + H₂.', correct: true },
          { id: 'c', text: 'Kim loại phản ứng với nước: Cu + H₂O → Cu(OH)₂ + H₂.', correct: false },
          { id: 'd', text: 'Kim loại phản ứng với dd muối: Fe + CuSO₄ → FeSO₄ + Cu.', correct: true }
        ]
      },
      { id: 'g10_tf2', text: 'Phát biểu về ion Fe:',
        statements: [
          { id: 'a', text: 'Fe²⁺ có tính oxi hóa yếu hơn Fe³⁺.', correct: true },
          { id: 'b', text: 'Fe²⁺ có thể bị oxi hóa thành Fe³⁺.', correct: true },
          { id: 'c', text: 'Fe³⁺ có thể bị khử bởi Cu thành Fe²⁺.', correct: true },
          { id: 'd', text: 'Fe³⁺ không có tính oxi hóa.', correct: false }
        ]
      },
      { id: 'g10_tf3', text: 'Phát biểu về sản xuất kim loại:',
        statements: [
          { id: 'a', text: 'Sản xuất gang bằng cách khử Fe₂O₃ bằng CO trong lò cao.', correct: true },
          { id: 'b', text: 'Luyện thép bằng cách oxi hóa bớt C trong gang.', correct: true },
          { id: 'c', text: 'Al được điều chế bằng nhiệt luyện Al₂O₃.', correct: false },
          { id: 'd', text: 'Cu được điều chế bằng cả 3 phương pháp.', correct: true }
        ]
      },
      { id: 'g10_tf4', text: 'Phát biểu về ứng dụng hợp kim:',
        statements: [
          { id: 'a', text: 'Đuyra (Al-Cu-Mg-Mn) dùng trong hàng không vì nhẹ.', correct: true },
          { id: 'b', text: 'Đồng thau (Cu-Zn) có tính chống ăn mòn tốt.', correct: true },
          { id: 'c', text: 'Inox (Fe-Cr-Ni) không bị gỉ.', correct: true },
          { id: 'd', text: 'Gang dẻo hơn thép.', correct: false }
        ]
      }
    ]
  },
  shortAnswer: { points: 1.5, pointPerQuestion: 0.25, title: 'PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (1,5 điểm)', instruction: 'Mỗi câu 0,25 điểm.',
    questions: [
      { id: 'g10_sa1', text: 'Cho 0,2 mol Mg tác dụng hoàn toàn với HCl dư. Khối lượng MgCl₂ (gam):', correctAnswer: '19', acceptedAnswers: ['19', '19,0', '19.0'] },
      { id: 'g10_sa2', text: 'Ca(Z=20) thuộc nhóm nào trong bảng tuần hoàn?', correctAnswer: 'IIA', acceptedAnswers: ['IIA', 'IIa', 'iia', '2A', 'II A'] },
      { id: 'g10_sa3', text: 'Khối lượng riêng của Al (g/cm³) là:', correctAnswer: '2,7', acceptedAnswers: ['2,7', '2.7', '2,70'] },
      { id: 'g10_sa4', text: 'Cho 3,2g Cu + AgNO₃ dư. Khối lượng Ag (gam):', correctAnswer: '10,8', acceptedAnswers: ['10,8', '10.8', '10,80'] },
      { id: 'g10_sa5', text: 'Fe₂O₃ + 3CO → 2Fe + 3CO₂. Khối lượng Fe thu được từ 16g Fe₂O₃ (gam):', correctAnswer: '11,2', acceptedAnswers: ['11,2', '11.2', '11,20'] },
      { id: 'g10_sa6', text: 'Cho 4g NaOH vào dd Al₂(SO₄)₃ dư. Khối lượng kết tủa Al(OH)₃ (gam):', correctAnswer: '2,6', acceptedAnswers: ['2,6', '2.6', '2,60'] }
    ]
  }
}
