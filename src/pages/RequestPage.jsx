import { useSearchParams } from 'react-router-dom'
import PageShell from '../components/PageShell'
import SmartForm from '../components/forms/SmartForm'
import { forms } from '../data/forms'
import { offers } from '../data/company'
import { site } from '../data/site'

const variants = {
  service: {
    eyebrow: 'Request service',
    title: 'Tell us what’s going on.',
    intro: `Send a request and our office will call to confirm a time. For emergencies outside ${site.hours}, call ${site.emergencyPhone}.`,
    fields: forms.service,
    submit: 'Request service',
  },
  estimate: {
    eyebrow: 'Free estimate',
    title: 'Get a replacement estimate.',
    intro: 'A comfort advisor will look at your home, explain options from trusted brands, and give you upfront pricing — plus current rebates and financing.',
    fields: forms.estimate,
    submit: 'Request estimate',
  },
}

export default function RequestPage({ variant = 'service' }) {
  const v = variants[variant]
  const [params] = useSearchParams()
  const offer = offers.find(o => o.id === params.get('offer'))

  return (
    <PageShell eyebrow={v.eyebrow} title={v.title} intro={v.intro}>
      {offer && (
        <p className="notice">
          Claiming: <strong>{offer.amount} — {offer.title}</strong>. We’ll apply it at your visit.
        </p>
      )}
      <div className="form-card">
        <SmartForm
          key={variant}
          fields={v.fields}
          submitLabel={v.submit}
          defaults={offer ? { message: `Claiming offer: ${offer.amount} ${offer.title}` } : {}}
        />
      </div>
    </PageShell>
  )
}
