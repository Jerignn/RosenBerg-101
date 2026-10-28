import { useConcept } from '../context/ConceptContext'
import useDocumentTitle from '../lib/useDocumentTitle'
import Sidebar from './Sidebar'

// Frame for every inner page: the concept's own hero, then content (+ optional sidebar).
export default function PageShell({ eyebrow, title, intro, crumbs = [], sidebar = true, sidebarProps, wide, children }) {
  const { PageHero } = useConcept()
  useDocumentTitle(title)

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} crumbs={crumbs} />
      <div className={`page-body${sidebar ? ' has-sidebar' : ''}${wide ? ' is-wide' : ''}`}>
        <div className="page-main">{children}</div>
        {sidebar && <Sidebar {...sidebarProps} />}
      </div>
    </>
  )
}
