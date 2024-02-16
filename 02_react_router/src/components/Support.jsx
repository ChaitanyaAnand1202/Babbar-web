import React from 'react'
import { useNavigate } from 'react-router-dom'

function Support() {
  const navigate = useNavigate();
  function handleClick(){
    navigate('/labs');
  }
  function handleBackClick(){
    navigate(-1);
  }
  return (
    <div>
      <div>This is Support Page</div>
      <button onClick={handleClick}>Go to Labs</button>
      <button onClick={handleBackClick}>Go back</button>
    </div>
  )
}

export default Support