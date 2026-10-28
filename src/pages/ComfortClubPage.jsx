import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import Icon from '../components/Icon'
import StablePanels from '../components/StablePanels'
import { useHref } from '../context/ConceptContext'
import { comfortClub } from '../data/company'

const tabs = [
  { id: 'spring', label: 'Spring cooling tune-up', items: comfortClub.spring },
  { id: 'fall', label: 'Fall heating tune-up', items: comfortClub.fall },
]

export default function ComfortClubPage() {
  const href = useHref()
  const [tab, setTab] = useState('spring')
  const active = tabs.find(t => t.id === tab)

  return (
    <PageShell
      eyebrow="Comfort Club membership"
      title="Two precision tune-ups a year. Fewer surprises."
      intro={comfortClub.intro}
      crumbs={[{ label: 'Savings', slug: 'coupons' }]}
    >
      <div className="club-hero">
        <img src="/images/comfort-club.webp" alt="Comfort Club logo" width="150" height="150" />
        <div>
          <h2 className="section-title-sm">What members get</h2>
          <ul className="check-list cols-2">
            {comfortClub.benefits.map(b => <li key={b}><Icon name="check" size={16} /> {b}</li>)}
          </ul>
          <div className="btn-row">
            <Link className="btn btn-primary" to={href('payment-subscription')}>Join the Comfort Club</Link>
            <Link className="btn btn-ghost" to={href('request-service')}>Book a tune-up</Link>
          </div>
        </div>
      </div>

      <h2 className="section-title-sm">What’s on the checklist</h2>
      <div className="tabs" role="tablist" aria-label="Tune-up checklists">
        {tabs.map(t => (
          <button
            key={t.id}
            role="tab"
            type="button"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls="club-panel"
            className={tab === t.id ? 'is-active' : ''}
            onClick={() => setTab(t.id)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <StablePanels
        role="tabpanel"
        id="club-panel"
        aria-labelledby={`tab-${active.id}`}
        activeKey={active.id}
        panels={tabs.map(t => ({
          key: t.id,
          content: <ol className="numbered-list cols-2">{t.items.map(i => <li key={i}>{i}</li>)}</ol>,
        }))}
      />
    </PageShell>
  )
}
