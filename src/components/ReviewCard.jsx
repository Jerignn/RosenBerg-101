import Icon from './Icon'

export default function ReviewCard({ review }) {
  return (
    <figure className="review-card">
      <div className="review-stars" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, i) => <Icon key={i} name="star" size={16} />)}
      </div>
      <blockquote>“{review.text}”</blockquote>
      <figcaption>
        <strong>{review.name}</strong>
        <span>{review.service}</span>
      </figcaption>
    </figure>
  )
}
