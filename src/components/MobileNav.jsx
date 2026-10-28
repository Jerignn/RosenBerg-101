import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHref } from '../context/ConceptContext'
import { menus } from '../data/nav'
import Icon from './Icon'
import CallButton from './CallButton'

// Drawer contents for small screens; each concept styles .mobile-nav its own way.
export default function MobileNav({ onClose }) {
  const href = useHref()
  const [open, setOpen] = useState(null)

  return (
    <div className="mobile-nav" role="dialog" aria-modal="true" aria-label="Site menu">
      <div className="mobile-nav-head">
        <span>Menu</span>
        <button type="button" className="icon-btn" onClick={onClose} aria-label="Close menu"><Icon name="close" /></button>
      </div>
      <nav>
        <Link className="mobile-nav-top" to={href('')}>Home</Link>
        {menus.map(m => {
          const links = m.groups ? m.groups.flatMap(g => [{ slug: g.hub, label: g.label, strong: true }, ...g.items]) : m.links
          return (
            <div key={m.id} className="mobile-nav-group">
              <button type="button" className="mobile-nav-top" aria-expanded={open === m.id} onClick={() => setOpen(open === m.id ? null : m.id)}>
                {m.label} <Icon name="chevron" size={18} />
              </button>
              {open === m.id && (
                <ul>
                  {links.map(l => (
                    <li key={l.slug} className={l.strong ? 'is-strong' : ''}><Link to={href(l.slug)}>{l.label}</Link></li>
                  ))}
                </ul>
              )}
            </div>
          )
        })}
        <Link className="mobile-nav-top" to={href('contact-us')}>Contact</Link>
      </nav>
      <div className="mobile-nav-foot">
        <CallButton className="btn btn-primary btn-block" />
        <Link className="btn btn-ghost btn-block" to={href('request-service')}>Request service</Link>
      </div>
    </div>
  )
}
