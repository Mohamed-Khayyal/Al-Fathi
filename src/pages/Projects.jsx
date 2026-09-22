import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

// All 12 pages extracted from the brochure PDF
const PROJECT_IMAGES = Array.from({ length: 12 }, (_, i) => ({
  src: `/projects/images/page-${String(i + 1).padStart(2, '0')}.png`,
  alt: `صفحة ${i + 1}`,
  page: i + 1,
}))

export default function Projects() {
  const { t } = useLang()
  const [lightbox, setLightbox] = useState(null) // index of open image

  const openLightbox = (idx) => setLightbox(idx)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox((i) => (i - 1 + PROJECT_IMAGES.length) % PROJECT_IMAGES.length)
  const next = () => setLightbox((i) => (i + 1) % PROJECT_IMAGES.length)

  // Keyboard navigation
  const handleKey = (e) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft')  next()
    if (e.key === 'ArrowRight') prev()
  }

  return (
    <>
      {/* Hero */}
      <section className="about-page-hero">
        <div className="about-page-hero-content">
          <span className="section-tag">{t.projectsTag}</span>
          <h1>{t.projectsTitle}</h1>
          <div className="about-hero-divider" />
          <p className="projects-hero-sub">{t.projectsSubtitle}</p>
        </div>
      </section>

      {/* Video Section */}
      <section className="section section-navy">
        <div className="projects-section-header">
          <span className="section-tag">{t.videoTag}</span>
          <h2 className="section-title">{t.videoTitle}</h2>
          <p className="section-desc">{t.videoDesc}</p>
        </div>
        <div className="video-wrapper">
          <video controls preload="metadata" className="project-video" poster="/tower.png">
            <source src="/projects/project-video.mp4" type="video/mp4" />
            {t.videoUnsupported}
          </video>
        </div>
      </section>

      {/* Brochure Images Gallery */}
      <section className="section section-navy2">
        <div className="projects-section-header">
          <span className="section-tag">{t.brochureTag}</span>
          <h2 className="section-title">{t.brochureTitle}</h2>
          <p className="section-desc">{t.brochureDesc}</p>
        </div>

        {/* Download button */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <a
            href="/projects/brochure.pdf"
            download="برشور-شركة-الفتحي-للتطوير-العقاري-والمقاولات.pdf"
            className="btn-primary"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
          >
            ⬇ {t.brochureDownload}
          </a>
        </div>

        {/* Image Grid */}
        <div className="brochure-gallery">
          {PROJECT_IMAGES.map((img, idx) => (
            <div
              key={img.page}
              className="brochure-img-card"
              onClick={() => openLightbox(idx)}
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && openLightbox(idx)}
              role="button"
              aria-label={img.alt}
            >
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="brochure-img-overlay">
                <span className="brochure-img-zoom">🔍</span>
              </div>
              <div className="brochure-img-page">{img.page}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-backdrop"
          onClick={closeLightbox}
          onKeyDown={handleKey}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
        >
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            {/* Header */}
            <div className="lightbox-header">
              <span className="lightbox-counter">
                {lightbox + 1} / {PROJECT_IMAGES.length}
              </span>
              <button className="lightbox-close" onClick={closeLightbox}>✕</button>
            </div>

            {/* Image */}
            <div className="lightbox-img-wrap">
              <img
                src={PROJECT_IMAGES[lightbox].src}
                alt={PROJECT_IMAGES[lightbox].alt}
                className="lightbox-img"
              />
            </div>

            {/* Navigation */}
            <button className="lightbox-nav lightbox-prev" onClick={prev} aria-label="Previous">‹</button>
            <button className="lightbox-nav lightbox-next" onClick={next} aria-label="Next">›</button>
          </div>
        </div>
      )}
    </>
  )
}
