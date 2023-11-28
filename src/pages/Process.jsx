import axios from 'axios'
import React from 'react'

const Process = () => {
    const pro =()=>{
        axios.post("https://persy-grow-investment.onrender.com/thrifts/process").then(()=>{
        window.location.reload()
    }).catch((err)=>{
        console.log(err)
    })
    }
    
  return (
    <div>
      <div className="text-center"><button onClick={pro} className="p-3 bg-black block w-full rounded">Process all transactions</button></div>
    </div>
  )
}

export default Process
