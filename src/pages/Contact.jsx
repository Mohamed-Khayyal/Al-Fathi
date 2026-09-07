import { useState } from 'react'

export default function Contact() {
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
      {/* قسم الترويسة */}
      <section className="contact-hero">
        <span className="section-tag">تواصل معنا</span>
        <h1><span style={{ color: 'var(--gold)' }}>تواصل</span> معنا</h1>
        <p>
          يسعدنا التواصل معك. سواء كان لديك سؤال عن الوحدات أو الأسعار
          أو أي شيء آخر — فريقنا مستعد للإجابة على جميع استفساراتك.
        </p>
      </section>

      {/* المحتوى الرئيسي */}
      <div className="contact-grid">
        {/* لوحة المعلومات */}
        <div className="contact-info">
          <h2>معلومات <span style={{ color: 'var(--gold)' }}>التواصل</span></h2>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <strong>العنوان</strong>
              <span>شارع الفتحي، وسط المدينة<br />المملكة العربية السعودية</span>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.53a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.72-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.92z"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <strong>الهاتف</strong>
              <span>+966 50 000 0000<br />+966 50 111 1111</span>
            </div>
          </div>

          <div className="contact-info-item">
            <div className="contact-info-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div className="contact-info-text">
              <strong>البريد الإلكتروني</strong>
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
              <strong>ساعات العمل</strong>
              <span>الأحد – الخميس: 9ص – 6م<br />الجمعة – السبت: 10ص – 4م</span>
            </div>
          </div>
        </div>

        {/* نموذج التواصل */}
        <div className="contact-form-box">
          <h2>أرسل لنا <span style={{ color: 'var(--gold)' }}>رسالة</span></h2>

          {sent && (
            <div className="success-msg" style={{ marginBottom: '1.5rem' }}>
              ✓ شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">الاسم الكامل</label>
                <div className="input-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  <input id="name" name="name" type="text" placeholder="اسمك الكامل"
                    value={form.name} onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c-email">البريد الإلكتروني</label>
                <div className="input-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <input id="c-email" name="email" type="email" placeholder="بريدك@example.com"
                    value={form.email} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">رقم الهاتف</label>
                <div className="input-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.53a2 2 0 0 1 1.99-2.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.72-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.5 16.92z"/>
                  </svg>
                  <input id="phone" name="phone" type="tel" placeholder="+966 50 000 0000"
                    value={form.phone} onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">الموضوع</label>
                <div className="input-wrap">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
                  </svg>
                  <input id="subject" name="subject" type="text" placeholder="استفسار عن وحدة، أسعار…"
                    value={form.subject} onChange={handleChange} required />
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">الرسالة</label>
              <div className="input-wrap">
                <textarea id="message" name="message" placeholder="أخبرنا كيف يمكننا مساعدتك…"
                  value={form.message} onChange={handleChange} required />
              </div>
            </div>

            <button type="submit" className="btn-submit" disabled={loading}>
              {loading ? 'جارٍ الإرسال…' : 'إرسال الرسالة ←'}
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
