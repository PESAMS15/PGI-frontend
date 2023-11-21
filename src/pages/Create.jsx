import React from 'react'
import axios from "axios"
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';
import { ToastContainer, toast } from 'react-toastify'

const Create = () => {
  
  const [name, setname] = useState("")
  const [id, setid] = useState("")
  const [loader, setloader] = useState(true)
  const [selectedPlan, setSelectedPlan] = useState("")


  const [amount, setamount] = useState("")
  const [maxmem, setmaxmem] = useState("")
  const [usname, setusname] = useState("")
  let details = {
    thriftName: name,
    subscriptionPlan: selectedPlan,
    thriftAdmin: usname,
    amount: amount,
    maxMem: maxmem
    
  }
  
  const uri = "https://persy-grow-investment.onrender.com/users/verify"
  const token = localStorage.getItem("token")
  // const navigate = useNavigate()
  setInterval(useEffect(() => {
      console.log(token)
      axios.get(uri, {
          headers: {
              Authorization: `bearer ${token}`
          }
      }).then((res) => {
        setloader(false)
          // console.log(res.data)
          setusname(res.data.checkUser.userName)
          
      }).catch((err) => {
        setloader(false)
          // alert(err.response.data.message)
          toast.error(err.response.data.message)
          // console.log(err)
          navigate("/signin")
      })
  }, []), 1000)
  // console.log(usname)



 
  const navigate = useNavigate()
  

  const handlePlanChange = (event) => {
    setSelectedPlan(event.target.value);
  }
  let url = "https://persy-grow-investment.onrender.com/thrifts/create"
  const creat = ()=>{
        setloader(true)
        //  console.log(details)
        axios.post(url, details).then((res) => {
          setloader(false)
          // console.log(res.data)
          // let id = res.data.thrift._id
          setid(res.data.thrift._id)

          console.log(id)
          // alert(res.data.message)
          toast.success(res.data.message)
          setTimeout(() => {
            navigate(`/dashboard/thrifts`)
          }, 4000)
          
        })
        
        .catch((err)=>{
          setloader(false)
          // alert(err.response.data.message)  
          toast.error(err.response.data.message)
        })
  
  }
  return (
    <div className='py-4'>
      {loader? <Loader />: ""}
        <h1 className='text-4xl font-bold text-center  mt-10'>Create a Thrift</h1>
        <div className='md:w-3/4 mx-auto md:mt-16 mt-3 md:shadow-lg md:p-5'>
           <div className="md:flex w-full px-3 gap-16 mt-10  md:my-5 justify-between">
                <div className='md:w-1/2 my-5 md:text-left'>
                <label htmlFor="" className='text-gray-500 block my-2'>Enter group name:</label>
                <input type="text" onChange={(e)=>setname(e.target.value)} className='bg-indigo-100 block outline-none rounded-2xl w-full  py-4 px-2 my-2 ' placeholder='eg: my Thrift' />
                </div>
                 <div className="md:w-1/2 my-5">
                <label for="" className="text-gray-500 items-start block my-2">Choose a plan:</label>
                <select value={selectedPlan} onChange={handlePlanChange} className="bg-indigo-100 block outline-none rounded-2xl w-full py-4 px-2 pr-4 my-2">
                    <option value="" disabled selected>Select a plan</option>
                    <option value="daily">Daily Plan</option>
                    <option value="weekly">Weekly Plan</option>
                    <option value="monthly">Monthly Plan</option>
                </select>
                </div>

           </div>
           <div className="md:flex w-full gap-16 px-3 md:my-5  justify-between">
                <div className='md:w-1/2 my-5  md:text-left'>
                <label htmlFor=""  className='text-gray-500 block my-2'>Amount to be paid:</label>
                <input type="text"  placeholder='eg: $10,000' onChange={(e)=> setamount(e.target.value)} className='bg-indigo-100 block outline-none rounded-2xl w-full  py-4 px-2 my-2 ' />
                </div>
                <div className='md:w-1/2 my-5   '>
                <label htmlFor="" className='text-gray-500 items-start block my-2'>Maximum number of users:</label>
                <input type="number" onChange={(e) => setmaxmem(e.target.value)}  placeholder='eg: 1-10' className='bg-indigo-100 block outline-none rounded-2xl w-full  py-4 px-2 my-2 ' />
                </div>
           </div>
           <button className='w-full bg-indigo-500 text-white rounded-xl my-2 py-3' onClick={creat}>Submit</button>

        </div>
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

export default Create