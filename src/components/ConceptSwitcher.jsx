import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Icon from './Icon'
import './ConceptSwitcher.css'

const concepts = [
  { base: '/design-1', short: 'A', name: 'Comfort Control' },
  { base: '/design-2', short: 'B', name: 'Hometown Sun' },
]

// Floating control for reviewers: flip designs while staying on the same page.
export default function ConceptSwitcher() {
  const { pathname, search } = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const current = concepts.find(c => pathname.startsWith(c.base))
  if (!current) return null
  const rest = pathname.slice(current.base.length)

  return (
    <div className={`switcher${collapsed ? ' is-collapsed' : ''}`} role="navigation" aria-label="Design concepts">
      <button type="button" className="switcher-toggle" onClick={() => setCollapsed(!collapsed)} aria-expanded={!collapsed} aria-label={collapsed ? 'Show concept switcher' : 'Hide concept switcher'}>
        <Icon name={collapsed ? 'plus' : 'minus'} size={14} />
      </button>
      {!collapsed && (
        <>
          <Link to="/" className="switcher-home">All concepts</Link>
          {concepts.map(c => (
            <Link
              key={c.base}
              to={`${c.base}${rest}${search}`}
              className={`switcher-opt${c === current ? ' is-on' : ''}`}
              aria-current={c === current ? 'page' : undefined}
              title={c.name}
            >
              <b>{c.short}</b> <span>{c.name}</span>
            </Link>
          ))}
        </>
      )}
    </div>
  )
}
