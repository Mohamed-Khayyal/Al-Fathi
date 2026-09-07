import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="brand-name">برج الفتحي</div>
          <p>
            معلم بارز للفخامة والحياة العصرية في قلب المدينة.
            استمتع بتجربة سكن راقية لا مثيل لها.
          </p>
        </div>

        <div className="footer-col">
          <h4>روابط سريعة</h4>
          <ul>
            <li><Link to="/">الرئيسية</Link></li>
            <li><Link to="/contact">تواصل معنا</Link></li>
            <li><Link to="/login">تسجيل الدخول</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>معلومات التواصل</h4>
          <ul>
            <li><a href="tel:+966500000000">+966 50 000 0000</a></li>
            <li><a href="mailto:info@alfathi.com">info@alfathi.com</a></li>
            <li><a href="#">شارع الفتحي، وسط المدينة</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} برج الفتحي. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  )
}
