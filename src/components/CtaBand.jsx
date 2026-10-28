import { Link } from 'react-router-dom'
import { useHref } from '../context/ConceptContext'
import CallButton from './CallButton'

export default function CtaBand({ title = 'Ready when you are.', text = 'Upfront pricing, and you’ll always talk to a real person.' }) {
  const href = useHref()
  return (
    <section className="cta-band">
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="btn-row">
        <CallButton />
        <Link className="btn btn-ghost" to={href('request-service')}>Request service</Link>
      </div>
    </section>
  )
}
