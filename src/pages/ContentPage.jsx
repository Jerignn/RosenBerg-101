import { usePage, useContentIndex } from '../lib/content'
import { classify, cityInSlug, serviceInSlug, relatedLocalPages, formatDate } from '../lib/catalog'
import { groupForSlug, serviceGroups } from '../data/services'
import PageShell from '../components/PageShell'
import ContentBlocks from '../components/ContentBlocks'
import LinkGrid from '../components/LinkGrid'
import CtaBand from '../components/CtaBand'
import { Loading, NotFound } from '../components/StatusMessage'

function describe(entry) {
  const kind = classify(entry)
  const group = groupForSlug(entry.slug) || serviceGroups.find(g => g.id === serviceInSlug(entry.slug)?.group)
  const city = cityInSlug(entry.slug)
  switch (kind) {
    case 'service': return { eyebrow: `${group.label} · San Antonio`, crumbs: [{ label: group.label, slug: group.hub }], group }
    case 'city': return { eyebrow: 'Service area', crumbs: [{ label: 'Service area', slug: 'service-area' }] }
    case 'city-service': return {
      eyebrow: `${serviceInSlug(entry.slug).label} · ${city.label}`,
      crumbs: [{ label: 'Service area', slug: 'service-area' }, { label: city.label, slug: city.slug }],
      group,
    }
    case 'post': return { eyebrow: `Blog${entry.date ? ` · ${formatDate(entry.date)}` : ''}`, crumbs: [{ label: 'Blog', slug: 'blog' }] }
    case 'resource': return { eyebrow: 'Homeowner resources', crumbs: [{ label: 'Blog', slug: 'blog' }] }
    default: return { eyebrow: 'Rosenberg Plumbing & Air', crumbs: [] }
  }
}

// Generic template for any page scraped from the live site (services, cities, posts…).
export default function ContentPage({ slug }) {
  const { data, loading, error } = usePage(slug)
  const { data: index } = useContentIndex()

  if (loading) return <Loading />
  if (error || !data) return <NotFound />

  const info = describe(data)
  const local = index ? relatedLocalPages(index, slug) : []
  const isCity = classify(data) === 'city'
  const recentPosts = data.kind === 'post' && index
    ? index.filter(e => e.kind === 'post' && e.slug !== slug && e.date).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 6)
    : []

  return (
    <PageShell
      eyebrow={info.eyebrow}
      title={data.title}
      intro={data.desc && data.desc.length < 260 ? data.desc : undefined}
      crumbs={info.crumbs}
      sidebarProps={{ group: info.group, current: slug }}
    >
      <ContentBlocks blocks={data.blocks} />
      {isCity && <LinkGrid title="Popular services" links={serviceGroups.map(g => ({ slug: g.hub, label: g.label }))} />}
      <LinkGrid title={isCity ? 'Local pages for this community' : 'Also available near you'} links={local} />
      <LinkGrid title="More from the blog" links={recentPosts} />
      <CtaBand />
    </PageShell>
  )
}
