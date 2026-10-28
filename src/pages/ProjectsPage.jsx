import { useState } from 'react'
import PageShell from '../components/PageShell'
import CtaBand from '../components/CtaBand'
import Icon from '../components/Icon'
import { projects } from '../data/company'

export default function ProjectsPage() {
  const types = ['All', ...new Set(projects.map(p => p.type))]
  const [type, setType] = useState('All')
  const shown = projects.filter(p => type === 'All' || p.type === type)

  return (
    <PageShell eyebrow="Resources" title="Completed projects" intro="A sample of recent installs and repairs across greater San Antonio." sidebar={false}>
      <div className="choices" role="group" aria-label="Filter projects">
        {types.map(t => (
          <button key={t} type="button" className={`choice${type === t ? ' is-on' : ''}`} aria-pressed={type === t} onClick={() => setType(t)}>{t}</button>
        ))}
      </div>
      <ul className="project-grid">
        {shown.map(p => (
          <li key={p.title} className="project-card">
            <span className="project-type">{p.type}</span>
            <h3>{p.title}</h3>
            <p className="project-area"><Icon name="pin" size={14} /> {p.area}</p>
            <p>{p.scope}</p>
          </li>
        ))}
      </ul>
      <p className="fine-print">Project summaries are illustrative placeholders for the preview — swap in real job write-ups and photos.</p>
      <CtaBand title="Planning a project?" text="Free in-home estimates with upfront pricing, rebates and financing." />
    </PageShell>
  )
}
