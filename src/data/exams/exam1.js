const questions = [
  { id: 1, text: 'Kim loại có nhiệt độ nóng chảy cao nhất là:', options: ['Fe', 'W', 'Cu', 'Cr'], correct: 1 },
  { id: 2, text: 'Cấu hình electron lớp ngoài cùng của nguyên tử Na (Z=11) là:', options: ['3s¹', '3s²', '2s²2p⁶', '3s²3p¹'], correct: 0 },
  { id: 3, text: 'Kim loại nào sau đây có tính dẻo cao nhất?', options: ['Fe', 'Al', 'Au', 'Cu'], correct: 2 },
  { id: 4, text: 'Liên kết kim loại là liên kết được hình thành do:', options: ['Sự góp chung electron', 'Lực hút tĩnh điện giữa ion', 'Các electron tự do và ion dương kim loại', 'Lực Van der Waals'], correct: 2 },
  { id: 5, text: 'Tính chất hóa học đặc trưng của kim loại là:', options: ['Tính oxi hóa', 'Tính khử', 'Tính acid', 'Tính base'], correct: 1 },
  { id: 6, text: 'Kim loại nào phản ứng được với nước ở điều kiện thường?', options: ['Fe', 'Cu', 'Na', 'Ag'], correct: 2 },
  { id: 7, text: 'Cho Fe tác dụng với dung dịch HCl, sản phẩm muối là:', options: ['FeCl₃', 'FeCl₂', 'Fe₂(SO₄)₃', 'FeSO₄'], correct: 1 },
  { id: 8, text: 'Kim loại Cu tác dụng được với dung dịch nào sau đây?', options: ['HCl loãng', 'H₂SO₄ loãng', 'HNO₃ loãng', 'NaOH loãng'], correct: 2 },
  { id: 9, text: 'Fe bị thụ động hóa trong dung dịch nào?', options: ['HCl đặc', 'H₂SO₄ loãng', 'HNO₃ đặc, nguội', 'NaOH'], correct: 2 },
  { id: 10, text: 'Khi nhúng thanh Zn vào dung dịch CuSO₄, hiện tượng xảy ra là:', options: ['Thanh Zn tan dần, có Cu đỏ bám vào', 'Không có hiện tượng', 'Có khí thoát ra', 'Dung dịch chuyển sang màu xanh đậm hơn'], correct: 0 },
  { id: 11, text: 'Nguyên tắc chung để điều chế kim loại là:', options: ['Oxi hóa ion kim loại', 'Khử ion kim loại thành nguyên tử', 'Nhiệt phân muối', 'Hòa tan quặng'], correct: 1 },
  { id: 12, text: 'Kim loại Al được điều chế bằng phương pháp:', options: ['Nhiệt luyện', 'Thủy luyện', 'Điện phân nóng chảy', 'Điện phân dung dịch'], correct: 2 },
  { id: 13, text: 'Trong phản ứng nhiệt luyện, chất khử thường dùng là:', options: ['O₂, Cl₂', 'CO, H₂, C, Al', 'HCl, H₂SO₄', 'NaOH, KOH'], correct: 1 },
  { id: 14, text: 'Phương pháp thủy luyện dùng để tách kim loại nào?', options: ['Na, K', 'Al, Mg', 'Cu, Ag, Au', 'Ca, Ba'], correct: 2 },
  { id: 15, text: 'Vai trò của criolit (Na₃AlF₆) trong điện phân Al₂O₃ là:', options: ['Làm chất xúc tác', 'Hạ nhiệt độ nóng chảy, tăng tính dẫn điện', 'Làm chất oxi hóa', 'Tạo hợp kim nhôm'], correct: 1 },
  { id: 16, text: 'Gang là hợp kim của Fe với C, hàm lượng C trong gang là:', options: ['Dưới 2%', '2% - 5%', 'Trên 5%', 'Trên 10%'], correct: 1 },
  { id: 17, text: 'Ăn mòn điện hóa khác ăn mòn hóa học ở điểm nào?', options: ['Không cần chất oxi hóa', 'Có phát sinh dòng điện', 'Không phải là quá trình oxi hóa khử', 'Xảy ra ở nhiệt độ cao'], correct: 1 },
  { id: 18, text: 'Điều kiện nào KHÔNG cần thiết cho ăn mòn điện hóa?', options: ['Hai điện cực khác bản chất', 'Tiếp xúc nhau', 'Trong dung dịch chất điện li', 'Nhiệt độ trên 100°C'], correct: 3 },
  { id: 19, text: 'Để bảo vệ ống thép ngầm dưới đất, nên nối ống thép với:', options: ['Tấm đồng (Cu)', 'Tấm kẽm (Zn)', 'Tấm bạc (Ag)', 'Tấm thiếc (Sn)'], correct: 1 },
  { id: 20, text: 'Cho 4,8g Mg tác dụng hoàn toàn với HCl dư. Thể tích H₂ (đkc) thu được là:', options: ['2,479 lít', '4,958 lít', '7,437 lít', '9,916 lít'], correct: 1 }
]

