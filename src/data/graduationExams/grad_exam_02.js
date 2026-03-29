export const grad_exam_02 = {
  id: 'grad_02',
  title: 'Đề TN-TN số 2',
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
      { id: 'g2_mc1', text: 'Kim loại nào dẻo nhất trong tất cả các kim loại?', options: ['Ag', 'Au', 'Cu', 'Al'], correct: 1 },
      { id: 'g2_mc2', text: 'Cấu hình electron lớp ngoài cùng của Na (Z=11) là:', options: ['3s¹', '3s²', '2s²2p⁶', '3s²3p¹'], correct: 0 },
      { id: 'g2_mc3', text: 'Liên kết kim loại được hình thành do:', options: ['Sự góp chung electron', 'Lực hút tĩnh điện', 'Electron tự do và ion dương', 'Lực Van der Waals'], correct: 2 },
      { id: 'g2_mc4', text: 'Kim loại nào không phản ứng với H₂SO₄ đặc nguội?', options: ['Cu', 'Zn', 'Al', 'Ag'], correct: 2 },
      { id: 'g2_mc5', text: 'Cho Zn vào dung dịch CuSO₄, hiện tượng là:', options: ['Zn tan, Cu đỏ bám vào', 'Không có hiện tượng', 'Có khí thoát ra', 'Dung dịch đậm màu hơn'], correct: 0 },
      { id: 'g2_mc6', text: 'Cho Fe + 2HCl → FeCl₂ + H₂↑. Fe đóng vai trò:', options: ['Chất oxi hóa', 'Chất khử', 'Acid', 'Base'], correct: 1 },
      { id: 'g2_mc7', text: 'Dãy gồm các kim loại đều tác dụng với nước ở nhiệt độ thường:', options: ['Na, K, Ca', 'Na, Fe, Cu', 'K, Zn, Al', 'Ca, Ag, Au'], correct: 0 },
      { id: 'g2_mc8', text: '2Fe + 3Cl₂ → 2FeCl₃. Số oxi hóa của Fe trong sản phẩm là:', options: ['+1', '+2', '+3', '0'], correct: 2 },
      { id: 'g2_mc9', text: 'Phương pháp nào dùng để điều chế Na?', options: ['Nhiệt luyện', 'Thủy luyện', 'Điện phân nóng chảy NaCl', 'Điện phân dung dịch'], correct: 2 },
      { id: 'g2_mc10', text: 'Phương pháp thủy luyện dùng để tách kim loại:', options: ['Na, K', 'Al, Mg', 'Cu, Ag, Au', 'Ca, Ba'], correct: 2 },
      { id: 'g2_mc11', text: 'Phản ứng nhiệt nhôm: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe dùng để:', options: ['Điều chế Al', 'Hàn đường ray', 'Sản xuất gang', 'Mạ Fe'], correct: 1 },
      { id: 'g2_mc12', text: 'Điện phân dung dịch CuSO₄, ở catot thu được:', options: ['Cu', 'O₂', 'H₂', 'Cu(OH)₂'], correct: 0 },
      { id: 'g2_mc13', text: 'Thép là hợp kim của Fe với C, hàm lượng C là:', options: ['Dưới 2%', '2-5%', 'Trên 5%', 'Trên 10%'], correct: 0 },
      { id: 'g2_mc14', text: 'Đuyra là hợp kim chủ yếu của:', options: ['Fe', 'Cu', 'Al', 'Zn'], correct: 2 },
      { id: 'g2_mc15', text: 'Điều kiện KHÔNG cần cho ăn mòn điện hóa:', options: ['Hai điện cực khác bản chất', 'Tiếp xúc nhau', 'Trong dd chất điện li', 'Nhiệt độ trên 100°C'], correct: 3 },
      { id: 'g2_mc16', text: 'Gắn Zn vào vỏ tàu thép là phương pháp:', options: ['Bảo vệ bề mặt', 'Bảo vệ điện hóa', 'Mạ điện', 'Sơn phủ'], correct: 1 },
      { id: 'g2_mc17', text: 'Trong cặp Fe-C tiếp xúc trong chất điện li, kim loại bị ăn mòn là:', options: ['C', 'Fe', 'Cả hai', 'Không kim loại nào'], correct: 1 },
      { id: 'g2_mc18', text: 'Kim loại nào có khối lượng riêng nhỏ nhất?', options: ['Na', 'K', 'Li', 'Al'], correct: 2 }
    ]
  },

  trueFalse: {
    points: 4.0,
    title: 'PHẦN II. TRẮC NGHIỆM ĐÚNG SAI (4,0 điểm)',
    instruction: 'Mỗi câu gồm 4 phát biểu (a,b,c,d). Đúng 1 ý: 0,1đ; 2 ý: 0,25đ; 3 ý: 0,5đ; 4 ý: 1,0đ.',
    questions: [
      {
        id: 'g2_tf1', text: 'Cho các phát biểu về kim loại:',
        statements: [
          { id: 'a', text: 'Au dẻo nhất trong các kim loại.', correct: true },
          { id: 'b', text: 'Al dẫn điện tốt hơn Cu.', correct: false },
          { id: 'c', text: 'Li nhẹ nhất trong các kim loại.', correct: true },
          { id: 'd', text: 'W có nhiệt độ nóng chảy cao nhất.', correct: true }
        ]
      },
      {
        id: 'g2_tf2', text: 'Cho các phát biểu về phản ứng hóa học:',
        statements: [
          { id: 'a', text: 'Fe + 2HCl → FeCl₂ + H₂ — Fe là chất khử.', correct: true },
          { id: 'b', text: 'Cu + H₂SO₄ loãng → CuSO₄ + H₂ — phản ứng xảy ra.', correct: false },
          { id: 'c', text: '2Na + 2H₂O → 2NaOH + H₂ — đây là phản ứng oxi hóa khử.', correct: true },
          { id: 'd', text: 'Al + NaOH + H₂O → NaAlO₂ + 3/2 H₂ — Al tan trong NaOH.', correct: true }
        ]
      },
      {
        id: 'g2_tf3', text: 'Cho các phát biểu về điều chế kim loại:',
        statements: [
          { id: 'a', text: 'Nguyên tắc điều chế kim loại là khử M^n+ thành M.', correct: true },
          { id: 'b', text: 'Mg được điều chế bằng nhiệt luyện MgO.', correct: false },
          { id: 'c', text: 'Cu có thể điều chế bằng thủy luyện, nhiệt luyện, điện phân.', correct: true },
          { id: 'd', text: 'Ở catot của quá trình điện phân, xảy ra sự khử.', correct: true }
        ]
      },
      {
        id: 'g2_tf4', text: 'Cho các phát biểu về ăn mòn và hợp kim:',
        statements: [
          { id: 'a', text: 'Gang chứa 2-5% C, thép chứa dưới 2% C.', correct: true },
          { id: 'b', text: 'Hợp kim thường cứng hơn kim loại nguyên chất.', correct: true },
          { id: 'c', text: 'Ăn mòn hóa học có phát sinh dòng điện.', correct: false },
          { id: 'd', text: 'Gắn Zn vào vỏ tàu thép là phương pháp catot hi sinh.', correct: false }
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
      { id: 'g2_sa1', text: 'Cho 2,4g Mg tác dụng hoàn toàn với HCl dư. Thể tích H₂ (đkc) là bao nhiêu lít? (Làm tròn 0,001)', correctAnswer: '2,479', acceptedAnswers: ['2,479', '2.479', '2,48', '2.48'] },
      { id: 'g2_sa2', text: 'Kim loại cứng nhất là gì? (Viết ký hiệu hóa học)', correctAnswer: 'Cr', acceptedAnswers: ['Cr', 'cr', 'CR'] },
      { id: 'g2_sa3', text: 'Cho 5,6g Fe tác dụng hoàn toàn với Cl₂ dư. Khối lượng FeCl₃ (gam) là:', correctAnswer: '16,25', acceptedAnswers: ['16,25', '16.25', '16,3', '16.3'] },
      { id: 'g2_sa4', text: 'Số electron lớp ngoài cùng của nguyên tử Na là:', correctAnswer: '1', acceptedAnswers: ['1'] },
      { id: 'g2_sa5', text: 'Cho Fe vào CuSO₄, khối lượng thanh Fe tăng 0,8g. Số mol Fe phản ứng là:', correctAnswer: '0,1', acceptedAnswers: ['0,1', '0.1', '0,10'] },
      { id: 'g2_sa6', text: 'Điện phân nóng chảy Al₂O₃ thu 2,7g Al. Số mol e trao đổi là:', correctAnswer: '0,3', acceptedAnswers: ['0,3', '0.3', '0,30'] }
    ]
  }
}
