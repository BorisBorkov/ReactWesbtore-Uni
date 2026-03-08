import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(`Thanks, ${name}! Your message has been sent.`)
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Message</label>
        <textarea rows="5" value={message} onChange={e => setMessage(e.target.value)} required />
        <button type="submit">Send</button>
      </form>
    </div>
  )
}

export default Contact
