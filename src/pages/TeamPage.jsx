import { useMemo, useState } from 'react'
import PageShell from '../components/PageShell'
import ContentBlocks from '../components/ContentBlocks'
import { Loading } from '../components/StatusMessage'
import { usePage } from '../lib/content'
import { timeline } from '../data/company'

// The live page lists each person as a heading followed by their role.
function splitTeam(blocks) {
  const start = blocks.findIndex(b => b.t === 'h' && /meet our team/i.test(b.text))
  if (start < 0) return { about: blocks, people: [] }
  const people = []
  for (let i = start + 1; i < blocks.length; i++) {
    if (blocks[i].t === 'h') people.push({ name: blocks[i].text, role: blocks[i + 1]?.t === 'p' ? blocks[i + 1].text : '' })
  }
  return { about: blocks.slice(0, start + 2), people }
}

const initials = name => name.split(/\s+/).map(w => w[0]).join('').slice(0, 2).toUpperCase()

export default function TeamPage() {
  const { data, loading } = usePage('our-team')
  const [query, setQuery] = useState('')
  const { about, people } = useMemo(() => splitTeam(data?.blocks || []), [data])
  const shown = people.filter(p => `${p.name} ${p.role}`.toLowerCase().includes(query.toLowerCase()))

  return (
    <PageShell eyebrow="About us" title="The people behind the vans." intro="Family-serving San Antonio since 1986 — certified technicians who keep training as the equipment changes." crumbs={[{ label: 'About', slug: 'choose-us' }]}>
      {loading ? <Loading /> : <ContentBlocks blocks={about} />}

      <h2 className="section-title-sm">Our history</h2>
      <ol className="timeline">
        {timeline.map(t => <li key={t.year}><strong>{t.year}</strong><span>{t.text}</span></li>)}
      </ol>

      <div className="team-head">
        <h2 className="section-title-sm">Meet the team <span className="count">{people.length}</span></h2>
        <input type="search" className="search-input" placeholder="Search by name or role" value={query} onChange={e => setQuery(e.target.value)} aria-label="Search team" />
      </div>
      <ul className="team-grid">
        {shown.map((p, i) => (
          <li key={`${p.name}-${i}`} className="team-card">
            <span className="avatar" aria-hidden="true">{initials(p.name)}</span>
            <strong>{p.name}</strong>
            <span>{p.role}</span>
          </li>
        ))}
      </ul>
      {!shown.length && !loading && <p>No one matches “{query}”.</p>}
    </PageShell>
  )
}
