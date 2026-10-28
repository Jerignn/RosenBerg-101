import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHref } from '../../../context/ConceptContext'
import { serviceGroups } from '../../../data/services'
import Icon from '../../../components/Icon'
import StablePanels from '../../../components/StablePanels'

// Services shown as thermostat-style "zones": pick one on the left, details on the right.
export default function ServiceZones() {
  const href = useHref()
  const [active, setActive] = useState(serviceGroups[0].id)

  return (
    <div className="zones">
      <div className="zones-list" role="tablist" aria-label="Service zones" aria-orientation="vertical">
        {serviceGroups.map((g, i) => (
          <button
            key={g.id}
            type="button"
            role="tab"
            id={`zone-${g.id}`}
            aria-selected={active === g.id}
            aria-controls="zone-panel"
            className={active === g.id ? 'is-on' : ''}
            onClick={() => setActive(g.id)}
          >
            <span className="mono">ZONE {String(i + 1).padStart(2, '0')}</span>
            <strong>{g.label}</strong>
            <Icon name={g.icon} size={20} />
          </button>
        ))}
      </div>
      <StablePanels
        role="tabpanel"
        id="zone-panel"
        aria-labelledby={`zone-${active}`}
        activeKey={active}
        panels={serviceGroups.map(group => ({
          key: group.id,
          className: 'zones-panel',
          content: (
            <>
              <Icon name={group.icon} size={40} strokeWidth={1.3} className="zones-icon" />
              <h3>{group.label}</h3>
              <p>{group.blurb}</p>
              <ul className="zones-links">
                {group.items.map(i => (
                  <li key={i.slug}><Link to={href(i.slug)}>{i.label} <Icon name="arrow" size={14} /></Link></li>
                ))}
              </ul>
              <Link to={href(group.hub)} className="btn btn-ghost btn-small">All {group.label.toLowerCase()} <Icon name="arrow" size={14} /></Link>
            </>
          ),
        }))}
      />
    </div>
  )
}
