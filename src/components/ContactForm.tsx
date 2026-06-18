import { useState, type FormEvent } from 'react'
import { company } from '../data/company'
import { useI18n } from '../features/i18n/useI18n'
import './ContactForm.css'

const API_URL = import.meta.env.VITE_API_URL ?? '/api/contact.php'

export function ContactForm() {
  const { t } = useI18n()
  const c = t.sections.contact
  const [status, setStatus] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)
  const [busy, setBusy] = useState(false)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setBusy(true)
    setStatus(null)

    const fd = new FormData(e.currentTarget)
    const payload = {
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      subject: c.formSubject,
      message: String(fd.get('message') ?? '').trim(),
    }

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = (await res.json()) as { success: boolean; message: string }

      if (!res.ok || !data.success) {
        throw new Error(data.message)
      }

      setStatus({ type: 'ok', text: c.formSuccess })
      e.currentTarget.reset()
    } catch {
      setStatus({
        type: 'err',
        text: `${c.formError} ${company.email}`,
      })
    } finally {
      setBusy(false)
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit} aria-label="Contact">
      <div className="contact-form__glow" aria-hidden="true" />
      <label>
        <span>{c.formName}</span>
        <input type="text" name="name" required maxLength={120} autoComplete="name" />
      </label>
      <label>
        <span>{c.formEmail}</span>
        <input type="email" name="email" required maxLength={160} autoComplete="email" />
      </label>
      <label>
        <span>{c.formMessage}</span>
        <textarea name="message" rows={4} required maxLength={5000} />
      </label>
      {status && (
        <p
          className={`contact-form__status contact-form__status--${status.type}`}
          role="status"
        >
          {status.type === 'err' ? (
            <>
              {c.formError}{' '}
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </>
          ) : (
            status.text
          )}
        </p>
      )}
      <button type="submit" className="btn btn--primary btn--full" disabled={busy}>
        {busy ? c.formSending : c.formSubmit}
      </button>
    </form>
  )
}
