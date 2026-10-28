import { Outlet } from 'react-router-dom'
import { ConceptContext } from '../../context/ConceptContext'
import ControlHeader from './ControlHeader'
import ControlFooter from './ControlFooter'
import ControlPageHero from './ControlPageHero'
import StickyCallBar from '../../components/StickyCallBar'
import './control.css'

const concept = { base: '/design-1', id: 'control', name: 'Comfort Control', PageHero: ControlPageHero }

export default function ControlLayout() {
  return (
    <ConceptContext.Provider value={concept}>
      <div className="concept concept-control">
        <a href="#main" className="skip-link">Skip to content</a>
        <ControlHeader />
        <main id="main">
          <Outlet />
        </main>
        <ControlFooter />
        <StickyCallBar />
      </div>
    </ConceptContext.Provider>
  )
}
