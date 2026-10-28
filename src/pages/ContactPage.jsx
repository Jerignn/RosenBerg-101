import PageShell from '../components/PageShell'
import SmartForm from '../components/forms/SmartForm'
import Icon from '../components/Icon'
import { forms } from '../data/forms'
import { site } from '../data/site'

export default function ContactPage() {
  const cards = [
    { icon: 'phone', label: 'Call the office', value: site.phone, href: site.phoneHref },
    { icon: 'bolt', label: 'After-hours emergencies', value: site.emergencyPhone, href: site.emergencyHref },
    { icon: 'pin', label: 'Visit', value: `${site.address}, ${site.cityLine}`, href: site.mapHref },
    { icon: 'clock', label: 'Office hours', value: site.hours },
  ]

  return (
    <PageShell eyebrow="Contact us" title="We’re right here in San Antonio." intro={site.promise} sidebar={false}>
      <div className="contact-layout">
        <ul className="contact-cards">
          {cards.map(c => (
            <li key={c.label} className="contact-card">
              <Icon name={c.icon} size={22} />
              <div>
                <span>{c.label}</span>
                {c.href ? <a href={c.href} target={c.icon === 'pin' ? '_blank' : undefined} rel="noreferrer">{c.value}</a> : <strong>{c.value}</strong>}
              </div>
            </li>
          ))}
        </ul>
        <div className="form-card">
          <h2 className="section-title-sm">Send us a message</h2>
          <SmartForm fields={forms.contact} submitLabel="Send message" successTitle="Message received" />
        </div>
      </div>
      <iframe
        className="map-embed"
        title="Map to Rosenberg Plumbing & Air"
        loading="lazy"
        src="https://maps.google.com/maps?q=4335%20Vance%20Jackson%20Road%20San%20Antonio%20TX%2078230&z=13&output=embed"
      />
    </PageShell>
  )
}
