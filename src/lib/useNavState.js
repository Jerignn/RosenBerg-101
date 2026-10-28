import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Open/close state for a header's dropdowns and mobile drawer.
// Closes on navigation, on Escape and on clicks outside the header.
export default function useNavState() {
  const [openMenu, setOpenMenu] = useState(null)
  const [drawer, setDrawer] = useState(false)
  const ref = useRef(null)
  const { pathname } = useLocation()
  const [lastPath, setLastPath] = useState(pathname)

  // Close everything when the route changes (reset-on-prop-change, done during render).
  if (pathname !== lastPath) {
    setLastPath(pathname)
    setOpenMenu(null)
    setDrawer(false)
  }

  useEffect(() => {
    const onKey = e => { if (e.key === 'Escape') { setOpenMenu(null); setDrawer(false) } }
    const onClick = e => { if (ref.current && !ref.current.contains(e.target)) setOpenMenu(null) }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = drawer ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [drawer])

  const toggleMenu = id => setOpenMenu(cur => (cur === id ? null : id))
  return { ref, openMenu, setOpenMenu, toggleMenu, drawer, setDrawer }
}
