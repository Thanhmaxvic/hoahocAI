export const exam_02 = {
  id: 'exam_02',
  title: 'Đề số 2 — Tự luận',
  type: 'essay',
  duration: 45,
  totalPoints: 10,
  icon: 'fa-pen-fancy',
  summary: '100% Tự luận (4 câu hỏi)',
  essay: {
    points: 10.0,
    title: 'ĐỀ KIỂM TRA 45 PHÚT — TỰ LUẬN',
    subtitle: 'Chương 6: Đại cương về Kim loại',
    questions: [
      {
        id: 'tl_1',
        title: 'Câu 1 (2,0 điểm)',
        content: `
          <p>a) Nêu tính chất vật lí chung của kim loại. Giải thích nguyên nhân gây ra những tính chất đó. (1,0 điểm)</p>
          <p>b) Sắp xếp các kim loại: Fe, Cu, Al, Ag theo thứ tự tính dẫn điện giảm dần. (0,5 điểm)</p>
          <p>c) Giải thích tại sao nhôm (Al) được dùng làm dây dẫn điện cao thế thay cho đồng (Cu). (0,5 điểm)</p>
        `
      },
      {
        id: 'tl_2',
        title: 'Câu 2 (2,5 điểm)',
        content: `
          <p>a) Viết phương trình hóa học các phản ứng xảy ra khi cho kim loại Fe tác dụng lần lượt với: (1) dung dịch HCl; (2) khí Cl₂; (3) dung dịch CuSO₄. Nêu rõ vai trò của Fe trong mỗi phản ứng. (1,5 điểm)</p>
          <p>b) Giải thích tại sao Fe nhường 2 electron khi tác dụng với HCl, nhưng nhường 3 electron khi tác dụng với Cl₂. (1,0 điểm)</p>
        `
      },
      {
        id: 'tl_3',
        title: 'Câu 3 (2,5 điểm)',
        content: `
          <p>a) Nêu nguyên tắc chung để điều chế kim loại. (0,5 điểm)</p>
          <p>b) Hoàn thành các PTHH điều chế kim loại sau và cho biết mỗi phản ứng thuộc phương pháp nào: (1,0 điểm)</p>
          <p class="exam-indent">• CuO + CO →</p>
          <p class="exam-indent">• 2NaCl(nc) → (đpnc)</p>
          <p class="exam-indent">• Fe + CuSO₄ →</p>
          <p class="exam-indent">• CuSO₄(dd) + H₂O → (đpdd)</p>
          <p>c) Từ quặng boxit (Al₂O₃), hãy trình bày phương pháp điều chế Al. Nêu vai trò của criolit (Na₃AlF₆). (1,0 điểm)</p>
        `
      },
      {
        id: 'tl_4',
        title: 'Câu 4 (3,0 điểm)',
        content: `
          <p>a) Phân biệt ăn mòn hóa học và ăn mòn điện hóa học. Nêu ba điều kiện để xảy ra ăn mòn điện hóa. (1,0 điểm)</p>
          <p>b) Cho thanh sắt (Fe) vào dung dịch CuSO₄. Sau một thời gian, lấy thanh sắt ra, rửa sạch, sấy khô thấy khối lượng thanh sắt tăng 1,6g. Tính khối lượng Fe đã phản ứng và khối lượng Cu bám vào thanh sắt. (1,0 điểm)</p>
          <p>c) Có 3 cốc đựng dung dịch HCl, trong mỗi cốc nhúng một thanh kim loại: (1) thanh Fe; (2) thanh Fe nối với thanh Cu; (3) thanh Fe nối với thanh Zn. Hãy cho biết thanh Fe trong cốc nào bị hòa tan nhanh nhất, chậm nhất. Giải thích. (1,0 điểm)</p>
        `
      }
    ]
  },
  rubric: [
    {
      title: 'Câu 1 (2,0 điểm)',
      rows: [
        { label: 'a', content: '4 tính chất vật lí chung: tính dẻo, dẫn điện, dẫn nhiệt, ánh kim. <span class="rubric-score-inline">0,5đ</span><br />Nguyên nhân: Do <strong>các electron tự do</strong> trong mạng tinh thể kim loại gây ra. <span class="rubric-score-inline">0,5đ</span>', score: '1,0' },
        { label: 'b', content: 'Thứ tự giảm dần: <strong>Ag &gt; Cu &gt; Al &gt; Fe</strong>', score: '0,5' },
        { label: 'c', content: 'Mặc dù Cu dẫn điện tốt hơn Al, nhưng Al có <strong>khối lượng riêng nhỏ hơn</strong> (Al: 2,7g/cm³ vs Cu: 8,9g/cm³), dây dẫn nhẹ hơn, giảm tải trọng cho cột điện, chi phí thấp hơn.', score: '0,5' }
      ]
    },
    {
      title: 'Câu 2 (2,5 điểm)',
      rows: [
        { label: 'a', content: '(1) Fe + 2HCl → FeCl₂ + H₂↑ — Fe là chất khử <span class="rubric-score-inline">0,5đ</span><br />(2) 2Fe + 3Cl₂ → 2FeCl₃ — Fe là chất khử <span class="rubric-score-inline">0,5đ</span><br />(3) Fe + CuSO₄ → FeSO₄ + Cu↓ — Fe là chất khử <span class="rubric-score-inline">0,5đ</span>', score: '1,5' },
        { label: 'b', content: 'HCl là acid thường → tính oxi hóa yếu (H⁺) → chỉ oxi hóa Fe lên Fe²⁺. <span class="rubric-score-inline">0,5đ</span><br />Cl₂ là chất oxi hóa mạnh → oxi hóa Fe lên Fe³⁺ (số OXH cao nhất). <span class="rubric-score-inline">0,5đ</span>', score: '1,0' }
      ]
    },
    {
      title: 'Câu 3 (2,5 điểm)',
      rows: [
        { label: 'a', content: 'Nguyên tắc: Khử ion kim loại thành nguyên tử kim loại: M<sup>n+</sup> + ne → M', score: '0,5' },
        { label: 'b', content: 'CuO + CO → Cu + CO₂ — <em>Nhiệt luyện</em> <span class="rubric-score-inline">0,25đ</span><br />2NaCl → 2Na + Cl₂ — <em>Điện phân nóng chảy</em> <span class="rubric-score-inline">0,25đ</span><br />Fe + CuSO₄ → FeSO₄ + Cu — <em>Thủy luyện</em> <span class="rubric-score-inline">0,25đ</span><br />2CuSO₄ + 2H₂O → 2Cu + 2H₂SO₄ + O₂ — <em>Điện phân dd</em> <span class="rubric-score-inline">0,25đ</span>', score: '1,0' },
        { label: 'c', content: 'Điện phân nóng chảy Al₂O₃ (có criolit): 2Al₂O₃ → 4Al + 3O₂ <span class="rubric-score-inline">0,5đ</span><br />Vai trò criolit: (1) Hạ nhiệt độ nóng chảy (2) Tăng tính dẫn điện (3) Tạo lớp ngăn Al khỏi bị OXH. <span class="rubric-score-inline">0,5đ</span>', score: '1,0' }
      ]
    },
    {
      title: 'Câu 4 (3,0 điểm)',
      rows: [
        { label: 'a', content: 'Ăn mòn hóa học: KL phản ứng trực tiếp với chất oxi hóa, không phát sinh dòng điện. <span class="rubric-score-inline">0,25đ</span><br />Ăn mòn điện hóa: qua dây dẫn, phát sinh dòng điện. <span class="rubric-score-inline">0,25đ</span><br />3 ĐK ăn mòn điện hóa: (1) 2 điện cực khác bản chất (2) tiếp xúc nhau (3) trong dd chất điện li. <span class="rubric-score-inline">0,5đ</span>', score: '1,0' },
        { label: 'b', content: 'Fe + CuSO₄ → FeSO₄ + Cu. Gọi x = n(Fe) phản ứng.<br />Khối lượng tăng = m(Cu bám) − m(Fe tan) = 64x − 56x = 8x = 1,6g → x = 0,2 mol <span class="rubric-score-inline">0,5đ</span><br />m(Fe pư) = 0,2 × 56 = 11,2g ; m(Cu bám) = 0,2 × 64 = 12,8g <span class="rubric-score-inline">0,5đ</span>', score: '1,0' },
        { label: 'c', content: '<strong>Nhanh nhất:</strong> Cốc (2) Fe-Cu trong HCl. Fe là cực âm bị ăn mòn điện hóa, tốc độ nhanh hơn ăn mòn hóa học đơn thuần. <span class="rubric-score-inline">0,5đ</span><br /><strong>Chậm nhất:</strong> Cốc (3) Fe-Zn trong HCl. Zn hoạt động hơn Fe nên Zn là cực âm, Zn bị ăn mòn trước → bảo vệ Fe. <span class="rubric-score-inline">0,5đ</span>', score: '1,0' }
      ]
    }
  ],
  gradingNotes: [
    'HS viết đúng PTHH nhưng thiếu điều kiện/cân bằng: trừ 50% điểm câu nhỏ đó.',
    'Câu giải thích: HS diễn đạt khác nhưng đúng bản chất hóa học vẫn cho điểm tối đa.',
    'Câu tính toán: sai số liệu ở bước trung gian nhưng phương pháp đúng, cho 50% điểm.',
    'Không trừ điểm lỗi chính tả nếu không ảnh hưởng CTHH.'
  ]
}
