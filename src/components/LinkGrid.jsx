import { Link } from 'react-router-dom'
import { useHref } from '../context/ConceptContext'
import Icon from './Icon'

// A titled list of internal links, used for cross-linking city and service pages.
export default function LinkGrid({ title, links, columns }) {
  const href = useHref()
  if (!links?.length) return null

  return (
    <section className="link-grid-section">
      {title && <h2 className="section-title-sm">{title}</h2>}
      <ul className="link-grid" style={columns ? { '--cols': columns } : undefined}>
        {links.map(l => (
          <li key={l.slug}>
            <Link to={href(l.slug)}>
              <span>{l.label || l.title}</span>
              <Icon name="arrow" size={14} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
