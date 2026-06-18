import { useState, type FormEvent } from 'react'

const API_URL = import.meta.env.VITE_API_URL ?? '/api/contact.php'

export function ContactForm() {
  const [status, setStatus] = useState<{ type: 'ok' | 'err'; text: string } | null>(null)
  const [busy, setBusy] = useState(false)

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setBusy(true)
    setStatus(null)
    const fd = new FormData(e.currentTarget)

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: String(fd.get('name') ?? ''),
          email: String(fd.get('email') ?? ''),
          subject: String(fd.get('subject') ?? 'Project inquiry'),
          message: String(fd.get('message') ?? ''),
        }),
      })
      const data = (await res.json()) as { success: boolean; message: string }
      if (!res.ok || !data.success) throw new Error(data.message)
      setStatus({ type: 'ok', text: data.message })
      e.currentTarget.reset()
    } catch (err) {
      setStatus({
        type: 'err',
        text: err instanceof Error ? err.message : 'Could not send. Try email instead.',
      })
    } finally {
      setBusy(false)
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form-row">
        <label>
          <span>Name</span>
          <input name="name" required maxLength={120} placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" required maxLength={160} placeholder="you@company.com" />
        </label>
      </div>
      <label>
        <span>What are you building?</span>
        <textarea name="message" required maxLength={5000} rows={4} placeholder="Brief idea, timeline, budget range…" />
      </label>
      <input type="hidden" name="subject" value="Project inquiry" />
      {status && <p className={`form-msg form-msg--${status.type}`}>{status.text}</p>}
      <button type="submit" className="btn btn--glow" disabled={busy}>
        {busy ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
