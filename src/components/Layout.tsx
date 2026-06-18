import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { company } from '../data/company'
import { Footer } from './Footer'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/clients', label: 'Clients' },
  { to: '/contact', label: 'Contact' },
]

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-info">
            <span>📍 {company.address}</span>
            <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
            <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
          <div className="topbar-social">
            <a className="social-link" href={company.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
            <a className="social-link" href={company.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
            <a className="social-link" href={company.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
          </div>
        </div>
      </div>

      <header className="site-header">
        <div className="container">
          <div className="nav-inner">
            <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
              <img src="/images/logo.svg" alt={company.name} width={48} height={48} />
              {company.name}
            </NavLink>

            <nav>
              <ul className="nav-links">
                {navItems.map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to} end={item.end} className={({ isActive }) => (isActive ? 'active' : '')}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              className="menu-toggle"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              ☰
            </button>
          </div>

          <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
