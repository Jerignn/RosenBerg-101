import { Link } from 'react-router-dom'
import { useHref } from '../context/ConceptContext'
import useDocumentTitle from '../lib/useDocumentTitle'

export function Loading() {
  return (
    <div className="status-msg" role="status" aria-live="polite">
      <span className="spinner" aria-hidden="true" />
      Loading…
    </div>
  )
}

export function NotFound() {
  const href = useHref()
  useDocumentTitle('Page not found')
  return (
    <div className="status-msg status-404">
      <p className="eyebrow">404</p>
      <h1>We couldn’t find that page.</h1>
      <p>It may have moved. Try the sitemap or head back home.</p>
      <div className="btn-row">
        <Link className="btn btn-primary" to={href('')}>Home</Link>
        <Link className="btn btn-ghost" to={href('sitemap')}>Sitemap</Link>
      </div>
    </div>
  )
}
