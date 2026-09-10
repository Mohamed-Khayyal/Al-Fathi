import { Link } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <img src="/logo.jpg" alt="Al Fathi" className="footer-logo" />
          <p>{t.footerDesc}</p>
        </div>

        <div className="footer-col">
          <h4>{t.quickLinks}</h4>
          <ul>
            <li><Link to="/">{t.home}</Link></li>
            <li><Link to="/contact">{t.contact}</Link></li>
            <li><Link to="/login">{t.login}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t.contactInfoTitle}</h4>
          <ul>
            <li><a href="tel:+201000000000">+20 100 000 0000</a></li>
            <li><a href="mailto:info@alfathi.com">info@alfathi.com</a></li>
            <li><span style={{ color: 'var(--text)', fontSize: '0.85rem', lineHeight: '1.5' }}>{t.footerAddress}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} شركة الفتحي للمقاولات العامة والإنشاءات — Al Fathi General Contracting & Construction. {t.rights}</p>
      </div>
    </footer>
  )
}
