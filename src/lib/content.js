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
  const [state, setState] = useState({ data: null, error: null, loading: Boolean(path) })

  useEffect(() => {
    if (!path) return
    let alive = true
    setState({ data: null, error: null, loading: true })
    load(path)
      .then(data => alive && setState({ data, error: null, loading: false }))
      .catch(error => {
        cache.delete(path)
        if (alive) setState({ data: null, error, loading: false })
      })
    return () => { alive = false }
  }, [path])

  return state
}

export const usePage = slug => useJson(slug ? `/content/${slug}.json` : null)
export const useContentIndex = () => useJson('/content/_index.json')
