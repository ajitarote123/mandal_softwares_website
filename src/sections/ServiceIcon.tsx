const ICONS: Record<string, string> = {
  web: '◈',
  mobile: '◉',
  erp: '◎',
  commerce: '◇',
}

export function ServiceIcon({ id }: { id: string }) {
  return (
    <span className="services-section__icon" aria-hidden="true">
      {ICONS[id] ?? '◆'}
    </span>
  )
}
