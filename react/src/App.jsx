import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header1 from './components/Header1'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Registration from './components/Registration'
import Login from './components/login'
import LoginPage from './components/Loginpage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Header1/>
        
        <BrowserRouter>
             <Navbar/>       

        <Routes>
          <Route path="/loginpage" element={<LoginPage/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Registration/>}/>

        </Routes>
      
        </BrowserRouter>
        
        </div>
    </div>
  )
}

export default App
