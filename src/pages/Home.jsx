import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

export default function Home() {
  const { t } = useLang()

  return (
    <>
      {/* ── Hero ── */}
      <section className="hero">
        <img src="/tower.png" alt="شركة الفتحي للمقاولات" className="hero-img" />
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">✦ {t.badge}</div>
          <h1 className="hero-title">{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">{t.contactBtn}</Link>
            <Link to="/login" className="btn-outline">{t.portalBtn}</Link>
          </div>
        </div>
        <div className="scroll-hint"><span>{t.scroll}</span><span>↓</span></div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-strip">
        <div className="stat-item">
          <div className="stat-number">{t.stat1}</div>
          <div className="stat-label">{t.stat1Label}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{t.stat2}</div>
          <div className="stat-label">{t.stat2Label}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{t.stat3}</div>
          <div className="stat-label">{t.stat3Label}</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">{t.stat4}</div>
          <div className="stat-label">{t.stat4Label}</div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="section section-navy">
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src="/tower.png" alt="مشاريع الشركة" />
            <div className="about-img-overlay" />
            <div className="about-img-tag">{t.aboutImgTag}</div>
          </div>
          <div className="about-text">
            <span className="section-tag">{t.aboutTag}</span>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <ul className="feature-list">
              {[t.f1, t.f2, t.f3, t.f4].map((f, i) => (
                <li key={i}>
                  <div className="feature-icon">✓</div>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="section section-navy2">
        <div className="message-banner">
          <span className="section-tag">{t.quoteTag}</span>
          <blockquote>{t.quote}</blockquote>
          <cite>{t.quoteCite}</cite>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="section section-navy">
        <div className="section-header">
          <span className="section-tag">{t.servicesTag}</span>
          <h2 className="section-title">{t.servicesTitle}</h2>
          <p className="section-desc">{t.servicesDesc}</p>
        </div>
        <div className="cards-grid">
          {t.services.map((s) => (
            <div className="card" key={s.title}>
              <div className="card-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section section-navy2" style={{ textAlign: 'center' }}>
        <span className="section-tag">{t.ctaTag}</span>
        <h2 className="section-title">{t.ctaTitle}</h2>
        <p className="section-desc" style={{ marginBottom: '2.5rem' }}>{t.ctaDesc}</p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-primary">{t.contactBtn}</Link>
          <Link to="/login" className="btn-outline">{t.portalBtn}</Link>
        </div>
      </section>
    </>
  )
}
