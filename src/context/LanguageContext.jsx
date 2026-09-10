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
    badge: 'مقاولات عامة وإنشاءات',
    heroTitle: <>مرحباً بكم في <span className="gold">شركة الفتحي</span><br />للمقاولات العامة والإنشاءات</>,
    heroSubtitle: 'حيث تلتقي الجودة بالابتكار. نبني مستقبلاً أفضل بأعلى معايير الجودة والاحترافية.',
    contactBtn: 'تواصل معنا ←',
    portalBtn: 'بوابة الأعمال',
    scroll: 'للأسفل',

    // Stats
    stat1: '+50',  stat1Label: 'مشروع منجز',
    stat2: '+10',  stat2Label: 'سنة خبرة',
    stat3: '+200', stat3Label: 'عميل راضٍ',
    stat4: '24/7', stat4Label: 'خدمة مستمرة',

    // About
    aboutTag: 'عن الشركة',
    aboutTitle: <>معيار جديد لـ<span style={{ color: 'var(--gold)' }}>المقاولات والإنشاءات</span></>,
    aboutP1: 'شركة الفتحي للمقاولات العامة والإنشاءات شركة رائدة تُعيد تعريف مفهوم البناء الحديث. بفريقها المتخصص ومعداتها المتطورة، تقدم مشاريع سكنية وتجارية بأعلى معايير الجودة.',
    aboutP2: 'كل مشروع يُنفَّذ بعناية فائقة باستخدام أفضل المواد وأحدث التقنيات، لضمان نتائج تفوق توقعات العملاء.',
    f1: 'بناء عالي الجودة بتصميم معماري عصري',
    f2: 'مشاريع سكنية وتجارية متنوعة',
    f3: 'فريق متخصص من المهندسين والفنيين',
    f4: 'التزام بالمواعيد ومعايير السلامة',
    aboutImgTag: 'شركة الفتحي',

    // Quote
    quoteTag: 'وعدنا لكم',
    quote: '"شركة الفتحي للمقاولات العامة والإنشاءات أكثر من مجرد شركة — إنها التزام بالجودة والأمان والتميز لكل عميل."',
    quoteCite: '— إدارة شركة الفتحي',

    // Services
    servicesTag: 'خدماتنا',
    servicesTitle: <>خدمات <span style={{ color: 'var(--gold)' }}>عالمية المستوى</span></>,
    servicesDesc: 'كل تفصيل تم مراعاته لضمان أن يكون مشروعك استثنائياً لا يُضاهى.',
    services: [
      { icon: '🏗️', title: 'المقاولات العامة', desc: 'تنفيذ مشاريع البناء والإنشاءات بأعلى معايير الجودة.' },
      { icon: '🏢', title: 'المباني السكنية', desc: 'تصميم وتنفيذ المجمعات السكنية الفاخرة والاقتصادية.' },
      { icon: '🏪', title: 'المنشآت التجارية', desc: 'إنشاء المراكز التجارية والمكاتب والمحلات.' },
      { icon: '🔧', title: 'الصيانة والترميم', desc: 'خدمات صيانة شاملة وترميم للمباني القائمة.' },
      { icon: '📐', title: 'التصميم المعماري', desc: 'تصاميم معمارية مبتكرة تجمع بين الجمال والوظيفة.' },
      { icon: '🛡️', title: 'إدارة المشاريع', desc: 'إدارة متكاملة للمشاريع من الفكرة حتى التسليم.' },
    ],

    // CTA
    ctaTag: 'تواصل معنا',
    ctaTitle: <>هل أنت مستعد للبناء مع <span style={{ color: 'var(--gold)' }}>الفتحي</span>؟</>,
    ctaDesc: 'فريقنا مستعد لمساعدتك. تواصل معنا اليوم وابدأ رحلتك نحو مشروعك الأفضل.',

    // Login
    loginOverlayTitle: 'شركة الفتحي للمقاولات',
    loginOverlaySubtitle: 'بوابة العملاء والإدارة',
    loginLogo: 'شركة الفتحي',
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
    contactHeroSubtitle: 'يسعدنا التواصل معك. سواء كان لديك سؤال عن المشاريع أو الأسعار أو أي شيء آخر — فريقنا مستعد للإجابة.',
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
    subjectLabel: 'الموضوع', subjectPh: 'استفسار عن مشروع، أسعار…',
    messageLabel: 'الرسالة', messagePh: 'أخبرنا كيف يمكننا مساعدتك…',
    sendBtn: 'إرسال الرسالة ←',
    sendLoading: 'جارٍ الإرسال…',
    sendSuccess: '✓ شكراً لك! تم إرسال رسالتك بنجاح. سنتواصل معك قريباً.',

    // Footer
    footerDesc: 'شركة رائدة في مجال المقاولات العامة والإنشاءات، نبني مستقبلاً أفضل بجودة لا تُضاهى.',
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
    badge: 'General Contracting & Construction',
    heroTitle: <><span className="gold">Al Fathi</span> General<br />Contracting & Construction</>,
    heroSubtitle: 'Where quality meets innovation. We build a better future with the highest standards of quality and professionalism.',
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
    aboutTitle: <>A New Standard of <span style={{ color: 'var(--gold)' }}>Contracting & Construction</span></>,
    aboutP1: 'Al Fathi General Contracting & Construction is a leading company redefining modern building. With its specialized team and advanced equipment, it delivers residential and commercial projects to the highest quality standards.',
    aboutP2: 'Every project is executed with great care using the best materials and latest techniques to ensure results that exceed client expectations.',
    f1: 'High-quality construction with modern architectural design',
    f2: 'Diverse residential and commercial projects',
    f3: 'Specialized team of engineers and technicians',
    f4: 'Commitment to deadlines and safety standards',
    aboutImgTag: 'Al Fathi Co.',

    // Quote
    quoteTag: 'Our Promise',
    quote: '"Al Fathi General Contracting & Construction is more than just a company — it is a commitment to quality, safety and excellence for every client."',
    quoteCite: '— Al Fathi Management',

    // Services
    servicesTag: 'Our Services',
    servicesTitle: <>World-Class <span style={{ color: 'var(--gold)' }}>Services</span></>,
    servicesDesc: 'Every detail is considered to ensure your project is nothing short of extraordinary.',
    services: [
      { icon: '🏗️', title: 'General Contracting', desc: 'Executing construction projects to the highest quality standards.' },
      { icon: '🏢', title: 'Residential Buildings', desc: 'Design and construction of luxury and affordable residential complexes.' },
      { icon: '🏪', title: 'Commercial Facilities', desc: 'Construction of commercial centers, offices and retail spaces.' },
      { icon: '🔧', title: 'Maintenance & Restoration', desc: 'Comprehensive maintenance and restoration services for existing buildings.' },
      { icon: '📐', title: 'Architectural Design', desc: 'Innovative architectural designs combining beauty and function.' },
      { icon: '🛡️', title: 'Project Management', desc: 'Integrated project management from concept to delivery.' },
    ],

    // CTA
    ctaTag: 'Get In Touch',
    ctaTitle: <>Ready to build with <span style={{ color: 'var(--gold)' }}>Al Fathi</span>?</>,
    ctaDesc: 'Our team is ready to help you. Contact us today and start your journey toward your best project.',

    // Login
    loginOverlayTitle: 'Al Fathi Contracting',
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
    contactHeroSubtitle: "We'd love to hear from you. Whether you have a question about projects, pricing, or anything else — our team is ready to answer.",
    infoTitle: <>Our <span style={{ color: 'var(--gold)' }}>Information</span></>,
    addressLabel: 'Address',
    addressValue: "Behind Faqous City Council, off Kafr Al-Adawi Road, Al-Sharqia Governorate, Egypt",
    phoneLabel: 'Phone',
    emailInfoLabel: 'Email',
    hoursLabel: 'Working Hours',
    hoursVal1: 'Sunday – Thursday: 9am – 6pm',
    hoursVal2: 'Friday – Saturday: 10am – 4pm',
    formTitle: <>Send Us a <span style={{ color: 'var(--gold)' }}>Message</span></>,
    nameLabel: 'Full Name', namePh: 'Your full name',
    emailFormLabel: 'Email Address', emailFormPh: 'your@email.com',
    phoneFormLabel: 'Phone Number', phonePh: '+20 100 000 0000',
    subjectLabel: 'Subject', subjectPh: 'Project inquiry, pricing…',
    messageLabel: 'Message', messagePh: 'Tell us how we can help you…',
    sendBtn: 'Send Message →',
    sendLoading: 'Sending…',
    sendSuccess: '✓ Thank you! Your message has been sent. We will get back to you shortly.',

    // Footer
    footerDesc: 'A leading company in general contracting and construction, building a better future with unmatched quality.',
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

  // Update HTML dir and lang attributes when language changes
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
