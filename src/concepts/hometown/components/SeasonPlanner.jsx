import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHref } from '../../../context/ConceptContext'
import { seasons } from '../../../data/company'
import Icon from '../../../components/Icon'

const currentSeason = () => {
  const m = new Date().getMonth()
  return m >= 2 && m <= 4 ? 'spring' : m >= 5 && m <= 8 ? 'summer' : m >= 9 && m <= 10 ? 'fall' : 'winter'
}

// A year-round home-care calendar; opens on the current season.
export default function SeasonPlanner() {
  const href = useHref()
  const now = currentSeason()
  const [active, setActive] = useState(now)
  const s = seasons.find(x => x.id === active)

  return (
    <div className="planner">
      <div className="planner-wheel" role="tablist" aria-label="Seasons">
        {seasons.map(x => (
          <button
            key={x.id}
            type="button"
            role="tab"
            id={`season-${x.id}`}
            aria-selected={active === x.id}
            aria-controls="season-panel"
            className={`season season-${x.id}${active === x.id ? ' is-on' : ''}`}
            onClick={() => setActive(x.id)}
          >
            <strong>{x.label}</strong>
            <span>{x.months}</span>
            {x.id === now && <em>Now</em>}
          </button>
        ))}
      </div>
      <div className={`planner-card season-${s.id}`} role="tabpanel" id="season-panel" aria-labelledby={`season-${s.id}`}>
        <span className="planner-kicker">{s.label} to-do</span>
        <h3>{s.task}</h3>
        <p>{s.detail}</p>
        <Link to={href(s.slug)} className="text-link">Show me how <Icon name="arrow" size={16} /></Link>
      </div>
    </div>
  )
}
