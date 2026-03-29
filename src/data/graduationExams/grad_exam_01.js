export const grad_exam_01 = {
  id: 'grad_01',
  title: 'Đề TN-TN số 1',
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
      { id: 'g1_mc1', text: 'Kim loại nào sau đây có độ cứng lớn nhất?', options: ['Fe', 'W', 'Cu', 'Cr'], correct: 3 },
      { id: 'g1_mc2', text: 'Kim loại nào sau đây dẫn điện tốt nhất?', options: ['Au', 'Ag', 'Cu', 'Al'], correct: 1 },
      { id: 'g1_mc3', text: 'Kim loại nào sau đây ở thể lỏng ở điều kiện thường?', options: ['Na', 'Hg', 'K', 'Ga'], correct: 1 },
      { id: 'g1_mc4', text: 'Tính chất hóa học đặc trưng của kim loại là:', options: ['Tính oxi hóa', 'Tính khử', 'Tính acid', 'Tính base'], correct: 1 },
      { id: 'g1_mc5', text: 'Kim loại nào sau đây không tác dụng với dung dịch HCl?', options: ['Fe', 'Zn', 'Cu', 'Mg'], correct: 2 },
      { id: 'g1_mc6', text: 'Kim loại nào phản ứng được với nước ở điều kiện thường?', options: ['Fe', 'Cu', 'Na', 'Ag'], correct: 2 },
      { id: 'g1_mc7', text: 'Cho Fe tác dụng với dung dịch HCl, sản phẩm muối là:', options: ['FeCl₃', 'FeCl₂', 'Fe₂(SO₄)₃', 'FeSO₄'], correct: 1 },
      { id: 'g1_mc8', text: 'Kim loại Cu tác dụng được với dung dịch nào?', options: ['HCl loãng', 'H₂SO₄ loãng', 'HNO₃ loãng', 'NaOH'], correct: 2 },
      { id: 'g1_mc9', text: 'Fe bị thụ động hóa trong dung dịch nào?', options: ['HCl đặc', 'H₂SO₄ loãng', 'HNO₃ đặc nguội', 'NaOH'], correct: 2 },
      { id: 'g1_mc10', text: 'Nguyên tắc chung để điều chế kim loại là:', options: ['Oxi hóa ion kim loại', 'Khử ion kim loại thành nguyên tử', 'Nhiệt phân muối', 'Hòa tan quặng'], correct: 1 },
      { id: 'g1_mc11', text: 'Kim loại Al được điều chế bằng phương pháp:', options: ['Nhiệt luyện', 'Thủy luyện', 'Điện phân nóng chảy', 'Điện phân dung dịch'], correct: 2 },
      { id: 'g1_mc12', text: 'Chất khử thường dùng trong nhiệt luyện là:', options: ['O₂, Cl₂', 'CO, H₂, C, Al', 'HCl, H₂SO₄', 'NaOH, KOH'], correct: 1 },
      { id: 'g1_mc13', text: 'Vai trò của criolit trong điện phân Al₂O₃ là:', options: ['Làm chất xúc tác', 'Hạ nhiệt độ nóng chảy', 'Làm chất oxi hóa', 'Tạo hợp kim nhôm'], correct: 1 },
      { id: 'g1_mc14', text: 'Gang là hợp kim của Fe với C, hàm lượng C là:', options: ['Dưới 2%', '2% - 5%', 'Trên 5%', 'Trên 10%'], correct: 1 },
      { id: 'g1_mc15', text: 'Ăn mòn điện hóa khác ăn mòn hóa học ở điểm nào?', options: ['Không cần chất oxi hóa', 'Có phát sinh dòng điện', 'Không phải phản ứng oxi hóa khử', 'Xảy ra ở nhiệt độ cao'], correct: 1 },
      { id: 'g1_mc16', text: 'Để bảo vệ ống thép ngầm, nên nối ống thép với:', options: ['Tấm Cu', 'Tấm Zn', 'Tấm Ag', 'Tấm Sn'], correct: 1 },
      { id: 'g1_mc17', text: 'Kim loại nào sau đây có nhiệt độ nóng chảy cao nhất?', options: ['Fe', 'W', 'Cu', 'Cr'], correct: 1 },
      { id: 'g1_mc18', text: 'Tính chất vật lí chung của kim loại gây ra bởi:', options: ['Liên kết ion', 'Liên kết cộng hóa trị', 'Electron tự do', 'Khối lượng nguyên tử'], correct: 2 }
    ]
  },

  trueFalse: {
    points: 4.0,
    title: 'PHẦN II. TRẮC NGHIỆM ĐÚNG SAI (4,0 điểm)',
    instruction: 'Mỗi câu gồm 4 phát biểu (a,b,c,d). Đúng 1 ý: 0,1đ; 2 ý: 0,25đ; 3 ý: 0,5đ; 4 ý: 1,0đ.',
    questions: [
      {
        id: 'g1_tf1', text: 'Cho các phát biểu sau về tính chất vật lí của kim loại:',
        statements: [
          { id: 'a', text: 'Kim loại Cr có độ cứng lớn nhất.', correct: true },
          { id: 'b', text: 'Kim loại Ag dẫn điện tốt nhất.', correct: true },
          { id: 'c', text: 'Kim loại Os có khối lượng riêng lớn nhất.', correct: true },
          { id: 'd', text: 'Kim loại Cu có nhiệt độ nóng chảy cao nhất.', correct: false }
        ]
      },
      {
        id: 'g1_tf2', text: 'Cho các phát biểu sau về tính chất hóa học của kim loại:',
        statements: [
          { id: 'a', text: 'Kim loại Fe tác dụng với HCl tạo FeCl₂.', correct: true },
          { id: 'b', text: 'Kim loại Cu tác dụng với H₂SO₄ loãng tạo CuSO₄.', correct: false },
          { id: 'c', text: 'Kim loại Na tác dụng với nước tạo NaOH và H₂.', correct: true },
          { id: 'd', text: 'Fe tác dụng với Cl₂ dư tạo FeCl₃.', correct: true }
        ]
      },
      {
        id: 'g1_tf3', text: 'Cho các phát biểu sau về điều chế kim loại:',
        statements: [
          { id: 'a', text: 'Kim loại K được điều chế bằng điện phân nóng chảy KCl.', correct: true },
          { id: 'b', text: 'Phương pháp thủy luyện dùng Fe để khử Cu²⁺ trong dung dịch CuSO₄.', correct: true },
          { id: 'c', text: 'Điện phân dung dịch NaCl thu được Na ở catot.', correct: false },
          { id: 'd', text: 'Nhiệt luyện CuO bằng CO: CuO + CO → Cu + CO₂.', correct: true }
        ]
      },
      {
        id: 'g1_tf4', text: 'Cho các phát biểu sau về ăn mòn kim loại:',
        statements: [
          { id: 'a', text: 'Fe-Cu trong không khí ẩm: Fe bị ăn mòn trước.', correct: true },
          { id: 'b', text: 'Fe-Zn trong HCl: Zn bị ăn mòn trước, bảo vệ Fe.', correct: true },
          { id: 'c', text: 'Ăn mòn điện hóa không phát sinh dòng điện.', correct: false },
          { id: 'd', text: 'Sơn, mạ là phương pháp bảo vệ bề mặt kim loại.', correct: true }
        ]
      }
    ]
  },

  shortAnswer: {
    points: 1.5,
    pointPerQuestion: 0.25,
    title: 'PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (1,5 điểm)',
    instruction: 'Mỗi câu 0,25 điểm. Điền đáp án (số hoặc chữ) vào ô trống.',
    questions: [
      { id: 'g1_sa1', text: 'Cho 11,2g Fe tác dụng hoàn toàn với Cl₂ dư. Tính khối lượng muối FeCl₃ thu được (gam).', correctAnswer: '32,5', acceptedAnswers: ['32,5', '32.5', '32,50'] },
      { id: 'g1_sa2', text: 'Cho 4,8g Mg tác dụng hoàn toàn với HCl dư. Số mol H₂ thu được là:', correctAnswer: '0,2', acceptedAnswers: ['0,2', '0.2', '0,20'] },
      { id: 'g1_sa3', text: 'Kim loại nào nhẹ nhất? (Viết ký hiệu hóa học)', correctAnswer: 'Li', acceptedAnswers: ['Li', 'li', 'LI'] },
      { id: 'g1_sa4', text: 'Hàm lượng C trong thép là bao nhiêu phần trăm (ghi số, không ghi %)? Ghi giá trị lớn nhất.', correctAnswer: '2', acceptedAnswers: ['2', '2,0', '2.0'] },
      { id: 'g1_sa5', text: 'Cho 5,4g Al tác dụng hoàn toàn với NaOH dư. Số mol H₂ thu được là:', correctAnswer: '0,3', acceptedAnswers: ['0,3', '0.3', '0,30'] },
      { id: 'g1_sa6', text: 'Ngâm Fe trong CuSO₄. Mỗi mol Fe phản ứng, khối lượng thanh Fe tăng bao nhiêu gam?', correctAnswer: '8', acceptedAnswers: ['8', '8,0', '8.0'] }
    ]
  }
}
