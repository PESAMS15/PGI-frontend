import axios from 'axios'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify'

const Process = () => {
    const pro =()=>{
        axios.post("https://persy-grow-investment.onrender.com/thrifts/process").then(()=>{
        toast.success("All transactions processed")
        setTimeout(() => {
            window.location.reload()
        }, 3000);
    }).catch((err)=>{
        toast.error("AN error occured")
        console.log(err)
    })
    }
    
  return (
    <div>
      <div className="text-center"><button onClick={pro} className="p-3 bg-black text-white my-10 block w-full rounded">Process all transactions</button></div>
      <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
    </div>
  )
}

export default Process
