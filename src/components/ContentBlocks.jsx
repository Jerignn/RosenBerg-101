// Renders the structured copy scraped from the live site ({ t: 'h' | 'p' | 'list' | 'quote' }).
const NOISE = /^(learn more|read more|click here|print coupon|download .* here)$/i

export default function ContentBlocks({ blocks = [] }) {
  return (
    <div className="prose">
      {blocks.map((b, i) => {
        if (b.t === 'h') return <h2 key={i}>{b.text}</h2>
        if (b.t === 'quote') return <blockquote key={i}>{b.text}</blockquote>
        if (b.t === 'list') {
          return (
            <ul key={i}>
              {b.items.map((item, j) => <li key={j}>{item}</li>)}
            </ul>
          )
        }
        if (NOISE.test(b.text)) return null
        return <p key={i}>{b.text}</p>
      })}
    </div>
  )
}
