import PageShell from '../components/PageShell'
import ReviewCard from '../components/ReviewCard'
import ScrapedCopy from '../components/ScrapedCopy'
import SmartForm from '../components/forms/SmartForm'
import { forms } from '../data/forms'
import { reviews, reviewSites } from '../data/company'

export default function ReviewsPage() {
  return (
    <PageShell eyebrow="Reviews" title="Neighbors talk. Here’s what they say." intro="A decade-plus of satisfied customers across San Antonio. Had a great visit? We’d love to hear about it." crumbs={[{ label: 'About', slug: 'choose-us' }]}>
      <div className="review-grid">
        {reviews.map(r => <ReviewCard key={r.name} review={r} />)}
      </div>

      <section className="review-sites">
        <h2 className="section-title-sm">Leave us a review</h2>
        <div className="btn-row">
          {reviewSites.map(s => (
            <a key={s.label} className="btn btn-ghost" href={s.href} target="_blank" rel="noreferrer">{s.label}</a>
          ))}
        </div>
      </section>

      <div className="form-card">
        <h2 className="section-title-sm">Or write one here</h2>
        <SmartForm fields={forms.review} submitLabel="Post review" successTitle="Thanks for the review" successText="We read every one, and we’ll pass your kind words on to the crew." />
      </div>

      <h2 className="section-title-sm">More testimonials</h2>
      <ScrapedCopy slug="reviews" filter={b => !/choose one of these review sites/i.test(b.text || '')} />
    </PageShell>
  )
}
