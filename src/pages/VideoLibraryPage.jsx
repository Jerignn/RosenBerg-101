import { useState } from 'react'
import PageShell from '../components/PageShell'
import Icon from '../components/Icon'
import { videos } from '../data/company'

export default function VideoLibraryPage() {
  const [active, setActive] = useState(videos[0])

  return (
    <PageShell eyebrow="Resources" title="Video library" intro="Short explainers from our technicians — see exactly what happens on a tune-up before you book." sidebar={false}>
      <div className="video-layout">
        <div className="video-stage" aria-live="polite">
          <div className="video-frame">
            <Icon name="play" size={48} />
            <p>{active.title}</p>
            <span>Video placeholder · {active.length}</span>
          </div>
          <p className="fine-print">Preview build: drop the YouTube or Vimeo embed for each video into <code>src/data/company.js</code>.</p>
        </div>
        <ul className="video-list">
          {videos.map(v => (
            <li key={v.id}>
              <button type="button" className={`video-item${v.id === active.id ? ' is-on' : ''}`} aria-pressed={v.id === active.id} onClick={() => setActive(v)}>
                <Icon name="play" size={16} />
                <span><strong>{v.title}</strong><small>{v.topic} · {v.length}</small></span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  )
}
