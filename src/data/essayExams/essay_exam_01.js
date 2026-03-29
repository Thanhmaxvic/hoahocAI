// Đề tự luận số 1 — giữ nguyên nội dung exam_02 hiện tại
export const essay_exam_01 = {
  id: 'essay_01', title: 'Đề Tự luận số 1', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy',
  summary: '100% Tự luận (4 câu)',
  essay: {
    points: 10.0, title: 'ĐỀ KIỂM TRA 45 PHÚT — TỰ LUẬN', subtitle: 'Chương: Đại cương về Kim loại',
    questions: [
      { id: 'e1_tl_1', title: 'Câu 1 (2,0 điểm)', content: '<p>a) Nêu tính chất vật lí chung của kim loại. Giải thích nguyên nhân gây ra những tính chất đó. (1,0 điểm)</p><p>b) Sắp xếp các kim loại: Fe, Cu, Al, Ag theo thứ tự tính dẫn điện giảm dần. (0,5 điểm)</p><p>c) Giải thích tại sao nhôm (Al) được dùng làm dây dẫn điện cao thế thay cho đồng (Cu). (0,5 điểm)</p>' },
      { id: 'e1_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Viết phương trình hóa học các phản ứng khi cho Fe tác dụng lần lượt với: (1) dd HCl; (2) khí Cl₂; (3) dd CuSO₄. Nêu vai trò Fe. (1,5 điểm)</p><p>b) Giải thích tại sao Fe nhường 2e khi tác dụng với HCl, nhưng 3e khi tác dụng với Cl₂. (1,0 điểm)</p>' },
      { id: 'e1_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) Nêu nguyên tắc chung để điều chế kim loại. (0,5 điểm)</p><p>b) Hoàn thành PTHH và cho biết phương pháp: CuO + CO →; 2NaCl(nc) → (đpnc); Fe + CuSO₄ →; CuSO₄(dd) + H₂O → (đpdd). (1,0 điểm)</p><p>c) Trình bày phương pháp điều chế Al từ quặng boxit. Nêu vai trò của criolit. (1,0 điểm)</p>' },
      { id: 'e1_tl_4', title: 'Câu 4 (3,0 điểm)', content: '<p>a) Phân biệt ăn mòn hóa học và ăn mòn điện hóa. Nêu 3 điều kiện ăn mòn điện hóa. (1,0 điểm)</p><p>b) Thanh Fe trong dd CuSO₄, KL tăng 1,6g. Tính m(Fe) phản ứng và m(Cu) bám. (1,0 điểm)</p><p>c) 3 cốc HCl: (1) Fe; (2) Fe nối Cu; (3) Fe nối Zn. Fe tan nhanh nhất/chậm nhất ở cốc nào? Giải thích. (1,0 điểm)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1 (2,0 điểm)', rows: [
      { label: 'a', content: '4 tính chất: dẻo, dẫn điện, dẫn nhiệt, ánh kim. <span class="rubric-score-inline">0,5đ</span><br/>Nguyên nhân: electron tự do. <span class="rubric-score-inline">0,5đ</span>', score: '1,0' },
      { label: 'b', content: 'Ag > Cu > Al > Fe', score: '0,5' },
      { label: 'c', content: 'Al nhẹ hơn Cu (2,7 vs 8,9 g/cm³), giảm tải trọng, chi phí thấp.', score: '0,5' }
    ]},
    { title: 'Câu 2 (2,5 điểm)', rows: [
      { label: 'a', content: '(1) Fe + 2HCl → FeCl₂ + H₂ — chất khử <span class="rubric-score-inline">0,5đ</span><br/>(2) 2Fe + 3Cl₂ → 2FeCl₃ — chất khử <span class="rubric-score-inline">0,5đ</span><br/>(3) Fe + CuSO₄ → FeSO₄ + Cu — chất khử <span class="rubric-score-inline">0,5đ</span>', score: '1,5' },
      { label: 'b', content: 'HCl: H⁺ oxi hóa yếu → Fe²⁺. Cl₂: oxi hóa mạnh → Fe³⁺.', score: '1,0' }
    ]},
    { title: 'Câu 3 (2,5 điểm)', rows: [
      { label: 'a', content: 'Khử ion kim loại thành nguyên tử: M^n+ + ne → M', score: '0,5' },
      { label: 'b', content: 'CuO + CO → Cu + CO₂ (nhiệt luyện); 2NaCl → 2Na + Cl₂ (đpnc); Fe + CuSO₄ → FeSO₄ + Cu (thủy luyện); 2CuSO₄ + 2H₂O → 2Cu + 2H₂SO₄ + O₂ (đpdd)', score: '1,0' },
      { label: 'c', content: 'Điện phân nóng chảy Al₂O₃ (criolit). Criolit: hạ nhiệt độ, tăng dẫn điện, bảo vệ Al.', score: '1,0' }
    ]},
    { title: 'Câu 4 (3,0 điểm)', rows: [
      { label: 'a', content: 'ĂM hóa học: trực tiếp, không dòng điện. ĂM điện hóa: có dòng điện. 3 ĐK: 2 điện cực khác, tiếp xúc, dd điện li.', score: '1,0' },
      { label: 'b', content: 'KL tăng = 64x − 56x = 8x = 1,6 → x = 0,2. m(Fe) = 11,2g; m(Cu) = 12,8g.', score: '1,0' },
      { label: 'c', content: 'Nhanh nhất: cốc (2) Fe-Cu — ăn mòn điện hóa. Chậm nhất: cốc (3) Fe-Zn — Zn bảo vệ Fe.', score: '1,0' }
    ]}
  ],
  gradingNotes: ['HS viết đúng PTHH nhưng không cân bằng: trừ 50%.', 'Tính toán sai kết quả nhưng đúng PP: trừ 0,25đ.', 'HS diễn đạt khác nhưng đúng bản chất: cho điểm tối đa.']
}
