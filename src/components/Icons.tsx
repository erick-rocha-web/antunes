const base = {
  width: 20,
  height: 20,
  viewBox: '0 0 20 20',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  'aria-hidden': true,
  focusable: false,
} as const

export function BookmarkIcon({ filled = false }: { filled?: boolean }) {
  return (
    <svg {...base} fill={filled ? 'currentColor' : 'none'}>
      <path d="M5 3h10v14l-5-3.6L5 17V3Z" strokeLinejoin="round" />
    </svg>
  )
}

export function CloseIcon() {
  return (
    <svg {...base}>
      <path d="M4.5 4.5l11 11M15.5 4.5l-11 11" strokeLinecap="square" />
    </svg>
  )
}

export function MenuIcon() {
  return (
    <svg {...base}>
      <path d="M3 6.5h14M3 13.5h14" strokeLinecap="square" />
    </svg>
  )
}

export function ArrowIcon({ direction = 'right' }: { direction?: 'right' | 'down' | 'up-right' }) {
  const rotate = direction === 'down' ? 90 : direction === 'up-right' ? -45 : 0
  return (
    <svg {...base} style={{ transform: `rotate(${rotate}deg)` }}>
      <path d="M3.5 10h13M11.5 5l5 5-5 5" strokeLinecap="square" />
    </svg>
  )
}
