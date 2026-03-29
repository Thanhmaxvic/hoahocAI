export const grad_exam_12 = {
  id: 'grad_12', title: 'Đề TN-TN số 12', type: 'graduation', duration: 50, totalPoints: 10, icon: 'fa-graduation-cap', summary: '18 TN + 4 Đ/S + 6 TL ngắn',
  multipleChoice: { points: 4.5, pointPerQuestion: 0.25, title: 'PHẦN I. TRẮC NGHIỆM NHIỀU LỰA CHỌN (4,5 điểm)', instruction: 'Mỗi câu 0,25 điểm. Chọn MỘT đáp án đúng nhất.',
    questions: [
      { id: 'g12_mc1', text: 'Dãy sắp xếp tính khử giảm dần nào đúng?', options: ['K > Na > Mg > Al > Zn > Fe > Cu > Ag', 'Na > K > Mg > Al > Fe > Zn > Cu > Ag', 'K > Na > Al > Mg > Fe > Zn > Cu > Ag', 'Ag > Cu > Fe > Zn > Al > Mg > Na > K'], correct: 0 },
      { id: 'g12_mc2', text: 'Cho hỗn hợp bột Fe, Cu vào dd AgNO₃ dư. Kết thúc phản ứng dd chứa:', options: ['Fe(NO₃)₂, Cu(NO₃)₂', 'Fe(NO₃)₃, Cu(NO₃)₂, AgNO₃', 'Fe(NO₃)₂', 'Fe(NO₃)₃, Cu(NO₃)₂'], correct: 1 },
      { id: 'g12_mc3', text: 'Cho Fe vào dd H₂SO₄ loãng, sau đó thêm NaNO₃. Hiện tượng:', options: ['Có khí không màu thoát ra', 'Không có hiện tượng thêm', 'Có kết tủa trắng', 'Dd đổi màu vàng'], correct: 0 },
      { id: 'g12_mc4', text: 'Kim loại nào có tính dẫn nhiệt tốt nhất?', options: ['Cu', 'Ag', 'Al', 'Au'], correct: 1 },
      { id: 'g12_mc5', text: 'Cho Fe vào dd HCl, sau đó cho Cu vào. Hiện tượng:', options: ['Cu tan', 'Cu không tan', 'Có khí bay ra', 'Có kết tủa'], correct: 1 },
      { id: 'g12_mc6', text: 'Cho Fe dư + HNO₃ loãng → ? + NO + H₂O', options: ['Fe(NO₃)₂', 'Fe(NO₃)₃', 'Fe₂O₃', 'FeO'], correct: 0 },
      { id: 'g12_mc7', text: 'Na₂O₂ + 2H₂O → 2NaOH + H₂O₂. Na₂O₂ là:', options: ['Oxide acid', 'Oxide base', 'Peroxit', 'Điện tử'], correct: 2 },
      { id: 'g12_mc8', text: 'Kim loại kiềm thổ nào tạo hydroxide không tan trong nước?', options: ['Ba', 'Ca', 'Mg', 'Sr'], correct: 2 },
      { id: 'g12_mc9', text: 'Cho Fe₂O₃ + 3H₂ → 2Fe + 3H₂O. Phương pháp này là:', options: ['Thủy luyện', 'Nhiệt luyện', 'Điện phân', 'Nhiệt phân'], correct: 1 },
      { id: 'g12_mc10', text: 'Trong điện phân dd, ion nào bị khử trước ở catot?', options: ['Ion có tính oxi hóa mạnh nhất', 'Ion có tính khử mạnh nhất', 'Ion có kích thước nhỏ nhất', 'Ion có điện tích lớn nhất'], correct: 0 },
      { id: 'g12_mc11', text: 'Phương pháp thủy luyện phải dùng kim loại:', options: ['Mạnh nhất', 'Mạnh hơn kim loại cần tách', 'Yếu hơn', 'Bất kỳ'], correct: 1 },
      { id: 'g12_mc12', text: 'Cho Na vào CuSO₄ dư. Kết tủa cuối cùng là:', options: ['Cu', 'Cu(OH)₂', 'CuO', 'Na₂SO₄'], correct: 1 },
      { id: 'g12_mc13', text: 'Quặng hematit đỏ có công thức:', options: ['Fe₂O₃', 'Fe₃O₄', 'FeS₂', 'FeCO₃'], correct: 0 },
      { id: 'g12_mc14', text: 'Hợp kim Fe-Cr-Mn-Si có tên gọi:', options: ['Gang', 'Thép', 'Đuyra', 'Đồng thanh'], correct: 1 },
      { id: 'g12_mc15', text: 'Để bảo vệ đường ống ngầm bằng thép, gắn kim loại nào?', options: ['Cu', 'Sn', 'Pb', 'Zn'], correct: 3 },
      { id: 'g12_mc16', text: 'Vì sao hợp kim ít bị ăn mòn hơn khi thêm Cr, Ni?', options: ['Giảm tính khử', 'Tạo lớp oxide bảo vệ', 'Tăng nhiệt độ nóng chảy', 'Giảm khối lượng riêng'], correct: 1 },
      { id: 'g12_mc17', text: 'Cho Cu vào dd FeSO₄. Phản ứng:', options: ['Xảy ra, Cu tan', 'Không xảy ra (Cu yếu hơn Fe)', 'Tạo Fe', 'Tạo CuSO₄'], correct: 1 },
      { id: 'g12_mc18', text: 'Kim loại Al KHÔNG tan trong dd nào?', options: ['HCl', 'NaOH', 'NH₃ (dd)', 'H₂SO₄'], correct: 2 }
    ]
  },
  trueFalse: { points: 4.0, title: 'PHẦN II. TRẮC NGHIỆM ĐÚNG SAI (4,0 điểm)', instruction: 'Đúng 1 ý: 0,1đ; 2 ý: 0,25đ; 3 ý: 0,5đ; 4 ý: 1,0đ.',
    questions: [
      { id: 'g12_tf1', text: 'Phát biểu tổng hợp về kim loại:',
        statements: [
          { id: 'a', text: 'Kim loại có 1-3 electron lớp ngoài cùng.', correct: true },
          { id: 'b', text: 'Trong phản ứng hóa học, kim loại luôn là chất khử.', correct: true },
          { id: 'c', text: 'Tất cả kim loại đều dẫn điện, dẫn nhiệt.', correct: true },
          { id: 'd', text: 'Tất cả kim loại đều ở thể rắn ở điều kiện thường.', correct: false }
        ]
      },
      { id: 'g12_tf2', text: 'Phát biểu về điều chế và ứng dụng:',
        statements: [
          { id: 'a', text: 'Al dùng làm dây điện cao thế vì nhẹ và dẫn điện tốt.', correct: true },
          { id: 'b', text: 'Cu dùng làm ống nước, dây dẫn điện.', correct: true },
          { id: 'c', text: 'Fe nguyên chất dùng nhiều trong xây dựng.', correct: false },
          { id: 'd', text: 'W dùng làm dây tóc bóng đèn vì có nhiệt độ nóng chảy cao.', correct: true }
        ]
      },
      { id: 'g12_tf3', text: 'Phát biểu về dãy hoạt động hóa học:',
        statements: [
          { id: 'a', text: 'KL đứng trước H đẩy được H₂ ra khỏi dd acid loãng.', correct: true },
          { id: 'b', text: 'KL mạnh đẩy KL yếu ra khỏi dd muối (trừ KL kiềm, kiềm thổ).', correct: true },
          { id: 'c', text: 'Na đẩy Cu ra khỏi dd CuSO₄ để tạo Cu kim loại.', correct: false },
          { id: 'd', text: 'Cu có thể khử Ag⁺ thành Ag.', correct: true }
        ]
      },
      { id: 'g12_tf4', text: 'Phát biểu tổng hợp về ăn mòn và bảo vệ:',
        statements: [
          { id: 'a', text: 'Ăn mòn điện hóa cần 3 điều kiện đồng thời.', correct: true },
          { id: 'b', text: 'KL tinh khiết bị ăn mòn điện hóa nhanh hơn hợp kim.', correct: false },
          { id: 'c', text: 'Phương pháp anot hi sinh: gắn KL mạnh hơn vào KL cần BV.', correct: true },
          { id: 'd', text: 'Sơn phủ, mạ, bôi dầu mỡ là phương pháp bảo vệ bề mặt.', correct: true }
        ]
      }
    ]
  },
  shortAnswer: { points: 1.5, pointPerQuestion: 0.25, title: 'PHẦN III. TRẮC NGHIỆM TRẢ LỜI NGẮN (1,5 điểm)', instruction: 'Mỗi câu 0,25 điểm.',
    questions: [
      { id: 'g12_sa1', text: 'K(Z=19) có bao nhiêu electron lớp ngoài cùng?', correctAnswer: '1', acceptedAnswers: ['1'] },
      { id: 'g12_sa2', text: 'Cho 0,1 mol Fe + CuSO₄ dư. Khối lượng Cu thu được(gam):', correctAnswer: '6,4', acceptedAnswers: ['6,4', '6.4', '6,40'] },
      { id: 'g12_sa3', text: 'Fe₂O₃ + 3CO → 2Fe + 3CO₂. Cho 0,5 mol Fe₂O₃. Thể tích CO₂ (đkc, lít):', correctAnswer: '37,185', acceptedAnswers: ['37,185', '37.185', '37,19', '37.19', '37,2', '37.2'] },
      { id: 'g12_sa4', text: 'Cho 4,6g Na vào nước dư. Số mol NaOH tạo ra:', correctAnswer: '0,2', acceptedAnswers: ['0,2', '0.2', '0,20'] },
      { id: 'g12_sa5', text: 'Nguyên tố Fe thuộc chu kỳ mấy trong bảng tuần hoàn?', correctAnswer: '4', acceptedAnswers: ['4'] },
      { id: 'g12_sa6', text: 'Khối lượng mol của FeCl₃ (g/mol):', correctAnswer: '162,5', acceptedAnswers: ['162,5', '162.5', '162,50'] }
    ]
  }
}
