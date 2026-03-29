export const essay_exam_05 = {
  id: 'essay_05', title: 'Đề Tự luận số 5', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy', summary: '100% Tự luận (4 câu)',
  essay: { points: 10.0, title: 'ĐỀ KIỂM TRA — TỰ LUẬN SỐ 5', subtitle: 'Đại cương về Kim loại',
    questions: [
      { id: 'e5_tl_1', title: 'Câu 1 (2,5 điểm)', content: '<p>a) Nêu ý nghĩa của dãy hoạt động hóa học kim loại. (1,0đ)</p><p>b) Viết PTHH khi Fe tác dụng với: dd CuSO₄, dd HCl, dd AgNO₃ dư, khí Cl₂. Nhận xét số OXH Fe. (1,5đ)</p>' },
      { id: 'e5_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Tại sao Al bền trong không khí nhưng tan trong NaOH? (1,0đ)</p><p>b) Cho 5,4g Al + HCl dư; thêm NaOH dư. Nêu hiện tượng, viết PTHH. (1,5đ)</p>' },
      { id: 'e5_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) So sánh sản xuất gang và luyện thép. (1,0đ)</p><p>b) Từ 1 tấn quặng hematit 80% Fe₂O₃, tính lượng gang 4% C (HS=100%). (1,5đ)</p>' },
      { id: 'e5_tl_4', title: 'Câu 4 (2,5 điểm)', content: '<p>a) Ngâm Zn trong 100ml Pb(NO₃)₂ 0,1M. Tính KL Zn thay đổi. (1,0đ)</p><p>b) 3 ống NaCl: (1) Fe; (2) Fe-Cu; (3) Fe-Zn. Mô tả hiện tượng. (1,5đ)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1', rows: [{ label: 'a', content: 'KL trước H đẩy H₂ khỏi acid. KL mạnh đẩy KL yếu khỏi dd muối.', score: '1,0' }, { label: 'b', content: 'Fe+CuSO₄(Fe²⁺). Fe+HCl(Fe²⁺). Fe+AgNO₃ dư(Fe³⁺). Fe+Cl₂(Fe³⁺).', score: '1,5' }]},
    { title: 'Câu 2', rows: [{ label: 'a', content: 'Al₂O₃ bảo vệ. NaOH hòa tan Al₂O₃ rồi Al.', score: '1,0' }, { label: 'b', content: 'Al+HCl→AlCl₃+H₂. NaOH trung hòa HCl. AlCl₃+3NaOH→Al(OH)₃↓. NaOH dư hòa tan Al(OH)₃.', score: '1,5' }]},
    { title: 'Câu 3', rows: [{ label: 'a', content: 'SX gang: khử oxit bằng CO, C 2-5%. Luyện thép: oxi hóa bớt C, C<2%.', score: '1,0' }, { label: 'b', content: 'm(Fe₂O₃)=800kg. m(Fe)=560kg. m(gang)=560/0,96=583,3kg.', score: '1,5' }]},
    { title: 'Câu 4', rows: [{ label: 'a', content: 'Zn+Pb²⁺→Zn²⁺+Pb. KL tăng=0,01(207-65)=1,42g.', score: '1,0' }, { label: 'b', content: '(1) ĂM HH chậm. (2) Fe-Cu: ĂM ĐH, Fe ăn mòn nhanh. (3) Fe-Zn: Zn BV Fe.', score: '1,5' }]}
  ],
  gradingNotes: ['PTHH không cân bằng: trừ 50%.', 'Sai số đúng PP: trừ 0,25đ.']
}
