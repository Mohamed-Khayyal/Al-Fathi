import { useLang } from '../context/LanguageContext'

export default function Investors() {
  const { t } = useLang()

  return (
    <section className="coming-soon-page">
      <div className="coming-soon-content">
        <div className="coming-soon-icon">🏗️</div>
        <span className="section-tag">{t.investorsTag}</span>
        <h1>{t.investorsTitle}</h1>
        <div className="about-hero-divider" style={{ margin: '1.5rem auto' }} />
        <p>{t.investorsDesc}</p>
      </div>
    </section>
  )
}
