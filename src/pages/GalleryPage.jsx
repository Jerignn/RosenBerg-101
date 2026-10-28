import { useEffect, useState } from 'react'
import PageShell from '../components/PageShell'
import Icon from '../components/Icon'
import { galleryItems } from '../data/company'

export default function GalleryPage() {
  const tags = ['All', ...new Set(galleryItems.map(g => g.tag))]
  const [tag, setTag] = useState('All')
  const [open, setOpen] = useState(null)
  const shown = galleryItems.filter(g => tag === 'All' || g.tag === tag)

  useEffect(() => {
    if (open === null) return
    const onKey = e => {
      if (e.key === 'Escape') setOpen(null)
      if (e.key === 'ArrowRight') setOpen(i => (i + 1) % shown.length)
      if (e.key === 'ArrowLeft') setOpen(i => (i - 1 + shown.length) % shown.length)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, shown.length])

  return (
    <PageShell eyebrow="Resources" title="Photo gallery" intro="Our crew, our vans and a few milestones from 40 years in San Antonio." sidebar={false}>
      <div className="choices" role="group" aria-label="Filter photos">
        {tags.map(t => (
          <button key={t} type="button" className={`choice${tag === t ? ' is-on' : ''}`} aria-pressed={tag === t} onClick={() => setTag(t)}>{t}</button>
        ))}
      </div>
      <ul className="gallery-grid">
        {shown.map((g, i) => (
          <li key={g.src}>
            <button type="button" className="gallery-item" onClick={() => setOpen(i)}>
              <img src={g.src} alt={g.caption} loading="lazy" />
              <span>{g.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {open !== null && shown[open] && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={shown[open].caption} onClick={() => setOpen(null)}>
          <figure onClick={e => e.stopPropagation()}>
            <img src={shown[open].src} alt={shown[open].caption} />
            <figcaption>{shown[open].caption} <span>{open + 1} / {shown.length}</span></figcaption>
            <button type="button" className="lightbox-close" onClick={() => setOpen(null)} aria-label="Close" autoFocus>
              <Icon name="close" size={22} />
            </button>
          </figure>
        </div>
      )}
    </PageShell>
  )
}
