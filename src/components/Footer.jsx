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

          {/* Social Media */}
          <div className="footer-social">
            <a
              href="https://www.facebook.com/share/19cfdnPnSH/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Facebook"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>{t.quickLinks}</h4>
          <ul>
            <li><Link to="/">{t.home}</Link></li>
            <li><Link to="/about">{t.about}</Link></li>
            <li><Link to="/projects">{t.projects}</Link></li>
            <li><Link to="/investors">{t.investors}</Link></li>
            <li><Link to="/contact">{t.contact}</Link></li>
            <li><Link to="/login">{t.login}</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>{t.contactInfoTitle}</h4>
          <ul>
            <li><a href="tel:+201000000000">+20 100 000 0000</a></li>
            <li><a href="mailto:info@alfathi.com">info@alfathi.com</a></li>
            <li>
              <a
                href="https://www.facebook.com/share/19cfdnPnSH/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
              >
                📘 Facebook
              </a>
            </li>
            <li><span style={{ color: 'var(--text)', fontSize: '0.85rem', lineHeight: '1.5' }}>{t.footerAddress}</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} شركه الفتحي للتطوير العقاري — Al Fathi Real Estate Development. {t.rights}</p>
      </div>
    </footer>
  )
}
