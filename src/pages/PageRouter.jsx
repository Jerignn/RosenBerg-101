import { useParams } from 'react-router-dom'
import ContentPage from './ContentPage'
import RequestPage from './RequestPage'
import ContactPage from './ContactPage'
import CommercialRequestPage from './CommercialRequestPage'
import CouponsPage from './CouponsPage'
import ComfortClubPage from './ComfortClubPage'
import FinancingPage from './FinancingPage'
import FormPage from './FormPage'
import { formPages } from '../data/formPages'
import TeamPage from './TeamPage'
import ReviewsPage from './ReviewsPage'
import FaqPage from './FaqPage'
import ServiceAreaPage from './ServiceAreaPage'
import BlogPage from './BlogPage'
import GalleryPage from './GalleryPage'
import VideoLibraryPage from './VideoLibraryPage'
import ProjectsPage from './ProjectsPage'
import BrandProductsPage from './BrandProductsPage'
import SitemapPage from './SitemapPage'

// Live-site URL slug → hand-built page. Anything else falls through to ContentPage.
const custom = {
  'request-service': () => <RequestPage variant="service" />,
  'request-estimate': () => <RequestPage variant="estimate" />,
  'contact-us': ContactPage,
  'commercial-request': () => <CommercialRequestPage mode="request" />,
  cac: () => <CommercialRequestPage mode="credit" />,
  coupons: CouponsPage,
  'comfort-club-membership': ComfortClubPage,
  financing: FinancingPage,
  'our-team': TeamPage,
  reviews: ReviewsPage,
  'frequently-asked-questions': FaqPage,
  'service-area': ServiceAreaPage,
  blog: BlogPage,
  'photo-gallery': GalleryPage,
  'video-library': VideoLibraryPage,
  'completed-projects': ProjectsPage,
  'american-standard-products': BrandProductsPage,
  sitemap: SitemapPage,
}

export default function PageRouter() {
  const { slug } = useParams()
  if (formPages[slug]) return <FormPage key={slug} slug={slug} />
  const Page = custom[slug]
  return Page ? <Page key={slug} /> : <ContentPage key={slug} slug={slug} />
}
