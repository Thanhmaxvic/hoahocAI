// --- DỮ LIỆU BÀI TẬP ---
const questions = [
    { id: 1, topic: 'cd1', level: 'know', text: 'Kim loại nào sau đây có độ cứng lớn nhất?', options: ['Sắt (Fe)', 'Vonfram (W)', 'Đồng (Cu)', 'Crom (Cr)'], correct: 3, exp: 'Crom (Cr) là kim loại cứng nhất, có thể rạch được thủy tinh.' },
    { id: 2, topic: 'cd1', level: 'know', text: 'Ở nhiệt độ thường, kim loại nào sau đây ở trạng thái lỏng?', options: ['Bạc (Ag)', 'Thủy ngân (Hg)', 'Vàng (Au)', 'Đồng (Cu)'], correct: 1, exp: 'Thủy ngân (Hg) là kim loại duy nhất tồn tại ở dạng lỏng ở điều kiện thường.' },
    { id: 3, topic: 'cd1', level: 'understand', text: 'Kim loại có tính dẫn điện tốt nhất là:', options: ['Vàng (Au)', 'Bạc (Ag)', 'Đồng (Cu)', 'Nhôm (Al)'], correct: 1, exp: 'Thứ tự dẫn điện giảm dần: Ag > Cu > Au > Al > Fe.' },
    { id: 4, topic: 'cd2', level: 'know', text: 'Kim loại nào sau đây không tác dụng với dung dịch HCl?', options: ['Zn', 'Fe', 'Cu', 'Mg'], correct: 2, exp: 'Đồng (Cu) đứng sau Hydro trong dãy hoạt động hóa học nên không tác dụng với HCl.' },
    { id: 5, topic: 'cd2', level: 'understand', text: 'Nhúng thanh kẽm (Zn) vào dung dịch CuSO4 sẽ xảy ra hiện tượng gì?', options: ['Chỉ có bọt khí thoát ra', 'Ăn mòn hóa học, khối lượng thanh Zn giảm', 'Khối lượng thanh kẽm tăng, dung dịch nhạt màu', 'Không có hiện tượng gì'], correct: 2, exp: 'Zn + CuSO4 → ZnSO4 + Cu↓. Cu bám vào thanh Zn. Do M(Cu)=64 > M(Zn)=65 nhưng Zn tan ra và Cu bám vào, dung dịch nhạt màu xanh dần.' },
    { id: 6, topic: 'cd2', level: 'apply', text: 'Cho 2,4g Mg tác dụng hoàn toàn với dung dịch HCl dư. Thể tích khí H2 thu được ở đkc (25°C, 1 bar) là:', options: ['2,24 lít', '2,479 lít', '4,958 lít', '1,12 lít'], correct: 1, exp: 'n(Mg) = 2,4 / 24 = 0,1 mol. Bảo toàn electron: n(H2) = n(Mg) = 0,1 mol. V(H2) = 0,1 × 24,79 = 2,479 lít.' },
    { id: 7, topic: 'cd3', level: 'know', text: 'Nguyên tắc chung để điều chế kim loại là:', options: ['Oxi hóa ion kim loại thành nguyên tử', 'Khử ion kim loại thành nguyên tử', 'Phân hủy hợp chất chứa kim loại', 'Dùng kim loại mạnh đẩy kim loại yếu'], correct: 1, exp: 'Nguyên tắc chung để điều chế kim loại là quá trình khử ion kim loại thành nguyên tử kim loại (Mn+ + ne → M).' },
    { id: 8, topic: 'cd3', level: 'understand', text: 'Để điều chế Al, người ta dùng phương pháp nào sau đây?', options: ['Nhiệt luyện Fe2O3', 'Điện phân dung dịch AlCl3', 'Điện phân nóng chảy Al2O3', 'Thủy luyện dùng Zn'], correct: 2, exp: 'Kim loại mạnh (từ Al trở về trước) được điều chế bằng phương pháp điện phân nóng chảy hợp chất của chúng.' },
    { id: 9, topic: 'cd4', level: 'know', text: 'Trong quá trình ăn mòn điện hóa học vỏ tàu biển bằng thép, người ta thường gắn những tấm kim loại nào sau đây vào vỏ tàu?', options: ['Đồng (Cu)', 'Chì (Pb)', 'Kẽm (Zn)', 'Bạc (Ag)'], correct: 2, exp: 'Gắn kẽm (Zn) - kim loại hoạt động mạnh hơn Fe vào vỏ tàu. Zn sẽ bị ăn mòn thay cho vỏ tàu thép (Anode hi sinh).' },
    { id: 10, topic: 'cd4', level: 'apply', text: 'Có 4 hợp kim: (1) Fe-C, (2) Fe-Zn, (3) Fe-Sn, (4) Fe-Cu. Khi tiếp xúc với dung dịch chất điện li, ở bao nhiêu hợp kim Fe đóng vai trò là cực âm?', options: ['1', '2', '3', '4'], correct: 2, exp: 'Fe là cực âm khi Fe có tính khử mạnh hơn kim loại kia. Trong 4 trường hợp, Fe > C, Cu, Sn nhưng yếu hơn Zn. Vậy có 3 hợp kim (1,3,4) Fe là cực âm.' },
    { id: 11, topic: 'cd1', level: 'know', text: 'Kim loại nào sau đây nhẹ nhất (có khối lượng riêng nhỏ nhất)?', options: ['Na', 'K', 'Li', 'Al'], correct: 2, exp: 'Liti (Li) có khối lượng riêng nhỏ nhất trong các kim loại: D = 0,53 g/cm³.' },
    { id: 12, topic: 'cd1', level: 'understand', text: 'Tính chất vật lí chung của kim loại (dẻo, dẫn điện, dẫn nhiệt, ánh kim) được gây ra bởi:', options: ['Liên kết ion', 'Liên kết cộng hóa trị', 'Các electron tự do trong mạng tinh thể', 'Khối lượng nguyên tử lớn'], correct: 2, exp: 'Tất cả tính chất vật lí chung của kim loại đều do sự có mặt của các electron tự do trong mạng tinh thể kim loại.' },
    { id: 13, topic: 'cd2', level: 'know', text: 'Kim loại nào sau đây bị thụ động hóa trong H₂SO₄ đặc, nguội?', options: ['Cu', 'Zn', 'Fe', 'Ag'], correct: 2, exp: 'Fe, Al, Cr bị thụ động hóa (passivation) trong H₂SO₄ đặc nguội và HNO₃ đặc nguội do tạo lớp oxide bảo vệ bền vững.' },
    { id: 14, topic: 'cd2', level: 'understand', text: 'Phản ứng: Fe + 2HCl → FeCl₂ + H₂↑. Trong phản ứng này, Fe đóng vai trò là:', options: ['Chất oxi hóa', 'Chất khử', 'Vừa oxi hóa vừa khử', 'Chất xúc tác'], correct: 1, exp: 'Fe nhường electron (Fe → Fe²⁺ + 2e) nên Fe đóng vai trò chất khử. Tính chất đặc trưng của kim loại là tính khử.' },
    { id: 15, topic: 'cd2', level: 'apply', text: 'Cho 11,2g Fe tác dụng hoàn toàn với khí Cl₂ dư. Khối lượng muối thu được là:', options: ['25,4g', '32,5g', '26,7g', '24,4g'], correct: 1, exp: 'n(Fe) = 11,2/56 = 0,2 mol. 2Fe + 3Cl₂ → 2FeCl₃. n(FeCl₃) = n(Fe) = 0,2 mol. m(FeCl₃) = 0,2 × 162,5 = 32,5g.' },
    { id: 16, topic: 'cd3', level: 'understand', text: 'Phương pháp nhiệt luyện dùng để điều chế kim loại nào sau đây?', options: ['Na', 'Al', 'Cu', 'K'], correct: 2, exp: 'Nhiệt luyện dùng cho kim loại trung bình (sau Al trong dãy HĐ): Fe, Cu, Pb, Sn... Các kim loại mạnh (Na, K, Al) phải dùng điện phân nóng chảy.' },
    { id: 17, topic: 'cd3', level: 'apply', text: 'Điện phân nóng chảy muối NaCl, ở catode (cực âm) thu được:', options: ['Khí Cl₂', 'Kim loại Na', 'Khí H₂', 'NaOH'], correct: 1, exp: 'Ở catode (cực âm): Na⁺ + e → Na. Kim loại Na được tạo thành tại cực âm. Cl₂ thoát ra ở cực dương (anode).' },
    { id: 18, topic: 'cd4', level: 'know', text: 'Hợp kim nào sau đây có thành phần chính là Fe và C (2-5%)?', options: ['Thép', 'Gang', 'Đuyra', 'Đồng thau'], correct: 1, exp: 'Gang là hợp kim của Fe và C trong đó hàm lượng C từ 2-5%. Thép cũng là hợp kim Fe-C nhưng có hàm lượng C dưới 2%.' },
    { id: 19, topic: 'cd4', level: 'understand', text: 'Để bảo vệ vỏ tàu biển bằng thép, người ta gắn tấm Zn vào vỏ tàu. Phương pháp này gọi là:', options: ['Bảo vệ bề mặt', 'Bảo vệ điện hóa (anode hi sinh)', 'Mạ điện', 'Sơn phủ chống gỉ'], correct: 1, exp: 'Đây là phương pháp bảo vệ điện hóa (dùng anode hi sinh). Zn hoạt động hơn Fe nên Zn bị ăn mòn trước, bảo vệ Fe.' },
    { id: 20, topic: 'cd4', level: 'apply', text: 'Ngâm thanh Fe trong dung dịch CuSO₄. Sau phản ứng, khối lượng thanh Fe thay đổi như thế nào?', options: ['Giảm', 'Tăng', 'Không đổi', 'Không xác định được'], correct: 1, exp: 'Fe + CuSO₄ → FeSO₄ + Cu. Mỗi mol Fe (56g) tan ra, 1 mol Cu (64g) bám vào. Do 64 > 56 nên khối lượng thanh Fe tăng (tăng 8g/mol Fe phản ứng).' }
];

