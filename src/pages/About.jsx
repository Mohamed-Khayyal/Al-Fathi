import { useLang } from '../context/LanguageContext'

export default function About() {
  const { t } = useLang()

  return (
    <>
      {/* Hero Banner */}
      <section className="about-page-hero">
        <div className="about-page-hero-content">
          <span className="section-tag">{t.aboutPageTag}</span>
          <h1>{t.aboutPageTitle}</h1>
          <div className="about-hero-divider" />
        </div>
      </section>

      {/* Main Content */}
      <section className="section section-navy">
        <div className="about-page-grid">

          {/* Logo / Visual side */}
          <div className="about-page-visual">
            <div className="about-page-logo-card">
              <img src="/logo.jpg" alt="شركه الفتحي للتطوير العقاري" className="about-page-logo" />
              <div className="about-page-logo-glow" />
            </div>
          </div>

          {/* Text side */}
          <div className="about-page-text">
            <p className="about-page-welcome">{t.aboutWelcome}</p>
            <p className="about-page-para">{t.aboutVision}</p>
            <p className="about-page-para">{t.aboutPromise}</p>

            {/* Chairman signature */}
            <div className="chairman-card">
              <div className="chairman-divider" />
              <div className="chairman-info">
                <div className="chairman-icon">👤</div>
                <div>
                  <div className="chairman-role">{t.chairmanRole}</div>
                  <div className="chairman-name">{t.chairmanName}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Strip */}
      <section className="section section-navy2">
        <div className="section-header">
          <span className="section-tag">{t.valuesTag}</span>
          <h2 className="section-title">{t.valuesTitle}</h2>
        </div>
        <div className="values-grid">
          {t.values.map((v) => (
            <div className="value-card" key={v.title}>
              <div className="value-icon">{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
