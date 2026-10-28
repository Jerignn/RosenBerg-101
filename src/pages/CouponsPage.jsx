import { useNavigate } from 'react-router-dom'
import PageShell from '../components/PageShell'
import CouponCard from '../components/CouponCard'
import { useHref } from '../context/ConceptContext'
import { offers, offerFinePrint } from '../data/company'

export default function CouponsPage() {
  const navigate = useNavigate()
  const href = useHref()

  return (
    <PageShell
      eyebrow="Savings"
      title="Coupons & specials"
      intro="Print a coupon or claim it online and we’ll apply it at your visit. Competitive pricing, every call."
      sidebar={false}
    >
      <div className="coupon-grid">
        {offers.map(o => (
          <CouponCard key={o.id} offer={o} onClaim={offer => navigate(`${href('request-service')}?offer=${offer.id}`)} />
        ))}
      </div>
      <p className="fine-print">{offerFinePrint} Discounts exclude the service fee unless noted.</p>
    </PageShell>
  )
}
