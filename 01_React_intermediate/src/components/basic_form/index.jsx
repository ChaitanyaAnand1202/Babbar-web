import React from 'react'
import { useState } from "react";


function Basic_form() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comment: "", isVisible: true, mode: "", favCar:"" })

  // const handleFirstNameChange = (event) => {
  //   console.log(event.target.value);
  // }
  // const handleLastNameChange = (event) => {
  //   console.log(event.target.value);
  // }

  const handleChange = (event) => {
    setFormData(prev => ({ ...prev, [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form has been filled, printing details:")
    console.log(formData);
  }
  // console.log(formData);

  return (
    <div className='min-h-[100vh] min-w-[100vw] bg-gray-700 text-white flex justify-center items-center'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Enter First Name</label>
        <input
          type="text"
          placeholder="First name"
          name="firstName"
          onChange={handleChange}
          value={formData.firstName}
          className="text-black"
        />
        <br />
        <label htmlFor="lastName">Enter Last Name</label>
        <input
          type="text"
          placeholder="Last name"
          name="lastName"
          onChange={handleChange}
          value={formData.lastName}
          className="text-black"
        />
        <br />
        <label htmlFor="last-name">Enter email</label>
        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          className="text-black"
        />
        <br />
        <textarea
          name="comment"
          id="comment"
          cols="30" rows="10"
          placeholder="Enter comments"
          onChange={handleChange}
          value={formData.comment}
          className="text-black"></textarea>
        <br />
        <label htmlFor="isVisible">Check isVisible</label>
        <input
          type="checkbox"
          name="isVisible"
          id="isVisible"
          onChange={handleChange}
          checked={formData.isVisible} />
        <br />
        <br />
        <fieldset className="border-white">
          <legend>Mode</legend>
          <input
            type="radio"
            value="online-mode"
            id="online-mode"
            name="mode"
            onChange={handleChange}
            checked={formData.mode === 'online-mode'} />
          <label htmlFor="online-mode">Online Mode</label>
          <input
            type="radio"
            value="offline-mode"
            id="offline-mode"
            name="mode"
            onChange={handleChange}
            checked={formData.mode === 'offline-mode'} />
          <label htmlFor="offline-mode">Offline Mode</label>
        </fieldset>
        <br />
        <label htmlFor="favCar">Choose Favourite Car</label>
        <select 
          name="favCar" 
          id="favCar" 
          value={formData.favCar}
          className='text-black'
          onChange={handleChange}>
          <option htmlFor="favCar" value="Scorpio">Scorpio</option>
          <option htmlFor="favCar" value="Bolero">Bolero</option>
          <option htmlFor="favCar" value="XUV">XUV</option>
          <option htmlFor="favCar" value="Thar">Thar</option>
        </select>
        <br />
        <button className='bg-white text-black'>Submit</button>
      </form>
    </div>
  )
}

export default Basic_form