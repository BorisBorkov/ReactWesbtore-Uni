import { useState } from 'react'

function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert('Internal system error, for complaints please visit https://armenskipop.com/')
    setName('')
    setEmail('')
    setMessage('')
  }

  return (
    <div className="page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>Have a question or need help? We would love to hear from you.</p>
      </div>
      <div className="contact-layout">
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name</label>
          <input value={name} onChange={e => setName(e.target.value)} required />
          <label>Email</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
          <label>Message</label>
          <textarea rows="5" value={message} onChange={e => setMessage(e.target.value)} required />
          <button type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <div className="info-item">
            <h4>Email</h4>
            <p>techstore@email.com</p>
          </div>
          <div className="info-item">
            <h4>Phone</h4>
            <p>+1 (555) 123-4567</p>
          </div>
          <div className="info-item">
            <h4>Location</h4>
            <p>Sofia, Bulgaria</p>
          </div>
          <div className="info-item">
            <h4>Hours</h4>
            <p>Mon - Fri: 9am - 6pm</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
