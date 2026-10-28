import { Link } from 'react-router-dom'
import { useHref } from '../../context/ConceptContext'

export default function HometownPageHero({ eyebrow, title, intro, crumbs }) {
  const href = useHref()
  return (
    <section className="h-pagehero">
      <div className="h-pagehero-inner">
        <nav className="h-crumbs" aria-label="Breadcrumb">
          <Link to={href('')}>Home</Link>
          {crumbs.map(c => <span key={c.slug}> › <Link to={href(c.slug)}>{c.label}</Link></span>)}
        </nav>
        {eyebrow && <p className="h-pill">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="lede">{intro}</p>}
      </div>
      <svg className="h-wave" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 40V18C240 0 480 0 720 18s480 18 720 0v22Z" />
      </svg>
    </section>
  )
}
