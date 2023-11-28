import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/Signin';
import "react-toastify/dist/ReactToastify.css"
// import chats from './pages/Chats';
import Dashboard from './pages/Dashboard';
import "react-toastify/dist/ReactToastify.css"
import Home from './pages/Home';
import Create from './pages/Create';
import ThriftDetails from './pages/Thrift';
// import { Provider } from "react-redux"
import store from './Redux/store';
import { Provider } from 'react-redux';
import Dash from './components/Dash';
import Thrifts from './components/Thrifts';
import Wallet from './pages/Wallet';
import Join from './pages/Join';
import Transactions from './pages/Transactions';
import NotFound from './pages/NotFound';
import Process from './pages/Process';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<App/>}/>
        <Route path='/create' element={<Create/>}/>
       
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/dashboard' element={<Dashboard/>}>
          
           <Route path='' element={<Dash />} />
            <Route path='thrifts' element={<Thrifts />}>
          </Route>
          <Route path='thrifts/:id' element={<ThriftDetails />}/>
          <Route path='join/:id' element={<Join />}/>
          <Route path='pay' element={<Wallet />} />
          <Route path='transactions' element={<Transactions />} />
          
        </Route>
        <Route path='/chats' element={<chats />}/>
       <Route path="/*" element={<NotFound />} />
       <Route path="/process" element={<Process />} />

       
      </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
