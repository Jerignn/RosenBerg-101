// Small inline icon set (stroke icons, inherit currentColor).
const paths = {
  snow: 'M12 2v20M4.9 6.5l14.2 11M19.1 6.5 4.9 17.5M9 4l3 2 3-2M9 20l3-2 3 2',
  flame: 'M12 22c4 0 7-2.8 7-7 0-3.5-2.3-6-4-8-.3 2-1.3 3.4-2.6 3.8C13 7 11.5 4 9 2c.3 3-3 5.8-3 10 0 5 3 10 6 10Z',
  drop: 'M12 2.5S5 10 5 14.5a7 7 0 0 0 14 0C19 10 12 2.5 12 2.5Z',
  building: 'M4 21V5l8-3v19M12 21h8V9l-8-3M8 8h.01M8 12h.01M8 16h.01M16 12h.01M16 16h.01M2 21h20',
  wind: 'M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h7',
  bolt: 'M13 2 4 14h7l-1 8 9-12h-7l1-8Z',
  phone: 'M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  check: 'M4 12.5 9 17.5 20 6.5',
  plus: 'M12 5v14M5 12h14',
  minus: 'M5 12h14',
  menu: 'M3 6h18M3 12h18M3 18h18',
  close: 'M6 6l12 12M18 6 6 18',
  pin: 'M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z',
  clock: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-15v5l3 2',
  star: 'm12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z',
  shield: 'M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Zm-3 10 2 2 4-4',
  print: 'M7 9V3h10v6M7 17H4v-7h16v7h-3M7 14h10v7H7v-7Z',
  play: 'M7 4v16l13-8L7 4Z',
  search: 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.3-4.3',
  chevron: 'm6 9 6 6 6-6',
  card: 'M2 6h20v12H2zM2 10h20M6 15h4',
  user: 'M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm-8 10a8 8 0 0 1 16 0',
  tag: 'M3 12V3h9l9 9-9 9-9-9Zm5-4h.01',
  gift: 'M3 8h18v4H3zM5 12v9h14v-9M12 8v13M12 8S10.5 3 8 3a2.5 2.5 0 0 0 0 5M12 8s1.5-5 4-5a2.5 2.5 0 0 1 0 5',
  mail: 'M3 5h18v14H3zM3 6l9 7 9-7',
}

export default function Icon({ name, size = 20, strokeWidth = 1.8, className, title }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title && <title>{title}</title>}
      <path d={paths[name] || paths.arrow} />
    </svg>
  )
}
