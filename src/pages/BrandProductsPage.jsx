import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import { useHref } from '../context/ConceptContext'

const lines = [
  { name: 'Air conditioners', note: 'Single-stage, two-stage and variable-speed AC with SEER2 ratings for Texas summers.' },
  { name: 'Heat pumps', note: 'Efficient year-round heating and cooling in one outdoor unit.' },
  { name: 'Gas furnaces', note: 'Quiet, modulating furnaces for the handful of cold San Antonio nights.' },
  { name: 'Air handlers', note: 'Matched indoor units with variable-speed blowers for even airflow.' },
  { name: 'Ductless systems', note: 'Single and multi-zone mini splits for additions, garages and hard-to-cool rooms.' },
  { name: 'Thermostats & controls', note: 'Smart, communicating controls for comfort and efficiency.' },
  { name: 'Indoor air quality', note: 'Filtration, UV and humidity control that pairs with your system.' },
]

export default function BrandProductsPage() {
  const href = useHref()
  return (
    <PageShell eyebrow="Equipment" title="American Standard products" intro="We install and service American Standard heating and cooling equipment alongside Lennox — and help you choose the right fit, not the biggest ticket." crumbs={[{ label: 'More services', slug: 'emergency-service-san-antonio-tx' }]}>
      <ul className="product-grid">
        {lines.map(l => (
          <li key={l.name} className="product-card">
            <h3>{l.name}</h3>
            <p>{l.note}</p>
          </li>
        ))}
      </ul>
      <div className="btn-row">
        <Link className="btn btn-primary" to={href('request-estimate')}>Get a free estimate</Link>
        <Link className="btn btn-ghost" to={href('financing')}>Financing options</Link>
      </div>
    </PageShell>
  )
}
