import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useHref } from '../../../context/ConceptContext'
import ThermostatDial from './ThermostatDial'
import Icon from '../../../components/Icon'
import StablePanels from '../../../components/StablePanels'

const seasons = {
  summer: { label: 'July afternoon', outdoor: 98, mode: 'cool', start: 76 },
  winter: { label: 'January night', outdoor: 34, mode: 'heat', start: 68 },
}

// Turns a setpoint into plain-language advice and the right service page.
function advise(season, t) {
  if (season === 'summer') {
    if (t <= 71) return { id: 'summer-low', tone: 'warn', title: 'That’s a heavy load in Texas heat.', text: `Holding ${t}° against a 98° afternoon keeps the compressor running nonstop. A precision tune-up makes sure it can take it.`, cta: 'Book an AC tune-up', slug: 'ac-maintenance-san-antonio-tx' }
    if (t <= 78) return { id: 'summer-mid', tone: 'good', title: 'Comfortable and efficient.', text: `${t}° is right in the sweet spot — 78° when you’re home is the DOE summer recommendation. Keep it there with clean coils and a fresh filter.`, cta: 'Keep cool tips', slug: 'top-10-ways-to-keep-cool' }
    return { id: 'summer-high', tone: 'info', title: 'Saving energy — or can’t get cooler?', text: 'If your AC can’t pull the house below this, it may be low on refrigerant or undersized. Our techs will find out.', cta: 'Request AC repair', slug: 'ac-repair-san-antonio' }
  }
  if (t >= 73) return { id: 'winter-high', tone: 'warn', title: 'Your furnace is working overtime.', text: `Heating to ${t}° on a 34° night adds up. Make sure the heat exchanger is crack-free with a $99 heating tune-up.`, cta: 'Book a $99 tune-up', slug: 'heating-maintenance-san-antonio-tx' }
  if (t >= 66) return { id: 'winter-mid', tone: 'good', title: 'Cozy without the bill shock.', text: `${t}° is a smart winter setting. A fall tune-up — CO test included — keeps it safe all season.`, cta: 'See the fall checklist', slug: 'comfort-club-membership' }
  return { id: 'winter-low', tone: 'info', title: 'Chilly by choice?', text: 'If the heat won’t keep up even at a higher setting, it’s time for a diagnosis on your furnace or heat pump.', cta: 'Request heating repair', slug: 'san-antonio-heating-repair' }
}

// One sample setpoint per advice band, so every variant can be pre-rendered.
const samples = { summer: [70, 76, 82], winter: [76, 68, 62] }
const allTips = Object.entries(samples).flatMap(([season, temps]) => temps.map(t => advise(season, t)))

export default function ComfortConsole() {
  const href = useHref()
  const [season, setSeason] = useState('summer')
  const [temp, setTemp] = useState(seasons.summer.start)
  const s = seasons[season]
  const tip = advise(season, temp)

  const switchSeason = key => {
    setSeason(key)
    setTemp(seasons[key].start)
  }

  return (
    <div className={`console console-${s.mode}`}>
      <div className="console-top">
        <span className="mono">SAN ANTONIO · {s.label.toUpperCase()}</span>
        <div className="seg" role="group" aria-label="Season">
          {Object.keys(seasons).map(k => (
            <button key={k} type="button" aria-pressed={season === k} className={season === k ? 'is-on' : ''} onClick={() => switchSeason(k)}>
              {k === 'summer' ? 'Summer' : 'Winter'}
            </button>
          ))}
        </div>
      </div>
      <div className="console-body">
        <ThermostatDial value={temp} onChange={setTemp} mode={s.mode} />
        <dl className="console-readout">
          <div><dt>Outdoor</dt><dd>{s.outdoor}°</dd></div>
          <div><dt>Setpoint</dt><dd>{temp}°</dd></div>
          <div><dt>Δ to outside</dt><dd>{Math.abs(s.outdoor - temp)}°</dd></div>
        </dl>
      </div>
      <div className={`console-tip tone-${tip.tone}`}>
        <StablePanels
          activeKey={tip.id}
          panels={allTips.map(v => {
            const t = v.id === tip.id ? tip : v
            return {
              key: t.id,
              content: (
                <>
                  <strong>{t.title}</strong>
                  <p>{t.text}</p>
                  <Link to={href(t.slug)} className="console-link">{t.cta} <Icon name="arrow" size={16} /></Link>
                </>
              ),
            }
          })}
        />
        <p className="sr-only" aria-live="polite">{tip.title}</p>
      </div>
      <p className="console-hint mono">Drag the dial or use arrow keys</p>
    </div>
  )
}
