import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import Icon from '../components/Icon'
import { useHref } from '../context/ConceptContext'
import { useContentIndex } from '../lib/content'
import { cities, cityInSlug, classify } from '../lib/catalog'
import { site } from '../data/site'

export default function ServiceAreaPage() {
  const href = useHref()
  const { data: index } = useContentIndex()
  const [query, setQuery] = useState('')

  const localCount = slug => (index || []).filter(e => classify(e) === 'city-service' && cityInSlug(e.slug)?.slug === slug).length
  const shown = cities.filter(c => c.label.toLowerCase().includes(query.toLowerCase()))

  return (
    <PageShell
      eyebrow="Service area"
      title={`${cities.length} communities, one local crew.`}
      intro={`From Boerne to Elmendorf, Rosenberg serves homes and businesses across greater San Antonio. Don’t see your town? Call ${site.phone}.`}
      sidebar={false}
    >
      <label className="area-search">
        <Icon name="search" size={18} />
        <input type="search" placeholder="Find your community…" value={query} onChange={e => setQuery(e.target.value)} aria-label="Find your community" />
      </label>
      <p className="area-result" aria-live="polite">
        {query && (shown.length ? `Yes — we serve ${shown.length === 1 ? shown[0].label : `${shown.length} matching communities`}.` : 'Not listed — call us, we may still be able to help.')}
      </p>
      <ul className="area-grid">
        {shown.map(c => {
          const n = localCount(c.slug)
          return (
            <li key={c.slug}>
              <Link to={href(c.slug)} className="area-card">
                <Icon name="pin" size={18} />
                <strong>{c.label}</strong>
                {n > 0 && <span>{n} local service pages</span>}
              </Link>
            </li>
          )
        })}
      </ul>
    </PageShell>
  )
}
