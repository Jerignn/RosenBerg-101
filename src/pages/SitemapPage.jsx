import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { Loading } from '../components/StatusMessage'
import { useHref } from '../context/ConceptContext'
import { useContentIndex } from '../lib/content'
import { classify, sectionLabels } from '../lib/catalog'

const order = ['service', 'company', 'city', 'city-service', 'resource', 'post', 'legal']
const extraPages = [
  { slug: 'request-service', title: 'Request Service' },
  { slug: 'request-estimate', title: 'Request Estimate' },
  { slug: 'pay-your-bill-online', title: 'Pay Your Bill' },
  { slug: 'blog', title: 'Blog' },
]

// Every page the preview can render — the full live sitemap plus the app-only pages.
export default function SitemapPage() {
  const href = useHref()
  const { data: index, loading } = useContentIndex()
  const [query, setQuery] = useState('')

  const entries = [...(index || []), ...extraPages.map(p => ({ ...p, kind: 'page', extra: true }))]
    .filter(e => e.title.toLowerCase().includes(query.toLowerCase()))
  const sections = order
    .map(key => ({ key, items: entries.filter(e => (e.extra ? 'company' : classify(e)) === key) }))
    .filter(s => s.items.length)

  return (
    <PageShell eyebrow="Sitemap" title="Every page on the site" intro={index ? `${index.length + extraPages.length} pages, all browsable in this design.` : undefined} sidebar={false}>
      <input type="search" className="search-input" placeholder="Filter pages…" value={query} onChange={e => setQuery(e.target.value)} aria-label="Filter pages" />
      {loading ? <Loading /> : sections.map(s => (
        <section key={s.key} className="sitemap-section">
          <h2 className="section-title-sm">{sectionLabels[s.key]} <span className="count">{s.items.length}</span></h2>
          <ul className="sitemap-list">
            {s.items.sort((a, b) => a.title.localeCompare(b.title)).map(e => (
              <li key={e.slug}><Link to={href(e.slug)}>{e.title}</Link></li>
            ))}
          </ul>
        </section>
      ))}
    </PageShell>
  )
}
