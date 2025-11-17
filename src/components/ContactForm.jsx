import { useState } from 'react'

const initialFormState = {
  name: '',
  email: '',
  company: '',
  message: '',
}

const ContactForm = () => {
  const [form, setForm] = useState(initialFormState)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', message: 'Nama, email, dan pesan wajib diisi.' })
      return
    }
    if (!form.email.includes('@')) {
      setStatus({ type: 'error', message: 'Alamat email tidak valid.' })
      return
    }
    setStatus({ type: 'success', message: 'Terima kasih! Tim kami akan menghubungi Anda dalam 1x24 jam.' })
    setForm(initialFormState)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-3xl bg-white p-6 shadow-2xl">
      <div>
        <label htmlFor="name" className="text-sm font-semibold text-brand-primary">
          Nama Lengkap *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border border-brand-accent/70 px-4 py-3 text-brand-secondary focus:border-brand-highlight focus:outline-none"
          placeholder="Nama Anda"
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-semibold text-brand-primary">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border border-brand-accent/70 px-4 py-3 text-brand-secondary focus:border-brand-highlight focus:outline-none"
          placeholder="email@perusahaan.com"
        />
      </div>
      <div>
        <label htmlFor="company" className="text-sm font-semibold text-brand-primary">
          Perusahaan
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={form.company}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border border-brand-accent/70 px-4 py-3 text-brand-secondary focus:border-brand-highlight focus:outline-none"
          placeholder="Nama perusahaan"
        />
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-semibold text-brand-primary">
          Pesan *
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          className="mt-2 w-full rounded-2xl border border-brand-accent/70 px-4 py-3 text-brand-secondary focus:border-brand-highlight focus:outline-none"
          placeholder="Ceritakan kebutuhan project Anda"
        />
      </div>
      {status.message && (
        <p
          className={`text-sm font-semibold ${
            status.type === 'error' ? 'text-red-600' : 'text-brand-primary'
          }`}
        >
          {status.message}
        </p>
      )}
      <button
        type="submit"
        className="w-full rounded-full bg-brand-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-secondary"
      >
        Kirim
      </button>
    </form>
  )
}

export default ContactForm
