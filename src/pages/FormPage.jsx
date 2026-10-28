import PageShell from '../components/PageShell'
import SmartForm from '../components/forms/SmartForm'
import ScrapedCopy from '../components/ScrapedCopy'
import Icon from '../components/Icon'
import { forms } from '../data/forms'
import { formPages } from '../data/formPages'

export default function FormPage({ slug }) {
  const p = formPages[slug]
  return (
    <PageShell eyebrow={p.eyebrow} title={p.title} intro={p.intro}>
      {p.perks && (
        <ul className="perk-row">
          {p.perks.map(t => <li key={t}><Icon name="check" size={16} /> {t}</li>)}
        </ul>
      )}
      <div className="form-card">
        <SmartForm key={slug} fields={forms[p.form]} submitLabel={p.submit} successTitle={p.success} successText={p.successText} />
      </div>
      {p.scraped && <ScrapedCopy slug={slug} filter={b => b.t !== 'h' || !/signing bonus|years of experience/i.test(b.text)} />}
    </PageShell>
  )
}