let currentQuizState = { answered: [], correct: 0, wrong: 0 };
// API Key: đọc từ config.js (gitignored) hoặc localStorage
const DEFAULT_API_KEY = (typeof CONFIG !== 'undefined' && CONFIG.GEMINI_API_KEY && CONFIG.GEMINI_API_KEY !== 'YOUR_GEMINI_API_KEY_HERE') ? CONFIG.GEMINI_API_KEY : '';
let currentApiKey = localStorage.getItem('gemini_api_key') || DEFAULT_API_KEY;

// --- UI UTILITIES ---
const showToast = (message, type = 'info') => {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    let icon = 'fa-info-circle text-blue-500';
    if(type === 'success') icon = 'fa-check-circle text-emerald-500';
    if(type === 'error') icon = 'fa-exclamation-circle text-red-500';
    
    toast.innerHTML = `<i class="fas ${icon}"></i> <span>${message}</span>`;
    container.appendChild(toast);
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
};

// --- THEME & SCROLL ---
const toggleTheme = () => {
    const body = document.body;
    const isDark = body.getAttribute('data-theme') === 'dark';
    body.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('theme-icon').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
};

window.addEventListener('scroll', () => {
    // Scroll to Top Button
    const topBtn = document.getElementById('scroll-top');
    if (window.scrollY > 300) {
        topBtn.classList.add('visible');
    } else {
        topBtn.classList.remove('visible');
    }

    // Reading Progress Bar
    if(document.getElementById('theory').classList.contains('active')) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById('progress-bar').style.width = scrolled + "%";
        
        // Update Sidebar Active Link
        const sections = document.querySelectorAll('.theory-section');
        let current = '';
        sections.forEach(sec => {
            const secTop = sec.offsetTop;
            if (window.scrollY >= secTop - 200) {
                current = sec.getAttribute('id');
            }
        });
        
        if (current) {
            document.querySelectorAll('.sidebar-link').forEach(link => {
                link.classList.remove('active');
                if(link.getAttribute('data-section') === current) {
                    link.classList.add('active');
                }
            });
        }
    }
});

