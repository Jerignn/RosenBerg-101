import { useId, useState } from 'react'
import Icon from './Icon'

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()

  return (
    <div className="accordion">
      {items.map(([q, a], i) => {
        const isOpen = open === i
        return (
          <div className={`accordion-item${isOpen ? ' is-open' : ''}`} key={q}>
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span>{q}</span>
                <Icon name={isOpen ? 'minus' : 'plus'} size={18} />
              </button>
            </h3>
            <div id={`${id}-${i}`} className="accordion-panel" hidden={!isOpen}>
              <p>{a}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
