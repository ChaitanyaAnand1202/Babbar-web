import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

  const navigate = useNavigate();

  function handleClick(){
    navigate('/');
  }
  function handleBackClick(){
    navigate(-1);
  }

  return (
    <div>
      <div>This is About page</div>
      <button onClick={handleClick}>Go to Home</button>
      <button onClick={handleBackClick}>Go back</button>
    </div>
  )
}

export default About