// --- TAB NAVIGATION ---
window.switchTab = (tabId) => {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    
    document.getElementById(tabId).classList.add('active');
    document.getElementById('btn-' + tabId).classList.add('active');
    
    if(tabId === 'theory') {
        document.getElementById('progress-bar-container').style.display = 'block';
    } else {
        document.getElementById('progress-bar-container').style.display = 'none';
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
};

window.scrollToId = (id) => {
    const element = document.getElementById(id);
    if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({top: y, behavior: 'smooth'});
    }
};

// --- QUIZ & PRACTICE MODULE ---
window.renderQuiz = () => {
    const diffFilter = document.getElementById('difficulty-filter').value;
    const topicFilter = document.getElementById('topic-filter').value;
    const container = document.getElementById('quiz-container');
    
    let filtered = questions;
    if (diffFilter !== 'all') filtered = filtered.filter(q => q.level === diffFilter);
    if (topicFilter !== 'all') filtered = filtered.filter(q => q.topic === topicFilter);
    
    document.getElementById('total-count').innerText = filtered.length;
    
    if(filtered.length === 0) {
        container.innerHTML = '<div style="text-align:center; padding: 2rem; color: var(--text-muted);"><i class="fas fa-box-open" style="font-size:3rem; margin-bottom:1rem; opacity:0.5;"></i><p>Không có câu hỏi nào phù hợp với bộ lọc.</p></div>';
        return;
    }

    container.innerHTML = filtered.map((q, idx) => {
        const isAnswered = currentQuizState.answered.find(a => a.id === q.id);
        let cardClass = 'quiz-card';
        if(isAnswered) {
            cardClass += (isAnswered.isCorrect) ? ' answered-correct' : ' answered-wrong';
        }
        
        return `
        <div class="${cardClass}" id="quiz-card-${q.id}">
            <div class="quiz-meta">
                <span class="quiz-num">Câu ${idx + 1}</span>
                <span class="quiz-level" style="background: ${getBadgeColor(q.level)}20; color: ${getBadgeColor(q.level)}">${getBadgeText(q.level)}</span>
            </div>
            <p class="quiz-question">${q.text}</p>
            <div class="quiz-options">
                ${q.options.map((opt, i) => {
                    let btnClass = 'quiz-option';
                    let icon = '';
                    let disabled = isAnswered ? 'disabled' : '';
                    
                    if(isAnswered) {
                        if(i === q.correct) {
                            btnClass += ' correct';
                            icon = '<i class="fas fa-check-circle option-icon"></i>';
                        } else if(i === isAnswered.selected) {
                            btnClass += ' wrong';
                            icon = '<i class="fas fa-times-circle option-icon"></i>';
                        }
                    }
                    
                    return `
                    <button class="${btnClass}" ${disabled} onclick="checkAnswer(${q.id}, ${i})" id="opt-${q.id}-${i}">
                        <span><b>${String.fromCharCode(65 + i)}.</b> ${opt}</span>
                        ${icon}
                    </button>
                    `;
                }).join('')}
            </div>
            <div class="quiz-explanation ${isAnswered ? 'show' : ''}" id="exp-${q.id}">
                <h5><i class="fas fa-lightbulb"></i> Giải thích chi tiết</h5>
                <p>${q.exp}</p>
            </div>
        </div>
        `;
    }).join('');
};

