import Icon from './Icon'
import { site } from '../data/site'
import { offerFinePrint } from '../data/company'

function printCoupon(offer) {
  const w = window.open('', '_blank', 'width=520,height=420')
  if (!w) return window.print()
  w.document.write(`<!doctype html><title>${offer.amount} ${offer.title}</title>
    <body style="font-family:system-ui,sans-serif;padding:32px">
    <div style="border:2px dashed #333;padding:28px;border-radius:12px;text-align:center">
    <p style="letter-spacing:.2em;font-size:12px;margin:0">${site.name.toUpperCase()}</p>
    <h1 style="font-size:44px;margin:12px 0 4px">${offer.amount}</h1>
    <h2 style="margin:0 0 12px">${offer.title}</h2>
    <p>${offer.detail}</p><p style="font-size:12px;color:#555">${offerFinePrint} Present at time of service.</p>
    <p style="font-weight:700">${site.phone} · RosenbergHVAC.com</p></div>
    <script>window.onload=()=>{window.print()}</script></body>`)
  w.document.close()
}

export default function CouponCard({ offer, onClaim }) {
  return (
    <article className="coupon">
      <div className="coupon-value">
        <span className="coupon-tag">{offer.tag}</span>
        <strong>{offer.amount}</strong>
      </div>
      <div className="coupon-body">
        <h3>{offer.title}</h3>
        <p>{offer.detail}</p>
        <div className="coupon-actions">
          <button type="button" className="btn btn-small btn-ghost" onClick={() => printCoupon(offer)}>
            <Icon name="print" size={16} /> Print
          </button>
          {onClaim && (
            <button type="button" className="btn btn-small btn-primary" onClick={() => onClaim(offer)}>
              Claim offer
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
