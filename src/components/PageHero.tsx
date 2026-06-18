import { Link } from 'react-router-dom'

interface PageHeroProps {
  title: string
  crumb?: string
}

export function PageHero({ title, crumb }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container">
        <h1>{title}</h1>
        <p className="breadcrumb">
          <Link to="/">Home</Link> · {crumb ?? title}
        </p>
      </div>
    </section>
  )
}
