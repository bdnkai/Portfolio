import { useState } from 'react'
import linkedIn from '../assets/LinkedIn.png'
import gitHub from '../assets/GitHub.png'
import '../css/form.css'

function ContactMe() {
  const initialState = {
    name: "",
    email: "",
    message: "",
  } 
  const [forms, setForms] = useState(initialState)

  const handleChange = (event) => {
    setForms({...forms, 
      [event.target.id]: event.target.value,})
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    window.Email.send({
      SecureToken: 'fbd2cecc-cc79-4a68-b726-e85030775ce8',
      To: 'bdn.kai@gmail.com',
      From: 'bdn.kai@gmail.com',
      Subject: 'BDs Portfolio Inquiry',
      Body: `<br> Name : ${forms.name}
      <br> Email: ${forms.email}  
      <br> Message: ${forms.message}`,
    }).then(() => alert(`Thank you, Your email has been sent!`));
    setForms(initialState)

  }


  return (
    <div className="form-display">
      <div className='form-container'>
        <form className='contact-form' onSubmit={handleSubmit}>
          <label className='form-label' htmlFor="full-name">
            Full Name:
          </label>
          <input 
            className='form-input'
            type='text'
            id='name'
            placeholder='Your Name Here'
            value={forms.name}
            onChange={handleChange}
            required 
          />
          <label className='form-label email' htmlFor='email'>
						Email:
					</label>
          <input
						className='form-input'
						type='email'
						id='email'
						placeholder='Your Email Here'
						value={forms.email}
						onChange={handleChange}
						required
					/>
          <label className='form-label' htmlFor='message'>
						Message:
					</label>
          <textarea
						className='form-input'
						type='message'
						id='message'
						placeholder='Tell me something about yourself!'
            rows="4"
						value={forms.message}
						onChange={handleChange}
					/>
          <button className='form-submit' type='Submit'>
						{' '}
						Submit
					</button>
        </form>
      </div>
					
    <div className="icons">
      <a href="https://www.linkedin.com/in/bdnii/"><img src={linkedIn} alt="" /></a>
      <a href="https://github.com/bdnkai"><img src={gitHub} alt="" /></a> 
    </div>
   </div>
  )
}

export default ContactMe