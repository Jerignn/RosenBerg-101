import { Link } from 'react-router-dom'
import useDocumentTitle from '../lib/useDocumentTitle'
import { useContentIndex } from '../lib/content'
import { site } from '../data/site'
import './overview.css'

const concepts = [
  {
    to: '/design-1',
    key: 'a',
    number: 'A',
    name: 'Comfort Control',
    tags: 'Dark · Precise · Interactive',
    text: 'An instrument-panel homepage built around a live thermostat. Drag the dial and it tells you what your setting means — and which service you need.',
    palette: ['#0c1113', '#5ee0ff', '#ff7a45'],
  },
  {
    to: '/design-2',
    key: 'b',
    number: 'B',
    name: 'Hometown Sun',
    tags: 'Warm · Friendly · Neighborly',
    text: 'Sun-warmed and welcoming. Tap a symptom to find the right fix, plan the year season by season, and check if Rosenberg covers your town.',
    palette: ['#fbf5ec', '#c24e2c', '#1f4a3f'],
  },
]

function MiniDial() {
  return (
    <svg viewBox="0 0 120 120" className="ov-dial" aria-hidden="true">
      <circle cx="60" cy="60" r="46" fill="none" stroke="#1f2a2e" strokeWidth="8" strokeDasharray="216 289" transform="rotate(135 60 60)" strokeLinecap="round" />
      <circle cx="60" cy="60" r="46" fill="none" stroke="#5ee0ff" strokeWidth="8" strokeDasharray="140 289" transform="rotate(135 60 60)" strokeLinecap="round" />
      <text x="60" y="66" textAnchor="middle" fill="#e9eff1" fontSize="26" fontFamily="Space Grotesk">76°</text>
    </svg>
  )
}

export default function OverviewPage() {
  useDocumentTitle('Website concepts')
  const { data: index } = useContentIndex()

  return (
    <div className="ov">
      <header className="ov-top">
        <img src="/images/logo.webp" alt={site.name} width="150" height="47" />
        <p>Website redesign · two concepts</p>
      </header>

      <main className="ov-split">
        {concepts.map(c => (
          <Link key={c.key} to={c.to} className={`ov-half ov-${c.key}`}>
            <div className="ov-art" aria-hidden="true">
              {c.key === 'a' ? <MiniDial /> : <div className="ov-arch"><img src="/images/van.webp" alt="" /></div>}
            </div>
            <div className="ov-copy">
              <span className="ov-num">Concept {c.number}</span>
              <h2>{c.name}</h2>
              <p className="ov-tags">{c.tags}</p>
              <p className="ov-text">{c.text}</p>
              <div className="ov-palette">
                {c.palette.map(p => <span key={p} style={{ background: p }} title={p} />)}
              </div>
              <span className="ov-go">Open concept {c.number} →</span>
            </div>
          </Link>
        ))}
      </main>

      <footer className="ov-notes">
        <div>
          <strong>Nothing left out.</strong> Every page on rosenberghvac.com{index ? ` — all ${index.length}, including ${index.filter(e => e.kind === 'post').length} blog posts and every city page —` : ''} is rebuilt in both concepts with the live site’s own copy.
        </div>
        <div>
          <strong>Try it on your phone.</strong> The switcher in the corner flips designs while keeping you on the same page.
        </div>
        <div>
          <strong>Preview only.</strong> Forms validate and confirm but don’t send anything yet. Phone links ring {site.phone}.
        </div>
      </footer>
    </div>
  )
}
