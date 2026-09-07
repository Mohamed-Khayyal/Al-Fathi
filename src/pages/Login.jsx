import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [remember, setRemember] = useState(false)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    // القبول بأي بريد وكلمة مرور حتى يتم تفعيل الخادم
    setTimeout(() => {
      setStatus('success')
      setTimeout(() => navigate('/'), 1500)
      setLoading(false)
    }, 900)
  }

  return (
    <div className="login-page">
      {/* اللوحة اليسرى - صورة البرج */}
      <div className="login-left">
        <img src="/tower.png" alt="برج الفتحي" />
        <div className="login-left-overlay">
          <h2>برج الفتحي</h2>
          <p>بوابة السكان والإدارة</p>
        </div>
      </div>

      {/* اللوحة اليمنى - نموذج تسجيل الدخول */}
      <div className="login-right">
        <div className="login-box">
          <div className="login-logo">برج الفتحي</div>
          <h1>مرحباً بعودتك</h1>
          <p className="subtitle">سجّل الدخول إلى حساب السكان الخاص بك</p>

          {status === 'success' && (
            <div className="success-msg">✓ تم تسجيل الدخول بنجاح! جارٍ التحويل…</div>
          )}
          {status === 'error' && (
            <div className="error-msg">✗ البريد الإلكتروني أو كلمة المرور غير صحيحة.</div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">البريد الإلكتروني</label>
              <div className="input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                </svg>
                <input
                  id="email" name="email" type="email"
                  placeholder="example@alfathi.com"
                  value={form.email} onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">كلمة المرور</label>
              <div className="input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                </svg>
                <input
                  id="password" name="password" type="password"
                  placeholder="أدخل كلمة المرور"
                  value={form.password} onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-options">
              <label className="remember">
                <input type="checkbox" checked={remember} onChange={() => setRemember(!remember)} />
                تذكرني
              </label>
              <a href="#" className="forgot">نسيت كلمة المرور؟</a>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'جارٍ تسجيل الدخول…' : 'تسجيل الدخول ←'}
            </button>
          </form>

          <div className="login-footer">
            <p>
              ليس لديك حساب؟{' '}
              <Link to="/contact">تواصل مع الإدارة</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
