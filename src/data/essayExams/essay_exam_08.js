export const essay_exam_08 = {
  id: 'essay_08', title: 'Đề Tự luận số 8', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy', summary: '100% Tự luận (4 câu)',
  essay: { points: 10.0, title: 'ĐỀ KIỂM TRA — TỰ LUẬN SỐ 8', subtitle: 'Đại cương về Kim loại',
    questions: [
      { id: 'e8_tl_1', title: 'Câu 1 (2,5 điểm)', content: '<p>a) So sánh liên kết KL, ion, CHT. (1,5đ)</p><p>b) Tại sao hợp kim cứng hơn, t°nc thấp hơn, dẫn điện kém hơn KL nguyên chất? (1,0đ)</p>' },
      { id: 'e8_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Hỗn hợp Al, Fe + CuSO₄ dư. Thứ tự phản ứng. (1,0đ)</p><p>b) 10,2g Al, Mg + HCl dư → 11,2L H₂ (đkc). Tính %KL. (1,5đ)</p>' },
      { id: 'e8_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) 3 vai trò criolit trong SX Al. (1,0đ)</p><p>b) Tại sao anot phải thay thường xuyên? (0,5đ)</p><p>c) So sánh ĐPNC và ĐP dd. (1,0đ)</p>' },
      { id: 'e8_tl_4', title: 'Câu 4 (2,5 điểm)', content: '<p>a) Zn + 100ml CuSO₄ 0,5M. KL thanh Zn thay đổi? (1,0đ)</p><p>b) Sơ đồ pin Zn-Cu. PU mỗi cực. (1,5đ)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1', rows: [{ label: 'a', content: 'LK KL: e tự do+ion dương. LK ion: cho-nhận e. LK CHT: góp chung e.', score: '1,5' }, { label: 'b', content: 'Hợp kim: ng.tử khác size→mạng biến dạng→cứng, t°nc↓, dẫn điện↓.', score: '1,0' }]},
    { title: 'Câu 2', rows: [{ label: 'a', content: 'Al pư trước: 2Al+3CuSO₄→Al₂(SO₄)₃+3Cu. Rồi Fe+CuSO₄→FeSO₄+Cu.', score: '1,0' }, { label: 'b', content: '27x+24y=10,2; 1,5x+y=0,452→x=0,2; y=0,152. %Al≈52,9%.', score: '1,5' }]},
    { title: 'Câu 3', rows: [{ label: 'a', content: 'Hạ t°nc, tăng dẫn điện, bảo vệ Al khỏi O₂.', score: '1,0' }, { label: 'b', content: 'C(graphit)+O₂→CO₂.', score: '0,5' }, { label: 'c', content: 'ĐPNC: KL mạnh (Na,Al). ĐPdd: KL yếu (Cu,Ag).', score: '1,0' }]},
    { title: 'Câu 4', rows: [{ label: 'a', content: 'n(Cu²⁺)=0,05. KL giảm=0,05(65-64)=0,05g.', score: '1,0' }, { label: 'b', content: '(-) Zn|ZnSO₄||CuSO₄|Cu (+). Zn→Zn²⁺+2e. Cu²⁺+2e→Cu.', score: '1,5' }]}
  ],
  gradingNotes: ['PTHH không cân bằng: trừ 50%.']
}
