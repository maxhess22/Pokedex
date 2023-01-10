import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  BrowserRouter, Routes, Route 
} from "react-router-dom";
import './index.css'
import Root from './routes/root';
import Pokemon from './routes/pokemon';
import ErrorPage from './routes/ErrorPage';








ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Root/>}/>
        <Route path='pokemon/:id' element={<Pokemon/>}/>
      
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
