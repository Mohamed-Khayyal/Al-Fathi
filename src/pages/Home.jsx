import { Link } from 'react-router-dom'

const features = [
  { icon: '🏊', title: 'مسبح فاخر', desc: 'مسبح لا نهاية له على السطح مع إطلالات بانورامية على المدينة.' },
  { icon: '🏋️', title: 'مركز لياقة', desc: 'صالة رياضية مجهزة بأحدث الأجهزة والمعدات الرياضية.' },
  { icon: '🔒', title: 'أمن على مدار الساعة', desc: 'حراسة أمنية وأنظمة مراقبة ذكية تعمل طوال اليوم.' },
  { icon: '🅿️', title: 'مواقف سيارات', desc: 'مواقف تحت الأرض متعددة الطوابق لجميع السكان.' },
  { icon: '🌿', title: 'مساحات خضراء', desc: 'حدائق منسقة بشكل جميل ومناطق استرخاء خارجية.' },
  { icon: '🛎️', title: 'خدمة الكونسيرج', desc: 'خدمات كونسيرج مخصصة متاحة على مدار الساعة.' },
]

export default function Home() {
  return (
    <>
      {/* ── قسم الرئيسي ── */}
      <section className="hero">
        <img src="/tower.png" alt="برج الفاتح" className="hero-img" />
        <div className="hero-bg" />
        <div className="hero-content">
          <div className="hero-badge">✦ برج سكني فاخر</div>
          <h1 className="hero-title">
            مرحباً بكم في <span className="gold">برج الفاتح</span>
          </h1>
          <p className="hero-subtitle">
            حيث تلتقي الفخامة بالأناقة. استمتع بأسلوب حياة استثنائي
            في قلب المدينة — معلم مصمم لمن يطلب الأرقى والأفضل.
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn-primary">تواصل معنا ←</Link>
            <Link to="/login" className="btn-outline">بوابة السكان</Link>
          </div>
        </div>
        <div className="scroll-hint">
          <span>للأسفل</span>
          <span>↓</span>
        </div>
      </section>

      {/* ── الإحصائيات ── */}
      <section className="stats-strip">
        <div className="stat-item">
          <div className="stat-number">+9</div>
          <div className="stat-label">طوابق</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">120</div>
          <div className="stat-label">وحدة سكنية</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">6</div>
          <div className="stat-label">مرفق</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">24/7</div>
          <div className="stat-label">خدمة مستمرة</div>
        </div>
      </section>

      {/* ── عن البرج ── */}
      <section className="section section-navy">
        <div className="about-grid">
          <div className="about-img-wrap">
            <img src="/tower.png" alt="واجهة برج الفاتح" />
            <div className="about-img-overlay" />
            <div className="about-img-tag">برج الفاتح</div>
          </div>

          <div className="about-text">
            <span className="section-tag">عن البرج</span>
            <h2>معيار جديد لـ<span style={{ color: 'var(--gold)' }}>السكن الفاخر</span></h2>
            <p>
              برج الفاتح مشروع سكني متميز يُعيد تعريف مفهوم الحياة الحضرية.
              بواجهته المذهبة الأنيقة ومساحاته المصممة بعناية، يقف البرج
              رمزاً للتطور المعماري والرقي العصري.
            </p>
            <p>
              كل شقة مصنوعة بتشطيبات فاخرة ومصممة لتستوعب أقصى قدر
              من الضوء الطبيعي والإطلالات الخلابة، لتوفير تجربة سكنية لا مثيل لها.
            </p>
            <ul className="feature-list">
              <li>
                <div className="feature-icon">✓</div>
                <span>بناء عالي الجودة بتصميم معماري عصري</span>
              </li>
              <li>
                <div className="feature-icon">✓</div>
                <span>شقق فسيحة تتراوح بين غرفة وأربع غرف</span>
              </li>
              <li>
                <div className="feature-icon">✓</div>
                <span>تقنيات المنزل الذكي مدمجة في جميع الوحدات</span>
              </li>
              <li>
                <div className="feature-icon">✓</div>
                <span>موقع مميز وسهل الوصول إلى مرافق المدينة</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── رسالتنا ── */}
      <section className="section section-navy2">
        <div className="message-banner">
          <span className="section-tag">وعدنا لكم</span>
          <blockquote>
            "برج الفاتح أكثر من مجرد مبنى — إنه وطن ومجتمع ورسالة.
            نحن ملتزمون بتوفير حياة مريحة وآمنة وراقية لكل ساكن."
          </blockquote>
          <cite>— إدارة برج الفاتح</cite>
        </div>
      </section>

      {/* ── المرافق ── */}
      <section className="section section-navy">
        <div className="section-header">
          <span className="section-tag">المرافق</span>
          <h2 className="section-title">مرافق <span style={{ color: 'var(--gold)' }}>عالمية المستوى</span></h2>
          <p className="section-desc">
            كل تفصيل تم مراعاته لضمان أن يكون أسلوب حياتك استثنائياً لا يُضاهى.
          </p>
        </div>
        <div className="cards-grid">
          {features.map((f) => (
            <div className="card" key={f.title}>
              <div className="card-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── دعوة للتواصل ── */}
      <section className="section section-navy2" style={{ textAlign: 'center' }}>
        <span className="section-tag">تواصل معنا</span>
        <h2 className="section-title">هل أنت مستعد لتسمية <span style={{ color: 'var(--gold)' }}>الفاتح</span> وطناً؟</h2>
        <p className="section-desc" style={{ marginBottom: '2.5rem' }}>
          فريقنا مستعد لمساعدتك في العثور على الوحدة المثالية.
          تواصل معنا اليوم وابدأ رحلتك نحو السكن الفاخر.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/contact" className="btn-primary">تواصل معنا ←</Link>
          <Link to="/login" className="btn-outline">بوابة السكان</Link>
        </div>
      </section>
    </>
  )
}
