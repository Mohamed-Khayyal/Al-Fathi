import { createContext, useContext, useState, useEffect } from 'react'

const translations = {
  ar: {
    dir: 'rtl',
    lang: 'ar',

    // Navbar
    home: 'الرئيسية',
    contact: 'تواصل معنا',
    login: 'تسجيل الدخول',
    toggleLang: 'English',

    // Hero
    badge: 'تطوير عقاري متميز',
    heroTitle: <>مرحباً بكم في <span className="gold">شركه الفتحي</span><br />للتطوير العقاري</>,
    heroSubtitle: 'نُعيد تعريف مفهوم التطوير العقاري بأعلى معايير الجودة والابتكار. نبني مجتمعات متكاملة تُلبي تطلعاتكم.',
    contactBtn: 'تواصل معنا ←',
    portalBtn: 'بوابة العملاء',
    scroll: 'للأسفل',

    // Stats
    stat1: '+50',  stat1Label: 'مشروع منجز',
    stat2: '+10',  stat2Label: 'سنة خبرة',
    stat3: '+200', stat3Label: 'عميل راضٍ',
    stat4: '24/7', stat4Label: 'خدمة مستمرة',

    // About
    aboutTag: 'عن الشركة',
    aboutTitle: <>معيار جديد في<span style={{ color: 'var(--gold)' }}> التطوير العقاري</span></>,
    aboutP1: 'شركه الفتحي للتطوير العقاري شركة رائدة في مجال التطوير العقاري، تسعى إلى تقديم مشاريع سكنية وتجارية متكاملة تُلبي احتياجات العملاء وتتجاوز توقعاتهم.',
    aboutP2: 'نعمل بأعلى معايير الجودة والشفافية، مستخدمين أحدث تقنيات البناء وأفضل المواد لضمان مشاريع تدوم وتُبهر.',
    f1: 'تطوير مشاريع سكنية وتجارية متكاملة',
    f2: 'تصاميم معمارية عصرية تجمع الجمال بالوظيفة',
    f3: 'فريق متخصص من المهندسين والخبراء العقاريين',
    f4: 'التزام تام بالمواعيد وأعلى معايير الجودة',
    aboutImgTag: 'شركه الفتحي',

    // Quote
    quoteTag: 'وعدنا لكم',
    quote: '"شركه الفتحي للتطوير العقاري أكثر من مجرد شركة — إنها التزام بالجودة والأمان وبناء مستقبل أفضل لكل عميل."',
    quoteCite: '— إدارة شركه الفتحي للتطوير العقاري',

    // Services
    servicesTag: 'خدماتنا',
    servicesTitle: <>خدمات <span style={{ color: 'var(--gold)' }}>عالمية المستوى</span></>,
    servicesDesc: 'نقدم منظومة متكاملة من الخدمات العقارية التي تُغطي كل مراحل المشروع من الفكرة حتى التسليم.',
    services: [
      { icon: '🏘️', title: 'المشاريع السكنية', desc: 'تطوير مجمعات سكنية فاخرة تلبي احتياجات مختلف الشرائح.' },
      { icon: '🏢', title: 'المشاريع التجارية', desc: 'تطوير مراكز تجارية ومكاتب بمواصفات دولية عالية.' },
      { icon: '📐', title: 'التصميم المعماري', desc: 'تصاميم معمارية مبتكرة تجمع بين الأصالة والحداثة.' },
      { icon: '🔑', title: 'مبيعات وتأجير', desc: 'خدمات شاملة لبيع وتأجير الوحدات العقارية بأفضل الأسعار.' },
      { icon: '📊', title: 'الاستشارات العقارية', desc: 'استشارات متخصصة لمساعدتك في اتخاذ أفضل القرارات العقارية.' },
      { icon: '🛡️', title: 'إدارة الأصول', desc: 'إدارة احترافية للأصول العقارية وضمان أعلى عائد استثماري.' },
    ],

    // CTA
    ctaTag: 'تواصل معنا',
    ctaTitle: <>هل أنت مستعد للاستثمار مع <span style={{ color: 'var(--gold)' }}>الفتحي</span>؟</>,
    ctaDesc: 'فريقنا من المتخصصين جاهز لمساعدتك في اختيار أفضل الفرص العقارية. تواصل معنا اليوم.',

    // Login
    loginOverlayTitle: 'شركه الفتحي للتطوير العقاري',
    loginOverlaySubtitle: 'بوابة العملاء والإدارة',
    loginLogo: 'شركه الفتحي',
    loginTitle: 'مرحباً بعودتك',
    loginSubtitle: 'سجّل الدخول إلى حسابك',
    emailLabel: 'البريد الإلكتروني',
    emailPlaceholder: 'example@alfathi.com',
    passwordLabel: 'كلمة المرور',
    passwordPlaceholder: 'أدخل كلمة المرور',
    rememberMe: 'تذكرني',
    forgotPassword: 'نسيت كلمة المرور؟',
    loginBtn: 'تسجيل الدخول ←',
    loginLoading: 'جارٍ تسجيل الدخول…',
    loginSuccess: '✓ تم تسجيل الدخول بنجاح! جارٍ التحويل…',
    noAccount: 'ليس لديك حساب؟',
    contactMgmt: 'تواصل مع الإدارة',

    // Contact
    contactHeroTitle: <><span style={{ color: 'var(--gold)' }}>تواصل</span> معنا</>,
    contactHeroSubtitle: 'يسعدنا التواصل معك. سواء كان لديك سؤال عن مشاريعنا أو الأسعار أو الاستثمار — فريقنا مستعد للإجابة.',
    infoTitle: <>معلومات <span style={{ color: 'var(--gold)' }}>التواصل</span></>,
    addressLabel: 'العنوان',
    addressValue: 'خلف مجلس مدينه فاقوس، متفرع من طريق كفر العدوي، محافظة الشرقية، مصر',
    phoneLabel: 'الهاتف',
    emailInfoLabel: 'البريد الإلكتروني',
    hoursLabel: 'ساعات العمل',
    hoursVal1: 'الأحد – الخميس: 9ص – 6م',
    hoursVal2: 'الجمعة – السبت: 10ص – 4م',
    formTitle: <>أرسل لنا <span style={{ color: 'var(--gold)' }}>رسالة</span></>,
    nameLabel: 'الاسم الكامل', namePh: 'اسمك الكامل',
    emailFormLabel: 'البريد الإلكتروني', emailFormPh: 'بريدك@example.com',
    phoneFormLabel: 'رقم الهاتف', phonePh: '+20 100 000 0000',
    subjectLabel: 'الموضوع', subjectPh: 'استفسار عن مشروع، استثمار…',
    messageLabel: 'الرسالة', messagePh: 'أخبرنا كيف يمكننا مساعدتك…',
    sendBtn: 'إرسال الرسالة ←',
    sendLoading: 'جارٍ الإرسال…',
    sendSuccess: '✓ شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',

    // Footer
    footerDesc: 'شركة رائدة في التطوير العقاري، نبني مجتمعات متكاملة بمعايير جودة لا تُضاهى.',
    quickLinks: 'روابط سريعة',
    contactInfoTitle: 'معلومات التواصل',
    footerAddress: 'خلف مجلس مدينه فاقوس، متفرع من طريق كفر العدوي، محافظة الشرقية، مصر',
    rights: 'جميع الحقوق محفوظة.',
  },

  en: {
    dir: 'ltr',
    lang: 'en',

    // Navbar
    home: 'Home',
    contact: 'Contact Us',
    login: 'Login',
    toggleLang: 'عربي',

    // Hero
    badge: 'Real Estate Development',
    heroTitle: <><span className="gold">Al Fathi</span> Real Estate<br />Development Company</>,
    heroSubtitle: 'Redefining real estate development with the highest standards of quality and innovation. We build integrated communities that fulfill your aspirations.',
    contactBtn: 'Contact Us →',
    portalBtn: 'Client Portal',
    scroll: 'Scroll',

    // Stats
    stat1: '50+',  stat1Label: 'Projects Done',
    stat2: '10+',  stat2Label: 'Years Exp.',
    stat3: '200+', stat3Label: 'Happy Clients',
    stat4: '24/7', stat4Label: 'Support',

    // About
    aboutTag: 'About Us',
    aboutTitle: <>A New Standard in <span style={{ color: 'var(--gold)' }}>Real Estate Development</span></>,
    aboutP1: 'Al Fathi Real Estate Development Company is a leading developer committed to delivering comprehensive residential and commercial projects that meet and exceed client expectations.',
    aboutP2: 'We operate with the highest standards of quality and transparency, using the latest construction technologies and finest materials to ensure projects that last and impress.',
    f1: 'Development of integrated residential and commercial projects',
    f2: 'Modern architectural designs combining beauty and function',
    f3: 'Specialized team of engineers and real estate experts',
    f4: 'Full commitment to deadlines and highest quality standards',
    aboutImgTag: 'Al Fathi Co.',

    // Quote
    quoteTag: 'Our Promise',
    quote: '"Al Fathi Real Estate Development Company is more than just a company — it is a commitment to quality, safety, and building a better future for every client."',
    quoteCite: '— Al Fathi Real Estate Management',

    // Services
    servicesTag: 'Our Services',
    servicesTitle: <>World-Class <span style={{ color: 'var(--gold)' }}>Services</span></>,
    servicesDesc: 'We offer a comprehensive suite of real estate services covering every stage of the project from concept to delivery.',
    services: [
      { icon: '🏘️', title: 'Residential Projects', desc: 'Development of luxury residential compounds serving different segments.' },
      { icon: '🏢', title: 'Commercial Projects', desc: 'Development of commercial centers and offices to international standards.' },
      { icon: '📐', title: 'Architectural Design', desc: 'Innovative designs blending heritage and modernity.' },
      { icon: '🔑', title: 'Sales & Leasing', desc: 'Comprehensive services for selling and leasing units at the best prices.' },
      { icon: '📊', title: 'Real Estate Consulting', desc: 'Specialized consulting to help you make the best real estate decisions.' },
      { icon: '🛡️', title: 'Asset Management', desc: 'Professional management of real estate assets for maximum investment return.' },
    ],

    // CTA
    ctaTag: 'Get In Touch',
    ctaTitle: <>Ready to invest with <span style={{ color: 'var(--gold)' }}>Al Fathi</span>?</>,
    ctaDesc: 'Our team of specialists is ready to help you find the best real estate opportunities. Contact us today.',

    // Login
    loginOverlayTitle: 'Al Fathi Real Estate Development',
    loginOverlaySubtitle: 'Client & Management Portal',
    loginLogo: 'Al Fathi',
    loginTitle: 'Welcome Back',
    loginSubtitle: 'Sign in to your account',
    emailLabel: 'Email Address',
    emailPlaceholder: 'example@alfathi.com',
    passwordLabel: 'Password',
    passwordPlaceholder: 'Enter your password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    loginBtn: 'Sign In →',
    loginLoading: 'Signing in…',
    loginSuccess: '✓ Login successful! Redirecting…',
    noAccount: "Don't have an account?",
    contactMgmt: 'Contact Management',

    // Contact
    contactHeroTitle: <>Contact <span style={{ color: 'var(--gold)' }}>Us</span></>,
    contactHeroSubtitle: "We'd love to hear from you. Whether you have a question about our projects, pricing, or investment — our team is ready to answer.",
    infoTitle: <>Our <span style={{ color: 'var(--gold)' }}>Information</span></>,
    addressLabel: 'Address',
    addressValue: 'Behind Faqous City Council, off Kafr Al-Adawi Road, Al-Sharqia Governorate, Egypt',
    phoneLabel: 'Phone',
    emailInfoLabel: 'Email',
    hoursLabel: 'Working Hours',
    hoursVal1: 'Sunday – Thursday: 9am – 6pm',
    hoursVal2: 'Friday – Saturday: 10am – 4pm',
    formTitle: <>Send Us a <span style={{ color: 'var(--gold)' }}>Message</span></>,
    nameLabel: 'Full Name', namePh: 'Your full name',
    emailFormLabel: 'Email Address', emailFormPh: 'your@email.com',
    phoneFormLabel: 'Phone Number', phonePh: '+20 100 000 0000',
    subjectLabel: 'Subject', subjectPh: 'Project inquiry, investment…',
    messageLabel: 'Message', messagePh: 'Tell us how we can help you…',
    sendBtn: 'Send Message →',
    sendLoading: 'Sending…',
    sendSuccess: '✓ Thank you! Your message has been sent. We will get back to you shortly.',

    // Footer
    footerDesc: 'A leading real estate development company, building integrated communities with unmatched quality standards.',
    quickLinks: 'Quick Links',
    contactInfoTitle: 'Contact Info',
    footerAddress: 'Behind Faqous City Council, off Kafr Al-Adawi Road, Al-Sharqia, Egypt',
    rights: 'All rights reserved.',
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('ar')
  const t = translations[lang]

  useEffect(() => {
    document.documentElement.setAttribute('dir', t.dir)
    document.documentElement.setAttribute('lang', t.lang)
  }, [lang, t])

  const toggleLang = () => setLang(l => l === 'ar' ? 'en' : 'ar')

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  return useContext(LanguageContext)
}
