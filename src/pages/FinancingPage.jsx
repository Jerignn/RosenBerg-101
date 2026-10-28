import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell from '../components/PageShell'
import Icon from '../components/Icon'
import { useHref } from '../context/ConceptContext'

const terms = [36, 60, 84, 120]
const money = n => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

// Standard amortized payment; 0% APR divides evenly.
function monthly(amount, apr, months) {
  const r = apr / 100 / 12
  return r === 0 ? amount / months : (amount * r) / (1 - (1 + r) ** -months)
}

export default function FinancingPage() {
  const href = useHref()
  const [amount, setAmount] = useState(9500)
  const [apr, setApr] = useState(9.99)
  const [months, setMonths] = useState(84)
  const payment = monthly(amount, apr, months)

  return (
    <PageShell
      eyebrow="Financing"
      title="Comfort now. Easy payments over time."
      intro="Financing through Service Finance Company, LLC — a nationally licensed lender and approved FHA Title I lender — with flexible promotions and fast credit decisions."
      crumbs={[{ label: 'Savings', slug: 'coupons' }]}
    >
      <section className="calc">
        <h2 className="section-title-sm">Estimate your monthly payment</h2>
        <div className="calc-grid">
          <label className="field">
            <span>Project cost: <strong>{money(amount)}</strong></span>
            <input type="range" min="2000" max="30000" step="250" value={amount} onChange={e => setAmount(+e.target.value)} />
          </label>
          <label className="field">
            <span>APR: <strong>{apr}%</strong></span>
            <input type="range" min="0" max="17.99" step="0.5" value={apr} onChange={e => setApr(+e.target.value)} />
          </label>
          <div className="field">
            <span>Term</span>
            <div className="choices">
              {terms.map(t => (
                <button type="button" key={t} className={`choice${months === t ? ' is-on' : ''}`} aria-pressed={months === t} onClick={() => setMonths(t)}>
                  {t} mo
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="calc-result" aria-live="polite">
          About <strong>{money(payment)}</strong>/month for {months} months
        </p>
        <p className="fine-print">Estimate only. Actual rates and terms depend on credit approval through Service Finance Company, LLC.</p>
      </section>

      <ul className="check-list">
        {['Flexible promotions and competitive interest rates', 'Fast credit decisions and funding', 'Credit lines customers can handle', 'High-quality, friendly service'].map(t => (
          <li key={t}><Icon name="check" size={16} /> {t}</li>
        ))}
      </ul>
      <div className="btn-row">
        <a className="btn btn-primary" href="https://www.svcfin.com/" target="_blank" rel="noreferrer">Apply with Service Finance</a>
        <Link className="btn btn-ghost" to={href('request-estimate')}>Get a free estimate</Link>
      </div>
    </PageShell>
  )
}
