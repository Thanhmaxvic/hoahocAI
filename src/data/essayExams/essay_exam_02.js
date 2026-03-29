export const essay_exam_02 = {
  id: 'essay_02', title: 'Đề Tự luận số 2', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy', summary: '100% Tự luận (4 câu)',
  essay: { points: 10.0, title: 'ĐỀ KIỂM TRA 45 PHÚT — TỰ LUẬN SỐ 2', subtitle: 'Chương: Đại cương về Kim loại',
    questions: [
      { id: 'e2_tl_1', title: 'Câu 1 (2,5 điểm)', content: '<p>a) So sánh tính chất vật lí của kim loại và phi kim. (1,0 điểm)</p><p>b) Giải thích tại sao kim loại có tính dẻo, dẫn điện, dẫn nhiệt, ánh kim. (1,0 điểm)</p><p>c) Tại sao Hg ở thể lỏng ở điều kiện thường? (0,5 điểm)</p>' },
      { id: 'e2_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Viết dãy hoạt động hóa học (dãy điện hóa) của kim loại. (0,5 điểm)</p><p>b) Cho các cặp: (1) Zn + CuSO₄; (2) Cu + ZnSO₄; (3) Fe + AgNO₃; (4) Ag + FeSO₄. Cặp nào phản ứng? Viết PTHH. (1,5 điểm)</p><p>c) Dự đoán hiện tượng khi cho Na vào dd CuSO₄. Giải thích. (0,5 điểm)</p>' },
      { id: 'e2_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) Trình bày 3 phương pháp điều chế kim loại. Cho ví dụ minh họa mỗi phương pháp. (1,5 điểm)</p><p>b) Tại sao kim loại Na, K, Al không điều chế bằng phương pháp thủy luyện hay nhiệt luyện thông thường? (1,0 điểm)</p>' },
      { id: 'e2_tl_4', title: 'Câu 4 (2,5 điểm)', content: '<p>a) Giải thích cơ chế ăn mòn điện hóa của đinh sắt (Fe-C) trong nước muối. Viết phản ứng tại mỗi cực. (1,5 điểm)</p><p>b) Cho 8,4g Fe vào 100ml dd CuSO₄ 1M. Tính khối lượng chất rắn sau phản ứng. (1,0 điểm)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1 (2,5 điểm)', rows: [
      { label: 'a', content: 'So sánh: KL có ánh kim, dẻo, dẫn điện/nhiệt tốt vs PK thì không. KL có electron tự do vs PK không.', score: '1,0' },
      { label: 'b', content: 'Nguyên nhân: electron tự do. Tính dẻo: e tự do liên kết các lớp. Dẫn điện: e di chuyển có hướng. Dẫn nhiệt: e truyền năng lượng. Ánh kim: e phản xạ ánh sáng.', score: '1,0' },
      { label: 'c', content: 'Hg có liên kết kim loại yếu, nhiệt độ nóng chảy -39°C.', score: '0,5' }
    ]},
    { title: 'Câu 2 (2,5 điểm)', rows: [
      { label: 'a', content: 'K, Na, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, (H), Cu, Hg, Ag, Pt, Au', score: '0,5' },
      { label: 'b', content: '(1) Zn + CuSO₄ → ZnSO₄ + Cu ✓; (2) Không pư; (3) Fe + 2AgNO₃ → Fe(NO₃)₂ + 2Ag ✓; (4) Không pư. Mỗi cặp 0,375đ.', score: '1,5' },
      { label: 'c', content: 'Na + H₂O → NaOH + ½H₂ (sủi bọt). NaOH + CuSO₄ → Cu(OH)₂↓ (xanh) + Na₂SO₄. Na không đẩy Cu trực tiếp.', score: '0,5' }
    ]},
    { title: 'Câu 3 (2,5 điểm)', rows: [
      { label: 'a', content: '(1) Nhiệt luyện: CuO + CO → Cu + CO₂. (2) Thủy luyện: Fe + CuSO₄ → FeSO₄ + Cu. (3) Điện phân: 2NaCl(nc) → 2Na + Cl₂. Mỗi PP 0,5đ.', score: '1,5' },
      { label: 'b', content: 'Na, K, Al hoạt động quá mạnh. Thủy luyện: NaOH không khử Na. Nhiệt luyện: cần chất khử mạnh hơn → không có. Phải dùng điện phân nóng chảy.', score: '1,0' }
    ]},
    { title: 'Câu 4 (2,5 điểm)', rows: [
      { label: 'a', content: 'Fe-C: Fe là cực âm (anot), C là cực dương (catot). Anot: Fe → Fe²⁺ + 2e. Catot: O₂ + 2H₂O + 4e → 4OH⁻. Sau đó: Fe²⁺ + 2OH⁻ → Fe(OH)₂ → Fe₂O₃.xH₂O (gỉ sắt).', score: '1,5' },
      { label: 'b', content: 'n(Fe) = 0,15 mol; n(CuSO₄) = 0,1 mol. CuSO₄ hết, Fe dư 0,05 mol. Cu = 0,1×64 = 6,4g. Fe dư = 0,05×56 = 2,8g. Chất rắn = 6,4 + 2,8 = 9,2g.', score: '1,0' }
    ]}
  ],
  gradingNotes: ['PTHH đúng nhưng không cân bằng: trừ 50%.', 'Tính toán đúng PP nhưng sai số: trừ 0,25đ.', 'Diễn đạt khác nhưng đúng bản chất: cho tối đa.']
}
