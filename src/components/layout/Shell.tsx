import type { ReactNode } from 'react'
import { Footer } from './Footer'
import { Nav } from './Nav'
import './Shell.css'

interface ShellProps {
  children: ReactNode
}

export function Shell({ children }: ShellProps) {
  return (
    <div className="site-shell">
      <div className="atmosphere" aria-hidden="true">
        <div className="atmosphere__orb atmosphere__orb--1" />
        <div className="atmosphere__orb atmosphere__orb--2" />
      </div>
      <div className="grain-overlay" aria-hidden="true" />

      <Nav />

      <main className="site-shell__main">{children}</main>

      <Footer />
    </div>
  )
}
