import { useEffect, useState } from "react"

function Contact() {

  useEffect(() => {
    document.title = 'Contact | The Remedy';
  }, []);

  const ContactForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
      if (success !== false) {
        setError(false)
      }
      if (error !== false || success !== false) {
        setTimeout(() => {
          setError(false)
          setSuccess(false)
        }, 5000)
      }
    }, [error, success])

    const sendMail = async () => {

      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setError("Must fill out all boxes!")
        return
      }

      const requestDataNode = (body) => {
        return {
          method: 'POST',
          header: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: new URLSearchParams(body)
        }
      }

      const sent = await (await fetch(`https://remedy-server-production.up.railway.app/send`, requestDataNode({
        name: name,
        email: email,
        message: message,
      }))).json()

      console.log(sent)

      if (sent.info === "success") {
        setName("")
        setEmail("")
        setMessage("")
        setSuccess(true)
      } else {
        setError("Uh oh! Something went wrong.")
      }
    }

    return (
      <div className="contact-form">
        <div className="row">
          <h1>Name</h1>
          <input type="name" value={name} placeholder={"John Doe"} onChange={(e) => setName(e.target.value)} style={error !== false && name.length === 0 ? { outline: '1px solid red' } : {}} />
        </div>
        <div className="row">
          <h1>Email</h1>
          <input type="email" value={email} placeholder={"john@gmail.com"} onChange={(e) => setEmail(e.target.value)} style={error !== false && email.length === 0 ? { outline: '1px solid red' } : {}} />
        </div>
        <div className="row">
          <h1>Message</h1>
          <textarea value={message} placeholder={"Hello! My message goes here..."} onChange={(e) => setMessage(e.target.value)} style={error !== false && message.length === 0 ? { outline: '1px solid red' } : {}} />
        </div>
        <button onClick={sendMail}>Submit</button>
        {error !== false && <h4>{error}</h4>}
        {success && <h4>Message successfully sent! Expect a response within 24-48 hours.</h4>}
      </div>
    )
  }

  return (
    <>
      <div className="container contact">
        <h1 className="store-title">Contact Us</h1>
        <h2>Get in touch and we’ll get back to you as soon as we can. We look forward to hearing from you!</h2>
        <div className="contact-form-wrapper">
          <ContactForm />
          <div className="right-col">
            <div className="row">
              <h1>Email</h1>
              <a href="mailto:lindsey@theremedyvi.com">lindsey@theremedyvi.com</a>
            </div>
            <div className="row">
              <h1>Phone</h1>
              <a href="tel:340-773-7777">(340) 773-7777</a>
            </div>
            <div className="row">
              <h1>Address</h1>
              <h4>1104 Strand St</h4>
              <h4>Christiansted, VI 00820</h4>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.9869320754715!2d-64.7060541!3d17.7452549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c1ab5f18b00abd9%3A0x565e248c99d28c41!2s1104%20Strand%20St%2C%20Christiansted%2C%20St%20Croix%2000820%2C%20USVI!5e0!3m2!1sen!2sus!4v1681465270084!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </>
  )

}

export default Contact;
