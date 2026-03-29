export const essay_exam_11 = {
  id: 'essay_11', title: 'Đề Tự luận số 11', type: 'essay', duration: 45, totalPoints: 10, icon: 'fa-pen-fancy', summary: '100% Tự luận (4 câu)',
  essay: { points: 10.0, title: 'ĐỀ KIỂM TRA — TỰ LUẬN SỐ 11', subtitle: 'Đại cương về Kim loại',
    questions: [
      { id: 'e11_tl_1', title: 'Câu 1 (2,5 điểm)', content: '<p>a) Viết các PTHH: Fe+S; Fe+Cl₂; Fe+HCl; Fe+H₂SO₄ đặc nóng dư. Số OXH Fe mỗi PU? (2,0đ)</p><p>b) Kết luận: khi nào Fe tạo Fe²⁺, khi nào tạo Fe³⁺? (0,5đ)</p>' },
      { id: 'e11_tl_2', title: 'Câu 2 (2,5 điểm)', content: '<p>a) Cho 13g Zn vào 200ml AgNO₃ 0,5M. Tính m(Ag). Xác định chất dư. (1,5đ)</p><p>b) Cho Fe dư + HNO₃ loãng → Fe(NO₃)₂ + NO + H₂O. Cân bằng PU bằng pp thăng bằng electron. (1,0đ)</p>' },
      { id: 'e11_tl_3', title: 'Câu 3 (2,5 điểm)', content: '<p>a) Nêu các bước sản xuất thép từ gang trong lò thổi oxi. (1,5đ)</p><p>b) Viết PU: C+O₂→CO₂; Si+O₂→SiO₂; S+O₂→SO₂; Mn+O₂→MnO₂. Tại sao cần oxi hóa các tạp chất này? (1,0đ)</p>' },
      { id: 'e11_tl_4', title: 'Câu 4 (2,5 điểm)', content: '<p>a) Giải thích hiện tượng: đồ vật bằng Cu để lâu trong không khí ẩm bị phủ lớp xanh (patina). Viết PU. (1,0đ)</p><p>b) Bằng PP HH nhận biết 3 dd: NaCl, FeCl₂, FeCl₃. (0,75đ)</p><p>c) Cho dd NaOH vào dd FeCl₃. Nêu hiện tượng, viết PTHH. (0,75đ)</p>' }
    ]
  },
  rubric: [
    { title: 'Câu 1', rows: [{ label: 'a', content: 'Fe+S→FeS(+2). 2Fe+3Cl₂→2FeCl₃(+3). Fe+2HCl→FeCl₂+H₂(+2). 2Fe+6H₂SO₄đ→Fe₂(SO₄)₃+3SO₂+6H₂O(+3).', score: '2,0' }, { label: 'b', content: 'Chất OXH yếu (H⁺,S): Fe²⁺. Chất OXH mạnh (Cl₂,H₂SO₄đ,HNO₃): Fe³⁺.', score: '0,5' }]},
    { title: 'Câu 2', rows: [{ label: 'a', content: 'n(Zn)=0,2; n(Ag⁺)=0,1. Zn+2Ag⁺→Zn²⁺+2Ag. Ag⁺ hết, Zn dư 0,15 mol. m(Ag)=0,1×108=10,8g.', score: '1,5' }, { label: 'b', content: '3Fe+8HNO₃→3Fe(NO₃)₂+2NO+4H₂O. OXH: Fe→Fe²⁺+2e(×3). Khử: N⁺⁵+3e→N⁺²(×2).', score: '1,0' }]},
    { title: 'Câu 3', rows: [{ label: 'a', content: 'Thổi O₂ vào gang lỏng→oxi hóa C,Si,S,Mn,P. C giảm <2%→thép.', score: '1,5' }, { label: 'b', content: 'Loại tạp chất: C→CO₂(khí), Si→SiO₂(xỉ), S→SO₂(khí), Mn→MnO₂(xỉ). Giảm tạp chất→thép bền, dẻo hơn gang.', score: '1,0' }]},
    { title: 'Câu 4', rows: [{ label: 'a', content: '2Cu+O₂+H₂O+CO₂→Cu₂(OH)₂CO₃ (patina xanh). Ăn mòn HH chậm.', score: '1,0' }, { label: 'b', content: 'NaOH: FeCl₂→Fe(OH)₂↓ trắng xanh. FeCl₃→Fe(OH)₃↓ nâu đỏ. NaCl không kết tủa.', score: '0,75' }, { label: 'c', content: 'FeCl₃+3NaOH→Fe(OH)₃↓ (nâu đỏ)+3NaCl.', score: '0,75' }]}
  ],
  gradingNotes: ['PTHH đúng không cân bằng: trừ 50%.']
}