export const exam_01 = {
  id: 'exam_01',
  title: 'Đề số 1 — Trắc nghiệm & Tự luận',
  type: 'mixed',
  duration: 45,
  totalPoints: 10,
  icon: 'fa-scroll',
  summary: '20 câu TN + 2 câu TL',
  multipleChoice: {
    points: 7.0,
    pointPerQuestion: 0.35,
    title: 'PHẦN I. TRẮC NGHIỆM (7,0 điểm)',
    instruction: 'Mỗi câu đúng được 0,35 điểm. Chọn MỘT đáp án đúng nhất.',
    questions: questions
  },
  essay: {
    points: 3.0,
    title: 'PHẦN II. TỰ LUẬN (3,0 điểm)',
    questions: [
      {
        id: 'tl_1',
        title: 'Câu 21 (1,5 điểm)',
        content: `
          <p>Cho 5,4g bột nhôm (Al) tác dụng hoàn toàn với dung dịch HCl dư.</p>
          <p>a) Viết phương trình hóa học của phản ứng. (0,5 điểm)</p>
          <p>b) Tính thể tích khí H₂ sinh ra ở điều kiện chuẩn (25°C, 1 bar). (0,5 điểm)</p>
          <p>c) Tính khối lượng muối AlCl₃ thu được. (0,5 điểm)</p>
        `
      },
      {
        id: 'tl_2',
        title: 'Câu 22 (1,5 điểm)',
        content: `
          <p>Một vật bằng thép (hợp kim Fe-C) bị ăn mòn trong môi trường không khí ẩm.</p>
          <p>a) Xác định loại ăn mòn xảy ra. Giải thích tại sao. (0,5 điểm)</p>
          <p>b) Viết các phản ứng xảy ra tại cực âm và cực dương. (0,5 điểm)</p>
          <p>c) Nêu hai biện pháp bảo vệ vật bằng thép khỏi bị ăn mòn. (0,5 điểm)</p>
        `
      }
    ]
  },
  rubric: [
    {
      title: 'Câu 21 (1,5 điểm)',
      rows: [
        { label: 'a', content: '<strong>PTHH:</strong> 2Al + 6HCl → 2AlCl₃ + 3H₂↑<br /><em class="rubric-note">• Viết đúng CTHH các chất: 0,25đ. Cân bằng đúng: 0,25đ</em>', score: '0,5' },
        { label: 'b', content: 'n(Al) = 5,4 / 27 = 0,2 mol <span class="rubric-score-inline">0,25đ</span><br />Theo PTHH: n(H₂) = 3/2 × n(Al) = 0,3 mol<br />V(H₂) = 0,3 × 24,79 = 7,437 lít <span class="rubric-score-inline">0,25đ</span>', score: '0,5' },
        { label: 'c', content: 'Theo PTHH: n(AlCl₃) = n(Al) = 0,2 mol <span class="rubric-score-inline">0,25đ</span><br />m(AlCl₃) = 0,2 × 133,5 = 26,7g <span class="rubric-score-inline">0,25đ</span>', score: '0,5' }
      ]
    },
    {
      title: 'Câu 22 (1,5 điểm)',
      rows: [
        { label: 'a', content: 'Ăn mòn <strong>điện hóa học.</strong> <span class="rubric-score-inline">0,25đ</span><br />Giải thích: Thỏa mãn 3 điều kiện: (1) Hai điện cực khác bản chất (Fe-C); (2) Tiếp xúc trực tiếp; (3) Cùng trong dd chất điện li (nước có hòa tan O₂, CO₂). <span class="rubric-score-inline">0,25đ</span>', score: '0,5' },
        { label: 'b', content: 'Cực âm (Fe): Fe → Fe²⁺ + 2e <span class="rubric-score-inline">0,25đ</span><br />Cực dương (C): O₂ + 2H₂O + 4e → 4OH⁻ <span class="rubric-score-inline">0,25đ</span>', score: '0,5' },
        { label: 'c', content: 'BP1: Bảo vệ bề mặt — sơn, mạ, tráng men, bôi dầu mỡ. <span class="rubric-score-inline">0,25đ</span><br />BP2: Bảo vệ điện hóa — gắn kim loại hoạt động mạnh hơn Fe (VD: Zn). <span class="rubric-score-inline">0,25đ</span>', score: '0,5' }
      ]
    }
  ],
  gradingNotes: [
    'HS viết đúng PTHH nhưng không cân bằng: trừ 50% điểm câu đó.',
    'Tính toán đúng phương pháp nhưng sai kết quả số: trừ 0,25đ.',
    'HS trình bày cách khác nhưng đúng bản chất: cho điểm tối đa.',
    'Không yêu cầu ghi đơn vị ở bước trung gian, nhưng kết quả cuối phải có đơn vị.'
  ]
}
