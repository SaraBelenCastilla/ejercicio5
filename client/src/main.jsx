import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './css/stilos.css'
import App from './App'
import Cabecera from './components/Cabecera'


ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <Router>



  <Routes>

     <Route path='/' element={<App/>}/> 
     <Route path='/' element={<Cabecera/>}/> 
    

   
  </Routes>

  

</Router>
    </>
 
)
