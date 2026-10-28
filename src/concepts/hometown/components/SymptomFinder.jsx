import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHref } from '../../../context/ConceptContext'
import { symptoms } from '../../../data/services'
import Icon from '../../../components/Icon'

// "What's going on at home?" — pick a symptom, get the likely cause and the right page.
export default function SymptomFinder() {
  const href = useHref()
  const [picked, setPicked] = useState(null)
  const s = symptoms.find(x => x.id === picked)

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
      <div className={`finder-answer${s ? ' has-answer' : ''}`} aria-live="polite">
        {s ? (
          <>
            <span className="finder-kicker">Likely next step</span>
            <h3>{s.label}</h3>
            <p>{s.note}</p>
            <div className="btn-row">
              <Link to={href('request-service')} className="btn btn-primary">Book a visit</Link>
              <Link to={href(s.slug)} className="btn btn-ghost">Learn more <Icon name="arrow" size={16} /></Link>
            </div>
          </>
        ) : (
          <div className="finder-empty">
            <Icon name="search" size={34} strokeWidth={1.4} />
            <p>Pick a symptom to see what it usually means.</p>
          </div>
        )}
      </div>
    </div>
  )
}
