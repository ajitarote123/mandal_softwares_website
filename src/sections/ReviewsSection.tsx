import { company } from '../data/company'
import { Stars } from '../components/ui/Stars'
import { useI18n } from '../features/i18n/useI18n'
import { Reveal } from '../features/motion/Reveal'
import { SectionShell } from './SectionShell'
import './ReviewsSection.css'

export function ReviewsSection() {
  const { t } = useI18n()
  const r = t.sections.reviews

  return (
    <SectionShell
      id="reviews"
      eyebrow={r.eyebrow}
      title={r.title}
      action={
        <a
          href={company.googleBusiness}
          className="reviews-section__google btn btn--ghost"
          target="_blank"
          rel="noreferrer"
        >
          {r.viewGoogle} ↗
        </a>
      }
    >
      <div className="reviews-section__grid stagger">
        {r.items.map((item) => (
          <Reveal key={item.text} variant="up">
            <blockquote className="reviews-section__card surface hover-lift">
              <div className="reviews-section__head">
                <Stars rating={item.rating} />
                <span className="reviews-section__google-mark">G</span>
              </div>
              <p>&ldquo;{item.text}&rdquo;</p>
              <footer>— {item.source}</footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </SectionShell>
  )
}
