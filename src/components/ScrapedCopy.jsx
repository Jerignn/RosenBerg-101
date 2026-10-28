import { usePage } from '../lib/content'
import ContentBlocks from './ContentBlocks'

// Drops the live site's own copy for `slug` into a hand-built page (renders nothing if absent).
export default function ScrapedCopy({ slug, limit, filter }) {
  const { data } = usePage(slug)
  if (!data?.blocks?.length) return null
  let blocks = filter ? data.blocks.filter(filter) : data.blocks
  if (limit) blocks = blocks.slice(0, limit)
  return <ContentBlocks blocks={blocks} />
}
