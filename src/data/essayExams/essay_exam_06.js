export const essay_exam_06 = {
  id: 'essay_06', title: 'Đề Tự luận số 6', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy', summary: '100% Tự luận (4 câu)',
  essay: { points: 10.0, title: 'ĐỀ KIỂM TRA — TỰ LUẬN SỐ 6', subtitle: 'Đại cương về Kim loại',
    questions: [
      { id: 'e6_tl_1', title: 'Câu 1 (2,5 điểm)', content: '<p>a) Al₂O₃ là oxide gì? Viết PTHH chứng minh. (1,0đ)</p><p>b) Al + NaOH. Tại sao Al tan trong NaOH mà Fe không? (1,5đ)</p>' },
      { id: 'e6_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Phản ứng nhiệt nhôm là gì? PTHH và ứng dụng. (1,0đ)</p><p>b) Cho 2,7g Al khử Fe₂O₃. Tính m(Fe) và m(Al₂O₃). (1,5đ)</p>' },
      { id: 'e6_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) Điện phân dd CuSO₄ cực trơ: PU mỗi cực và PU tổng. (1,5đ)</p><p>b) Tính m(Cu) khi điện phân CuSO₄ với I=2A, t=4825s. (1,0đ)</p>' },
      { id: 'e6_tl_4', title: 'Câu 4 (2,5 điểm)', content: '<p>a) Tại sao gang gỉ nhanh hơn Fe nguyên chất? (1,0đ)</p><p>b) Hỗn hợp Fe, Cu + HCl dư. 0,1 mol Fe + 0,05 mol Cu. Tính KL chất rắn không tan. (1,5đ)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1', rows: [{ label: 'a', content: 'Al₂O₃ lưỡng tính. +HCl→AlCl₃. +NaOH→NaAlO₂.', score: '1,0' }, { label: 'b', content: 'Al₂O₃ tan trong NaOH → Al tan. Fe₂O₃ không tan trong NaOH.', score: '1,5' }]},
    { title: 'Câu 2', rows: [{ label: 'a', content: '2Al+Fe₂O₃→Al₂O₃+2Fe. Hàn đường ray.', score: '1,0' }, { label: 'b', content: 'n(Al)=0,1→m(Fe)=5,6g; m(Al₂O₃)=5,1g.', score: '1,5' }]},
    { title: 'Câu 3', rows: [{ label: 'a', content: 'Catot: Cu²⁺+2e→Cu. Anot: 2H₂O→O₂+4H⁺+4e.', score: '1,5' }, { label: 'b', content: 'm=AIt/nF=64×2×4825/(2×96500)=3,2g.', score: '1,0' }]},
    { title: 'Câu 4', rows: [{ label: 'a', content: 'Gang (Fe-C): ăn mòn điện hóa nhanh hơn.', score: '1,0' }, { label: 'b', content: 'Fe tan, Cu không tan. m(Cu)=3,2g.', score: '1,5' }]}
  ],
  gradingNotes: ['PTHH không cân bằng: trừ 50%.', 'Sai số đúng PP: trừ 0,25đ.']
}
