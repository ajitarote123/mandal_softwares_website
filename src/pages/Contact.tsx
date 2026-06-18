import { useState, type FormEvent } from 'react'
import { PageHero } from '../components/PageHero'
import { company } from '../data/company'

const API_URL = import.meta.env.VITE_API_URL ?? '/api/contact.php'

export function ContactPage() {
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)
    setStatus(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = {
      name: String(formData.get('name') ?? ''),
      email: String(formData.get('email') ?? ''),
      subject: String(formData.get('subject') ?? ''),
      message: String(formData.get('message') ?? ''),
    }

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = (await response.json()) as { success: boolean; message: string }

      if (!response.ok || !result.success) {
        throw new Error(result.message || 'Failed to send message.')
      }

      setStatus({ type: 'success', message: result.message })
      form.reset()
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <PageHero title="Contact Us" />
      <section className="section">
        <div className="container">
          <div className="section-title">
            <p className="eyebrow">Contact Us</p>
            <h2>If You Have Any Query, Feel Free To Contact Us</h2>
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-item">
              <div className="phone-icon" aria-hidden="true">
                ☎
              </div>
              <div>
                <h3>Call to ask any question</h3>
                <a href={`tel:${company.phoneTel}`}>{company.phone}</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="phone-icon" aria-hidden="true">
                ✉
              </div>
              <div>
                <h3>Email to get free quote</h3>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </div>
            </div>
            <div className="contact-info-item">
              <div className="phone-icon" aria-hidden="true">
                📍
              </div>
              <div>
                <h3>Visit our office</h3>
                <p style={{ margin: 0 }}>{company.address}</p>
                <a href={company.googleBusiness} target="_blank" rel="noreferrer">
                  View on Google
                </a>
              </div>
            </div>
          </div>

          <div className="grid-2">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input name="name" type="text" placeholder="Your Name" required maxLength={120} />
                <input name="email" type="email" placeholder="Your Email" required maxLength={160} />
              </div>
              <input name="subject" type="text" placeholder="Subject" required maxLength={200} />
              <textarea name="message" rows={5} placeholder="Message" required maxLength={5000} />
              {status && <div className={`form-status ${status.type}`}>{status.message}</div>}
              <button className="btn btn-primary" type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <iframe
              className="map-frame"
              title="Mandal Softwares location"
              src={company.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  )
}
