import './Stars.css'

interface StarsProps {
  rating: number
  max?: number
}

export function Stars({ rating, max = 5 }: StarsProps) {
  return (
    <span className="stars" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < rating ? 'stars__on' : 'stars__off'} aria-hidden="true">
          ★
        </span>
      ))}
    </span>
  )
}
