import { useRef } from 'react'

const MIN = 60
const MAX = 86
const START = 135 // degrees, bottom-left
const SWEEP = 270
const SIZE = 300
const C = SIZE / 2
const R = 120

const toAngle = v => START + ((v - MIN) / (MAX - MIN)) * SWEEP
const point = (deg, r = R) => {
  const rad = (deg * Math.PI) / 180
  return [C + r * Math.cos(rad), C + r * Math.sin(rad)]
}
function arc(from, to) {
  const [x1, y1] = point(from)
  const [x2, y2] = point(to)
  return `M ${x1} ${y1} A ${R} ${R} 0 ${to - from > 180 ? 1 : 0} 1 ${x2} ${y2}`
}

// Draggable, keyboard-accessible thermostat (role="slider").
export default function ThermostatDial({ value, onChange, mode }) {
  const svgRef = useRef(null)

  const fromPointer = e => {
    const box = svgRef.current.getBoundingClientRect()
    const x = ((e.clientX - box.left) / box.width) * SIZE - C
    const y = ((e.clientY - box.top) / box.height) * SIZE - C
    let rel = ((Math.atan2(y, x) * 180) / Math.PI - START + 720) % 360
    if (rel > SWEEP) rel = rel > SWEEP + (360 - SWEEP) / 2 ? 0 : SWEEP
    onChange(Math.round(MIN + (rel / SWEEP) * (MAX - MIN)))
  }

  const onPointerDown = e => {
    e.currentTarget.setPointerCapture(e.pointerId)
    fromPointer(e)
  }
  const onPointerMove = e => {
    if (e.currentTarget.hasPointerCapture(e.pointerId)) fromPointer(e)
  }
  const onKeyDown = e => {
    const step = { ArrowUp: 1, ArrowRight: 1, ArrowDown: -1, ArrowLeft: -1, PageUp: 3, PageDown: -3 }[e.key]
    if (e.key === 'Home') onChange(MIN)
    else if (e.key === 'End') onChange(MAX)
    else if (step) onChange(Math.min(MAX, Math.max(MIN, value + step)))
    else return
    e.preventDefault()
  }

  const angle = toAngle(value)
  const [kx, ky] = point(angle)
  const ticks = Array.from({ length: MAX - MIN + 1 }, (_, i) => MIN + i)

  return (
    <div className={`dial dial-${mode}`}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${SIZE} ${SIZE}`}
        role="slider"
        tabIndex={0}
        aria-label="Thermostat setpoint"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={value}
        aria-valuetext={`${value} degrees, ${mode === 'cool' ? 'cooling' : 'heating'}`}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onKeyDown={onKeyDown}
      >
        {ticks.map(t => {
          const a = toAngle(t)
          const major = t % 5 === 0
          const [x1, y1] = point(a, R + 14)
          const [x2, y2] = point(a, R + (major ? 26 : 20))
          return <line key={t} x1={x1} y1={y1} x2={x2} y2={y2} className={`dial-tick${t <= value ? ' is-on' : ''}${major ? ' is-major' : ''}`} />
        })}
        <path d={arc(START, START + SWEEP)} className="dial-track" />
        <path d={arc(START, Math.max(angle, START + 0.01))} className="dial-fill" />
        <circle cx={kx} cy={ky} r="13" className="dial-knob" />
        <text x={C} y={C - 4} className="dial-value" textAnchor="middle" dominantBaseline="middle">{value}°</text>
        <text x={C} y={C + 46} className="dial-mode" textAnchor="middle">{mode === 'cool' ? 'COOL TO' : 'HEAT TO'}</text>
      </svg>
    </div>
  )
}
