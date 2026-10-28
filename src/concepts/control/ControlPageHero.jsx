import { Link } from 'react-router-dom'
import { useHref } from '../../context/ConceptContext'

export default function ControlPageHero({ eyebrow, title, intro, crumbs }) {
  const href = useHref()
  return (
    <section className="c-pagehero">
      <div className="c-pagehero-inner">
        <nav className="crumbs mono" aria-label="Breadcrumb">
          <Link to={href('')}>Home</Link>
          {crumbs.map(c => <span key={c.slug}> / <Link to={href(c.slug)}>{c.label}</Link></span>)}
        </nav>
        {eyebrow && <p className="eyebrow mono">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="lede">{intro}</p>}
      </div>
    </section>
  )
}
