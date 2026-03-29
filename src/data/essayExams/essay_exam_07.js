export const essay_exam_07 = {
  id: 'essay_07', title: 'Đề Tự luận số 7', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy', summary: '100% Tự luận (4 câu)',
  essay: { points: 10.0, title: 'ĐỀ KIỂM TRA — TỰ LUẬN SỐ 7', subtitle: 'Đại cương về Kim loại',
    questions: [
      { id: 'e7_tl_1', title: 'Câu 1 (2,5 điểm)', content: '<p>a) Fe + H₂SO₄ đặc nóng dư. Viết PTHH, vai trò. (1,0đ)</p><p>b) Tại sao Fe+HCl→FeCl₂ nhưng Fe+Cl₂→FeCl₃? (0,75đ)</p><p>c) Fe dư + HNO₃ loãng. PTHH. Tại sao tạo Fe(NO₃)₂? (0,75đ)</p>' },
      { id: 'e7_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Cu + FeCl₃. PTHH, giải thích. (1,0đ)</p><p>b) Fe dư + AgNO₃. Fe + HNO₃ loãng dư. So sánh muối sắt. (1,5đ)</p>' },
      { id: 'e7_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) Quy trình sản xuất Al bằng điện phân NC Al₂O₃. (1,5đ)</p><p>b) Tính m(Al₂O₃) để thu 5,4 tấn Al (HS=90%). (1,0đ)</p>' },
      { id: 'e7_tl_4', title: 'Câu 4 (2,5 điểm)', content: '<p>a) 2 phương pháp bảo vệ KL. Ví dụ. (1,0đ)</p><p>b) Sắt tây xước gỉ nhanh, tôn xước ít gỉ. Giải thích. (1,5đ)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1', rows: [{ label: 'a', content: '2Fe+6H₂SO₄đ→Fe₂(SO₄)₃+3SO₂+6H₂O.', score: '1,0' }, { label: 'b', content: 'HCl: H⁺ yếu→Fe²⁺. Cl₂: OXH mạnh→Fe³⁺.', score: '0,75' }, { label: 'c', content: 'Fe dư khử Fe³⁺→Fe²⁺.', score: '0,75' }]},
    { title: 'Câu 2', rows: [{ label: 'a', content: 'Cu+2FeCl₃→CuCl₂+2FeCl₂. Fe³⁺ OXH mạnh hơn Cu²⁺.', score: '1,0' }, { label: 'b', content: 'Fe dư+Ag⁺→Fe²⁺. Fe+HNO₃ dư→Fe³⁺.', score: '1,5' }]},
    { title: 'Câu 3', rows: [{ label: 'a', content: 'ĐPNC Al₂O₃/criolit. 2Al₂O₃→4Al+3O₂.', score: '1,5' }, { label: 'b', content: 'm(Al₂O₃)=5,4/27×102/2/0,9×10⁶≈11,33 tấn.', score: '1,0' }]},
    { title: 'Câu 4', rows: [{ label: 'a', content: 'BVBM: sơn, mạ. BVĐH: anot hi sinh.', score: '1,0' }, { label: 'b', content: 'Fe-Sn: Fe>Sn→Fe ăn mòn. Fe-Zn: Zn>Fe→Zn ăn mòn, BV Fe.', score: '1,5' }]}
  ],
  gradingNotes: ['PTHH không cân bằng: trừ 50%.']
}
