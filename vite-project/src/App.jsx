import React from 'react'
import Sidenav from './Components/Navigations/Sidenav'
import {Routes,BrowserRouter,Route} from 'react-router-dom'
import Home from './Components/Pages/Home'

const App = () => {
  return (
   <>
   <Sidenav />
   <BrowserRouter>
   <Routes>
    <Route path='/home' exact={true} element={<Home />} />
   </Routes>
   </BrowserRouter>
   </>
  )
}

export default App
