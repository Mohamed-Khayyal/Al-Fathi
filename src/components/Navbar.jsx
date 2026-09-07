import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled]  = useState(false)
  const location = useLocation()

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
        <NavLink to="/" className="navbar-brand" onClick={close}>
          <span className="brand-al">برج </span>
          <span className="brand-fathi">الفتحي</span>
        </NavLink>

        <ul className="nav-links">
          <li><NavLink to="/" end>الرئيسية</NavLink></li>
          <li><NavLink to="/contact">تواصل معنا</NavLink></li>
          <li><NavLink to="/login" className="nav-btn">تسجيل الدخول</NavLink></li>
        </ul>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="فتح القائمة"
        >
          <span /><span /><span />
        </button>
      </nav>

      <div
        className={`drawer-backdrop${menuOpen ? ' backdrop-visible' : ''}`}
        onClick={close}
      />

      <aside className={`drawer${menuOpen ? ' drawer-open' : ''}`}>
        <div className="drawer-top">
          <span className="drawer-brand">
            <span className="brand-al">برج </span>
            <span className="brand-fathi">الفتحي</span>
          </span>
          <button className="drawer-close-btn" onClick={close} aria-label="إغلاق القائمة">✕</button>
        </div>

        <nav className="drawer-nav">
          <NavLink to="/" end onClick={close}>
            <span>🏠</span> الرئيسية
          </NavLink>
          <NavLink to="/contact" onClick={close}>
            <span>📬</span> تواصل معنا
          </NavLink>
          <NavLink to="/login" className="drawer-login" onClick={close}>
            تسجيل الدخول ←
          </NavLink>
        </nav>
      </aside>
    </>
  )
}
