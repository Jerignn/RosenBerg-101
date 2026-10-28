// One form control, chosen by `field.type`. Shared by every form via SmartForm.
export default function Field({ field, value, error, onChange }) {
  const { name, label, type = 'text', options = [], required, placeholder, hint, full } = field
  const id = `f-${name}`
  const describedBy = error ? `${id}-err` : hint ? `${id}-hint` : undefined
  const common = { id, name, required, 'aria-invalid': Boolean(error), 'aria-describedby': describedBy }

  let control
  if (type === 'textarea') {
    control = <textarea {...common} rows={4} placeholder={placeholder} value={value} onChange={e => onChange(name, e.target.value)} />
  } else if (type === 'select') {
    control = (
      <select {...common} value={value} onChange={e => onChange(name, e.target.value)}>
        <option value="">{placeholder || 'Select one'}</option>
        {options.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    )
  } else if (type === 'radio' || type === 'checkboxes') {
    const multi = type === 'checkboxes'
    const toggle = o => onChange(name, multi ? (value.includes(o) ? value.filter(v => v !== o) : [...value, o]) : o)
    return (
      <fieldset className={`field field-choices${full ? ' field-full' : ''}${error ? ' has-error' : ''}`} aria-describedby={describedBy}>
        <legend>{label}{required && <span className="req" aria-hidden="true"> *</span>}</legend>
        <div className="choices">
          {options.map(o => (
            <label key={o} className={`choice${(multi ? value.includes(o) : value === o) ? ' is-on' : ''}`}>
              <input
                type={multi ? 'checkbox' : 'radio'}
                name={name}
                value={o}
                checked={multi ? value.includes(o) : value === o}
                onChange={() => toggle(o)}
              />
              <span>{o}</span>
            </label>
          ))}
        </div>
        {error && <p className="field-error" id={`${id}-err`}>{error}</p>}
      </fieldset>
    )
  } else if (type === 'consent') {
    return (
      <div className={`field field-full field-consent${error ? ' has-error' : ''}`}>
        <label>
          <input type="checkbox" {...common} checked={value} onChange={e => onChange(name, e.target.checked)} />
          <span>{label}</span>
        </label>
        {error && <p className="field-error" id={`${id}-err`}>{error}</p>}
      </div>
    )
  } else {
    control = <input {...common} type={type} placeholder={placeholder} value={value} onChange={e => onChange(name, e.target.value)} />
  }

  return (
    <div className={`field${full || type === 'textarea' ? ' field-full' : ''}${error ? ' has-error' : ''}`}>
      <label htmlFor={id}>{label}{required && <span className="req" aria-hidden="true"> *</span>}</label>
      {control}
      {hint && !error && <p className="field-hint" id={`${id}-hint`}>{hint}</p>}
      {error && <p className="field-error" id={`${id}-err`}>{error}</p>}
    </div>
  )
}
