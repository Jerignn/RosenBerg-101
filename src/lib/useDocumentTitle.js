import { useEffect } from 'react'
import { site } from '../data/site'

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | ${site.name}` : `${site.name} | San Antonio Heating, Cooling & Plumbing`
  }, [title])
}
