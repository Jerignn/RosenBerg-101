import { Link } from 'react-router-dom'
import { useHref } from '../context/ConceptContext'
import { site } from '../data/site'
import Icon from './Icon'

// Phone-only bottom bar: call or book in one tap.
export default function StickyCallBar() {
  const href = useHref()
  return (
    <div className="sticky-callbar">
      <a href={site.phoneHref}><Icon name="phone" size={18} /> Call now</a>
      <Link to={href('request-service')}><Icon name="clock" size={18} /> Book online</Link>
    </div>
  )
}
