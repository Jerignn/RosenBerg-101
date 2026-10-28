import { Link, NavLink } from 'react-router-dom'
import { useHref } from '../../context/ConceptContext'
import useNavState from '../../lib/useNavState'
import { menus } from '../../data/nav'
import { site } from '../../data/site'
import Icon from '../../components/Icon'
import MobileNav from '../../components/MobileNav'

function MegaPanel({ menu, href }) {
  if (menu.groups) {
    return (
      <div className="mega mega-services">
        {menu.groups.map(g => (
          <div key={g.id} className="mega-col">
            <Link to={href(g.hub)} className="mega-head"><Icon name={g.icon} size={18} /> {g.label}</Link>
            <ul>{g.items.map(i => <li key={i.slug}><Link to={href(i.slug)}>{i.label}</Link></li>)}</ul>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="mega mega-list">
      <ul>{menu.links.map(l => <li key={l.slug}><Link to={href(l.slug)}>{l.label}</Link></li>)}</ul>
    </div>
  )
}

export default function ControlHeader() {
  const href = useHref()
  const nav = useNavState()

  return (
    <header className="c-header" ref={nav.ref}>
      <div className="c-strip">
        <span className="mono"><span className="live-dot" aria-hidden="true" /> {site.award}</span>
        <div className="c-strip-links">
          <Link to={href('pay-your-bill-online')}>Pay your bill</Link>
          <Link to={href('financing')}>Financing</Link>
          <Link to={href('join-team')}>Careers</Link>
          <a href={site.emergencyHref}>After hours {site.emergencyPhone}</a>
        </div>
      </div>
      <div className="c-bar">
        <Link to={href('')} className="c-logo" aria-label={`${site.name} home`}>
          <img src="/images/logo.webp" alt="" width="150" height="47" />
        </Link>
        <nav className="c-nav" aria-label="Main">
          {menus.map(m => (
            <div key={m.id} className="c-nav-item">
              <button type="button" aria-expanded={nav.openMenu === m.id} onClick={() => nav.toggleMenu(m.id)}>
                {m.label} <Icon name="chevron" size={14} />
              </button>
              {nav.openMenu === m.id && <MegaPanel menu={m} href={href} />}
            </div>
          ))}
          <NavLink to={href('contact-us')} className="c-nav-link">Contact</NavLink>
        </nav>
        <div className="c-actions">
          <a href={site.phoneHref} className="c-phone mono"><Icon name="phone" size={16} /> {site.phone}</a>
          <Link to={href('request-service')} className="btn btn-primary btn-small">Request service</Link>
          <button type="button" className="icon-btn c-burger" onClick={() => nav.setDrawer(true)} aria-label="Open menu"><Icon name="menu" /></button>
        </div>
      </div>
      {nav.drawer && <MobileNav onClose={() => nav.setDrawer(false)} />}
    </header>
  )
}
