import { useState } from 'react'
import Field from './Field'
import Icon from '../Icon'
import { site } from '../../data/site'

function initialValues(fields, defaults) {
  return Object.fromEntries(
    fields.map(f => [f.name, defaults[f.name] ?? (f.type === 'checkboxes' ? [] : f.type === 'consent' ? false : '')]),
  )
}

function validate(fields, values) {
  const errors = {}
  for (const f of fields) {
    const v = values[f.name]
    const empty = Array.isArray(v) ? v.length === 0 : v === '' || v === false
    if (f.required && empty) errors[f.name] = f.type === 'consent' ? 'Please confirm to continue.' : 'This field is required.'
    else if (!empty && f.type === 'email' && !/^\S+@\S+\.\S+$/.test(v)) errors[f.name] = 'Enter a valid email address.'
    else if (!empty && f.type === 'tel' && v.replace(/\D/g, '').length < 10) errors[f.name] = 'Enter a 10-digit phone number.'
  }
  return errors
}

// Config-driven form. Front-end only: on submit it validates and shows a confirmation —
// nothing is sent anywhere until a real endpoint is wired up.
export default function SmartForm({ fields, submitLabel = 'Send request', successTitle = 'Request received', successText, defaults = {}, compact }) {
  const [values, setValues] = useState(() => initialValues(fields, defaults))
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const onChange = (name, value) => {
    setValues(v => ({ ...v, [name]: value }))
    if (errors[name]) setErrors(e => ({ ...e, [name]: undefined }))
  }

  const onSubmit = e => {
    e.preventDefault()
    const found = validate(fields, values)
    setErrors(found)
    const first = Object.keys(found)[0]
    if (first) {
      const el = document.getElementById(`f-${first}`) || document.querySelector(`[name="${first}"]`)
      el?.focus()
      return
    }
    setSent(true)
  }

  if (sent) {
    const firstName = String(values.name || values.firstName || '').split(' ')[0]
    return (
      <div className="form-success" role="status">
        <span className="form-success-icon"><Icon name="check" size={26} /></span>
        <h3>{successTitle}{firstName ? `, ${firstName}` : ''}.</h3>
        <p>{successText || `A real person from our office will reach out during business hours (${site.hours}). Need help sooner? Call ${site.phone}.`}</p>
        <p className="form-note">Preview site — this form isn’t connected yet, so nothing was actually sent.</p>
        <button type="button" className="btn btn-ghost" onClick={() => { setValues(initialValues(fields, defaults)); setSent(false) }}>
          Start another
        </button>
      </div>
    )
  }

  return (
    <form className={`smart-form${compact ? ' is-compact' : ''}`} onSubmit={onSubmit} noValidate>
      <div className="form-grid">
        {fields.map(f => (
          <Field key={f.name} field={f} value={values[f.name]} error={errors[f.name]} onChange={onChange} />
        ))}
      </div>
      <button type="submit" className="btn btn-primary btn-submit">
        {submitLabel} <Icon name="arrow" size={18} />
      </button>
    </form>
  )
}
