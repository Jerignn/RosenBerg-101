import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import OverviewPage from './overview/OverviewPage'
import ControlLayout from './concepts/control/ControlLayout'
import ControlHome from './concepts/control/ControlHome'
import HometownLayout from './concepts/hometown/HometownLayout'
import HometownHome from './concepts/hometown/HometownHome'
import PageRouter from './pages/PageRouter'
import ScrollToTop from './components/ScrollToTop'
import ConceptSwitcher from './components/ConceptSwitcher'

// /           → concept overview
// /design-1/* → Concept A, /design-2/* → Concept B; every live-site slug works under both.
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/design-1" element={<ControlLayout />}>
          <Route index element={<ControlHome />} />
          <Route path=":slug" element={<PageRouter />} />
        </Route>
        <Route path="/design-2" element={<HometownLayout />}>
          <Route index element={<HometownHome />} />
          <Route path=":slug" element={<PageRouter />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <ConceptSwitcher />
    </BrowserRouter>
  )
}
