import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/company'

export function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % company.heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="hero" aria-label="Hero carousel">
      {company.heroSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={`hero-slide ${index === active ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={index !== active}
        />
      ))}

      <div className="hero-content">
        <p className="eyebrow">{company.heroSlides[active].subtitle}</p>
        <h1>{company.heroSlides[active].title}</h1>
        <div className="hero-actions">
          <Link to="/about" className="btn btn-primary">
            Read More
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        {company.heroSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            className={`hero-dot ${index === active ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={index === active}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  )
}