const getBadgeColor = (l) => l === 'know' ? '#3b82f6' : l === 'understand' ? '#10b981' : '#f97316';
const getBadgeText = (l) => l === 'know' ? 'Nhận biết' : l === 'understand' ? 'Thông hiểu' : 'Vận dụng';

window.checkAnswer = (qid, selectedIdx) => {
    const q = questions.find(x => x.id === qid);
    const isCorrect = (selectedIdx === q.correct);
    
    currentQuizState.answered.push({ id: qid, selected: selectedIdx, isCorrect: isCorrect });
    
    if(isCorrect) {
        currentQuizState.correct++;
        showToast('Chính xác!', 'success');
    } else {
        currentQuizState.wrong++;
        showToast('Chưa chính xác. Xem giải thích bên dưới.', 'error');
    }
    
    document.getElementById('correct-count').innerText = currentQuizState.correct;
    document.getElementById('wrong-count').innerText = currentQuizState.wrong;
    document.getElementById('answered-count').innerText = currentQuizState.answered.length;
    
    renderQuiz();
};

window.resetQuiz = () => {
    currentQuizState = { answered: [], correct: 0, wrong: 0 };
    document.getElementById('correct-count').innerText = '0';
    document.getElementById('wrong-count').innerText = '0';
    document.getElementById('answered-count').innerText = '0';
    renderQuiz();
    showToast('Đã làm mới bộ câu hỏi', 'info');
};


