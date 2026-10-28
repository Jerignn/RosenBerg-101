import { useState } from 'react'
import { reviews } from '../../../data/company'
import Icon from '../../../components/Icon'
import StablePanels from '../../../components/StablePanels'

export default function ReviewTicker() {
  const [i, setI] = useState(0)
  const go = d => setI((i + d + reviews.length) % reviews.length)

  return (
    <div className="ticker">
      <p className="mono ticker-count">REVIEW {String(i + 1).padStart(2, '0')} / {String(reviews.length).padStart(2, '0')}</p>
      <StablePanels
        activeKey={i}
        panels={reviews.map((r, n) => ({
          key: n,
          content: (
            <>
              <blockquote>“{r.text}”</blockquote>
              <div><strong>{r.name}</strong><span className="mono"> · {r.service}</span></div>
            </>
          ),
        }))}
      />
      <p className="sr-only" aria-live="polite">Review {i + 1} of {reviews.length}, from {reviews[i].name}</p>
      <div className="ticker-ctrl">
        <button type="button" className="icon-btn" onClick={() => go(-1)} aria-label="Previous review"><Icon name="arrow" className="flip" /></button>
        <button type="button" className="icon-btn" onClick={() => go(1)} aria-label="Next review"><Icon name="arrow" /></button>
      </div>
    </div>
  )
}
