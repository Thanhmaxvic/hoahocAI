export const grad_exam_03 = {
  id: 'grad_03',
  title: 'Đề TN-TN số 3',
  type: 'graduation',
  duration: 50,
  totalPoints: 10,
  icon: 'fa-graduation-cap',
  summary: '18 TN + 4 Đ/S + 6 TL ngắn',

  multipleChoice: {
    points: 4.5,
    pointPerQuestion: 0.25,
    title: 'PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (4,5 điểm)',
    instruction: 'Mỗi câu 0,25 điểm. Chọn MỘT đáp án đúng nhất.',
    questions: [
      { id: 'g3_mc1', text: 'Dãy kim loại xếp theo chiều tăng dần tính khử:', options: ['Ag, Cu, Fe, Al, Mg', 'Mg, Al, Fe, Cu, Ag', 'Al, Mg, Fe, Cu, Ag', 'Ag, Cu, Al, Fe, Mg'], correct: 0 },
      { id: 'g3_mc2', text: 'Kim loại nào chỉ thể hiện số oxi hóa +1 trong hợp chất?', options: ['Fe', 'Cu', 'Na', 'Al'], correct: 2 },
      { id: 'g3_mc3', text: 'Cho Mg + 2HCl → MgCl₂ + H₂. Chất oxi hóa là:', options: ['Mg', 'HCl', 'MgCl₂', 'H₂'], correct: 1 },
      { id: 'g3_mc4', text: 'Kim loại nào tác dụng được với dung dịch FeCl₃ nhưng không tác dụng với dung dịch HCl?', options: ['Zn', 'Fe', 'Cu', 'Mg'], correct: 2 },
      { id: 'g3_mc5', text: 'Trong các phản ứng hóa học, kim loại luôn thể hiện:', options: ['Tính oxi hóa', 'Tính khử', 'Tính acid', 'Cả tính oxi hóa và khử'], correct: 1 },
      { id: 'g3_mc6', text: 'Kim loại Al tan được trong dung dịch nào?', options: ['NaCl', 'Na₂SO₄', 'NaOH', 'KNO₃'], correct: 2 },
      { id: 'g3_mc7', text: 'Cho Na vào dung dịch CuSO₄ sẽ xảy ra hiện tượng:', options: ['Cu bám vào Na', 'Sủi bọt khí, xuất kết tủa xanh', 'Chỉ có bọt khí', 'Không có hiện tượng'], correct: 1 },
      { id: 'g3_mc8', text: 'Fe tác dụng với H₂SO₄ đặc nóng dư tạo:', options: ['FeSO₄ + H₂', 'FeSO₄ + SO₂', 'Fe₂(SO₄)₃ + SO₂', 'Fe₂(SO₄)₃ + H₂'], correct: 2 },
      { id: 'g3_mc9', text: 'Phương pháp điện phân nóng chảy dùng để điều chế:', options: ['Cu, Ag', 'Fe, Pb', 'Na, Al, Mg', 'Sn, Ni'], correct: 2 },
      { id: 'g3_mc10', text: 'Trong quá trình điện phân, ở catot xảy ra:', options: ['Sự oxi hóa', 'Sự khử', 'Sự trung hòa', 'Sự phân hủy'], correct: 1 },
      { id: 'g3_mc11', text: 'Phản ứng nào sau đây thuộc phương pháp nhiệt luyện?', options: ['NaCl(nc) → Na + ½Cl₂', 'Fe + CuSO₄ → FeSO₄ + Cu', 'CuO + CO → Cu + CO₂', 'CuSO₄(dd) + H₂O → Cu + ...'], correct: 2 },
      { id: 'g3_mc12', text: 'Quặng boxit chứa chủ yếu:', options: ['Fe₂O₃', 'Al₂O₃', 'CuFeS₂', 'ZnS'], correct: 1 },
      { id: 'g3_mc13', text: 'Hợp kim nào được dùng phổ biến trong ngành hàng không?', options: ['Gang', 'Thép', 'Đuyra', 'Đồng thau'], correct: 2 },
      { id: 'g3_mc14', text: 'Đồng thau là hợp kim của:', options: ['Cu-Zn', 'Cu-Sn', 'Cu-Ni', 'Cu-Al'], correct: 0 },
      { id: 'g3_mc15', text: 'Điều kiện nào để xảy ra ăn mòn điện hóa?', options: ['Nhiệt độ cao', 'Có chất xúc tác', 'Hai điện cực khác bản chất, tiếp xúc, trong dd điện li', 'Áp suất cao'], correct: 2 },
      { id: 'g3_mc16', text: 'Trong pin điện hóa Zn-Cu, kim loại nào là cực âm?', options: ['Cu', 'Zn', 'Cả hai', 'Không xác định'], correct: 1 },
      { id: 'g3_mc17', text: 'Tại cực dương (anot) của pin Zn-Cu xảy ra:', options: ['Zn → Zn²⁺ + 2e', 'Cu²⁺ + 2e → Cu', 'H₂O → H⁺ + OH⁻', '2Cl⁻ → Cl₂ + 2e'], correct: 1 },
      { id: 'g3_mc18', text: 'Kim loại nào phản ứng mãnh liệt nhất với nước?', options: ['Na', 'K', 'Ca', 'Fe'], correct: 1 }
    ]
  },

  trueFalse: {
    points: 4.0,
    title: 'PHẦN II. TRẮC NGHIỆM ĐÚNG SAI (4,0 điểm)',
    instruction: 'Mỗi câu gồm 4 phát biểu (a,b,c,d). Đúng 1 ý: 0,1đ; 2 ý: 0,25đ; 3 ý: 0,5đ; 4 ý: 1,0đ.',
    questions: [
      {
        id: 'g3_tf1', text: 'Cho các phát biểu về dãy hoạt động hóa học:',
        statements: [
          { id: 'a', text: 'Thứ tự: K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, H, Cu, Ag, Au.', correct: true },
          { id: 'b', text: 'Kim loại đứng trước H đẩy được H₂ ra khỏi HCl.', correct: true },
          { id: 'c', text: 'Cu đẩy được Ag ra khỏi dung dịch AgNO₃.', correct: true },
          { id: 'd', text: 'Fe đẩy được Na ra khỏi dung dịch NaCl.', correct: false }
        ]
      },
      {
        id: 'g3_tf2', text: 'Cho các phát biểu về phản ứng của kim loại với acid:',
        statements: [
          { id: 'a', text: 'Cu tan trong HNO₃ loãng tạo Cu(NO₃)₂ + NO + H₂O.', correct: true },
          { id: 'b', text: 'Fe + H₂SO₄ loãng → FeSO₄ + H₂↑.', correct: true },
          { id: 'c', text: 'Au tan được trong nước cường toan (HNO₃ + 3HCl).', correct: true },
          { id: 'd', text: 'Mg + HNO₃ rất loãng có thể tạo MgNO₃ và NH₄NO₃.', correct: false }
        ]
      },
      {
        id: 'g3_tf3', text: 'Cho các phát biểu về điều chế kim loại:',
        statements: [
          { id: 'a', text: 'Al₂O₃ có nhiệt độ nóng chảy rất cao (>2000°C).', correct: true },
          { id: 'b', text: 'Criolit giúp tăng tính dẫn điện của hỗn hợp điện phân.', correct: true },
          { id: 'c', text: 'Phương pháp thủy luyện chỉ dùng cho kim loại hoạt động mạnh.', correct: false },
          { id: 'd', text: 'Điện phân NaCl nóng chảy thu được Na và Cl₂.', correct: true }
        ]
      },
      {
        id: 'g3_tf4', text: 'Cho các phát biểu về hợp kim:',
        statements: [
          { id: 'a', text: 'Hợp kim có nhiệt độ nóng chảy thấp hơn kim loại nguyên chất.', correct: true },
          { id: 'b', text: 'Hợp kim dẫn điện tốt hơn kim loại nguyên chất.', correct: false },
          { id: 'c', text: 'Gang cứng và giòn hơn thép.', correct: true },
          { id: 'd', text: 'Đuyra có thành phần chính là Al, Cu, Mg, Mn.', correct: true }
        ]
      }
    ]
  },

  shortAnswer: {
    points: 1.5,
    pointPerQuestion: 0.25,
    title: 'PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (1,5 điểm)',
    instruction: 'Mỗi câu 0,25 điểm. Điền đáp án vào ô trống.',
    questions: [
      { id: 'g3_sa1', text: 'Cho 6,5g Zn tác dụng hoàn toàn với HCl dư. Thể tích H₂ (đkc, lít) là:', correctAnswer: '2,479', acceptedAnswers: ['2,479', '2.479', '2,48', '2.48'] },
      { id: 'g3_sa2', text: 'Cho 2,3g Na vào nước dư. Khối lượng NaOH (gam) thu được là:', correctAnswer: '4', acceptedAnswers: ['4', '4,0', '4.0', '4,00'] },
      { id: 'g3_sa3', text: 'Hợp kim Cu-Zn có tên gọi là gì?', correctAnswer: 'Đồng thau', acceptedAnswers: ['Đồng thau', 'đồng thau', 'dong thau', 'Dong thau'] },
      { id: 'g3_sa4', text: 'Điện phân nóng chảy MgCl₂ thu được 4,8g Mg. Số mol Cl₂ thoát ra là:', correctAnswer: '0,2', acceptedAnswers: ['0,2', '0.2', '0,20'] },
      { id: 'g3_sa5', text: 'Cho Cu vào AgNO₃ dư. 1 mol Cu tạo bao nhiêu mol Ag?', correctAnswer: '2', acceptedAnswers: ['2', '2,0', '2.0'] },
      { id: 'g3_sa6', text: 'Kim loại dẫn điện tốt nhất là gì? (Ký hiệu hóa học)', correctAnswer: 'Ag', acceptedAnswers: ['Ag', 'ag', 'AG'] }
    ]
  }
}
