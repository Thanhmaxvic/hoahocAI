export const questions = [
    // ============== TRẮC NGHIỆM NHIỀU LỰA CHỌN (20 câu) ==============
    { id: 1, type: 'multipleChoice', topic: 'cd1', level: 'know', text: 'Kim loại nào sau đây có độ cứng lớn nhất?', options: ['Sắt (Fe)', 'Vonfram (W)', 'Đồng (Cu)', 'Crom (Cr)'], correct: 3, exp: 'Crom (Cr) là kim loại cứng nhất, có thể rạch được thủy tinh.' },
    { id: 2, type: 'multipleChoice', topic: 'cd1', level: 'know', text: 'Ở nhiệt độ thường, kim loại nào sau đây ở trạng thái lỏng?', options: ['Bạc (Ag)', 'Thủy ngân (Hg)', 'Vàng (Au)', 'Đồng (Cu)'], correct: 1, exp: 'Thủy ngân (Hg) là kim loại duy nhất tồn tại ở dạng lỏng ở điều kiện thường.' },
    { id: 3, type: 'multipleChoice', topic: 'cd1', level: 'understand', text: 'Kim loại có tính dẫn điện tốt nhất là:', options: ['Vàng (Au)', 'Bạc (Ag)', 'Đồng (Cu)', 'Nhôm (Al)'], correct: 1, exp: 'Thứ tự dẫn điện giảm dần: Ag > Cu > Au > Al > Fe.' },
    { id: 4, type: 'multipleChoice', topic: 'cd2', level: 'know', text: 'Kim loại nào sau đây không tác dụng với dung dịch HCl?', options: ['Zn', 'Fe', 'Cu', 'Mg'], correct: 2, exp: 'Đồng (Cu) đứng sau Hydro trong dãy hoạt động hóa học nên không tác dụng với HCl.' },
    { id: 5, type: 'multipleChoice', topic: 'cd2', level: 'understand', text: 'Nhúng thanh kẽm (Zn) vào dung dịch CuSO4 sẽ xảy ra hiện tượng gì?', options: ['Chỉ có bọt khí thoát ra', 'Ăn mòn hóa học, khối lượng thanh Zn giảm', 'Khối lượng thanh kẽm tăng, dung dịch nhạt màu', 'Không có hiện tượng gì'], correct: 2, exp: 'Zn + CuSO4 → ZnSO4 + Cu↓. Cu bám vào thanh Zn. Do M(Cu)=64 > M(Zn)=65 nhưng Zn tan ra và Cu bám vào, dung dịch nhạt màu xanh dần.' },
    { id: 6, type: 'multipleChoice', topic: 'cd2', level: 'apply', text: 'Cho 2,4g Mg tác dụng hoàn toàn với dung dịch HCl dư. Thể tích khí H2 thu được ở đkc (25°C, 1 bar) là:', options: ['2,24 lít', '2,479 lít', '4,958 lít', '1,12 lít'], correct: 1, exp: 'n(Mg) = 2,4 / 24 = 0,1 mol. Bảo toàn electron: n(H2) = n(Mg) = 0,1 mol. V(H2) = 0,1 × 24,79 = 2,479 lít.' },
    { id: 7, type: 'multipleChoice', topic: 'cd3', level: 'know', text: 'Nguyên tắc chung để điều chế kim loại là:', options: ['Oxi hóa ion kim loại thành nguyên tử', 'Khử ion kim loại thành nguyên tử', 'Phân hủy hợp chất chứa kim loại', 'Dùng kim loại mạnh đẩy kim loại yếu'], correct: 1, exp: 'Nguyên tắc chung để điều chế kim loại là quá trình khử ion kim loại thành nguyên tử kim loại (Mn+ + ne → M).' },
    { id: 8, type: 'multipleChoice', topic: 'cd3', level: 'understand', text: 'Để điều chế Al, người ta dùng phương pháp nào sau đây?', options: ['Nhiệt luyện Fe2O3', 'Điện phân dung dịch AlCl3', 'Điện phân nóng chảy Al2O3', 'Thủy luyện dùng Zn'], correct: 2, exp: 'Kim loại mạnh (từ Al trở về trước) được điều chế bằng phương pháp điện phân nóng chảy hợp chất của chúng.' },
    { id: 9, type: 'multipleChoice', topic: 'cd4', level: 'know', text: 'Trong quá trình ăn mòn điện hóa học vỏ tàu biển bằng thép, người ta thường gắn những tấm kim loại nào sau đây vào vỏ tàu?', options: ['Đồng (Cu)', 'Chì (Pb)', 'Kẽm (Zn)', 'Bạc (Ag)'], correct: 2, exp: 'Gắn kẽm (Zn) - kim loại hoạt động mạnh hơn Fe vào vỏ tàu. Zn sẽ bị ăn mòn thay cho vỏ tàu thép (Anode hi sinh).' },
    { id: 10, type: 'multipleChoice', topic: 'cd4', level: 'apply', text: 'Có 4 hợp kim: (1) Fe-C, (2) Fe-Zn, (3) Fe-Sn, (4) Fe-Cu. Khi tiếp xúc với dung dịch chất điện li, ở bao nhiêu hợp kim Fe đóng vai trò là cực âm?', options: ['1', '2', '3', '4'], correct: 2, exp: 'Fe là cực âm khi Fe có tính khử mạnh hơn kim loại kia. Trong 4 trường hợp, Fe > C, Cu, Sn nhưng yếu hơn Zn. Vậy có 3 hợp kim (1,3,4) Fe là cực âm.' },
    { id: 11, type: 'multipleChoice', topic: 'cd1', level: 'know', text: 'Kim loại nào sau đây nhẹ nhất (có khối lượng riêng nhỏ nhất)?', options: ['Na', 'K', 'Li', 'Al'], correct: 2, exp: 'Liti (Li) có khối lượng riêng nhỏ nhất trong các kim loại: D = 0,53 g/cm³.' },
    { id: 12, type: 'multipleChoice', topic: 'cd1', level: 'understand', text: 'Tính chất vật lí chung của kim loại (dẻo, dẫn điện, dẫn nhiệt, ánh kim) được gây ra bởi:', options: ['Liên kết ion', 'Liên kết cộng hóa trị', 'Các electron tự do trong mạng tinh thể', 'Khối lượng nguyên tử lớn'], correct: 2, exp: 'Tất cả tính chất vật lí chung của kim loại đều do sự có mặt của các electron tự do trong mạng tinh thể kim loại.' },
    { id: 13, type: 'multipleChoice', topic: 'cd2', level: 'know', text: 'Kim loại nào sau đây bị thụ động hóa trong H₂SO₄ đặc, nguội?', options: ['Cu', 'Zn', 'Fe', 'Ag'], correct: 2, exp: 'Fe, Al, Cr bị thụ động hóa (passivation) trong H₂SO₄ đặc nguội và HNO₃ đặc nguội do tạo lớp oxide bảo vệ bền vững.' },
    { id: 14, type: 'multipleChoice', topic: 'cd2', level: 'understand', text: 'Phản ứng: Fe + 2HCl → FeCl₂ + H₂↑. Trong phản ứng này, Fe đóng vai trò là:', options: ['Chất oxi hóa', 'Chất khử', 'Vừa oxi hóa vừa khử', 'Chất xúc tác'], correct: 1, exp: 'Fe nhường electron (Fe → Fe²⁺ + 2e) nên Fe đóng vai trò chất khử. Tính chất đặc trưng của kim loại là tính khử.' },
    { id: 15, type: 'multipleChoice', topic: 'cd2', level: 'apply', text: 'Cho 11,2g Fe tác dụng hoàn toàn với khí Cl₂ dư. Khối lượng muối thu được là:', options: ['25,4g', '32,5g', '26,7g', '24,4g'], correct: 1, exp: 'n(Fe) = 11,2/56 = 0,2 mol. 2Fe + 3Cl₂ → 2FeCl₃. n(FeCl₃) = n(Fe) = 0,2 mol. m(FeCl₃) = 0,2 × 162,5 = 32,5g.' },
    { id: 16, type: 'multipleChoice', topic: 'cd3', level: 'understand', text: 'Phương pháp nhiệt luyện dùng để điều chế kim loại nào sau đây?', options: ['Na', 'Al', 'Cu', 'K'], correct: 2, exp: 'Nhiệt luyện dùng cho kim loại trung bình (sau Al trong dãy HĐ): Fe, Cu, Pb, Sn... Các kim loại mạnh (Na, K, Al) phải dùng điện phân nóng chảy.' },
    { id: 17, type: 'multipleChoice', topic: 'cd3', level: 'apply', text: 'Điện phân nóng chảy muối NaCl, ở catode (cực âm) thu được:', options: ['Khí Cl₂', 'Kim loại Na', 'Khí H₂', 'NaOH'], correct: 1, exp: 'Ở catode (cực âm): Na⁺ + e → Na. Kim loại Na được tạo thành tại cực âm. Cl₂ thoát ra ở cực dương (anode).' },
    { id: 18, type: 'multipleChoice', topic: 'cd4', level: 'know', text: 'Hợp kim nào sau đây có thành phần chính là Fe và C (2-5%)?', options: ['Thép', 'Gang', 'Đuyra', 'Đồng thau'], correct: 1, exp: 'Gang là hợp kim của Fe và C trong đó hàm lượng C từ 2-5%. Thép cũng là hợp kim Fe-C nhưng có hàm lượng C dưới 2%.' },
    { id: 19, type: 'multipleChoice', topic: 'cd4', level: 'understand', text: 'Để bảo vệ vỏ tàu biển bằng thép, người ta gắn tấm Zn vào vỏ tàu. Phương pháp này gọi là:', options: ['Bảo vệ bề mặt', 'Bảo vệ điện hóa (anode hi sinh)', 'Mạ điện', 'Sơn phủ chống gỉ'], correct: 1, exp: 'Đây là phương pháp bảo vệ điện hóa (dùng anode hi sinh). Zn hoạt động hơn Fe nên Zn bị ăn mòn trước, bảo vệ Fe.' },
    { id: 20, type: 'multipleChoice', topic: 'cd4', level: 'apply', text: 'Ngâm thanh Fe trong dung dịch CuSO₄. Sau phản ứng, khối lượng thanh Fe thay đổi như thế nào?', options: ['Giảm', 'Tăng', 'Không đổi', 'Không xác định được'], correct: 1, exp: 'Fe + CuSO₄ → FeSO₄ + Cu. Mỗi mol Fe (56g) tan ra, 1 mol Cu (64g) bám vào. Do 64 > 56 nên khối lượng thanh Fe tăng (tăng 8g/mol Fe phản ứng).' },

    // ============== TRẮC NGHIỆM ĐÚNG/SAI (8 câu) ==============
    { id: 21, type: 'trueFalse', topic: 'cd1', level: 'understand',
      text: 'Xét các phát biểu sau về tính chất vật lí của kim loại:',
      statements: [
        { id: 'a', text: 'Kim loại Na có cấu trúc mạng tinh thể lập phương tâm khối.', correct: true },
        { id: 'b', text: 'Kim loại Cu dẫn điện tốt nhất trong tất cả các kim loại.', correct: false },
        { id: 'c', text: 'Thủy ngân (Hg) là kim loại duy nhất tồn tại ở thể lỏng ở điều kiện thường.', correct: true },
        { id: 'd', text: 'Kim loại Cr có độ cứng lớn nhất trong tất cả các kim loại.', correct: true }
      ],
      exp: 'a-Đúng: Na có cấu trúc lập phương tâm khối. b-Sai: Ag dẫn điện tốt nhất (Ag > Cu > Au > Al). c-Đúng: Hg ở thể lỏng ở điều kiện thường. d-Đúng: Cr cứng nhất, có thể rạch được thủy tinh.'
    },
    { id: 22, type: 'trueFalse', topic: 'cd1', level: 'know',
      text: 'Xét các phát biểu sau về kim loại:',
      statements: [
        { id: 'a', text: 'Kim loại Li có khối lượng riêng nhỏ nhất.', correct: true },
        { id: 'b', text: 'Kim loại W (vonfram) có nhiệt độ nóng chảy cao nhất.', correct: true },
        { id: 'c', text: 'Kim loại Au có tính dẻo cao nhất trong các kim loại.', correct: true },
        { id: 'd', text: 'Kim loại Fe dẫn nhiệt tốt nhất trong các kim loại.', correct: false }
      ],
      exp: 'a-Đúng: Li là kim loại nhẹ nhất (D=0,53 g/cm³). b-Đúng: W có nhiệt độ nóng chảy 3422°C. c-Đúng: Au dẻo nhất, 1g Au kéo thành sợi dài 3,5 km. d-Sai: Ag dẫn nhiệt tốt nhất.'
    },
    { id: 23, type: 'trueFalse', topic: 'cd2', level: 'understand',
      text: 'Xét các phát biểu về tính chất hóa học của kim loại:',
      statements: [
        { id: 'a', text: 'Tính chất hóa học đặc trưng của kim loại là tính khử.', correct: true },
        { id: 'b', text: 'Kim loại Cu tác dụng với dung dịch HCl loãng tạo CuCl₂.', correct: false },
        { id: 'c', text: 'Fe tác dụng với Cl₂ dư tạo FeCl₃.', correct: true },
        { id: 'd', text: 'Al bị thụ động hóa trong HNO₃ đặc, nguội.', correct: true }
      ],
      exp: 'a-Đúng: Kim loại luôn nhường electron → tính khử. b-Sai: Cu đứng sau H trong dãy HĐ nên không tác dụng với HCl. c-Đúng: 2Fe + 3Cl₂ → 2FeCl₃ (Cl₂ là chất OXH mạnh → Fe³⁺). d-Đúng: Al, Fe, Cr bị thụ động hóa trong HNO₃ đặc nguội.'
    },
    { id: 24, type: 'trueFalse', topic: 'cd2', level: 'apply',
      text: 'Xét các phát biểu sau về phản ứng của kim loại:',
      statements: [
        { id: 'a', text: 'Na tác dụng với nước tạo NaOH và H₂.', correct: true },
        { id: 'b', text: 'Fe tác dụng với dung dịch CuSO₄ tạo FeSO₄ và Cu.', correct: true },
        { id: 'c', text: 'Ag tác dụng với dung dịch HNO₃ loãng giải phóng khí NO₂.', correct: false },
        { id: 'd', text: 'Mg cháy trong không khí tạo MgO.', correct: true }
      ],
      exp: 'a-Đúng: 2Na + 2H₂O → 2NaOH + H₂↑. b-Đúng: Fe + CuSO₄ → FeSO₄ + Cu↓. c-Sai: Ag + HNO₃ loãng → AgNO₃ + NO↑ + H₂O (HNO₃ loãng tạo NO, không phải NO₂). d-Đúng: 2Mg + O₂ → 2MgO.'
    },
    { id: 25, type: 'trueFalse', topic: 'cd3', level: 'understand',
      text: 'Xét các phát biểu về điều chế kim loại:',
      statements: [
        { id: 'a', text: 'Nguyên tắc chung điều chế kim loại là khử ion kim loại thành nguyên tử.', correct: true },
        { id: 'b', text: 'Kim loại Na được điều chế bằng phương pháp điện phân dung dịch NaCl.', correct: false },
        { id: 'c', text: 'Phương pháp nhiệt luyện dùng CO, H₂, C hoặc Al làm chất khử.', correct: true },
        { id: 'd', text: 'Criolit (Na₃AlF₆) có tác dụng hạ nhiệt độ nóng chảy Al₂O₃.', correct: true }
      ],
      exp: 'a-Đúng: M^n+ + ne → M. b-Sai: Na hoạt động mạnh, phải dùng điện phân nóng chảy NaCl. c-Đúng: VD: CuO + CO → Cu + CO₂ (nhiệt luyện). d-Đúng: Criolit hạ nhiệt độ nóng chảy từ 2050°C xuống ~900°C.'
    },
    { id: 26, type: 'trueFalse', topic: 'cd3', level: 'apply',
      text: 'Xét các phát biểu về phương pháp điều chế kim loại:',
      statements: [
        { id: 'a', text: 'Phương pháp thủy luyện dùng để tách Cu, Ag, Au từ quặng.', correct: true },
        { id: 'b', text: 'Điện phân dung dịch CuSO₄ thu được Cu ở cực dương (anot).', correct: false },
        { id: 'c', text: 'Phản ứng nhiệt nhôm (Al khử Fe₂O₃) dùng để hàn đường ray.', correct: true },
        { id: 'd', text: 'Khi điện phân nóng chảy NaCl, ở catot thu được Na.', correct: true }
      ],
      exp: 'a-Đúng: VD: Fe + CuSO₄ → FeSO₄ + Cu (thủy luyện). b-Sai: Cu thu được ở cực âm (catot), không phải anot. c-Đúng: 2Al + Fe₂O₃ → Al₂O₃ + 2Fe (phản ứng nhiệt nhôm, tỏa nhiệt mạnh). d-Đúng: Ở catot: Na⁺ + e → Na.'
    },
    { id: 27, type: 'trueFalse', topic: 'cd4', level: 'understand',
      text: 'Xét các phát biểu về ăn mòn kim loại:',
      statements: [
        { id: 'a', text: 'Ăn mòn điện hóa xảy ra khi có phát sinh dòng điện.', correct: true },
        { id: 'b', text: 'Đinh sắt trong nước muối chỉ bị ăn mòn hóa học.', correct: false },
        { id: 'c', text: 'Trong cặp Fe-Cu tiếp xúc trong dung dịch chất điện li, Fe bị ăn mòn trước.', correct: true },
        { id: 'd', text: 'Gang (Fe-C) bị ăn mòn điện hóa trong không khí ẩm.', correct: true }
      ],
      exp: 'a-Đúng: Đặc trưng của ăn mòn điện hóa là phát sinh dòng điện. b-Sai: Đinh sắt (Fe-C) trong nước muối (chất điện li) bị ăn mòn điện hóa. c-Đúng: Fe hoạt động hơn Cu → Fe là cực âm, bị ăn mòn. d-Đúng: Gang (Fe-C) trong không khí ẩm (có hơi nước + O₂ + CO₂) thỏa 3 điều kiện ăn mòn điện hóa.'
    },
    { id: 28, type: 'trueFalse', topic: 'cd4', level: 'apply',
      text: 'Xét các phát biểu về hợp kim và bảo vệ kim loại:',
      statements: [
        { id: 'a', text: 'Thép là hợp kim của Fe và C, trong đó hàm lượng C dưới 2%.', correct: true },
        { id: 'b', text: 'Đuyra là hợp kim của Al, được dùng trong ngành hàng không.', correct: true },
        { id: 'c', text: 'Gắn tấm Cu vào vỏ tàu thép để bảo vệ tàu khỏi ăn mòn.', correct: false },
        { id: 'd', text: 'Sơn, mạ, tráng men là phương pháp bảo vệ bề mặt kim loại.', correct: true }
      ],
      exp: 'a-Đúng: Thép có hàm lượng C < 2%, gang có 2-5% C. b-Đúng: Đuyra (Al-Cu-Mg-Mn) nhẹ, bền, dùng trong hàng không. c-Sai: Phải gắn Zn (hoạt động hơn Fe) thì Zn mới bị ăn mòn trước bảo vệ Fe. Gắn Cu thì Fe bị ăn mòn nhanh hơn. d-Đúng: Đây là phương pháp bảo vệ bề mặt.'
    },

    // ============== TRẮC NGHIỆM TRẢ LỜI NGẮN (8 câu) ==============
    { id: 29, type: 'shortAnswer', topic: 'cd2', level: 'apply',
      text: 'Cho 5,6g Fe tác dụng hoàn toàn với dung dịch HCl dư. Tính khối lượng muối FeCl₂ thu được (gam). Kết quả làm tròn đến 0,1.',
      correctAnswer: '12,7',
      acceptedAnswers: ['12,7', '12.7', '12,70', '12.70'],
      exp: 'n(Fe) = 5,6/56 = 0,1 mol. Fe + 2HCl → FeCl₂ + H₂↑. n(FeCl₂) = 0,1 mol. m(FeCl₂) = 0,1 × 127 = 12,7g.'
    },
    { id: 30, type: 'shortAnswer', topic: 'cd2', level: 'apply',
      text: 'Cho 2,7g Al tác dụng hoàn toàn với dung dịch NaOH dư. Tính thể tích khí H₂ thu được ở đkc (lít). Kết quả làm tròn đến 0,001.',
      correctAnswer: '3,719',
      acceptedAnswers: ['3,719', '3.719', '3,72', '3.72'],
      exp: 'n(Al) = 2,7/27 = 0,1 mol. Al + NaOH + H₂O → NaAlO₂ + 3/2 H₂. n(H₂) = 3/2 × 0,1 = 0,15 mol. V = 0,15 × 24,79 = 3,719 lít.'
    },
    { id: 31, type: 'shortAnswer', topic: 'cd1', level: 'know',
      text: 'Kim loại có nhiệt độ nóng chảy cao nhất là kim loại nào? Viết kí hiệu hóa học.',
      correctAnswer: 'W',
      acceptedAnswers: ['W', 'w', 'Vonfram', 'vonfram'],
      exp: 'Vonfram (W) có nhiệt độ nóng chảy cao nhất: 3422°C, được dùng làm dây tóc bóng đèn.'
    },
    { id: 32, type: 'shortAnswer', topic: 'cd3', level: 'understand',
      text: 'Phương pháp điều chế kim loại bằng cách dùng kim loại mạnh hơn khử ion kim loại yếu hơn trong dung dịch muối gọi là phương pháp gì?',
      correctAnswer: 'Thủy luyện',
      acceptedAnswers: ['Thủy luyện', 'thủy luyện', 'thuy luyen', 'Thuy luyen', 'thuỷ luyện', 'Thuỷ luyện'],
      exp: 'Phương pháp thủy luyện: dùng kim loại mạnh khử ion kim loại yếu trong dung dịch. VD: Fe + CuSO₄ → FeSO₄ + Cu.'
    },
    { id: 33, type: 'shortAnswer', topic: 'cd2', level: 'apply',
      text: 'Cho 4,8g Mg tác dụng hoàn toàn với dung dịch H₂SO₄ loãng dư. Tính khối lượng muối MgSO₄ thu được (gam).',
      correctAnswer: '24',
      acceptedAnswers: ['24', '24,0', '24.0', '24,00', '24.00'],
      exp: 'n(Mg) = 4,8/24 = 0,2 mol. Mg + H₂SO₄ → MgSO₄ + H₂↑. n(MgSO₄) = 0,2 mol. m(MgSO₄) = 0,2 × 120 = 24g.'
    },
    { id: 34, type: 'shortAnswer', topic: 'cd4', level: 'understand',
      text: 'Trong cặp galvanic Fe-Cu nhúng trong dung dịch chất điện li, kim loại nào đóng vai trò cực âm (anot)? Viết kí hiệu hóa học.',
      correctAnswer: 'Fe',
      acceptedAnswers: ['Fe', 'fe', 'Sắt', 'sắt'],
      exp: 'Fe hoạt động mạnh hơn Cu nên Fe là cực âm (anot), bị ăn mòn: Fe → Fe²⁺ + 2e. Cu là cực dương (catot).'
    },
    { id: 35, type: 'shortAnswer', topic: 'cd3', level: 'apply',
      text: 'Điện phân nóng chảy Al₂O₃, thu được 5,4g Al ở catot. Tính thể tích khí O₂ (đkc) thoát ra ở anot (lít). Kết quả làm tròn đến 0,001.',
      correctAnswer: '3,719',
      acceptedAnswers: ['3,719', '3.719', '3,72', '3.72'],
      exp: 'n(Al) = 5,4/27 = 0,2 mol. 2Al₂O₃ → 4Al + 3O₂. n(O₂) = 3/4 × 0,2 = 0,15 mol. V(O₂) = 0,15 × 24,79 = 3,719 lít.'
    },
    { id: 36, type: 'shortAnswer', topic: 'cd4', level: 'apply',
      text: 'Ngâm thanh Fe (dư) trong dung dịch CuSO₄. Sau phản ứng hoàn toàn, khối lượng thanh Fe tăng 1,6g. Tính khối lượng Cu bám vào thanh Fe (gam).',
      correctAnswer: '12,8',
      acceptedAnswers: ['12,8', '12.8', '12,80', '12.80'],
      exp: 'Gọi x = n(Fe) phản ứng. Fe + CuSO₄ → FeSO₄ + Cu. KL tăng = 64x - 56x = 8x = 1,6 → x = 0,2 mol. m(Cu) = 0,2 × 64 = 12,8g.'
    }
];
