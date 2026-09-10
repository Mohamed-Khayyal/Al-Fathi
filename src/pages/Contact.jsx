import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSent(true)
      setLoading(false)
      setForm({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 1000)
  }

  return (
    <>
      <section className="contact-hero">
        <span className="section-tag">{t.ctaTag}</span>
        <h1>{t.contactHeroTitle}</h1>
        <p>{t.contactHeroSubtitle}</p>
      </section>

      <div className="contact-grid">
        {/* Info */}
        <div className="contact-info">
          <h2>{t.infoTitle}</h2>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <strong>{t.addressLabel}</strong>
              <span>{t.addressValue}</span>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.53a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.72-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.92z"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <strong>{t.phoneLabel}</strong>
              <span>+20 100 000 0000<br />+20 100 111 1111</span>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <strong>{t.emailInfoLabel}</strong>
              <span>info@alfathi.com<br />sales@alfathi.com</span>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <strong>{t.hoursLabel}</strong>
              <span>{t.hoursVal1}<br />{t.hoursVal2}</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-box">
          <h2>{t.formTitle}</h2>

          {sent && <div className="success-msg" style={{ marginBottom: '1.5rem' }}>{t.sendSuccess}</div>}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>{t.nameLabel}</label>
                <div className="input-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  <input name="name" type="text" placeholder={t.namePh}
                    value={form.name} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>{t.emailFormLabel}</label>
                <div className="input-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <input name="email" type="email" placeholder={t.emailFormPh}
                    value={form.email} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>{t.phoneFormLabel}</label>
                <div className="input-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.53a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.72-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.92z"/>
                  </svg>
                  <input name="phone" type="tel" placeholder={t.phonePh}
                    value={form.phone} onChange={handleChange} />
                </div>
              </div>
              <div className="form-group">
                <label>{t.subjectLabel}</label>
                <div className="input-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
                    <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
                  </svg>
                  <input name="subject" type="text" placeholder={t.subjectPh}
                    value={form.subject} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>{t.messageLabel}</label>
              <div className="input-wrap">
                <textarea name="message" placeholder={t.messagePh}
                  value={form.message} onChange={handleChange} required />
              </div>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? t.sendLoading : t.sendBtn}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
