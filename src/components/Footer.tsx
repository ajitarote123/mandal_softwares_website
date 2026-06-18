import { Link } from 'react-router-dom'
import { company } from '../data/company'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <h2>
            <img src="/images/logo.svg" alt="" width={48} height={48} />
            {company.name}
          </h2>
          <p>Custom IT solutions for your successful business.</p>
        </div>

        <div className="footer-columns">
          <div>
            <h3>Get In Touch</h3>
            <p>📍 {company.address}</p>
            <p>
              <a className="footer-link" href={`mailto:${company.email}`}>
                ✉ {company.email}
              </a>
            </p>
            <p>
              <a className="footer-link" href={`tel:${company.phoneTel}`}>
                ☎ {company.phone}
              </a>
            </p>
            <div className="topbar-social" style={{ marginTop: '1rem' }}>
              <a className="social-link" href={company.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a className="social-link" href={company.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a className="social-link" href={company.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
              <a className="social-link" href={company.googleBusiness} target="_blank" rel="noreferrer" aria-label="Google Business">G</a>
            </div>
          </div>

          <div>
            <h3>Quick Links</h3>
            <Link className="footer-link" to="/">Home</Link>
            <Link className="footer-link" to="/about">About Us</Link>
            <Link className="footer-link" to="/services">Our Services</Link>
            <Link className="footer-link" to="/team">Meet The Team</Link>
            <Link className="footer-link" to="/clients">Clients</Link>
            <Link className="footer-link" to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © {year} · {company.name} · All Rights Reserved
      </div>
    </footer>
  )
}
