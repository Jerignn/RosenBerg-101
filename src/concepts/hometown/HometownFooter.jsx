import { Link } from 'react-router-dom'
import { useHref } from '../../context/ConceptContext'
import { serviceGroups } from '../../data/services'
import { aboutLinks, legalLinks, resourceLinks, savingsLinks } from '../../data/company'
import { site, badges, copyrightYear } from '../../data/site'

export default function HometownFooter() {
  const href = useHref()
  const cols = [
    { title: 'What we fix', links: serviceGroups.map(g => ({ slug: g.hub, label: g.label })) },
    { title: 'Save money', links: savingsLinks },
    { title: 'Get to know us', links: aboutLinks },
    { title: 'Learn', links: resourceLinks },
  ]

  return (
    <footer className="h-footer">
      <div className="h-footer-call">
        <h2>Hot house? Cold shower? <br />We’re a phone call away.</h2>
        <div className="h-footer-numbers">
          <a href={site.phoneHref}><span>Office · {site.hours}</span><strong>{site.phone}</strong></a>
          <a href={site.emergencyHref}><span>After-hours emergencies</span><strong>{site.emergencyPhone}</strong></a>
        </div>
      </div>
      <div className="h-footer-grid">
        <div className="h-footer-brand">
          <img src="/images/logo.webp" alt={site.name} width="160" height="50" />
          <p>{site.address}<br />{site.cityLine}</p>
          <div className="h-badges">
            {badges.map(b => <img key={b.src} src={b.src} alt={b.alt} height="44" loading="lazy" />)}
          </div>
        </div>
        {cols.map(c => (
          <nav key={c.title} aria-label={c.title}>
            <p className="h-footer-title">{c.title}</p>
            <ul>{c.links.map(l => <li key={l.slug}><Link to={href(l.slug)}>{l.label}</Link></li>)}</ul>
          </nav>
        ))}
      </div>
      <div className="h-footer-legal">
        <p>© {copyrightYear} {site.name}. {site.licenses.join(' · ')}.</p>
        <p>{site.regulator}</p>
        <nav aria-label="Legal">{legalLinks.map(l => <Link key={l.slug} to={href(l.slug)}>{l.label}</Link>)}</nav>
      </div>
    </footer>
  )
}
