import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHref } from '../../../context/ConceptContext'
import { seasons } from '../../../data/company'
import Icon from '../../../components/Icon'
import StablePanels from '../../../components/StablePanels'

const currentSeason = () => {
  const m = new Date().getMonth()
  return m >= 2 && m <= 4 ? 'spring' : m >= 5 && m <= 8 ? 'summer' : m >= 9 && m <= 10 ? 'fall' : 'winter'
}

// A year-round home-care calendar; opens on the current season.
export default function SeasonPlanner() {
  const href = useHref()
  const [now] = useState(currentSeason)
  const [active, setActive] = useState(now)

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
      <StablePanels
        className={`planner-card season-${active}`}
        role="tabpanel"
        id="season-panel"
        aria-labelledby={`season-${active}`}
        activeKey={active}
        panels={seasons.map(x => ({
          key: x.id,
          content: (
            <>
              <span className="planner-kicker">{x.label} to-do</span>
              <h3>{x.task}</h3>
              <p>{x.detail}</p>
              <Link to={href(x.slug)} className="text-link">Show me how <Icon name="arrow" size={16} /></Link>
            </>
          ),
        }))}
      />
    </div>
  )
}
