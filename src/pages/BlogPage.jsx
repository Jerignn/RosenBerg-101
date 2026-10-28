import { Link, useSearchParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { Loading } from '../components/StatusMessage'
import { useHref } from '../context/ConceptContext'
import { useContentIndex } from '../lib/content'
import { formatDate } from '../lib/catalog'

const PER_PAGE = 12
const topics = ['All', 'AC', 'Heating', 'Plumbing', 'Air quality', 'Water heater', 'Emergency']
const topicMatch = {
  AC: /\b(ac|air condition|cool)/i,
  Heating: /heat|furnace/i,
  Plumbing: /plumb|drain|leak|pipe|sewer/i,
  'Air quality': /air quality|purif|humid|duct/i,
  'Water heater': /water heater|tankless/i,
  Emergency: /emergenc/i,
}

export default function BlogPage() {
  const href = useHref()
  const { data: index, loading } = useContentIndex()
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const topic = params.get('topic') || 'All'
  const page = Math.max(1, Number(params.get('page')) || 1)

  const update = next => setParams(Object.fromEntries(Object.entries({ q, topic, page: 1, ...next }).filter(([k, v]) => v && !(k === 'topic' && v === 'All') && !(k === 'page' && v === 1))), { replace: true })

  const posts = (index || [])
    .filter(e => e.kind === 'post')
    .filter(e => topic === 'All' || topicMatch[topic].test(e.title))
    .filter(e => `${e.title} ${e.desc}`.toLowerCase().includes(q.toLowerCase()))
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  const pages = Math.max(1, Math.ceil(posts.length / PER_PAGE))
  const shown = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE)

  return (
    <PageShell eyebrow="Resources" title="The Rosenberg blog" intro="Tips, seasonal checklists and plain-English explainers from our technicians." sidebar={false}>
      <div className="blog-tools">
        <input type="search" className="search-input" placeholder="Search articles…" value={q} onChange={e => update({ q: e.target.value })} aria-label="Search articles" />
        <div className="choices" role="group" aria-label="Filter by topic">
          {topics.map(t => (
            <button key={t} type="button" className={`choice${topic === t ? ' is-on' : ''}`} aria-pressed={topic === t} onClick={() => update({ topic: t })}>{t}</button>
          ))}
        </div>
      </div>

      {loading ? <Loading /> : (
        <>
          <p className="result-count">{posts.length} articles</p>
          <ul className="post-grid">
            {shown.map(p => (
              <li key={p.slug}>
                <Link to={href(p.slug)} className="post-card">
                  <span className="post-date">{formatDate(p.date)}</span>
                  <strong>{p.title}</strong>
                  {p.desc && <span className="post-desc">{p.desc}</span>}
                </Link>
              </li>
            ))}
          </ul>
          {pages > 1 && (
            <nav className="pager" aria-label="Blog pages">
              <button type="button" className="btn btn-small btn-ghost" disabled={page === 1} onClick={() => update({ page: page - 1 })}>Newer</button>
              <span>Page {page} of {pages}</span>
              <button type="button" className="btn btn-small btn-ghost" disabled={page === pages} onClick={() => update({ page: page + 1 })}>Older</button>
            </nav>
          )}
        </>
      )}
    </PageShell>
  )
}
