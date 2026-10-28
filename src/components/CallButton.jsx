import Icon from './Icon'
import { site } from '../data/site'

export default function CallButton({ className = 'btn btn-primary', emergency, label }) {
  const number = emergency ? site.emergencyPhone : site.phone
  return (
    <a className={className} href={emergency ? site.emergencyHref : site.phoneHref}>
      <Icon name="phone" size={18} />
      <span>{label || number}</span>
    </a>
  )
}
