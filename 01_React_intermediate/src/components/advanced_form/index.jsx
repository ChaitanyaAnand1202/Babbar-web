import React, { useState } from 'react'

function AdvancedForm() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    street: "",
    city: "",
    state: "",
    zip: "",
    comments: false,
    candidates: false,
    offers: false,
    notification: ""
  })

  const country = ["India", "USA", "France", "China", "Israel"]
  const handleChange = (event) => {
    setFormData(prev => ({
      ...prev, [event.target.name]: event.target.value
    }))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("From submitted, printing form details");
    console.log(formData);
  }

  return (
    <div className='flex flex-col items-center p-4 m-2'>
      <form onSubmit={handleSubmit} className='min-w-[60%] border-blue-400 rounded-lg border-2 p-3 *:w-[98%] *:m-2'>
        <label htmlFor="firstName">First Name</label>
        <br />
        <input
          type="text"
          name='firstName'
          onChange={handleChange}
          value={FormData.firstName}
          className='border-violet-500 border-2' />
        <br />
        <label htmlFor="lastName">Last Name</label>
        <br />
        <input
          type="text"
          name='lastName'
          onChange={handleChange}
          value={FormData.lastName}
          className='border-violet-500 border-2' />
        <br />
        <label htmlFor="emailName">Email address</label>
        <br />
        <input
          type="email"
          name='email'
          onChange={handleChange}
          value={FormData.email}
          className='border-violet-500 border-2' />
        <br />



        <label htmlFor="country">Country</label>
        <br />
        <select name="country" id="country" className='border-violet-500 border-2'>
          {
            country.map((item) =>
              <option key={item} value={item}>{item}</option>)
          }

        </select>



        <br />
        <label htmlFor="street">Street address</label>
        <br />
        <input
          type="text"
          name='street'
          onChange={handleChange}
          value={FormData.street}
          className='border-violet-500 border-2' />
        <br />
        <label htmlFor="city">City</label>
        <br />
        <input
          type="text"
          name='city'
          onChange={handleChange}
          value={FormData.city}
          className='border-violet-500 border-2' />
        <br />
        <label htmlFor="state">State</label>
        <br />
        <input
          type="text"
          name='state'
          onChange={handleChange}
          value={FormData.state}
          className='border-violet-500 border-2' />
        <br />
        <label htmlFor="zip">ZIP/Postal Code</label>
        <br />
        <input
          type="text"
          name='zip'
          onChange={handleChange}
          value={FormData.zip}
          className='border-violet-500 border-2' />
        <br />
        <fieldset>
          <legend>By Email</legend>
          <div className='flex'>
            <input
              type="checkbox"
              name="comments"
              id="comments"
              onChange={handleChange}
              checked={formData.checked} />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment</p>
            </div>
          </div>
          <br />
          <div className='flex'>
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              onChange={handleChange}
              checked={formData.candidates} />
            <div>
              <label htmlFor="candidates">Candidates</label>
              <p>Get notified when someone applies for a job</p>
            </div>
          </div>
          <br />
          <div className='flex'>
            <input
              type="checkbox"
              name="comments"
              id="comments"
              onChange={handleChange}
              checked={formData.checked} />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>Get notified when someone posts a comment</p>
            </div>
          </div>
        </fieldset>
        <br />
        <fieldset>
          <legend>
            Push Notifications
            <p>These are delivered via SMS to your phone</p>
          </legend>
          <input 
            type="radio" 
            name="notification" 
            id="everything" 
            value="everything"
            onChange={handleChange}
            checked={formData.notification === 'everything'}/>
          <label htmlFor="everything">Everything</label>
          <br />
          <input 
            type="radio" 
            name="notification" 
            id="same-email" 
            value="same-email"
            onChange={handleChange}
            checked={formData.notification === 'same-email'}/>
          <label htmlFor="same-email">Same as email</label>
        </fieldset>
        <button className='border-violet-500 border-2'>Submit</button>
      </form>
    </div>
  )
}

export default AdvancedForm