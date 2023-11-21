import React from 'react'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Dash = () => {
  const navigate = useNavigate() 
  const { isFetching, user, fetchingFailed } = useSelector((state)=> state.user)
  const {  thrifts,  } = useSelector((state)=> state.thrifts)
  const {  transactions  } = useSelector((state)=> state.transactions)
  const reversedTransactions = [...transactions].reverse();

  const Link = (link) => {
    navigate(link)
  }
  const convert = (amount) => {
    const balance = Number(amount).toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,


  })
  return balance;

  }



 
  return (
    <div>
      {/* <h1 className=" text-center text-3xl hidden md:block text-gray-700 font-semibold">
        hello {user &&  user.userName}!!!

      </h1> */}
      <div className="bg-gray-100 min-h-screen pb-8  md:p-8">
      <header className="bg-white py-3 md:px-8 md:mb-5 ">
        <h1 className="md:text-4xl text-2xl  text-center md:text-left font-semibold">Welcome to Dashboard!!!
        </h1>
        <p >Hello {user.userName}, welcome to your awesome dashboard!</p>
        
      </header>
      <section className="grid md:grid-cols-2 md:gap-8">
        <div onClick={()=> Link("transactions")} className="bg-white p-4 cursor-pointer  hover:bg-slate-100 transition-all rounded shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-center md:text-left">Latest Transactions!</h2>
          {transactions &&  !reversedTransactions? "you have no transactions yet" :    (
          <ul>
            {reversedTransactions.slice(0, 3).map((transaction) => (
              <li key={transaction.id} className="mb-4 border-b pb-2">
                <p className="text-xl font-normal my-1" >{transaction.description}</p>
                <p className={`${transaction.type=== "debit"? "text-red-500" : "text-green-500" }`}> <span className='text-black font-semibold'>Amount:</span> {convert(transaction.amount)}</p>

                {/* Add more transaction information fields as needed */}
              </li>
            ))}
          </ul>
        )}
        </div>
        <div onClick={()=> Link("thrifts")} className="bg-white cursor-pointer hover:bg-slate-100 transition-all p-4 rounded shadow-md">
          <h2 className="text-2xl text-center md:text-left font-semibold mb-4">Your Thrifts!</h2>
      
          {thrifts && (
            <ul>
              {thrifts.slice(0, 3).map((thrift) => (
                <li key={thrift.id} className="mb-4 border-b pb-2">
                  <p className="text-xl font-semibold capitalize">{thrift.thriftName}</p>
                  <p>Amount to pay: {convert(thrift.amount)}</p>
                  {/* Add more thrift information fields as needed */}
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
    </div>
  )
}

export default Dash