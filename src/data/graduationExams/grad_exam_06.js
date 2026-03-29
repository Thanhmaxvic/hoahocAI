export const grad_exam_06 = {
  id: 'grad_06', title: 'Đề TN-TN số 6', type: 'graduation', duration: 50, totalPoints: 10, icon: 'fa-graduation-cap', summary: '18 TN + 4 Đ/S + 6 TL ngắn',
  multipleChoice: {
    points: 4.5, pointPerQuestion: 0.25,
    title: 'PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (4,5 điểm)',
    instruction: 'Mỗi câu 0,25 điểm. Chọn MỘT đáp án đúng nhất.',
    questions: [
      { id: 'g6_mc1', text: 'Phát biểu nào đúng về kim loại kiềm?', options: ['Có 2 electron lớp ngoài cùng', 'Có 1 electron lớp ngoài cùng', 'Có tính oxi hóa mạnh', 'Có bán kính nguyên tử nhỏ'], correct: 1 },
      { id: 'g6_mc2', text: 'Kim loại kiềm thổ gồm:', options: ['Li, Na, K', 'Be, Mg, Ca, Sr, Ba', 'Al, Ga, In', 'Cu, Zn, Fe'], correct: 1 },
      { id: 'g6_mc3', text: 'Kim loại nào có cấu trúc lập phương tâm diện?', options: ['Na', 'Fe(α)', 'Cu', 'K'], correct: 2 },
      { id: 'g6_mc4', text: 'Trong phản ứng: Mg + 2HCl → MgCl₂ + H₂, chất bị oxi hóa là:', options: ['Mg', 'HCl', 'MgCl₂', 'H₂'], correct: 0 },
      { id: 'g6_mc5', text: 'Hòa tan hoàn toàn m gam Fe trong HCl dư thu 2,479 lít H₂ (đkc). m là:', options: ['5,6', '2,8', '11,2', '8,4'], correct: 0 },
      { id: 'g6_mc6', text: 'Fe + CuSO₄ → FeSO₄ + Cu. Ion Cu²⁺ đóng vai trò:', options: ['Chất khử', 'Chất oxi hóa', 'Acid', 'Base'], correct: 1 },
      { id: 'g6_mc7', text: 'Kim loại Al KHÔNG tác dụng với dung dịch:', options: ['NaOH', 'HCl', 'H₂SO₄ loãng', 'NaCl'], correct: 3 },
      { id: 'g6_mc8', text: 'Cho bột Fe vào dung dịch AgNO₃ dư, sản phẩm cuối là:', options: ['Fe(NO₃)₂ + Ag', 'Fe(NO₃)₃ + Ag', 'Fe₂O₃ + Ag', 'FeSO₄ + Ag'], correct: 1 },
      { id: 'g6_mc9', text: 'Người ta dùng bình bằng nhôm để chứa dung dịch nào?', options: ['HCl', 'NaOH', 'HNO₃ đặc nguội', 'H₂SO₄ loãng'], correct: 2 },
      { id: 'g6_mc10', text: 'Phương pháp nào dùng để điều chế Mg?', options: ['Nhiệt luyện', 'Thủy luyện', 'Điện phân nóng chảy MgCl₂', 'Điện phân dung dịch'], correct: 2 },
      { id: 'g6_mc11', text: 'Ở anot trong điện phân dd CuSO₄ cực trơ thu:', options: ['Cu', 'H₂', 'O₂', 'SO₂'], correct: 2 },
      { id: 'g6_mc12', text: 'CuO + H₂ → Cu + H₂O thuộc phương pháp:', options: ['Thủy luyện', 'Nhiệt luyện', 'Điện phân', 'Nhiệt phân'], correct: 1 },
      { id: 'g6_mc13', text: 'Hợp kim Cu-Sn gọi là:', options: ['Đồng thau', 'Đồng thanh', 'Đuyra', 'Inox'], correct: 1 },
      { id: 'g6_mc14', text: 'Kim loại Fe không tác dụng với:', options: ['Cl₂', 'S', 'HCl', 'NaCl (dd)'], correct: 3 },
      { id: 'g6_mc15', text: 'Nối Fe với kim loại nào thì Fe KHÔNG bị ăn mòn trong HCl?', options: ['Cu', 'Sn', 'Pb', 'Zn'], correct: 3 },
      { id: 'g6_mc16', text: 'Vỏ đồ hộp (sắt tráng thiếc) bị xước, trong không khí ẩm:', options: ['Sn bị ăn mòn trước', 'Fe bị ăn mòn trước', 'Không bị ăn mòn', 'Cả hai như nhau'], correct: 1 },
      { id: 'g6_mc17', text: 'Muốn mạ Cu lên Fe, ở catot phải đặt:', options: ['Thanh Cu', 'Thanh Fe', 'Dung dịch CuSO₄', 'Dây Pt'], correct: 1 },
      { id: 'g6_mc18', text: 'Al₂O₃ là nguyên liệu chính trong sản xuất:', options: ['Gang', 'Thép', 'Nhôm', 'Đồng'], correct: 2 }
    ]
  },
  trueFalse: {
    points: 4.0, title: 'PHẦN II. TRẮC NGHIỆM ĐÚNG SAI (4,0 điểm)',
    instruction: 'Mỗi câu gồm 4 phát biểu (a,b,c,d). Đúng 1 ý: 0,1đ; 2 ý: 0,25đ; 3 ý: 0,5đ; 4 ý: 1,0đ.',
    questions: [
      { id: 'g6_tf1', text: 'Cho các phát biểu về kim loại kiềm:',
        statements: [
          { id: 'a', text: 'Kim loại kiềm có 1 electron lớp ngoài cùng.', correct: true },
          { id: 'b', text: 'Kim loại kiềm có tính khử mạnh nhất trong các kim loại.', correct: true },
          { id: 'c', text: 'Na, K đều có thể cắt bằng dao.', correct: true },
          { id: 'd', text: 'Kim loại kiềm có nhiệt độ nóng chảy rất cao.', correct: false }
        ]
      },
      { id: 'g6_tf2', text: 'Cho các phát biểu về phản ứng kim loại với phi kim:',
        statements: [
          { id: 'a', text: 'Fe + S → FeS (không tạo Fe₂S₃ khi dùng S).', correct: true },
          { id: 'b', text: '2Fe + 3Cl₂ → 2FeCl₃ (Cl₂ oxi hóa Fe lên +3).', correct: true },
          { id: 'c', text: 'Cu + S → CuS ở điều kiện thường.', correct: false },
          { id: 'd', text: '4Al + 3O₂ → 2Al₂O₃.', correct: true }
        ]
      },
      { id: 'g6_tf3', text: 'Cho các phát biểu về sản xuất gang:',
        statements: [
          { id: 'a', text: 'Gang được luyện trong lò cao.', correct: true },
          { id: 'b', text: 'Nguyên liệu: quặng sắt, than cốc, chất chảy.', correct: true },
          { id: 'c', text: 'Chất khử trực tiếp là C (than cốc).', correct: false },
          { id: 'd', text: 'Nhiệt độ trong lò cao có thể lên đến ~1800°C.', correct: true }
        ]
      },
      { id: 'g6_tf4', text: 'Cho các phát biểu về mạ điện:',
        statements: [
          { id: 'a', text: 'Mạ Ni lên Fe: catot là vật cần mạ (Fe).', correct: true },
          { id: 'b', text: 'Anot là kim loại dùng để mạ (Ni).', correct: true },
          { id: 'c', text: 'Dung dịch điện phân chứa muối của kim loại mạ (NiSO₄).', correct: true },
          { id: 'd', text: 'Lớp mạ bong ra nếu vật cần mạ không sạch.', correct: true }
        ]
      }
    ]
  },
  shortAnswer: {
    points: 1.5, pointPerQuestion: 0.25,
    title: 'PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (1,5 điểm)',
    instruction: 'Mỗi câu 0,25 điểm. Điền đáp án vào ô trống.',
    questions: [
      { id: 'g6_sa1', text: 'Cho 9,2g Na vào nước dư. Thể tích H₂ (đkc, lít) thu được là (làm tròn 0,01):', correctAnswer: '4,96', acceptedAnswers: ['4,96', '4.96', '4,958', '4.958'] },
      { id: 'g6_sa2', text: 'Hợp kim Cu-Sn gọi là:', correctAnswer: 'Đồng thanh', acceptedAnswers: ['Đồng thanh', 'đồng thanh', 'dong thanh'] },
      { id: 'g6_sa3', text: 'Cho 2,7g Al tác dụng hoàn toàn với Cl₂ dư. Khối lượng AlCl₃ (gam) là:', correctAnswer: '13,35', acceptedAnswers: ['13,35', '13.35', '13,4', '13.4'] },
      { id: 'g6_sa4', text: 'Fe(Z=26) mất 3e tạo ion Fe³⁺ có cấu hình electron [Ar]3d^x. x là:', correctAnswer: '5', acceptedAnswers: ['5'] },
      { id: 'g6_sa5', text: 'Điện phân dd CuSO₄ thu 6,4g Cu. Thể tích O₂ (đkc, lít) ở anot là:', correctAnswer: '1,24', acceptedAnswers: ['1,24', '1.24', '1,240', '1.240', '1,2395', '1.2395'] },
      { id: 'g6_sa6', text: 'Cho Fe vào dd CuSO₄. Khối lượng thanh Fe tăng 4g. Số mol Fe phản ứng là:', correctAnswer: '0,5', acceptedAnswers: ['0,5', '0.5', '0,50'] }
    ]
  }
}
