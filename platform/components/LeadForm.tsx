'use client';

import { FormEvent, useState } from 'react';

export default function LeadForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState('sending');
    setMessage('');
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch('/api/leads', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Unable to submit');
      setState('success');
      setMessage('Thanks — our admissions team will contact you shortly.');
      event.currentTarget.reset();
    } catch (error) {
      setState('error');
      setMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <form className="lead-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Name<input name="name" required minLength={2} placeholder="Your name" /></label>
        <label>Email<input name="email" required type="email" placeholder="you@example.com" /></label>
        <label>Phone<input name="phone" required placeholder="+91 98765 43210" /></label>
        <label>Interested in<select name="interest" defaultValue="Cyber Security"><option>Cyber Security</option><option>AI Engineering</option><option>Data Science</option></select></label>
      </div>
      <label>What are you looking for?<textarea name="message" rows={3} placeholder="Tell us your background and career goal" /></label>
      <label className="consent"><input type="checkbox" name="consent" value="true" required /> <span>I agree to be contacted by Institute 9 about courses and admissions.</span></label>
      <button disabled={state === 'sending'} className="primary-button">{state === 'sending' ? 'Sending…' : 'Book My Free Session →'}</button>
      {message && <p className={state === 'error' ? 'form-error' : 'form-success'}>{message}</p>}
    </form>
  );
}
