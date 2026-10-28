import { allServiceSlugs, serviceKeywords } from '../data/services'
import { aboutLinks, legalLinks, resourceLinks, savingsLinks } from '../data/company'

// Every community on the live Service Area page. `match` lists the spellings used in
// city-specific URLs (the live site has a few typos, e.g. "terrel-hills").
export const cities = [
  { slug: 'adkins', label: 'Adkins' },
  { slug: 'alamo-heights', label: 'Alamo Heights' },
  { slug: 'balcones-heights', label: 'Balcones Heights' },
  { slug: 'boerne', label: 'Boerne' },
  { slug: 'castle-hills', label: 'Castle Hills' },
  { slug: 'cibolo', label: 'Cibolo' },
  { slug: 'converse', label: 'Converse' },
  { slug: 'elmendorf', label: 'Elmendorf' },
  { slug: 'fair-oaks-ranch', label: 'Fair Oaks Ranch' },
  { slug: 'grey-forest', label: 'Grey Forest' },
  { slug: 'helotes', label: 'Helotes' },
  { slug: 'hill-country-village', label: 'Hill Country Village' },
  { slug: 'hollywood-park', label: 'Hollywood Park' },
  { slug: 'kirby', label: 'Kirby' },
  { slug: 'lackland-afb', label: 'Lackland AFB' },
  { slug: 'leon-springs', label: 'Leon Springs' },
  { slug: 'leon-valley', label: 'Leon Valley' },
  { slug: 'live-oak', label: 'Live Oak' },
  { slug: 'olmos-park', label: 'Olmos Park' },
  { slug: 'randolph-afb', label: 'Randolph AFB' },
  { slug: 'san-antonio', label: 'San Antonio' },
  { slug: 'sandy-oaks', label: 'Sandy Oaks' },
  { slug: 'schertz', label: 'Schertz' },
  { slug: 'selma', label: 'Selma' },
  { slug: 'shavano-park', label: 'Shavano Park', match: ['shavano'] },
  { slug: 'somerset', label: 'Somerset' },
  { slug: 'st-hedwig', label: 'St. Hedwig' },
  { slug: 'terrell-hills', label: 'Terrell Hills', match: ['terrel-hills'] },
  { slug: 'universal-city', label: 'Universal City' },
  { slug: 'von-ormy', label: 'Von Ormy' },
  { slug: 'windcrest', label: 'Windcrest' },
]
const citySlugs = new Set(cities.map(c => c.slug))

export function cityInSlug(slug) {
  if (slug === 'san-antonio') return cities.find(c => c.slug === 'san-antonio')
  return cities.find(c =>
    c.slug !== 'san-antonio' && [c.slug, ...(c.match || [])].some(m => slug.includes(m)),
  )
}

export function serviceInSlug(slug) {
  return serviceKeywords.find(k => slug.includes(k.key))
}

const menuSlugs = slugs => new Set(slugs.map(l => l.slug))
const resourceSet = menuSlugs(resourceLinks)
const companySet = menuSlugs([...aboutLinks, ...savingsLinks])
const legalSet = menuSlugs(legalLinks)

// Groups an index entry so the sitemap and related-link widgets can organise 500 pages.
export function classify(entry) {
  const { slug, kind } = entry
  if (kind === 'post') return resourceSet.has(slug) ? 'resource' : 'post'
  if (citySlugs.has(slug)) return 'city'
  if (allServiceSlugs.has(slug)) return 'service'
  if (legalSet.has(slug)) return 'legal'
  if (companySet.has(slug)) return 'company'
  if (resourceSet.has(slug)) return 'resource'
  if (cityInSlug(slug) && serviceInSlug(slug)) return 'city-service'
  return 'company'
}

export const sectionLabels = {
  service: 'Services',
  city: 'Communities we serve',
  'city-service': 'Local service pages',
  company: 'Company & savings',
  resource: 'Homeowner resources',
  post: 'Blog',
  legal: 'Legal',
}

// City variants of a service page, or service pages for a city.
export function relatedLocalPages(index, slug) {
  const city = citySlugs.has(slug) ? cities.find(c => c.slug === slug) : null
  if (city) {
    return index.filter(e => e.kind === 'page' && e.slug !== slug && classify(e) === 'city-service' && cityInSlug(e.slug)?.slug === city.slug)
  }
  const service = serviceInSlug(slug)
  if (!service) return []
  return index.filter(e => e.kind === 'page' && e.slug !== slug && classify(e) === 'city-service' && serviceInSlug(e.slug)?.key === service.key)
}

export function formatDate(iso) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
