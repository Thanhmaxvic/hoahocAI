export const essay_exam_12 = {
  id: 'essay_12', title: 'Đề Tự luận số 12', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy', summary: '100% Tự luận (4 câu)',
  essay: { points: 10.0, title: 'ĐỀ KIỂM TRA — TỰ LUẬN SỐ 12', subtitle: 'Đại cương về Kim loại',
    questions: [
      { id: 'e12_tl_1', title: 'Câu 1 (2,5 điểm)', content: '<p>a) Nêu khái niệm: tính khử, tính oxi hóa. KL thể hiện tính chất nào? (1,0đ)</p><p>b) Sắp xếp tính khử giảm dần: Cu, Fe, Al, Mg, Ag. Giải thích. (0,75đ)</p><p>c) Cho Fe, Cu vào dd FeCl₃. Viết PTHH, giải thích thứ tự PU. (0,75đ)</p>' },
      { id: 'e12_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Trộn Al với Fe₂O₃ rồi đốt (PU nhiệt nhôm). Tính m Al₂O₃ và m Fe khi dùng 5,4g Al. (1,0đ)</p><p>b) ĐP dd CuSO₄ thu 9,6g Cu. Tính V(O₂) đkc ở anot. (0,75đ)</p><p>c) Cho 0,15 mol Fe + 0,2 mol AgNO₃. Tính muối trong dd sau PU. (0,75đ)</p>' },
      { id: 'e12_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) Phân loại ăn mòn KL: ĐH và HH. Bảng so sánh 3 tiêu chí. (1,5đ)</p><p>b) Nêu nguyên tắc 2 PP bảo vệ KL. Cho 2 ví dụ thực tế mỗi PP. (1,0đ)</p>' },
      { id: 'e12_tl_4', title: 'Câu 4 (2,5 điểm)', content: '<p>a) Cho 12g hỗn hợp Fe, Cu vào HCl dư. Thu 2,479L H₂ (đkc). Tính %KL mỗi KL. (1,5đ)</p><p>b) Cho chất rắn không tan ở trên + dd AgNO₃ dư. Tính m(Ag). (1,0đ)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1', rows: [{ label: 'a', content: 'Tính khử: khả năng nhường e. Tính OXH: khả năng nhận e. KL: tính khử.', score: '1,0' }, { label: 'b', content: 'Mg>Al>Fe>Cu>Ag. Theo dãy HĐ.', score: '0,75' }, { label: 'c', content: 'Fe+2FeCl₃→3FeCl₂ (Fe khử Fe³⁺ trước). Cu+2FeCl₃→CuCl₂+2FeCl₂ (Cu khử Fe³⁺ sau).', score: '0,75' }]},
    { title: 'Câu 2', rows: [{ label: 'a', content: '2Al+Fe₂O₃→Al₂O₃+2Fe. n(Al)=0,2. m(Fe)=0,2×56=11,2g. m(Al₂O₃)=0,1×102=10,2g.', score: '1,0' }, { label: 'b', content: 'n(Cu)=0,15. n(O₂)=0,075. V=0,075×24,79=1,859L.', score: '0,75' }, { label: 'c', content: 'Fe+2Ag⁺→Fe²⁺+2Ag. n Fe cần=0,1, Fe dư 0,05. Fe dư + Fe³⁺? Không có Fe³⁺. Muối: Fe(NO₃)₂ 0,1 mol. AgNO₃ hết.', score: '0,75' }]},
    { title: 'Câu 3', rows: [{ label: 'a', content: 'ĂM HH: trực tiếp, không dòng điện, chậm. ĂM ĐH: qua dd điện li, có dòng điện, nhanh.', score: '1,5' }, { label: 'b', content: 'BVBM: sơn (cổng sắt), mạ (thiếc lên sắt). BVĐH: gắn Zn vào tàu, gắn Mg vào ống thép ngầm.', score: '1,0' }]},
    { title: 'Câu 4', rows: [{ label: 'a', content: 'n(H₂)=0,1. Fe+2HCl→FeCl₂+H₂. n(Fe)=0,1→m=5,6g. m(Cu)=12-5,6=6,4g. %Fe=46,7%; %Cu=53,3%.', score: '1,5' }, { label: 'b', content: 'Cu+2AgNO₃→Cu(NO₃)₂+2Ag. n(Cu)=0,1→n(Ag)=0,2→m(Ag)=21,6g.', score: '1,0' }]}
  ],
  gradingNotes: ['PTHH không cân bằng: trừ 50%.']
}
