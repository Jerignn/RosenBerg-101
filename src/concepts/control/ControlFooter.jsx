import { Link } from 'react-router-dom'
import { useHref } from '../../context/ConceptContext'
import { serviceGroups } from '../../data/services'
import { aboutLinks, legalLinks, resourceLinks, savingsLinks } from '../../data/company'
import { site, badges, copyrightYear } from '../../data/site'

export default function ControlFooter() {
  const href = useHref()
  const cols = [
    { title: 'Services', links: serviceGroups.map(g => ({ slug: g.hub, label: g.label })) },
    { title: 'Savings', links: savingsLinks },
    { title: 'Company', links: aboutLinks },
    { title: 'Resources', links: resourceLinks.slice(0, 9) },
  ]

  return (
    <footer className="c-footer">
      <div className="c-footer-top">
        <div className="c-footer-brand">
          <img src="/images/logo.webp" alt={site.name} width="170" height="53" />
          <p>{site.address}<br />{site.cityLine}</p>
          <a className="c-footer-phone mono" href={site.phoneHref}>{site.phone}</a>
          <p className="mono small">{site.hours} · After hours {site.emergencyPhone}</p>
          <div className="badge-row">
            {badges.map(b => <img key={b.src} src={b.src} alt={b.alt} height="40" loading="lazy" />)}
          </div>
        </div>
        {cols.map(c => (
          <nav key={c.title} className="c-footer-col" aria-label={c.title}>
            <p className="mono">{c.title}</p>
            <ul>{c.links.map(l => <li key={l.slug}><Link to={href(l.slug)}>{l.label}</Link></li>)}</ul>
          </nav>
        ))}
      </div>
      <div className="c-footer-legal">
        <p>© {copyrightYear} {site.name} · {site.licenses.join(' · ')}</p>
        <p>{site.regulator}</p>
        <nav aria-label="Legal">
          {legalLinks.map(l => <Link key={l.slug} to={href(l.slug)}>{l.label}</Link>)}
        </nav>
      </div>
    </footer>
  )
}
