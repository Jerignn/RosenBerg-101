// Renders every panel in the same grid cell and shows only the active one, so the
// container is always as tall as its tallest panel and never jumps when switching.
// Inactive panels are hidden from assistive tech and unfocusable via `inert`.
export default function StablePanels({ activeKey, panels, className = '', ...rest }) {
  return (
    <div className={`stable-panels ${className}`} {...rest}>
      {panels.map(({ key, content, className: panelClass = '' }) => {
        const active = key === activeKey
        return (
          <div
            key={key}
            className={`stable-panel ${panelClass}${active ? ' is-active' : ''}`}
            aria-hidden={!active}
            inert={!active}
          >
            {content}
          </div>
        )
      })}
    </div>
  )
}
