import { useState } from 'react'
import PageShell from '../components/PageShell'
import Accordion from '../components/Accordion'
import LinkGrid from '../components/LinkGrid'
import { faqs, resourceLinks } from '../data/company'

export default function FaqPage() {
  const [query, setQuery] = useState('')
  const q = query.toLowerCase()
  const shown = faqs.filter(([question, answer]) => `${question} ${answer}`.toLowerCase().includes(q))

  return (
    <PageShell eyebrow="Resources" title="Frequently asked questions" intro="Straight answers for San Antonio homeowners about heating, cooling and plumbing.">
      <input type="search" className="search-input" placeholder="Search questions…" value={query} onChange={e => setQuery(e.target.value)} aria-label="Search FAQs" />
      {shown.length ? <Accordion key={query} items={shown} defaultOpen={query ? 0 : -1} /> : <p>No questions match “{query}”. Give us a call — we’re happy to help.</p>}
      <LinkGrid title="More homeowner guides" links={resourceLinks.filter(l => l.slug !== 'frequently-asked-questions')} />
    </PageShell>
  )
}
