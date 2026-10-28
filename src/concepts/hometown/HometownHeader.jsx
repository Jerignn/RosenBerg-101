import { Link } from 'react-router-dom'
import { useHref } from '../../context/ConceptContext'
import useNavState from '../../lib/useNavState'
import { menus } from '../../data/nav'
import { site } from '../../data/site'
import Icon from '../../components/Icon'
import MobileNav from '../../components/MobileNav'

function Dropdown({ menu, href }) {
  if (menu.groups) {
    return (
      <div className="h-drop h-drop-wide">
        {menu.groups.map(g => (
          <Link key={g.id} to={href(g.hub)} className="h-drop-tile">
            <span className={`h-tile-icon tint-${g.id}`}><Icon name={g.icon} size={20} /></span>
            <span><strong>{g.label}</strong><small>{g.items.length} services</small></span>
          </Link>
        ))}
        <div className="h-drop-all">
          {menu.groups.flatMap(g => g.items).map(i =><Link key={i.slug} to={href(i.slug)}>{i.label}</Link>)}
        </div>
      </div>
    )
  }
  return (
    <div className="h-drop">
      {menu.links.map(l => <Link key={l.slug} to={href(l.slug)}>{l.label}</Link>)}
    </div>
  )
}

export default function HometownHeader() {
  const href = useHref()
  const nav = useNavState()

  return (
    <header className="h-header" ref={nav.ref}>
      <div className="h-ribbon">
        <span>☀ Serving {site.region} since {site.founded}</span>
        <Link to={href('coupons')}>$99 heating tune-up this fall →</Link>
      </div>
      <div className="h-bar">
        <Link to={href('')} className="h-logo" aria-label={`${site.name} home`}>
          <img src="/images/logo.webp" alt="" width="140" height="44" />
        </Link>
        <nav className="h-nav" aria-label="Main">
          {menus.map(m => (
            <div key={m.id} className="h-nav-item">
              <button type="button" aria-expanded={nav.openMenu === m.id} onClick={() => nav.toggleMenu(m.id)}>
                {m.label} <Icon name="chevron" size={14} />
              </button>
              {nav.openMenu === m.id && <Dropdown menu={m} href={href} />}
            </div>
          ))}
          <Link to={href('contact-us')} className="h-nav-link">Contact</Link>
        </nav>
        <div className="h-actions">
          <a href={site.phoneHref} className="h-phone">
            <span>Call a real person</span>
            <strong>{site.phone}</strong>
          </a>
          <Link to={href('request-service')} className="btn btn-primary btn-small">Book a visit</Link>
          <button type="button" className="icon-btn h-burger" onClick={() => nav.setDrawer(true)} aria-label="Open menu"><Icon name="menu" /></button>
        </div>
      </div>
      {nav.drawer && <MobileNav onClose={() => nav.setDrawer(false)} />}
    </header>
  )
}
