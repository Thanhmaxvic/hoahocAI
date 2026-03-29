export const grad_exam_05 = {
  id: 'grad_05', title: 'Đề TN-TN số 5', type: 'graduation', duration: 50, totalPoints: 10, icon: 'fa-graduation-cap', summary: '18 TN + 4 Đ/S + 6 TL ngắn',
  multipleChoice: {
    points: 4.5, pointPerQuestion: 0.25,
    title: 'PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (4,5 điểm)',
    instruction: 'Mỗi câu 0,25 điểm. Chọn MỘT đáp án đúng nhất.',
    questions: [
      { id: 'g5_mc1', text: 'Dãy gồm các kim loại đều phản ứng với nước ở nhiệt độ thường:', options: ['Na, Ca, Ba', 'Na, Fe, K', 'Ca, Cu, Ba', 'K, Al, Na'], correct: 0 },
      { id: 'g5_mc2', text: 'Khi cho Na vào dung dịch CuSO₄ thì:', options: ['Có Cu kết tủa đỏ', 'Có khí bay ra và kết tủa xanh', 'Chỉ có khí bay ra', 'Có Cu bám vào Na'], correct: 1 },
      { id: 'g5_mc3', text: 'Cho dãy kim loại: Mg, Cr, Na, Fe. Kim loại cứng nhất là:', options: ['Mg', 'Cr', 'Na', 'Fe'], correct: 1 },
      { id: 'g5_mc4', text: 'Trong pin Zn-Cu, dung dịch ở cốc chứa Zn là:', options: ['CuSO₄', 'ZnSO₄', 'NaCl', 'HCl'], correct: 1 },
      { id: 'g5_mc5', text: 'Quá trình xảy ra ở cực dương của pin điện hóa là:', options: ['Sự oxi hóa', 'Sự khử', 'Sự trung hòa', 'Sự điện li'], correct: 1 },
      { id: 'g5_mc6', text: 'Kim loại nào tan trong cả HCl và NaOH?', options: ['Fe', 'Cu', 'Al', 'Ag'], correct: 2 },
      { id: 'g5_mc7', text: 'Cho 0,1 mol Fe² phản ứng hoàn toàn với HNO₃ loãng dư. Số mol NO thoát ra là:', options: ['0,1', '0,2', '0,3', '0,4'], correct: 0 },
      { id: 'g5_mc8', text: 'Fe + CuSO₄ → FeSO₄ + Cu. Đây là phản ứng:', options: ['Trao đổi', 'Thế', 'Phân hủy', 'Hóa hợp'], correct: 1 },
      { id: 'g5_mc9', text: 'Điện phân nóng chảy CaCl₂, ở catot thu:', options: ['Ca', 'Cl₂', 'Ca(OH)₂', 'HCl'], correct: 0 },
      { id: 'g5_mc10', text: 'Khử Fe₂O₃ bằng H₂ ở nhiệt độ cao thuộc phương pháp:', options: ['Thủy luyện', 'Nhiệt luyện', 'Điện phân', 'Nhiệt phân'], correct: 1 },
      { id: 'g5_mc11', text: 'Phản ứng: 2Al + 3CuSO₄ → Al₂(SO₄)₃ + 3Cu thuộc phương pháp:', options: ['Nhiệt luyện', 'Thủy luyện', 'Điện phân nóng chảy', 'Điện phân dung dịch'], correct: 1 },
      { id: 'g5_mc12', text: 'Ở catot của điện phân dung dịch CuSO₄ (điện cực trơ), thu được:', options: ['O₂', 'Cu', 'H₂', 'SO₂'], correct: 1 },
      { id: 'g5_mc13', text: 'Thành phần chính của inox (thép không gỉ) là:', options: ['Fe, C', 'Fe, Cr, Ni', 'Fe, Mn', 'Al, Cu, Mg'], correct: 1 },
      { id: 'g5_mc14', text: 'Gang trắng được dùng chủ yếu để:', options: ['Đúc bệ máy', 'Luyện thép', 'Làm ống nước', 'Làm dụng cụ cắt'], correct: 1 },
      { id: 'g5_mc15', text: 'Cho lá Al vào dung dịch HCl có thêm vài giọt CuSO₄, thì:', options: ['Al tan chậm', 'Al tan nhanh hơn do ăn mòn điện hóa', 'Không có gì thay đổi', 'Cu bám vào nhưng Al không tan'], correct: 1 },
      { id: 'g5_mc16', text: 'Tráng thiếc (Sn) lên sắt tạo sắt tây. Nếu lớp Sn bị xước:', options: ['Sn bị ăn mòn trước', 'Fe bị ăn mòn trước', 'Cả hai bị ăn mòn đều', 'Không bị ăn mòn'], correct: 1 },
      { id: 'g5_mc17', text: 'Tráng kẽm (Zn) lên sắt (tôn). Nếu lớp Zn bị xước:', options: ['Fe bị ăn mòn trước', 'Zn bị ăn mòn trước, bảo vệ Fe', 'Cả hai bị ăn mòn đều', 'Không bị ăn mòn'], correct: 1 },
      { id: 'g5_mc18', text: 'Kim loại Fe KHÔNG phản ứng với chất nào?', options: ['Cl₂', 'HCl', 'CuSO₄', 'MgCl₂'], correct: 3 }
    ]
  },
  trueFalse: {
    points: 4.0, title: 'PHẦN II. TRẮC NGHIỆM ĐÚNG SAI (4,0 điểm)',
    instruction: 'Mỗi câu gồm 4 phát biểu (a,b,c,d). Đúng 1 ý: 0,1đ; 2 ý: 0,25đ; 3 ý: 0,5đ; 4 ý: 1,0đ.',
    questions: [
      { id: 'g5_tf1', text: 'Cho các phát biểu về pin điện hóa Zn-Cu:',
        statements: [
          { id: 'a', text: 'Zn là cực âm (anot).', correct: true },
          { id: 'b', text: 'Ở cực Cu: Cu²⁺ + 2e → Cu.', correct: true },
          { id: 'c', text: 'Electron di chuyển từ Zn sang Cu.', correct: true },
          { id: 'd', text: 'Khối lượng điện cực Cu giảm dần.', correct: false }
        ]
      },
      { id: 'g5_tf2', text: 'Cho các phát biểu về phản ứng kim loại với acid:',
        statements: [
          { id: 'a', text: 'Fe + HNO₃ đặc nguội → không phản ứng (thụ động).', correct: true },
          { id: 'b', text: 'Al + H₂SO₄ đặc nguội → không phản ứng (thụ động).', correct: true },
          { id: 'c', text: 'Cu + HCl → CuCl₂ + H₂.', correct: false },
          { id: 'd', text: 'Zn + H₂SO₄ loãng → ZnSO₄ + H₂.', correct: true }
        ]
      },
      { id: 'g5_tf3', text: 'Cho các phát biểu về luyện kim:',
        statements: [
          { id: 'a', text: 'Sản xuất gang trong lò cao dùng quặng hematit đỏ (Fe₂O₃).', correct: true },
          { id: 'b', text: 'Chất khử chính trong lò cao là CO.', correct: true },
          { id: 'c', text: 'Đá vôi (CaCO₃) trong lò cao dùng để tạo xỉ loại bỏ SiO₂.', correct: true },
          { id: 'd', text: 'Luyện thép là oxi hóa bớt C trong gang bằng O₂.', correct: true }
        ]
      },
      { id: 'g5_tf4', text: 'Cho các phát biểu về ăn mòn và bảo vệ:',
        statements: [
          { id: 'a', text: 'Sắt tây (Fe-Sn) bị xước: Fe ăn mòn trước vì Fe > Sn.', correct: true },
          { id: 'b', text: 'Tôn (Fe-Zn) bị xước: Zn ăn mòn trước, bảo vệ Fe.', correct: true },
          { id: 'c', text: 'Bôi dầu mỡ lên kim loại là phương pháp điện hóa.', correct: false },
          { id: 'd', text: 'Ăn mòn điện hóa cần 3 điều kiện: 2 điện cực khác bản chất, tiếp xúc, trong dd điện li.', correct: true }
        ]
      }
    ]
  },
  shortAnswer: {
    points: 1.5, pointPerQuestion: 0.25,
    title: 'PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (1,5 điểm)',
    instruction: 'Mỗi câu 0,25 điểm. Điền đáp án vào ô trống.',
    questions: [
      { id: 'g5_sa1', text: 'Cho 0,3 mol Al tác dụng hoàn toàn với NaOH dư. Số mol H₂ là:', correctAnswer: '0,45', acceptedAnswers: ['0,45', '0.45'] },
      { id: 'g5_sa2', text: 'Cho 3,9g K vào nước dư. Thể tích H₂ (đkc, lít) thu được là (làm tròn 0,01):', correctAnswer: '1,24', acceptedAnswers: ['1,24', '1.24', '1,240', '1.240'] },
      { id: 'g5_sa3', text: 'Cho thanh Zn vào 200ml CuSO₄ 0,5M. Khối lượng Cu bám vào (gam):', correctAnswer: '6,4', acceptedAnswers: ['6,4', '6.4', '6,40'] },
      { id: 'g5_sa4', text: 'Kim loại có độ cứng lớn nhất trong bảng tuần hoàn là: (ký hiệu)', correctAnswer: 'Cr', acceptedAnswers: ['Cr', 'cr', 'CR'] },
      { id: 'g5_sa5', text: 'Tôn là thép tráng kim loại nào? (Ký hiệu hóa học)', correctAnswer: 'Zn', acceptedAnswers: ['Zn', 'zn', 'ZN'] },
      { id: 'g5_sa6', text: 'Cho 11,2g Fe vào HCl dư. Số mol FeCl₂ thu được là:', correctAnswer: '0,2', acceptedAnswers: ['0,2', '0.2', '0,20'] }
    ]
  }
}
