export const essay_exam_04 = {
  id: 'essay_04', title: 'Đề Tự luận số 4', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy', summary: '100% Tự luận (4 câu)',
  essay: { points: 10.0, title: 'ĐỀ KIỂM TRA 45 PHÚT — TỰ LUẬN SỐ 4', subtitle: 'Chương: Đại cương về Kim loại',
    questions: [
      { id: 'e4_tl_1', title: 'Câu 1 (2,5 điểm)', content: '<p>a) Viết PTHH khi cho lần lượt Na, Mg, Al tác dụng với nước. (1,5 điểm)</p><p>b) Giải thích tại sao Na phản ứng mãnh liệt với nước, Mg phản ứng chậm, Al hầu như không phản ứng với nước ở điều kiện thường. (1,0 điểm)</p>' },
      { id: 'e4_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Cho 2,7g Al + 200ml dd HCl 1M. Xác định chất dư, tính V(H₂) ở đkc. (1,5 điểm)</p><p>b) Cho 11,2g Fe + dd H₂SO₄ đặc nóng dư. Viết PTHH, tính V(SO₂) ở đkc. (1,0 điểm)</p>' },
      { id: 'e4_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) Nêu nguyên tắc và phương pháp điều chế gang trong lò cao. Viết các PTHH chính. (1,5 điểm)</p><p>b) Tại sao cần thêm chất chảy CaCO₃ vào lò cao? (1,0 điểm)</p>' },
      { id: 'e4_tl_4', title: 'Câu 4 (2,5 điểm)', content: '<p>a) Có 5 lá kim loại: Fe, Al, Cu, Ag, Zn. Hãy sắp xếp theo chiều giảm dần tính khử. (0,5 điểm)</p><p>b) Cho Fe vào dd chứa Cu(NO₃)₂ và AgNO₃. Trình bày thứ tự phản ứng. (1,0 điểm)</p><p>c) Cho m gam Al vào 200ml dd CuSO₄ 0,5M. Sau phản ứng thu được dd chỉ chứa 1 muối. Tính m. (1,0 điểm)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1', rows: [
      { label: 'a', content: '2Na + 2H₂O → 2NaOH + H₂. Mg + 2H₂O → Mg(OH)₂ + H₂ (nước nóng). 2Al + 6H₂O → 2Al(OH)₃ + 3H₂ (bỏ lớp oxide).', score: '1,5' },
      { label: 'b', content: 'Na: 1e, tính khử mạnh nhất → phản ứng mãnh liệt. Mg: 2e, tính khử yếu hơn, cần nước nóng. Al: có lớp Al₂O₃ bảo vệ bền → hầu như không pư với nước ở đk thường.', score: '1,0' }
    ]},
    { title: 'Câu 2', rows: [
      { label: 'a', content: 'n(Al)=0,1; n(HCl)=0,2. 2Al+6HCl→2AlCl₃+3H₂. Tỉ lệ: Al cần 0,3 HCl nhưng chỉ có 0,2→HCl hết, Al dư. n(Al pư)=0,2/3. n(H₂)=0,2/2=0,1. V=2,479L.', score: '1,5' },
      { label: 'b', content: '2Fe + 6H₂SO₄ đặc →(t°) Fe₂(SO₄)₃ + 3SO₂ + 6H₂O. n(Fe)=0,2→n(SO₂)=0,3→V=7,437L.', score: '1,0' }
    ]},
    { title: 'Câu 3', rows: [
      { label: 'a', content: 'Nguyên liệu: quặng Fe₂O₃, than cốc, CaCO₃. C+O₂→CO₂; CO₂+C→2CO; Fe₂O₃+3CO→2Fe+3CO₂. Gang chứa 2-5% C.', score: '1,5' },
      { label: 'b', content: 'CaCO₃→CaO+CO₂. CaO+SiO₂→CaSiO₃ (xỉ). Loại bỏ tạp chất SiO₂.', score: '1,0' }
    ]},
    { title: 'Câu 4', rows: [
      { label: 'a', content: 'Al > Zn > Fe > Cu > Ag', score: '0,5' },
      { label: 'b', content: 'Fe khử Ag⁺ trước (Ag⁺ có tính OXH mạnh hơn Cu²⁺): Fe+2Ag⁺→Fe²⁺+2Ag. Rồi Fe+Cu²⁺→Fe²⁺+Cu.', score: '1,0' },
      { label: 'c', content: 'n(CuSO₄)=0,1. Dd chỉ có 1 muối: Al₂(SO₄)₃. 2Al+3CuSO₄→Al₂(SO₄)₃+3Cu. n(Al)=2/3×0,1=0,0667→m=1,8g. (Phải Al dư chút).', score: '1,0' }
    ]}
  ],
  gradingNotes: ['PTHH đúng không cân bằng: trừ 50%.', 'Kết quả sai nhưng PP đúng: trừ 0,25đ.']
}
