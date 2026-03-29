export const essay_exam_03 = {
  id: 'essay_03', title: 'Đề Tự luận số 3', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy', summary: '100% Tự luận (4 câu)',
  essay: { points: 10.0, title: 'ĐỀ KIỂM TRA 45 PHÚT — TỰ LUẬN SỐ 3', subtitle: 'Chương: Đại cương về Kim loại',
    questions: [
      { id: 'e3_tl_1', title: 'Câu 1 (2,5 điểm)', content: '<p>a) Nêu các kiểu mạng tinh thể kim loại phổ biến. (0,75 điểm)</p><p>b) Tại sao kim loại kiềm mềm, nhiệt độ nóng chảy thấp? (0,75 điểm)</p><p>c) Giải thích sự khác nhau về độ cứng giữa Cr và Na. (1,0 điểm)</p>' },
      { id: 'e3_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Cho 0,1 mol Al + dd NaOH dư. Viết PTHH, tính V(H₂) ở đkc. (1,0 điểm)</p><p>b) Cho 5,6g Fe + dd CuSO₄ dư. Tính khối lượng Cu bám vào thanh Fe. (0,75 điểm)</p><p>c) Cho Na dư vào dd AlCl₃. Nêu hiện tượng và viết PTHH. (0,75 điểm)</p>' },
      { id: 'e3_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) So sánh phương pháp nhiệt luyện và thủy luyện: nguyên tắc, phạm vi áp dụng, ví dụ. (1,5 điểm)</p><p>b) Điện phân nóng chảy 5,1g Al₂O₃ (hiệu suất 100%). Tính m(Al) và V(O₂) ở đkc. (1,0 điểm)</p>' },
      { id: 'e3_tl_4', title: 'Câu 4 (2,5 điểm)', content: '<p>a) Nêu nguyên tắc bảo vệ kim loại bằng phương pháp điện hóa (anot hi sinh). (1,0 điểm)</p><p>b) Có 3 hợp kim: Fe-Cu, Fe-Zn, Fe-Sn. Hợp kim nào khi bị xước trong môi trường ẩm thì Fe được bảo vệ? Giải thích. (1,5 điểm)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1', rows: [{ label: 'a', content: '3 kiểu: lập phương tâm khối (Na, K, Fe-α), lập phương tâm diện (Cu, Ag, Al), lục phương (Mg, Zn).', score: '0,75' }, { label: 'b', content: 'KL kiềm có 1e ngoài cùng, liên kết KL yếu → mềm, t° nc thấp.', score: '0,75' }, { label: 'c', content: 'Cr: cấu hình [Ar]3d⁵4s¹, liên kết mạnh, lập phương tâm khối đặc biệt → cứng. Na: 1e, liên kết yếu → mềm.', score: '1,0' }]},
    { title: 'Câu 2', rows: [{ label: 'a', content: 'Al + NaOH + H₂O → NaAlO₂ + 3/2H₂. n(Al)=0,1→n(H₂)=0,15 mol→V=3,719 lít.', score: '1,0' }, { label: 'b', content: 'n(Fe)=0,1. Fe + CuSO₄ → FeSO₄ + Cu. m(Cu)=0,1×64=6,4g.', score: '0,75' }, { label: 'c', content: 'Na + H₂O → NaOH + ½H₂ (sủi bọt). 3NaOH + AlCl₃ → Al(OH)₃↓ + 3NaCl. NaOH dư: Al(OH)₃ + NaOH → NaAlO₂ + 2H₂O (kết tủa tan).', score: '0,75' }]},
    { title: 'Câu 3', rows: [{ label: 'a', content: 'Nhiệt luyện: dùng CO/H₂/Al khử oxide KL ở t° cao. Áp dụng: KL trung bình (Fe, Cu...). VD: CuO+CO→Cu+CO₂. Thủy luyện: dùng KL mạnh khử ion KL yếu trong dd. Áp dụng: Cu, Ag, Au. VD: Fe+CuSO₄→FeSO₄+Cu.', score: '1,5' }, { label: 'b', content: 'n(Al₂O₃)=5,1/102=0,05. 2Al₂O₃→4Al+3O₂. n(Al)=0,1→m=2,7g. n(O₂)=0,075→V=1,859L.', score: '1,0' }]},
    { title: 'Câu 4', rows: [{ label: 'a', content: 'Gắn KL hoạt động mạnh hơn (anot hi sinh). KL mạnh bị ăn mòn thay, bảo vệ KL yếu.', score: '1,0' }, { label: 'b', content: 'Fe-Zn: Zn hoạt động hơn Fe → Zn bị ăn mòn → Fe được BV. Fe-Cu: Cu yếu hơn → Fe bị ăn mòn. Fe-Sn: Sn yếu hơn → Fe bị ăn mòn. Vậy chỉ Fe-Zn bảo vệ Fe.', score: '1,5' }]}
  ],
  gradingNotes: ['PTHH đúng không cân bằng: trừ 50%.', 'Sai số nhưng đúng PP: trừ 0,25đ.']
}
