import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const location = useLocation()
  const { t, toggleLang } = useLang()

  useEffect(() => { setMenuOpen(false) }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}>
        {/* Logo */}
        <NavLink to="/" className="navbar-logo-link" onClick={close}>
          <img src="/logo.jpg" alt="شركة الفتحي للمقاولات" className="navbar-logo" />
        </NavLink>

        {/* Desktop links */}
        <ul className="nav-links">
          <li><NavLink to="/" end>{t.home}</NavLink></li>
          <li><NavLink to="/contact">{t.contact}</NavLink></li>
          <li>
            <button className="lang-toggle" onClick={toggleLang}>
              🌐 {t.toggleLang}
            </button>
          </li>
          <li><NavLink to="/login" className="nav-btn">{t.login}</NavLink></li>
        </ul>

        {/* Hamburger */}
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Backdrop */}
      <div
        className={`drawer-backdrop${menuOpen ? ' backdrop-visible' : ''}`}
        onClick={close}
      />

      {/* Mobile Drawer */}
      <aside className={`drawer${menuOpen ? ' drawer-open' : ''}`}>
        <div className="drawer-top">
          <img src="/logo.jpg" alt="شركة الفتحي" className="drawer-logo" />
          <button className="drawer-close-btn" onClick={close} aria-label="close">✕</button>
        </div>

        <nav className="drawer-nav">
          <NavLink to="/" end onClick={close}>🏠 {t.home}</NavLink>
          <NavLink to="/contact" onClick={close}>📬 {t.contact}</NavLink>
          <button className="drawer-lang-btn" onClick={() => { toggleLang(); close() }}>
            🌐 {t.toggleLang}
          </button>
          <NavLink to="/login" className="drawer-login" onClick={close}>
            {t.login} →
          </NavLink>
        </nav>
      </aside>
    </>
  )
}
