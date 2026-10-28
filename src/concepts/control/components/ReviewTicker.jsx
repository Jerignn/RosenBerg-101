import { useState } from 'react'
import { reviews } from '../../../data/company'
import Icon from '../../../components/Icon'

export default function ReviewTicker() {
  const [i, setI] = useState(0)
  const r = reviews[i]
  const go = d => setI((i + d + reviews.length) % reviews.length)

  return (
    <div className="ticker">
      <p className="mono ticker-count">REVIEW {String(i + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</p>
      <blockquote aria-live="polite">“{r.text}”</blockquote>
      <div className="ticker-foot">
        <div><strong>{r.name}</strong><span className="mono"> · {r.service}</span></div>
        <div className="ticker-ctrl">
          <button type="button" className="icon-btn" onClick={() => go(-1)} aria-label="Previous review"><Icon name="arrow" className="flip" /></button>
          <button type="button" className="icon-btn" onClick={() => go(1)} aria-label="Next review"><Icon name="arrow" /></button>
        </div>
      </div>
    </div>
  )
}
