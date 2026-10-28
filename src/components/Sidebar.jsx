import { Link } from 'react-router-dom'
import { useHref } from '../context/ConceptContext'
import { site } from '../data/site'
import { offers } from '../data/company'
import CallButton from './CallButton'
import Icon from './Icon'

export default function Sidebar({ group, current }) {
  const href = useHref()
  const featured = offers[1]

  return (
    <aside className="sidebar">
      <div className="side-card side-cta">
        <p className="side-kicker">Talk to a real person</p>
        <CallButton className="btn btn-primary btn-block" />
        <Link className="btn btn-ghost btn-block" to={href('request-service')}>Request service online</Link>
        <p className="side-meta"><Icon name="clock" size={16} /> {site.hours}</p>
        <p className="side-meta"><Icon name="bolt" size={16} /> After hours: <a href={site.emergencyHref}>{site.emergencyPhone}</a></p>
      </div>

      {group && (
        <nav className="side-card side-links" aria-label={`${group.label} services`}>
          <p className="side-kicker">{group.label}</p>
          <ul>
            {[{ slug: group.hub, label: `${group.label} overview` }, ...group.items].map(item => (
              <li key={item.slug}>
                <Link to={href(item.slug)} aria-current={item.slug === current ? 'page' : undefined}>
                  {item.label} <Icon name="arrow" size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <Link to={href('coupons')} className="side-card side-offer">
        <span className="side-kicker">This season</span>
        <strong>{featured.amount}</strong>
        <span>{featured.title}</span>
        <span className="side-offer-link">See all coupons <Icon name="arrow" size={14} /></span>
      </Link>
    </aside>
  )
}
