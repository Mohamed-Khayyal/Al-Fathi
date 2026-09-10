import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useLang } from '../context/LanguageContext'

export default function Login() {
  const navigate = useNavigate()
  const { t } = useLang()
  const [form, setForm] = useState({ email: '', password: '' })
  const [remember, setRemember] = useState(false)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => navigate('/'), 1500)
      setLoading(false)
    }, 900)
  }

  return (
    <div className="login-page">
      {/* Left Panel — Logo on dark background */}
      <div className="login-left">
        <div className="login-left-content">
          <img src="/logo.jpg" alt="شركة الفتحي للمقاولات" className="login-left-logo" />
          <div className="login-left-divider" />
          <div className="login-left-overlay">
            <h2>{t.loginOverlayTitle}</h2>
            <p>{t.loginOverlaySubtitle}</p>
          </div>
        </div>
      </div>

      {/* Form Panel */}
      <div className="login-right">
        <div className="login-box">
          <img src="/logo.jpg" alt="Al Fathi" className="login-form-logo" />
          <h1>{t.loginTitle}</h1>
          <p className="subtitle">{t.loginSubtitle}</p>

          {status === 'success' && <div className="success-msg">{t.loginSuccess}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">{t.emailLabel}</label>
              <div className="input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <input id="email" name="email" type="email"
                  placeholder={t.emailPlaceholder}
                  value={form.email} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">{t.passwordLabel}</label>
              <div className="input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input id="password" name="password" type="password"
                  placeholder={t.passwordPlaceholder}
                  value={form.password} onChange={handleChange} required />
              </div>
            </div>

            <div className="form-options">
              <label className="remember">
                <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} />
                {t.rememberMe}
              </label>
              <a href="#" className="forgot">{t.forgotPassword}</a>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? t.loginLoading : t.loginBtn}
            </button>
          </form>

          <div className="login-footer">
            <p>{t.noAccount} <Link to="/contact">{t.contactMgmt}</Link></p>
          </div>
        </div>
      </div>
    </div>
  )
}