// --- EXAM MODULE ---
const examQuestions = [
    { id: 1, text: 'Kim loại có nhiệt độ nóng chảy cao nhất là:', options: ['Fe', 'W', 'Cu', 'Cr'], correct: 1 },
    { id: 2, text: 'Cấu hình electron lớp ngoài cùng của nguyên tử Na (Z=11) là:', options: ['3s¹', '3s²', '2s²2p⁶', '3s²3p¹'], correct: 0 },
    { id: 3, text: 'Kim loại nào sau đây có tính dẻo cao nhất?', options: ['Fe', 'Al', 'Au', 'Cu'], correct: 2 },
    { id: 4, text: 'Liên kết kim loại là liên kết được hình thành do:', options: ['Sự góp chung electron', 'Lực hút tĩnh điện giữa ion', 'Các electron tự do và ion dương kim loại', 'Lực Van der Waals'], correct: 2 },
    { id: 5, text: 'Tính chất hóa học đặc trưng của kim loại là:', options: ['Tính oxi hóa', 'Tính khử', 'Tính acid', 'Tính base'], correct: 1 },
    { id: 6, text: 'Kim loại nào phản ứng được với nước ở điều kiện thường?', options: ['Fe', 'Cu', 'Na', 'Ag'], correct: 2 },
    { id: 7, text: 'Cho Fe tác dụng với dung dịch HCl, sản phẩm muối là:', options: ['FeCl₃', 'FeCl₂', 'Fe₂(SO₄)₃', 'FeSO₄'], correct: 1 },
    { id: 8, text: 'Kim loại Cu tác dụng được với dung dịch nào sau đây?', options: ['HCl loãng', 'H₂SO₄ loãng', 'HNO₃ loãng', 'NaOH loãng'], correct: 2 },
    { id: 9, text: 'Fe bị thụ động hóa trong dung dịch nào?', options: ['HCl đặc', 'H₂SO₄ loãng', 'HNO₃ đặc, nguội', 'NaOH'], correct: 2 },
    { id: 10, text: 'Khi nhúng thanh Zn vào dung dịch CuSO₄, hiện tượng xảy ra là:', options: ['Thanh Zn tan dần, có Cu đỏ bám vào', 'Không có hiện tượng', 'Có khí thoát ra', 'Dung dịch chuyển sang màu xanh đậm hơn'], correct: 0 },
    { id: 11, text: 'Nguyên tắc chung để điều chế kim loại là:', options: ['Oxi hóa ion kim loại', 'Khử ion kim loại thành nguyên tử', 'Nhiệt phân muối', 'Hòa tan quặng'], correct: 1 },
    { id: 12, text: 'Kim loại Al được điều chế bằng phương pháp:', options: ['Nhiệt luyện', 'Thủy luyện', 'Điện phân nóng chảy', 'Điện phân dung dịch'], correct: 2 },
    { id: 13, text: 'Trong phản ứng nhiệt luyện, chất khử thường dùng là:', options: ['O₂, Cl₂', 'CO, H₂, C, Al', 'HCl, H₂SO₄', 'NaOH, KOH'], correct: 1 },
    { id: 14, text: 'Phương pháp thủy luyện dùng để tách kim loại nào?', options: ['Na, K', 'Al, Mg', 'Cu, Ag, Au', 'Ca, Ba'], correct: 2 },
    { id: 15, text: 'Vai trò của criolit (Na₃AlF₆) trong điện phân Al₂O₃ là:', options: ['Làm chất xúc tác', 'Hạ nhiệt độ nóng chảy, tăng tính dẫn điện', 'Làm chất oxi hóa', 'Tạo hợp kim nhôm'], correct: 1 },
    { id: 16, text: 'Gang là hợp kim của Fe với C, hàm lượng C trong gang là:', options: ['Dưới 2%', '2% - 5%', 'Trên 5%', 'Trên 10%'], correct: 1 },
    { id: 17, text: 'Ăn mòn điện hóa khác ăn mòn hóa học ở điểm nào?', options: ['Không cần chất oxi hóa', 'Có phát sinh dòng điện', 'Không phải là quá trình oxi hóa khử', 'Xảy ra ở nhiệt độ cao'], correct: 1 },
    { id: 18, text: 'Điều kiện nào KHÔNG cần thiết cho ăn mòn điện hóa?', options: ['Hai điện cực khác bản chất', 'Tiếp xúc nhau', 'Trong dung dịch chất điện li', 'Nhiệt độ trên 100°C'], correct: 3 },
    { id: 19, text: 'Để bảo vệ ống thép ngầm dưới đất, nên nối ống thép với:', options: ['Tấm đồng (Cu)', 'Tấm kẽm (Zn)', 'Tấm bạc (Ag)', 'Tấm thiếc (Sn)'], correct: 1 },
    { id: 20, text: 'Cho 4,8g Mg tác dụng hoàn toàn với HCl dư. Thể tích H₂ (đkc) thu được là:', options: ['2,479 lít', '4,958 lít', '7,437 lít', '9,916 lít'], correct: 1 }
];

