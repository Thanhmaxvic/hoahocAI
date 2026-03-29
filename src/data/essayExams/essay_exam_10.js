export const essay_exam_10 = {
  id: 'essay_10', title: 'Đề Tự luận số 10', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy', summary: '100% Tự luận (4 câu)',
  essay: { points: 10.0, title: 'ĐỀ KIỂM TRA — TỰ LUẬN SỐ 10', subtitle: 'Đại cương về Kim loại',
    questions: [
      { id: 'e10_tl_1', title: 'Câu 1 (2,5 điểm)', content: '<p>a) Viết PTHH khi cho Mg tác dụng với: O₂, HCl, CuSO₄, CO₂. (2,0đ)</p><p>b) Mg cháy trong CO₂ có ý nghĩa gì? (0,5đ)</p>' },
      { id: 'e10_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Hỗn hợp 3,6g Mg và 5,6g Fe + HCl dư. Tính V(H₂) đkc. (1,5đ)</p><p>b) Cho dd NaOH dư vào dd sau PU. Tính m kết tủa. (1,0đ)</p>' },
      { id: 'e10_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) Bằng pp hóa học phân biệt 4 KL: Na, Al, Fe, Cu. (1,5đ)</p><p>b) Viết chuỗi PU: Al→Al₂O₃→NaAlO₂→Al(OH)₃→Al₂O₃→Al. (1,0đ)</p>' },
      { id: 'e10_tl_4', title: 'Câu 4 (2,5 điểm)', content: '<p>a) Nêu 3 điều kiện xảy ra ăn mòn điện hóa. (0,75đ)</p><p>b) Cho Fe-Cu vào HCl. Cơ chế ăn mòn ĐH: PU ở mỗi cực. (0,75đ)</p><p>c) Cho Zn vào dd CuSO₄, sau PU cho sản phẩm vào HCl. Nêu hiện tượng. (1,0đ)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1', rows: [{ label: 'a', content: '2Mg+O₂→2MgO. Mg+2HCl→MgCl₂+H₂. Mg+CuSO₄→MgSO₄+Cu. 2Mg+CO₂→2MgO+C.', score: '2,0' }, { label: 'b', content: 'Không dùng CO₂ để chữa cháy Mg.', score: '0,5' }]},
    { title: 'Câu 2', rows: [{ label: 'a', content: 'n(Mg)=0,15; n(Fe)=0,1. n(H₂)=0,15+0,1=0,25. V=6,198L.', score: '1,5' }, { label: 'b', content: 'NaOH+MgCl₂→Mg(OH)₂↓. NaOH+FeCl₂→Fe(OH)₂↓. m=0,15×58+0,1×90=8,7+9=17,7g.', score: '1,0' }]},
    { title: 'Câu 3', rows: [{ label: 'a', content: 'Thử nước: Na tan sủi bọt→NaOH; dd NaOH+3 KL còn: Al tan(H₂)→Al. Thử HCl: Fe tan, Cu không→Cu, Fe.', score: '1,5' }, { label: 'b', content: '4Al+3O₂→2Al₂O₃. Al₂O₃+2NaOH→2NaAlO₂+H₂O. NaAlO₂+CO₂+H₂O→Al(OH)₃+NaHCO₃. 2Al(OH)₃→Al₂O₃+3H₂O. 2Al₂O₃→4Al+3O₂(đpnc).', score: '1,0' }]},
    { title: 'Câu 4', rows: [{ label: 'a', content: '(1) 2 điện cực khác bản chất. (2) Tiếp xúc. (3) Trong dd chất điện li.', score: '0,75' }, { label: 'b', content: 'Fe(anot): Fe→Fe²⁺+2e. Cu(catot): 2H⁺+2e→H₂↑.', score: '0,75' }, { label: 'c', content: 'Zn+CuSO₄→ZnSO₄+Cu. Cu+Zn dư trong HCl: chỉ Zn tan, Cu không→chất rắn Cu.', score: '1,0' }]}
  ],
  gradingNotes: ['PTHH không cân bằng: trừ 50%.']
}
