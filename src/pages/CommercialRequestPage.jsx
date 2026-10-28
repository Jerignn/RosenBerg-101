import PageShell from '../components/PageShell'
import SmartForm from '../components/forms/SmartForm'
import { forms } from '../data/forms'
import { serviceGroups } from '../data/services'

const modes = {
  request: {
    eyebrow: 'Commercial',
    title: 'Commercial service request',
    intro: 'Rooftop units, split systems and maintenance agreements for San Antonio businesses. First-time commercial customers save $50.',
    fields: forms.commercial,
    submit: 'Submit request',
    success: 'Request received',
  },
  credit: {
    eyebrow: 'Commercial',
    title: 'Commercial application for credit',
    intro: 'Open a commercial account with net terms. Complete the application below and our accounting team will follow up.',
    fields: forms.credit,
    submit: 'Submit application',
    success: 'Application received',
  },
}

export default function CommercialRequestPage({ mode = 'request' }) {
  const m = modes[mode]
  return (
    <PageShell
      eyebrow={m.eyebrow}
      title={m.title}
      intro={m.intro}
      crumbs={[{ label: 'Commercial', slug: 'commercial-services' }]}
      sidebarProps={{ group: serviceGroups.find(g => g.id === 'commercial'), current: mode === 'credit' ? 'cac' : 'commercial-request' }}
    >
      <div className="form-card">
        <SmartForm key={mode} fields={m.fields} submitLabel={m.submit} successTitle={m.success} />
      </div>
    </PageShell>
  )
}
