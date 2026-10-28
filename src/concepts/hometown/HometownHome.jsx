import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useHref } from '../../context/ConceptContext'
import useDocumentTitle from '../../lib/useDocumentTitle'
import { cities } from '../../lib/catalog'
import { site, yearsInBusiness } from '../../data/site'
import { serviceGroups } from '../../data/services'
import { offers, reviews, faqs, timeline } from '../../data/company'
import { forms } from '../../data/forms'
import SymptomFinder from './components/SymptomFinder'
import SeasonPlanner from './components/SeasonPlanner'
import CouponCard from '../../components/CouponCard'
import ReviewCard from '../../components/ReviewCard'
import Accordion from '../../components/Accordion'
import SmartForm from '../../components/forms/SmartForm'
import CallButton from '../../components/CallButton'
import Icon from '../../components/Icon'

export default function HometownHome() {
  const href = useHref()
  const navigate = useNavigate()
  const [town, setTown] = useState('')
  useDocumentTitle()

  const match = town.trim() && cities.find(c => c.label.toLowerCase().startsWith(town.trim().toLowerCase()))

  return (
    <>
      <section className="h-hero">
        <div className="h-hero-copy">
          <p className="h-pill"><Icon name="star" size={14} /> ACCA National Residential Contractor of the Year</p>
          <h1>San Antonio’s been calling us <em>since {site.founded}.</em></h1>
          <p className="lede">Heating, cooling and plumbing from a local, family-serving crew. Upfront pricing, work done right the first time — and a real person every time you call.</p>
          <div className="btn-row">
            <Link to={href('request-service')} className="btn btn-primary">Book a visit</Link>
            <CallButton className="btn btn-ghost" />
          </div>
        </div>
        <div className="h-hero-art">
          <div className="h-arch">
            <img src="/images/van.webp" alt="Rosenberg service van parked at a San Antonio home" width="625" height="380" />
          </div>
          <div className="h-sticker h-sticker-years" aria-hidden="true">
            <strong>{yearsInBusiness}</strong><span>years<br />local</span>
          </div>
          <div className="h-sticker h-sticker-note">
            <Icon name="shield" size={18} /> Licensed HVAC <br />& plumbing
          </div>
        </div>
      </section>

      <section className="h-wrap h-finder-wrap">
        <SymptomFinder />
      </section>

      <section className="h-wrap h-section">
        <div className="h-head">
          <p className="h-pill">What we fix</p>
          <h2>Big jobs, small fixes, and everything between.</h2>
        </div>
        <div className="h-bento">
          {serviceGroups.map(g => (
            <Link key={g.id} to={href(g.hub)} className={`h-tile tint-${g.id}`}>
              <span className="h-tile-icon"><Icon name={g.icon} size={26} /></span>
              <h3>{g.label}</h3>
              <p>{g.blurb}</p>
              <ul>{g.items.slice(0, 4).map(i => <li key={i.slug}>{i.label}</li>)}</ul>
              <span className="h-tile-go">Explore <Icon name="arrow" size={16} /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="h-band">
        <div className="h-wrap h-section">
          <div className="h-head">
            <p className="h-pill">Your year at a glance</p>
            <h2>A little care each season keeps the big bills away.</h2>
          </div>
          <SeasonPlanner />
        </div>
      </section>

      <section className="h-wrap h-section">
        <div className="h-head h-head-row">
          <div>
            <p className="h-pill">Savings</p>
            <h2>Clip-free coupons.</h2>
          </div>
          <Link to={href('coupons')} className="btn btn-ghost btn-small">All {offers.length} offers</Link>
        </div>
        <div className="coupon-grid">
          {offers.slice(0, 3).map(o => (
            <CouponCard key={o.id} offer={o} onClaim={offer => navigate(`${href('request-service')}?offer=${offer.id}`)} />
          ))}
        </div>
        <Link to={href('comfort-club-membership')} className="h-club-strip">
          <img src="/images/comfort-club.webp" alt="" width="64" height="64" />
          <span><strong>Comfort Club members</strong> get two tune-ups a year, priority service and discounted repairs.</span>
          <Icon name="arrow" />
        </Link>
      </section>

      <section className="h-wrap h-section h-story">
        <div className="h-story-photo">
          <img src="/images/team.webp" alt="Members of the Rosenberg Plumbing & Air team" width="500" height="333" loading="lazy" />
        </div>
        <div>
          <p className="h-pill">Our story</p>
          <h2>Forty years of house calls.</h2>
          <ol className="h-mini-timeline">
            {timeline.map(t => <li key={t.year}><strong>{t.year}</strong> {t.text}</li>)}
          </ol>
          <div className="btn-row">
            <Link to={href('our-team')} className="btn btn-primary">Meet the team</Link>
            <Link to={href('join-team')} className="btn btn-ghost">We’re hiring</Link>
          </div>
        </div>
      </section>

      <section className="h-wrap h-section">
        <div className="h-head h-head-row">
          <div>
            <p className="h-pill">From the neighbors</p>
            <h2>Kind words (and one tin of cookies).</h2>
          </div>
          <Link to={href('reviews')} className="btn btn-ghost btn-small">More reviews</Link>
        </div>
        <div className="h-postcards">
          {reviews.map(r => <ReviewCard key={r.name} review={r} />)}
        </div>
      </section>

      <section className="h-wrap h-section h-towns">
        <div>
          <p className="h-pill">Service area</p>
          <h2>Do we come to you?</h2>
          <label className="area-search">
            <Icon name="pin" size={18} />
            <input value={town} onChange={e => setTown(e.target.value)} placeholder="Type your town…" aria-label="Your town" />
          </label>
          <p className="h-town-answer" aria-live="polite">
            {town.trim() && (match
              ? <>Yes! We’re in <Link to={href(match.slug)}>{match.label}</Link> every week.</>
              : <>Not on our list yet — call {site.phone} and we’ll check.</>)}
          </p>
        </div>
        <ul className="h-town-list">
          {cities.map(c => <li key={c.slug}><Link to={href(c.slug)}>{c.label}</Link></li>)}
        </ul>
      </section>

      <section className="h-wrap h-section h-faq">
        <div className="h-head">
          <p className="h-pill">Good questions</p>
          <h2>Things neighbors ask us.</h2>
          <Link to={href('frequently-asked-questions')} className="text-link">See all FAQs <Icon name="arrow" size={14} /></Link>
        </div>
        <Accordion items={faqs.slice(0, 6)} />
      </section>

      <section className="h-wrap h-section h-book" id="book">
        <div className="h-book-side">
          <h2>Let’s get you comfortable.</h2>
          <p>Send a request and the office will call to confirm a time — usually the same business day.</p>
          <ul className="check-list">
            <li><Icon name="check" size={16} /> Upfront pricing before work starts</li>
            <li><Icon name="check" size={16} /> $20 off repairs for new customers</li>
            <li><Icon name="check" size={16} /> 5% military & senior discounts</li>
          </ul>
          <p className="h-hours"><Icon name="clock" size={16} /> {site.hours} · After hours {site.emergencyPhone}</p>
        </div>
        <div className="form-card">
          <SmartForm fields={forms.service} submitLabel="Send my request" />
        </div>
      </section>
    </>
  )
}
