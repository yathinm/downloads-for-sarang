import { StrictMode, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

function HeartIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21s-7.5-4.35-9.5-9.2C.94 8.02 3.07 4.5 6.78 4.5c2.02 0 3.55 1.1 4.22 2.36C11.67 5.6 13.2 4.5 15.22 4.5c3.71 0 5.84 3.52 4.28 7.3C19.5 16.65 12 21 12 21Z" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 20h14" />
    </svg>
  )
}

function WebIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.3 2.5 3.5 5.5 3.5 9S14.3 18.5 12 21M12 3C9.7 5.5 8.5 8.5 8.5 12S9.7 18.5 12 21" />
    </svg>
  )
}

function ArrowIcon({ direction }: { direction: 'left' | 'right' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {direction === 'left'
        ? <path d="m15 18-6-6 6-6" />
        : <path d="m9 18 6-6-6-6" />}
    </svg>
  )
}

const projects = [
  {
    name: 'Loopy Reminders',
    href: 'https://github.com/yathinm/downloads-for-sarang/releases/download/v1.0.0/Loopy-Reminders-mac-arm64-fixed.zip',
    download: true,
  },
  {
    name: 'Loopy Sweeper',
    href: 'https://loopy-sweeper.vercel.app/',
    download: false,
  },
  {
    name: 'Loopy Solitaire',
    href: 'https://loopy-solitaire.vercel.app/',
    download: false,
  },
  {
    name: 'Loopy Budgeter',
    href: 'https://loopy-budgeter.vercel.app/',
    download: false,
  },
]

function App() {
  const [activeProject, setActiveProject] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const project = projects[activeProject]

  const showPreviousProject = () => {
    setActiveProject((current) => (current - 1 + projects.length) % projects.length)
  }

  const showNextProject = () => {
    setActiveProject((current) => (current + 1) % projects.length)
  }

  return (
    <main className="page-shell">
      <span className="floating-heart heart-one"><HeartIcon /></span>
      <span className="floating-heart heart-two"><HeartIcon /></span>
      <span className="floating-heart heart-three"><HeartIcon /></span>

      <section className="love-card" aria-labelledby="page-title">
        <p className="dedication">Yathin to Sarang</p>
        <div className="hero-heart"><HeartIcon /></div>
        <h1 id="page-title">Hi,<br /><span>I love you</span></h1>
        <p className="message">My projects for you</p>

        <div
          className="project-carousel"
          aria-label="Projects"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX
          }}
          onTouchEnd={(event) => {
            if (touchStartX.current === null) return

            const distance = event.changedTouches[0].clientX - touchStartX.current
            if (Math.abs(distance) > 45) {
              distance > 0 ? showPreviousProject() : showNextProject()
            }
            touchStartX.current = null
          }}
        >
          <button className="carousel-arrow" type="button" onClick={showPreviousProject} aria-label="Previous project">
            <ArrowIcon direction="left" />
          </button>

          <div className="project-slide" key={project.name}>
            <a
              className="download-button"
              href={project.href}
              download={project.download || undefined}
              target={project.download ? undefined : '_blank'}
              rel={project.download ? undefined : 'noopener noreferrer'}
            >
              {project.download ? <DownloadIcon /> : <WebIcon />}
              <span>{project.name}</span>
            </a>
          </div>

          <button className="carousel-arrow" type="button" onClick={showNextProject} aria-label="Next project">
            <ArrowIcon direction="right" />
          </button>
        </div>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
