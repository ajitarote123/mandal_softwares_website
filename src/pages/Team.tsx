import { PageHero } from '../components/PageHero'
import { SectionTitle } from '../components/SectionTitle'
import { company } from '../data/company'

export function TeamPage() {
  return (
    <>
      <PageHero title="Meet The Team" crumb="Team" />
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Team Members" title="Professional Stuffs Ready to Help Your Business" />
          <div className="grid-3">
            {company.team.map((member) => (
              <article key={member.name} className="team-card">
                <img src={member.image} alt={member.name} />
                <div className="team-card-body">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-social">
                    {'twitter' in member.social && member.social.twitter && (
                      <a className="social-link" href={member.social.twitter} target="_blank" rel="noreferrer" aria-label="Twitter">
                        X
                      </a>
                    )}
                    {'facebook' in member.social && member.social.facebook && (
                      <a className="social-link" href={member.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                        f
                      </a>
                    )}
                    {'instagram' in member.social && member.social.instagram && (
                      <a className="social-link" href={member.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                        ig
                      </a>
                    )}
                    {'linkedin' in member.social && member.social.linkedin && (
                      <a className="social-link" href={member.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        in
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
