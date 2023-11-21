import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()
    const goHome =()=>{
        navigate("/")
    }
  return (
    <div className='text-center'>
        <h1 className='text-center'>You've lost your way</h1>
        <button className='block bg-black mx-auto rounded p-3 text-white w-1/2' onClick={goHome}>Go back to the home page</button>

    </div>
  )
}

export default NotFound