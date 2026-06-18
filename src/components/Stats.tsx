import { company } from '../data/company'

const icons = ['👥', '✓', '🏆']

export function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {company.stats.map((stat, index) => (
          <div key={stat.label} className={`stat-card ${index % 2 === 0 ? 'primary' : 'light'}`}>
            <div className="stat-icon" aria-hidden="true">
              {icons[index]}
            </div>
            <div>
              <h3>{stat.label}</h3>
              <div className="stat-value">{stat.value}+</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
