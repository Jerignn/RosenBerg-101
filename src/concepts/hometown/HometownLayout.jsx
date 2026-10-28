import { Outlet } from 'react-router-dom'
import { ConceptContext } from '../../context/ConceptContext'
import HometownHeader from './HometownHeader'
import HometownFooter from './HometownFooter'
import HometownPageHero from './HometownPageHero'
import StickyCallBar from '../../components/StickyCallBar'
import './hometown.css'

const concept = { base: '/design-2', id: 'hometown', name: 'Hometown Sun', PageHero: HometownPageHero }

export default function HometownLayout() {
  return (
    <ConceptContext.Provider value={concept}>
      <div className="concept concept-hometown">
        <a href="#main" className="skip-link">Skip to content</a>
        <HometownHeader />
        <main id="main">
          <Outlet />
        </main>
        <HometownFooter />
        <StickyCallBar />
      </div>
    </ConceptContext.Provider>
  )
}
