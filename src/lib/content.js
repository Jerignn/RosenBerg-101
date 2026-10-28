import { useEffect, useState } from 'react'

// Page copy lives in /public/content/<slug>.json (scraped from the live site),
// fetched on demand so the bundle stays small. Responses are cached per session.
const cache = new Map()

function load(path) {
  if (!cache.has(path)) {
    cache.set(
      path,
      fetch(path).then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        // Vite's dev server answers unknown paths with index.html, so check the type too.
        if (!res.headers.get('content-type')?.includes('json')) throw new Error('Not found')
        return res.json()
      }),
    )
  }
  return cache.get(path)
}

function useJson(path) {
  // Results are tagged with their path, so a stale result never shows for a new path.
  const [state, setState] = useState({ path: null, data: null, error: null })

  useEffect(() => {
    if (!path) return
    let alive = true
    load(path)
      .then(data => alive && setState({ path, data, error: null }))
      .catch(error => {
        cache.delete(path)
        if (alive) setState({ path, data: null, error })
      })
    return () => { alive = false }
  }, [path])

  const current = state.path === path
  return {
    data: current ? state.data : null,
    error: current ? state.error : null,
    loading: Boolean(path) && !current,
  }
}

export const usePage = slug => useJson(slug ? `/content/${slug}.json` : null)
export const useContentIndex = () => useJson('/content/_index.json')
