import { createContext, useContext } from 'react'

// Each concept supplies its base path and its own page-hero component, so shared
// pages render inside whichever design the visitor is browsing.
export const ConceptContext = createContext({ base: '', id: '', name: '', PageHero: () => null })

export function useConcept() {
  return useContext(ConceptContext)
}

export function useHref() {
  const { base } = useConcept()
  return slug => (slug ? `${base}/${slug}` : base)
}