const examAnswerKey = [
    'B', 'A', 'C', 'C', 'B', 'C', 'B', 'C', 'C', 'A',
    'B', 'C', 'B', 'C', 'B', 'B', 'B', 'D', 'B', 'B'
];

// Render exam questions
window.renderExamQuestions = () => {
    const container = document.getElementById('exam1-questions');
    if (!container) return;
    container.innerHTML = examQuestions.map((q, idx) => `
        <div class="exam-q-card">
            <div class="exam-q-num">Câu ${idx + 1}</div>
            <p class="exam-q-text">${q.text}</p>
            <div class="exam-q-options">
                ${q.options.map((opt, i) => `
                    <div class="exam-q-option">
                        <span class="exam-q-letter">${String.fromCharCode(65 + i)}</span>
                        <span>${opt}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');

    // Render answer grid
    const ansGrid = document.getElementById('exam1-answer-grid');
    if (!ansGrid) return;
    ansGrid.innerHTML = examQuestions.map((q, idx) => `
        <div class="answer-cell">
            <span class="answer-q-num">${idx + 1}</span>
            <span class="answer-key">${examAnswerKey[idx]}</span>
        </div>
    `).join('');
};

window.switchExam = (examId) => {
    document.querySelectorAll('.exam-paper').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.exam-tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(examId).classList.add('active');
    document.getElementById('btn-' + examId).classList.add('active');
};

window.toggleAnswer = (answerId) => {
    const el = document.getElementById(answerId);
    const btn = document.getElementById('btn-' + answerId);
    if (el.classList.contains('hidden')) {
        el.classList.remove('hidden');
        btn.innerHTML = '<i class="fas fa-eye-slash"></i> Ẩn Đáp án';
        btn.classList.add('answer-visible');
    } else {
        el.classList.add('hidden');
        btn.innerHTML = '<i class="fas fa-key"></i> Xem Đáp án & Hướng dẫn chấm';
        btn.classList.remove('answer-visible');
    }
};

// --- AI TUTOR MODULE ---

window.saveApiKey = () => {
    const input = document.getElementById('api-key-input').value.trim();
    if(input && input !== '********') {
        currentApiKey = input;
        localStorage.setItem('gemini_api_key', input);
        showToast('Đã lưu API Key thành công', 'success');
        document.getElementById('api-key-input').value = '********';
    }
};

window.quickAsk = (text) => {
    document.getElementById('ai-input').value = text;
    window.sendChatMessage();
};

window.sendChatMessage = async () => {
    const input = document.getElementById('ai-input');
    const query = input.value.trim();
    if (!query) return;

    appendMessage('user', query);
    input.value = '';
    
    // UI Feedback
    const btnSend = document.getElementById('btn-send');
    btnSend.disabled = true;
    btnSend.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>';

    try {
        if(!currentApiKey) {
            // Mock Response nếu chưa có API key
            setTimeout(() => {
                appendMessage('ai', `**Xin lỗi, bạn cần cung cấp API Key của Google Gemini để sử dụng tính năng này.**\n\nHãy lấy API Key miễn phí tại [Google AI Studio](https://aistudio.google.com/app/apikey) và điền vào ô cấu hình phía trên nhé!\n\n_Bạn đã hỏi:_ "${query}"`);
                btnSend.disabled = false;
                btnSend.innerHTML = '<i class="fas fa-paper-plane"></i>';
            }, 1000);
            return;
        }

        const lowerQuery = query.toLowerCase();
        if (lowerQuery.includes('vẽ') || lowerQuery.includes('hình ảnh') || lowerQuery.includes('sơ đồ')) {
            await handleImageRequest(query);
        } else {
            await handleTextRequest(query);
        }
    } catch (error) {
        console.error(error);
        appendMessage('ai', 'Rất tiếc, đã có lỗi kết nối với API Google Gemini. Vui lòng kiểm tra lại kết nối mạng hoặc API Key của bạn.');
    } finally {
        btnSend.disabled = false;
        btnSend.innerHTML = '<i class="fas fa-paper-plane"></i>';
    }
};

const handleTextRequest = async (userQuery) => {
    document.getElementById('loading-modal').classList.remove('hidden');
    
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${currentApiKey}`;
    const systemPrompt = `Bạn là gia sư Hóa học 12 chuyên sâu về chương 6: Đại cương Kim loại. 
    Nhiệm vụ: Trả lời ngắn gọn, súc tích, dễ hiểu. Dùng định dạng markdown để highlight. 
    Luôn định dạng các công thức hóa học rõ ràng, ví dụ H_2SO_4. Không dùng quá 300 từ unless được yêu cầu chi tiết.`;
    
    const payload = {
        contents: [{ parts: [{ text: userQuery }] }],
        systemInstruction: { parts: [{ text: systemPrompt }] },
        generationConfig: { temperature: 0.7 }
    };

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    });

    document.getElementById('loading-modal').classList.add('hidden');

    if(!response.ok) {
        throw new Error("Lỗi API Gemini");
    }

    const result = await response.json();
    let text = result.candidates?.[0]?.content?.parts?.[0]?.text || "Không có phản hồi.";
    
    // Parse Markdown basic (Bold, Italic, Code, Line breaks, Lists)
    text = text.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
    text = text.replace(/`(.*?)`/g, '<code>$1</code>');
    text = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    text = text.replace(/(?<!\*)\*(?!\*)(.*?)(?<!\*)\*(?!\*)/g, '<em>$1</em>');
    text = text.replace(/^### (.*$)/gm, '<h4>$1</h4>');
    text = text.replace(/^## (.*$)/gm, '<h3>$1</h3>');
    text = text.replace(/^- (.*$)/gm, '• $1');
    text = text.replace(/\n\n/g, '<br><br>');
    text = text.replace(/\n/g, '<br>');

    appendMessage('ai', text);
};

const handleImageRequest = async (prompt) => {
    document.getElementById('loading-modal').classList.remove('hidden');
    
    // Dùng Gemini Imagen Model nếu available, nhưng vì API chuẩn có thể khác, ta dùng mock hoặc text fallback tạm nếu token/API hạn chế
    // Imagen 3 API URL Structure (beta):
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/imagen-3.0-generate-001:predict?key=${currentApiKey}`;
    
    const englishPrompt = `A detailed professional chemistry diagram/illustration showing: ${prompt}. Scientific style, clean white background, educational textbook quality.`;
    
    const payload = {
        instances: [{ prompt: englishPrompt }],
        parameters: { sampleCount: 1 }
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        document.getElementById('loading-modal').classList.add('hidden');

        if(response.ok) {
            const result = await response.json();
            if (result.predictions?.[0]?.bytesBase64Encoded) {
                const imageUrl = `data:image/png;base64,${result.predictions[0].bytesBase64Encoded}`;
                appendImage(imageUrl, prompt);
                return;
            }
        }
        
        // Fallback to text explanation if image generation fails or model access denied
        appendMessage('ai', 'Tài khoản API này có thể chưa được kích hoạt Imagen (tạo ảnh). Thay vào đó, tôi có thể giải thích chi tiết quá trình đó bằng văn bản cho bạn nhé!');
        
    } catch (e) {
        document.getElementById('loading-modal').classList.add('hidden');
        appendMessage('ai', 'Tạo hình ảnh không khả dụng lúc này (Lỗi mạng hoặc giới hạn API). Thay vào đó, bạn có muốn tôi giải thích bằng chữ không?');
    }
};

const appendMessage = (role, text) => {
    const container = document.getElementById('chat-messages');
    
    // Bỏ phần Welcome đi nếu là tin nhắn đầu
    const welcomeArea = container.querySelector('.chat-welcome');
    if(welcomeArea) welcomeArea.style.display = 'none';

    const div = document.createElement('div');
    div.className = `message-row ${role}`;
    
    const content = `
        <div class="message-bubble">
            <div class="message-content">${text}</div>
        </div>
    `;
    div.innerHTML = content;
    
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
};

const appendImage = (url, prompt) => {
    const container = document.getElementById('chat-messages');
    
    const div = document.createElement('div');
    div.className = `message-row ai`;
    
    const content = `
        <div class="message-bubble">
            <div class="message-content">
                <p style="font-size: 0.8em; color: var(--text-muted); font-style: italic;">Hình ảnh minh họa cho: "${prompt}"</p>
                <img src="${url}" class="message-image" alt="Chemistry Diagram" onclick="window.open('${url}')">
            </div>
        </div>
    `;
    div.innerHTML = content;
    
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderQuiz();
    renderExamQuestions();
    
    // Init API Key field
    const apiInput = document.getElementById('api-key-input');
    if(apiInput && currentApiKey) {
        apiInput.value = '••••••••';
    }
    
    // Set default active tab style
    const firstLink = document.querySelectorAll('.sidebar-link')[0];
    if(firstLink) firstLink.classList.add('active');
});
