import { useState } from 'react'
import { useLang } from '../context/LanguageContext'

export default function Projects() {
  const { t } = useLang()
  const [pdfOpen, setPdfOpen] = useState(false)

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
          <video
            controls
            preload="metadata"
            className="project-video"
            poster="/tower.png"
          >
            <source src="/projects/project-video.mp4" type="video/mp4" />
            {t.videoUnsupported}
          </video>
        </div>
      </section>

      {/* PDF Brochure Section */}
      <section className="section section-navy2">
        <div className="projects-section-header">
          <span className="section-tag">{t.brochureTag}</span>
          <h2 className="section-title">{t.brochureTitle}</h2>
          <p className="section-desc">{t.brochureDesc}</p>
        </div>

        <div className="brochure-card-wrapper">
          <div className="brochure-card">
            {/* Icon */}
            <div className="brochure-icon-wrap">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>

            <div className="brochure-info">
              <h3>{t.brochureFileName}</h3>
              <p>{t.brochureFileDesc}</p>
              <div className="brochure-meta">
                <span>📄 PDF</span>
                <span>~3.4 MB</span>
              </div>
            </div>

            <div className="brochure-actions">
              {/* View inline */}
              <button
                className="btn-outline brochure-btn"
                onClick={() => setPdfOpen(true)}
              >
                {t.brochureView}
              </button>

              {/* Download */}
              <a
                href="/projects/brochure.pdf"
                download="برشور-شركة-الفتحي.pdf"
                className="btn-primary brochure-btn"
              >
                ⬇ {t.brochureDownload}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PDF Viewer Modal */}
      {pdfOpen && (
        <div className="pdf-modal-backdrop" onClick={() => setPdfOpen(false)}>
          <div className="pdf-modal" onClick={(e) => e.stopPropagation()}>
            <div className="pdf-modal-header">
              <span>{t.brochureFileName}</span>
              <button className="pdf-modal-close" onClick={() => setPdfOpen(false)}>✕</button>
            </div>
            <iframe
              src="/projects/brochure.pdf"
              className="pdf-iframe"
              title="Brochure"
            />
          </div>
        </div>
      )}
    </>
  )
}
