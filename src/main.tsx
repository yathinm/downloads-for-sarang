import { StrictMode } from 'react'
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

function App() {
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

        <a className="download-button" href="/downloads/projects-for-you.zip" download>
          <DownloadIcon />
          <span>Loopy Reminders</span>
        </a>
      </section>
    </main>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
