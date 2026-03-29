export const grad_exam_04 = {
  id: 'grad_04', title: 'Đề TN-TN số 4', type: 'graduation', duration: 50, totalPoints: 10, icon: 'fa-graduation-cap', summary: '18 TN + 4 Đ/S + 6 TL ngắn',
  multipleChoice: {
    points: 4.5, pointPerQuestion: 0.25,
    title: 'PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (4,5 điểm)',
    instruction: 'Mỗi câu 0,25 điểm. Chọn MỘT đáp án đúng nhất.',
    questions: [
      { id: 'g4_mc1', text: 'Kim loại nào sau đây có tính khử mạnh nhất?', options: ['Fe', 'Al', 'Na', 'K'], correct: 3 },
      { id: 'g4_mc2', text: 'Cấu hình electron của Fe (Z=26) là:', options: ['[Ar]3d⁶4s²', '[Ar]3d⁸', '[Ar]3d⁵4s¹', '[Ar]4s²3d⁶'], correct: 0 },
      { id: 'g4_mc3', text: 'Trong hợp chất, nguyên tố kim loại có số oxi hóa:', options: ['Luôn dương', 'Luôn âm', 'Có thể dương hoặc âm', 'Luôn bằng 0'], correct: 0 },
      { id: 'g4_mc4', text: 'Cho Fe vào dung dịch AgNO₃ dư. Sản phẩm muối sắt là:', options: ['FeSO₄', 'Fe(NO₃)₂', 'FeCl₃', 'Fe(NO₃)₃'], correct: 3 },
      { id: 'g4_mc5', text: 'Al₂O₃ có tính chất:', options: ['Chỉ tính acid', 'Chỉ tính base', 'Lưỡng tính', 'Trung tính'], correct: 2 },
      { id: 'g4_mc6', text: 'Phản ứng nào chứng tỏ Fe có tính khử yếu hơn Al?', options: ['Fe + CuSO₄', '2Al + Fe₂O₃ → Al₂O₃ + 2Fe', 'Fe + 2HCl', 'Fe + Cl₂'], correct: 1 },
      { id: 'g4_mc7', text: 'Kim loại nào phản ứng với H₂O ở nhiệt độ thường tạo base và H₂?', options: ['Fe', 'Cu', 'Ca', 'Ag'], correct: 2 },
      { id: 'g4_mc8', text: 'Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag. Phản ứng xảy ra vì:', options: ['Cu hoạt động hơn Ag', 'Ag hoạt động hơn Cu', 'Cu có tính oxi hóa mạnh', 'AgNO₃ là chất khử'], correct: 0 },
      { id: 'g4_mc9', text: 'Nguyên liệu chính để sản xuất nhôm là:', options: ['Quặng hematit', 'Quặng boxit', 'Quặng pirit', 'Quặng đôlômit'], correct: 1 },
      { id: 'g4_mc10', text: 'Trong điện phân nóng chảy NaOH, ở anot xảy ra:', options: ['Na⁺ + e → Na', '2OH⁻ → H₂O + ½O₂ + 2e', '2Cl⁻ → Cl₂ + 2e', 'H₂O → H₂ + ½O₂'], correct: 1 },
      { id: 'g4_mc11', text: 'Để thu Cu từ CuSO₄ bằng thủy luyện, dùng kim loại:', options: ['Na', 'K', 'Fe', 'Ag'], correct: 2 },
      { id: 'g4_mc12', text: 'Chất khử trong phản ứng: Fe₂O₃ + 3CO → 2Fe + 3CO₂ là:', options: ['Fe₂O₃', 'CO', 'Fe', 'CO₂'], correct: 1 },
      { id: 'g4_mc13', text: 'Hợp kim nào chứa Fe, C, Mn, Si, S, P?', options: ['Đuyra', 'Đồng thau', 'Gang hoặc Thép', 'Inox'], correct: 2 },
      { id: 'g4_mc14', text: 'Tính chất nào sau đây KHÔNG phải của hợp kim?', options: ['Cứng hơn kim loại nguyên chất', 'Nhiệt độ nóng chảy thấp hơn', 'Dẫn điện tốt hơn kim loại nguyên chất', 'Bền hơn kim loại nguyên chất'], correct: 2 },
      { id: 'g4_mc15', text: 'Cọc sắt cắm trong đất ẩm bị ăn mòn loại nào?', options: ['Ăn mòn hóa học', 'Ăn mòn điện hóa', 'Ăn mòn cơ học', 'Không bị ăn mòn'], correct: 1 },
      { id: 'g4_mc16', text: 'Phương pháp nào KHÔNG phải bảo vệ kim loại khỏi ăn mòn?', options: ['Sơn phủ', 'Mạ điện', 'Dùng anot hi sinh', 'Ngâm trong nước muối'], correct: 3 },
      { id: 'g4_mc17', text: 'Khi nung nóng Fe trong khí Cl₂ dư, sản phẩm là:', options: ['FeCl₂', 'FeCl₃', 'Hỗn hợp FeCl₂ và FeCl₃', 'Fe₂O₃'], correct: 1 },
      { id: 'g4_mc18', text: 'Kim loại nào được dùng làm dây dẫn điện cao thế?', options: ['Cu', 'Al', 'Fe', 'Ag'], correct: 1 }
    ]
  },
  trueFalse: {
    points: 4.0,
    title: 'PHẦN II. TRẮC NGHIỆM ĐÚNG SAI (4,0 điểm)',
    instruction: 'Mỗi câu gồm 4 phát biểu (a,b,c,d). Đúng 1 ý: 0,1đ; 2 ý: 0,25đ; 3 ý: 0,5đ; 4 ý: 1,0đ.',
    questions: [
      { id: 'g4_tf1', text: 'Cho các phát biểu về cấu tạo kim loại:',
        statements: [
          { id: 'a', text: 'Kim loại có 1, 2 hoặc 3 electron lớp ngoài cùng.', correct: true },
          { id: 'b', text: 'Bán kính nguyên tử kim loại thường lớn hơn phi kim cùng chu kỳ.', correct: true },
          { id: 'c', text: 'Ion Fe²⁺ có cấu hình [Ar]3d⁶.', correct: true },
          { id: 'd', text: 'Năng lượng ion hóa của kim loại kiềm rất lớn.', correct: false }
        ]
      },
      { id: 'g4_tf2', text: 'Cho các phát biểu về tính chất hóa học:',
        statements: [
          { id: 'a', text: 'Fe tác dụng với S tạo FeS (không phải Fe₂S₃).', correct: true },
          { id: 'b', text: 'Cu không tác dụng với HCl nhưng tác dụng với HNO₃.', correct: true },
          { id: 'c', text: 'Al khử được Fe₂O₃ ở nhiệt độ cao (phản ứng nhiệt nhôm).', correct: true },
          { id: 'd', text: 'Mg cháy trong CO₂: 2Mg + CO₂ → 2MgO + C.', correct: true }
        ]
      },
      { id: 'g4_tf3', text: 'Cho các phát biểu về điện phân:',
        statements: [
          { id: 'a', text: 'Điện phân dung dịch NaCl có màng ngăn thu NaOH, Cl₂, H₂.', correct: true },
          { id: 'b', text: 'Điện phân dung dịch CuSO₄ với cực trơ: catot thu Cu.', correct: true },
          { id: 'c', text: 'Điện phân nóng chảy Al₂O₃: ở anot thu O₂.', correct: true },
          { id: 'd', text: 'Điện phân dung dịch AgNO₃ không thu được Ag.', correct: false }
        ]
      },
      { id: 'g4_tf4', text: 'Cho các phát biểu về ăn mòn:',
        statements: [
          { id: 'a', text: 'Cặp Zn-Fe trong HCl: Fe bị bảo vệ (Zn là anot hi sinh).', correct: true },
          { id: 'b', text: 'Ăn mòn hóa học xảy ra khi kim loại tiếp xúc trực tiếp với chất oxi hóa.', correct: true },
          { id: 'c', text: 'Vật bằng Fe tinh khiết không bị ăn mòn điện hóa.', correct: true },
          { id: 'd', text: 'Trong cặp Cu-Fe: Cu bị ăn mòn trước.', correct: false }
        ]
      }
    ]
  },
  shortAnswer: {
    points: 1.5, pointPerQuestion: 0.25,
    title: 'PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (1,5 điểm)',
    instruction: 'Mỗi câu 0,25 điểm. Điền đáp án vào ô trống.',
    questions: [
      { id: 'g4_sa1', text: 'Cho 10,8g Al tác dụng hoàn toàn với HCl dư. Số mol H₂ là:', correctAnswer: '0,6', acceptedAnswers: ['0,6', '0.6', '0,60'] },
      { id: 'g4_sa2', text: 'Cho Cu + 2Ag⁺ → Cu²⁺ + 2Ag. Mỗi mol Cu tạo bao nhiêu gam Ag?', correctAnswer: '216', acceptedAnswers: ['216', '216,0', '216.0'] },
      { id: 'g4_sa3', text: 'Kim loại có nhiệt độ nóng chảy thấp nhất (ở thể lỏng ở đk thường) là:', correctAnswer: 'Hg', acceptedAnswers: ['Hg', 'hg', 'HG', 'Thủy ngân'] },
      { id: 'g4_sa4', text: 'Cho 13g Zn vào CuSO₄ dư. Khối lượng Cu thu được (gam):', correctAnswer: '12,8', acceptedAnswers: ['12,8', '12.8', '12,80'] },
      { id: 'g4_sa5', text: 'Fe(Z=26) có bao nhiêu electron ở phân lớp 3d?', correctAnswer: '6', acceptedAnswers: ['6'] },
      { id: 'g4_sa6', text: 'Hàm lượng C trong gang là từ 2% đến bao nhiêu %?', correctAnswer: '5', acceptedAnswers: ['5', '5,0', '5.0'] }
    ]
  }
}
