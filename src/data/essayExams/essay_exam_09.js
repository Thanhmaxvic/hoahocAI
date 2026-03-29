export const essay_exam_09 = {
  id: 'essay_09', title: 'Đề Tự luận số 9', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy', summary: '100% Tự luận (4 câu)',
  essay: { points: 10.0, title: 'ĐỀ KIỂM TRA — TỰ LUẬN SỐ 9', subtitle: 'Đại cương về Kim loại',
    questions: [
      { id: 'e9_tl_1', title: 'Câu 1 (2,5 điểm)', content: '<p>a) Nêu đặc điểm cấu tạo nguyên tử kim loại (e lớp ngoài cùng, BK, I₁, ĐÂĐ). (1,5đ)</p><p>b) So sánh đặc điểm nguyên tử Na, Al, Fe. (1,0đ)</p>' },
      { id: 'e9_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Cho 0,2 mol Fe vào 300ml dd AgNO₃ 1M. Tính m(Ag) và muối trong dd sau PU. (1,5đ)</p><p>b) Cho khí CO dư qua 16g Fe₂O₃ nung nóng. Tính m(Fe). (1,0đ)</p>' },
      { id: 'e9_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) So sánh điện phân nóng chảy NaCl và điện phân dd NaCl (có màng ngăn). (1,5đ)</p><p>b) Tính khối lượng NaOH thu được khi ĐP dd 117g NaCl. (1,0đ)</p>' },
      { id: 'e9_tl_4', title: 'Câu 4 (2,5 điểm)', content: '<p>a) Nêu các loại hợp kim sắt: gang, thép. Thành phần, tính chất, ứng dụng. (1,5đ)</p><p>b) Cho đinh Fe vào dd CuSO₄ 30 phút. Nêu hiện tượng. Giải thích bằng cơ chế ăn mòn ĐH. (1,0đ)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1', rows: [{ label: 'a', content: 'KL: 1-3 e ngoài cùng, BK lớn, I₁ nhỏ, ĐÂĐ nhỏ → dễ nhường e.', score: '1,5' }, { label: 'b', content: 'Na(1e,BK lớn), Al(3e,BK trung bình), Fe(2e ở 4s, 3d⁶, BK nhỏ hơn).', score: '1,0' }]},
    { title: 'Câu 2', rows: [{ label: 'a', content: 'n(Ag⁺)=0,3. Fe+2Ag⁺→Fe²⁺+2Ag: 0,15 mol Fe → 0,3 mol Ag=32,4g. Fe dư 0,05 khử tiếp? Không vì Ag⁺ hết. Muối: Fe(NO₃)₂. Fe dư 0,05 mol.', score: '1,5' }, { label: 'b', content: 'n(Fe₂O₃)=0,1. Fe₂O₃+3CO→2Fe+3CO₂. m(Fe)=0,2×56=11,2g.', score: '1,0' }]},
    { title: 'Câu 3', rows: [{ label: 'a', content: 'ĐPNC NaCl: 2NaCl→2Na+Cl₂. ĐPDD NaCl(mn): 2NaCl+2H₂O→2NaOH+Cl₂+H₂. Khác: ĐPNC thu Na, ĐPDD thu NaOH+H₂.', score: '1,5' }, { label: 'b', content: 'n(NaCl)=2 mol. n(NaOH)=2. m(NaOH)=80g.', score: '1,0' }]},
    { title: 'Câu 4', rows: [{ label: 'a', content: 'Gang: Fe+C(2-5%), cứng giòn, đúc bệ máy. Thép: Fe+C(<2%)+Cr,Mn..., bền dẻo, xây dựng.', score: '1,5' }, { label: 'b', content: 'Cu bám vào Fe→cặp Fe-Cu→ăn mòn ĐH. Fe(anot) tan nhanh hơn. Cu đỏ bám, dd nhạt xanh.', score: '1,0' }]}
  ],
  gradingNotes: ['PTHH không cân bằng: trừ 50%.']
}
