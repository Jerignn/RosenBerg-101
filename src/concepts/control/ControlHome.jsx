import { Link, useNavigate } from 'react-router-dom'
import { useHref } from '../../context/ConceptContext'
import useDocumentTitle from '../../lib/useDocumentTitle'
import { cities } from '../../lib/catalog'
import { site, yearsInBusiness } from '../../data/site'
import { offers, faqs, comfortClub } from '../../data/company'
import { forms } from '../../data/forms'
import ComfortConsole from './components/ComfortConsole'
import ServiceZones from './components/ServiceZones'
import ReviewTicker from './components/ReviewTicker'
import CouponCard from '../../components/CouponCard'
import Accordion from '../../components/Accordion'
import SmartForm from '../../components/forms/SmartForm'
import CallButton from '../../components/CallButton'
import Icon from '../../components/Icon'

const specs = [
  ['Pricing', 'Upfront, agreed before any work starts'],
  ['Phones', 'Answered by a real person — never a phone tree'],
  ['Tune-ups', '1 to 1½ hours on your system, with a written report'],
  ['Warranty', 'One year on repair parts & labor for Comfort Club members'],
  ['Licensed', site.licenses.map(l => l.split(' · ')[0]).join(' · ')],
  ['Recognized', site.award],
]

export default function ControlHome() {
  const href = useHref()
  const navigate = useNavigate()
  useDocumentTitle()

  const stats = [
    { value: `${yearsInBusiness}`, unit: 'yrs', label: `Serving San Antonio since ${site.founded}` },
    { value: `${cities.length}`, unit: '', label: 'Communities on our routes' },
    { value: '$99', unit: '', label: 'Seasonal heating tune-up' },
    { value: '2021', unit: '', label: 'ACCA Contractor of the Year' },
  ]

  return (
    <>
      <section className="c-hero">
        <div className="c-hero-copy">
          <p className="eyebrow mono">EST. {site.founded} · SAN ANTONIO, TX</p>
          <h1>Comfort,<br /><span className="grad">dialed in.</span></h1>
          <p className="lede">Award-winning heating, cooling and plumbing for San Antonio homes and businesses. {site.promise}</p>
          <div className="btn-row">
            <Link to={href('request-service')} className="btn btn-primary">Request service <Icon name="arrow" size={18} /></Link>
            <CallButton className="btn btn-ghost" />
          </div>
          <ul className="c-hero-proof mono">
            <li><Icon name="shield" size={16} /> Licensed HVAC & plumbing</li>
            <li><Icon name="star" size={16} /> ACCA national award</li>
            <li><Icon name="clock" size={16} /> After-hours line</li>
          </ul>
        </div>
        <ComfortConsole />
      </section>

      <section className="c-stats" aria-label="At a glance">
        {stats.map(s => (
          <div key={s.label} className="c-stat">
            <strong>{s.value}<small>{s.unit}</small></strong>
            <span>{s.label}</span>
          </div>
        ))}
      </section>

      <section className="c-section" id="services">
        <header className="c-section-head">
          <p className="eyebrow mono">01 — Services</p>
          <h2>One crew for every system in the house.</h2>
        </header>
        <ServiceZones />
      </section>

      <section className="c-section" id="offers">
        <header className="c-section-head c-section-head-row">
          <div>
            <p className="eyebrow mono">02 — Savings</p>
            <h2>Current offers.</h2>
          </div>
          <Link to={href('coupons')} className="btn btn-ghost btn-small">All coupons <Icon name="arrow" size={14} /></Link>
        </header>
        <div className="c-offer-rail">
          {offers.slice(0, 4).map(o => (
            <CouponCard key={o.id} offer={o} onClaim={offer => navigate(`${href('request-service')}?offer=${offer.id}`)} />
          ))}
        </div>
      </section>

      <section className="c-section c-club">
        <div className="member-card" aria-hidden="true">
          <img src="/images/comfort-club.webp" alt="" width="64" height="64" />
          <span className="mono">COMFORT CLUB</span>
          <strong>PRIORITY MEMBER</strong>
          <span className="mono member-no">RPA · 2026 · 0001</span>
        </div>
        <div>
          <p className="eyebrow mono">03 — Membership</p>
          <h2>Two tune-ups a year. Front of the line when it’s 104°.</h2>
          <ul className="check-list cols-2">
            {comfortClub.benefits.slice(0, 8).map(b => <li key={b}><Icon name="check" size={16} /> {b}</li>)}
          </ul>
          <div className="btn-row">
            <Link to={href('comfort-club-membership')} className="btn btn-primary">Explore the Comfort Club</Link>
            <Link to={href('financing')} className="btn btn-ghost">Financing</Link>
          </div>
        </div>
      </section>

      <section className="c-section c-spec">
        <header className="c-section-head">
          <p className="eyebrow mono">04 — Spec sheet</p>
          <h2>How we work, in writing.</h2>
        </header>
        <dl className="spec-table">
          {specs.map(([k, v]) => <div key={k}><dt className="mono">{k}</dt><dd>{v}</dd></div>)}
        </dl>
        <Link to={href('choose-us')} className="text-link">Why choose Rosenberg <Icon name="arrow" size={14} /></Link>
      </section>

      <section className="c-section c-reviews">
        <p className="eyebrow mono">05 — Customers</p>
        <ReviewTicker />
        <div className="btn-row">
          <Link to={href('reviews')} className="btn btn-ghost btn-small">Read more reviews</Link>
          <Link to={href('refer-friend')} className="btn btn-ghost btn-small">Refer a friend — earn up to $100</Link>
        </div>
      </section>

      <section className="c-section c-area">
        <header className="c-section-head c-section-head-row">
          <div>
            <p className="eyebrow mono">06 — Coverage</p>
            <h2>On the map across greater San Antonio.</h2>
          </div>
          <Link to={href('service-area')} className="btn btn-ghost btn-small">Service area <Icon name="arrow" size={14} /></Link>
        </header>
        <ul className="chip-cloud">
          {cities.map(c => <li key={c.slug}><Link to={href(c.slug)}>{c.label}</Link></li>)}
        </ul>
      </section>

      <section className="c-section c-faq">
        <header className="c-section-head">
          <p className="eyebrow mono">07 — FAQ</p>
          <h2>Quick answers.</h2>
          <Link to={href('frequently-asked-questions')} className="text-link">All questions <Icon name="arrow" size={14} /></Link>
        </header>
        <Accordion items={faqs.slice(0, 5)} />
      </section>

      <section className="c-section c-dispatch" id="book">
        <div>
          <p className="eyebrow mono">08 — Dispatch</p>
          <h2>Need us today?</h2>
          <p className="lede">Leave a number and the office calls you back during business hours. Evenings and weekends, emergencies go to {site.emergencyPhone}.</p>
          <ul className="dispatch-info mono">
            <li><Icon name="phone" size={16} /> <a href={site.phoneHref}>{site.phone}</a></li>
            <li><Icon name="bolt" size={16} /> <a href={site.emergencyHref}>{site.emergencyPhone}</a> after hours</li>
            <li><Icon name="pin" size={16} /> {site.address}, {site.cityLine}</li>
          </ul>
        </div>
        <div className="form-card">
          <SmartForm fields={forms.quick} submitLabel="Call me back" successTitle="Got it" compact />
        </div>
      </section>
    </>
  )
}
