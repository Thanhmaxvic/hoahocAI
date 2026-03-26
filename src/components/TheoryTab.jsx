import { useEffect, useState } from 'react'

function TheoryTab() {
  const [activeSection, setActiveSection] = useState('cd1')

  useEffect(() => {
    const handleScroll = () => {
      // Reading Progress Bar
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = (winScroll / height) * 100
      const progressBar = document.getElementById('progress-bar')
      if (progressBar) progressBar.style.width = scrolled + '%'

      // Update active sidebar section
      const sections = document.querySelectorAll('.theory-section')
      let current = 'cd1'
      sections.forEach(sec => {
        const secTop = sec.offsetTop
        if (window.scrollY >= secTop - 200) {
          current = sec.getAttribute('id')
        }
      })
      if (current) setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToId = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div id="theory" className="tab-content active">
      {/* Hero Banner */}
      <div className="theory-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-flask-vial"></i>
            Chương 6
          </div>
          <h1 className="hero-title">Đại cương về <span className="gradient-text">Kim Loại</span></h1>
          <p className="hero-desc">Tổng hợp kiến thức từ cấu tạo, tính chất đến phương pháp tách kim loại và ứng dụng thực tiễn.</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4</span>
              <span className="stat-label">Chuyên đề</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">30+</span>
              <span className="stat-label">Câu hỏi</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">AI</span>
              <span className="stat-label">Gia sư</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="atom-animation">
            <div className="nucleus"></div>
            <div className="orbit orbit-1"><div className="electron"></div></div>
            <div className="orbit orbit-2"><div className="electron"></div></div>
            <div className="orbit orbit-3"><div className="electron"></div></div>
          </div>
        </div>
      </div>

      <div className="theory-layout">
        {/* Sidebar Menu */}
        <aside className="theory-sidebar" id="theory-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-heading">
              <i className="fas fa-list-ul"></i>
              Mục lục
            </h3>
            <ul className="sidebar-menu">
              {[
                { id: 'cd1', label: 'CĐ1: Cấu tạo & Tính chất VL', color: 'var(--blue-500)' },
                { id: 'cd2', label: 'CĐ2: Tính chất hóa học', color: 'var(--emerald-500)' },
                { id: 'cd3', label: 'CĐ3: Tách kim loại', color: 'var(--purple-500)' },
                { id: 'cd4', label: 'CĐ4: Hợp kim & Ăn mòn', color: 'var(--orange-500)' },
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToId(item.id)}
                    className={`sidebar-link ${activeSection === item.id ? 'active' : ''}`}
                    data-section={item.id}
                  >
                    <span className="sidebar-dot" style={{ background: item.color }}></span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
            <div className="sidebar-summary">
              <h4><i className="fas fa-lightbulb"></i> Mẹo học tập</h4>
              <p>Nắm vững <strong>dãy hoạt động hóa học</strong> là chìa khóa để giải quyết hầu hết bài tập chương này!</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="theory-content">
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </div>
      </div>
    </div>
  )
}

function Section1() {
  return (
    <section id="cd1" className="theory-section">
      <div className="section-header">
        <span className="section-badge badge-blue">Chuyên đề 1</span>
        <h2 className="section-title">Cấu tạo và Tính chất vật lí</h2>
      </div>
      <div className="section-body">
        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-atom text-blue-icon"></i>
            1. Đặc điểm cấu tạo nguyên tử kim loại
          </h4>
          <div className="info-card">
            <ul className="styled-list">
              <li>Nguyên tử kim loại thường có <strong>ít electron lớp ngoài cùng</strong> (1, 2, hoặc 3 electron).</li>
              <li><strong>Bán kính nguyên tử</strong> kim loại thường lớn hơn phi kim cùng chu kì.</li>
              <li><strong>Độ âm điện</strong> nhỏ hơn phi kim → dễ nhường electron.</li>
              <li>Năng lượng ion hóa thấp → tính khử mạnh.</li>
            </ul>
          </div>
        </div>

        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-cubes text-blue-icon"></i>
            2. Liên kết kim loại &amp; Mạng tinh thể
          </h4>
          <div className="highlight-box highlight-blue">
            <p><strong>Liên kết kim loại</strong> là liên kết được hình thành giữa các nguyên tử và ion kim loại trong mạng tinh thể do sự tham gia của các <em>electron tự do</em>.</p>
          </div>
          <div className="crystal-grid">
            <div className="crystal-card">
              <div className="crystal-icon">💎</div>
              <h5>Lập phương tâm khối</h5>
              <p>Na, K, Li, Ba, Fe (α)</p>
              <span className="crystal-density">Kém đặc khít (68%)</span>
            </div>
            <div className="crystal-card">
              <div className="crystal-icon">🔷</div>
              <h5>Lập phương tâm diện</h5>
              <p>Cu, Ag, Au, Al, Pb</p>
              <span className="crystal-density">Đặc khít (74%)</span>
            </div>
            <div className="crystal-card">
              <div className="crystal-icon">⬡</div>
              <h5>Lục phương</h5>
              <p>Mg, Zn, Be, Cd</p>
              <span className="crystal-density">Đặc khít (74%)</span>
            </div>
          </div>
        </div>

        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-bolt text-blue-icon"></i>
            3. Tính chất vật lí chung
          </h4>
          <p className="block-desc">Tính chất vật lí chung của kim loại là do <strong>các electron tự do</strong> trong mạng tinh thể gây ra.</p>
          <div className="properties-grid">
            {[
              { icon: 'fa-hand-fist', bg: 'linear-gradient(135deg, #3b82f6, #1d4ed8)', title: 'Tính dẻo', desc: 'Cho phép rèn, dát mỏng, kéo sợi. Do các lớp tinh thể trượt lên nhau nhờ lực hút của electron tự do.', example: 'VD: Au, Ag, Al, Cu, Sn' },
              { icon: 'fa-bolt', bg: 'linear-gradient(135deg, #f59e0b, #d97706)', title: 'Dẫn điện', desc: 'Electron tự do di chuyển có hướng dưới tác dụng của điện trường → tạo dòng điện.', example: 'Ag > Cu > Au > Al > Fe' },
              { icon: 'fa-temperature-high', bg: 'linear-gradient(135deg, #ef4444, #dc2626)', title: 'Dẫn nhiệt', desc: 'Electron tự do truyền năng lượng từ vùng nhiệt độ cao sang vùng nhiệt độ thấp.', example: 'Ag > Cu > Al > Fe' },
              { icon: 'fa-sparkles', bg: 'linear-gradient(135deg, #8b5cf6, #7c3aed)', title: 'Ánh kim', desc: 'Electron tự do phản xạ ánh sáng → tạo vẻ sáng đặc trưng.', example: 'Au (vàng), Cu (đỏ), Ag (trắng)' },
            ].map(prop => (
              <div className="property-card" key={prop.title}>
                <div className="property-icon" style={{ background: prop.bg }}>
                  <i className={`fas ${prop.icon}`}></i>
                </div>
                <h5>{prop.title}</h5>
                <p>{prop.desc}</p>
                <span className="property-example">{prop.example}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-chart-bar text-blue-icon"></i>
            4. Tính chất vật lí riêng
          </h4>
          <div className="comparison-table">
            <table>
              <thead>
                <tr><th>Tính chất</th><th>Cao nhất</th><th>Thấp nhất</th></tr>
              </thead>
              <tbody>
                <tr><td><strong>Khối lượng riêng</strong></td><td>Os (22,6 g/cm³)</td><td>Li (0,53 g/cm³)</td></tr>
                <tr><td><strong>Nhiệt độ nóng chảy</strong></td><td>W (3422°C)</td><td>Hg (-39°C)</td></tr>
                <tr><td><strong>Độ cứng</strong></td><td>Cr (cứng nhất)</td><td>Cs (mềm nhất)</td></tr>
              </tbody>
            </table>
          </div>
          <div className="note-box">
            <i className="fas fa-circle-info"></i>
            <p><strong>Ghi nhớ:</strong> Kim loại nhẹ có D &lt; 5 g/cm³ (Na, K, Mg, Al...). Kim loại nặng có D ≥ 5 g/cm³ (Fe, Cu, Pb, Ag, Au...).</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Section2() {
  return (
    <section id="cd2" className="theory-section">
      <div className="section-header">
        <span className="section-badge badge-emerald">Chuyên đề 2</span>
        <h2 className="section-title">Tính chất hóa học</h2>
      </div>
      <div className="section-body">
        <div className="highlight-box highlight-emerald">
          <p>Tính chất hóa học đặc trưng của kim loại là <strong>TÍNH KHỬ</strong>:</p>
          <div className="formula-display">M → M<sup>n+</sup> + ne<sup>−</sup></div>
        </div>

        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-fire text-emerald-icon"></i>
            1. Tác dụng với phi kim
          </h4>
          <div className="reaction-cards">
            <div className="reaction-card">
              <div className="reaction-header"><span className="reaction-label">Với O₂</span></div>
              <div className="reaction-equation">4Al + 3O₂ → 2Al₂O₃</div>
              <p className="reaction-note">Hầu hết KL tác dụng (trừ Au, Pt, Ag).</p>
            </div>
            <div className="reaction-card">
              <div className="reaction-header"><span className="reaction-label">Với Cl₂</span></div>
              <div className="reaction-equation">2Fe + 3Cl₂ → 2FeCl₃</div>
              <p className="reaction-note">Cl₂ có tính oxi hóa mạnh → Fe lên số OXH +3.</p>
            </div>
            <div className="reaction-card">
              <div className="reaction-header"><span className="reaction-label">Với S</span></div>
              <div className="reaction-equation">Hg + S → HgS <span className="temp-tag">t° thường</span></div>
              <p className="reaction-note">Phản ứng xảy ra ở nhiệt độ thường → dùng thu hồi Hg.</p>
            </div>
          </div>
        </div>

        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-droplet text-emerald-icon"></i>
            2. Tác dụng với nước
          </h4>
          <div className="info-card">
            <ul className="styled-list">
              <li>Kim loại <strong>IA</strong> (Li, Na, K, Rb, Cs) và <strong>IIA</strong> (Ca, Sr, Ba) phản ứng mạnh với nước ở điều kiện thường.</li>
              <li className="formula-inline">2Na + 2H₂O → 2NaOH + H₂↑</li>
              <li className="formula-inline">Ca + 2H₂O → Ca(OH)₂ + H₂↑</li>
              <li><strong>Mg</strong> phản ứng chậm với nước nóng; <strong>Al, Fe...</strong> không phản ứng (có lớp oxide bảo vệ).</li>
            </ul>
          </div>
        </div>

        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-flask text-emerald-icon"></i>
            3. Tác dụng với dung dịch acid
          </h4>
          <div className="acid-comparison">
            <div className="acid-card">
              <div className="acid-header acid-dilute"><h5>HCl, H₂SO₄ loãng</h5></div>
              <div className="acid-body">
                <p>Kim loại <strong>đứng trước H</strong> trong dãy hoạt động → giải phóng H₂.</p>
                <div className="reaction-equation small">Fe + 2HCl → FeCl₂ + H₂↑</div>
                <div className="reaction-equation small">Zn + H₂SO₄(l) → ZnSO₄ + H₂↑</div>
              </div>
            </div>
            <div className="acid-card">
              <div className="acid-header acid-concentrated"><h5>HNO₃, H₂SO₄ đặc</h5></div>
              <div className="acid-body">
                <p>Phản ứng với <strong>hầu hết KL</strong> (trừ Au, Pt). Không giải phóng H₂.</p>
                <div className="reaction-equation small">Cu + 4HNO₃(đ) → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O</div>
                <div className="warning-inline">
                  <i className="fas fa-triangle-exclamation"></i>
                  Al, Fe, Cr bị <strong>thụ động hóa</strong> trong HNO₃ đặc nguội và H₂SO₄ đặc nguội.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-arrows-rotate text-emerald-icon"></i>
            4. Tác dụng với dung dịch muối
          </h4>
          <div className="info-card">
            <p>Kim loại mạnh hơn <strong>đẩy</strong> kim loại yếu hơn ra khỏi dung dịch muối:</p>
            <div className="reaction-equation">Fe + CuSO₄ → FeSO₄ + Cu↓</div>
            <div className="note-box mt-4">
              <i className="fas fa-star"></i>
              <p><strong>Dãy hoạt động hóa học:</strong> K, Na, Ba, Ca, Mg, Al, Zn, Fe, Ni, Sn, Pb, <span className="text-highlight">H</span>, Cu, Hg, Ag, Pt, Au</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Section3() {
  return (
    <section id="cd3" className="theory-section">
      <div className="section-header">
        <span className="section-badge badge-purple">Chuyên đề 3</span>
        <h2 className="section-title">Phương pháp tách kim loại</h2>
      </div>
      <div className="section-body">
        <div className="highlight-box highlight-purple">
          <p><strong>Nguyên tắc chung:</strong> Khử ion kim loại thành nguyên tử kim loại.</p>
          <div className="formula-display">M<sup>n+</sup> + ne<sup>−</sup> → M</div>
        </div>

        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-industry text-purple-icon"></i>
            Các phương pháp tách kim loại
          </h4>
          <div className="methods-timeline">
            {[
              { num: '01', title: 'Phương pháp nhiệt luyện', desc: 'Dùng chất khử (CO, H₂, C, Al) để khử oxide kim loại ở nhiệt độ cao.', eq: <>Fe₂O₃ + 3CO →<sup>t°</sup> 2Fe + 3CO₂</>, scope: 'Áp dụng: Kim loại trung bình (sau Al trong dãy HĐ)' },
              { num: '02', title: 'Phương pháp thủy luyện', desc: 'Dùng kim loại mạnh hơn đẩy kim loại yếu ra khỏi dung dịch muối.', eq: 'Fe + CuSO₄ → FeSO₄ + Cu↓', scope: 'Áp dụng: Kim loại yếu (Cu, Ag, Au)' },
              { num: '03', title: 'Phương pháp điện phân nóng chảy', desc: 'Điện phân nóng chảy muối halogenua, hydroxide hoặc oxide.', eq: <>2Al₂O₃ →<sup>đpnc, criolit</sup> 4Al + 3O₂</>, scope: 'Áp dụng: Kim loại mạnh (K, Na, Ca, Mg, Al)' },
              { num: '04', title: 'Phương pháp điện phân dung dịch', desc: 'Điện phân dung dịch muối của kim loại trung bình và yếu.', eq: <>2CuSO₄ + 2H₂O →<sup>đp</sup> 2Cu + 2H₂SO₄ + O₂</>, scope: 'Áp dụng: Kim loại sau Al (Cu, Zn, Ni...)' },
            ].map(method => (
              <div className="method-item" key={method.num}>
                <div className="method-number">{method.num}</div>
                <div className="method-content">
                  <h5>{method.title}</h5>
                  <p>{method.desc}</p>
                  <div className="reaction-equation small">{method.eq}</div>
                  <span className="method-scope">{method.scope}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Section4() {
  return (
    <section id="cd4" className="theory-section">
      <div className="section-header">
        <span className="section-badge badge-orange">Chuyên đề 4</span>
        <h2 className="section-title">Hợp kim và Ăn mòn kim loại</h2>
      </div>
      <div className="section-body">
        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-gears text-orange-icon"></i>
            1. Hợp kim
          </h4>
          <div className="info-card">
            <p><strong>Hợp kim</strong> là vật liệu kim loại có chứa thêm một hay nhiều nguyên tố khác (kim loại hoặc phi kim).</p>
          </div>
          <div className="alloy-grid">
            {[
              { icon: '🏗️', name: 'Gang', comp: 'Fe + C (2-5%)', note: 'Gang trắng, gang xám' },
              { icon: '⚙️', name: 'Thép', comp: 'Fe + C (< 2%)', note: 'Thép thường, thép đặc biệt' },
              { icon: '✈️', name: 'Đuyra', comp: 'Al + Cu + Mn + Mg', note: 'Nhẹ, bền → hàng không' },
              { icon: '💰', name: 'Đồng thau', comp: 'Cu + Zn', note: 'Thiết bị, đồ trang trí' },
            ].map(alloy => (
              <div className="alloy-card" key={alloy.name}>
                <div className="alloy-icon">{alloy.icon}</div>
                <h5>{alloy.name}</h5>
                <p>{alloy.comp}</p>
                <span>{alloy.note}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-burst text-orange-icon"></i>
            2. Ăn mòn kim loại
          </h4>
          <div className="corrosion-comparison">
            <div className="corrosion-card">
              <div className="corrosion-header corrosion-chemical">
                <h5><i className="fas fa-flask"></i> Ăn mòn hóa học</h5>
              </div>
              <div className="corrosion-body">
                <ul className="styled-list">
                  <li>Quá trình <strong>oxi hóa - khử</strong></li>
                  <li>Electron chuyển <strong>trực tiếp</strong> từ KL sang môi trường</li>
                  <li><strong>Không</strong> phát sinh dòng điện</li>
                  <li>VD: Fe trong khí Cl₂, thép trong lò nung</li>
                </ul>
              </div>
            </div>
            <div className="corrosion-card">
              <div className="corrosion-header corrosion-electro">
                <h5><i className="fas fa-bolt"></i> Ăn mòn điện hóa</h5>
              </div>
              <div className="corrosion-body">
                <ul className="styled-list">
                  <li>Quá trình <strong>oxi hóa - khử</strong></li>
                  <li>Electron chuyển qua <strong>dây dẫn</strong> từ cực âm sang cực dương</li>
                  <li><strong>Phát sinh</strong> dòng điện</li>
                  <li>VD: Vỏ tàu biển, ống nước ngầm</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="highlight-box highlight-orange mt-6">
            <h5><i className="fas fa-circle-check"></i> Điều kiện xảy ra ăn mòn điện hóa:</h5>
            <div className="conditions-grid">
              <div className="condition-item">
                <span className="condition-number">1</span>
                <p>Hai điện cực có bản chất khác nhau (KL-KL hoặc KL-PK)</p>
              </div>
              <div className="condition-item">
                <span className="condition-number">2</span>
                <p>Hai điện cực tiếp xúc trực tiếp hoặc gián tiếp qua dây dẫn</p>
              </div>
              <div className="condition-item">
                <span className="condition-number">3</span>
                <p>Hai điện cực cùng nhúng trong dung dịch chất điện li</p>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <h4 className="block-title">
            <i className="fas fa-shield-halved text-orange-icon"></i>
            3. Bảo vệ kim loại
          </h4>
          <div className="protection-grid">
            <div className="protection-card">
              <div className="protection-icon">🎨</div>
              <h5>Bảo vệ bề mặt</h5>
              <p>Phủ lên bề mặt kim loại một lớp bảo vệ: sơn, mạ, bôi dầu mỡ, tráng men, phủ plastic...</p>
            </div>
            <div className="protection-card">
              <div className="protection-icon">🔋</div>
              <h5>Bảo vệ điện hóa</h5>
              <p>Gắn kim loại mạnh hơn (hoạt động hơn) vào vật cần bảo vệ → <strong>Anode hi sinh</strong>.</p>
              <div className="example-box">
                VD: Gắn Zn vào vỏ tàu biển bằng thép. Zn bị ăn mòn thay cho Fe.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TheoryTab
