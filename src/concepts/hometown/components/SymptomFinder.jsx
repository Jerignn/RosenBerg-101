import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHref } from '../../../context/ConceptContext'
import { symptoms } from '../../../data/services'
import Icon from '../../../components/Icon'
import StablePanels from '../../../components/StablePanels'

// "What's going on at home?" — pick a symptom, get the likely cause and the right page.
export default function SymptomFinder() {
  const href = useHref()
  const [picked, setPicked] = useState(null)
  const s = symptoms.find(x => x.id === picked)

  const empty = {
    key: 'empty',
    className: 'finder-empty',
    content: (
      <>
        <Icon name="search" size={34} strokeWidth={1.4} />
        <p>Pick a symptom to see what it usually means.</p>
      </>
    ),
  }

  return (
    <div className="finder">
      <div className="finder-ask">
        <h2>What’s going on at home?</h2>
        <p>Tap what you’re noticing — we’ll point you to the right fix.</p>
        <div className="finder-chips" role="group" aria-label="Symptoms">
          {symptoms.map(x => (
            <button key={x.id} type="button" className={`h-chip${picked === x.id ? ' is-on' : ''}`} aria-pressed={picked === x.id} onClick={() => setPicked(x.id)}>
              {x.label}
            </button>
          ))}
        </div>
      </div>
      <div className={`finder-answer${s ? ' has-answer' : ''}`}>
        <StablePanels
          activeKey={picked ?? 'empty'}
          panels={[
            empty,
            ...symptoms.map(x => ({
              key: x.id,
              content: (
                <>
                  <span className="finder-kicker">Likely next step</span>
                  <h3>{x.label}</h3>
                  <p>{x.note}</p>
                  <div className="btn-row">
                    <Link to={href('request-service')} className="btn btn-primary">Book a visit</Link>
                    <Link to={href(x.slug)} className="btn btn-ghost">Learn more <Icon name="arrow" size={16} /></Link>
                  </div>
                </>
              ),
            })),
          ]}
        />
        <p className="sr-only" aria-live="polite">{s ? `${s.label}: ${s.note}` : ''}</p>
      </div>
    </div>
  )
}
