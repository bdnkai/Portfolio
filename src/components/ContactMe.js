import React from 'react'
import linkedIn from '../assets/LinkedIn.png'
import gitHub from '../assets/GitHub.png'
import '../css/form.css'

function ContactMe() {
  return (
    <div className="form-display">
      <div className='form-container'>
        <form className='contact-form' onSubmit={console.log('onsubmit')}>
          <label className='form-label' htmlFor="full-name">
            Full Name:
          </label>
          <input 
            className='form-input'
            type='text'
            placeholder='Full Name'
            value={console.log('value')}
            onChange={console.log('onChange')}
            required 
          />
          <label className='form-label email' htmlFor='email'>
						Email:
					</label>
          <input
						className='form-input'
						type='email'
						id='email'
						placeholder='Email'
						value={console.log('value')}
						onChange={console.log('onChange')}
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
						value={console.log('value')}
						onChange={console.log('onChange')}
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