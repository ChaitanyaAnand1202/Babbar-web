import React from 'react'
import { useNavigate } from 'react-router-dom';

function Labs() {
  const navigate = useNavigate();

  function handleClick(){
    navigate('/support');
  }
  function handleBackClick(){
    navigate(-1);
  }
  return (
    <div>
      <div>This is Labs page</div>
      <button onClick={handleClick}>Go to Support</button>
      <button onClick={handleBackClick}>Go back</button>
    </div>
  )
}

export default Labs