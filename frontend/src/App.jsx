// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import data from "./data"
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import HomeView from "./components/HomeView"
import ProductView from './components/ProductView'

function App() {

  return (
    
    <BrowserRouter>
    <div>
      <header>
        {/* you want to change from a href to link stop page refresh */}
        <Link to="/">FabsFlowers</Link>
       </header>  
          <main>

            {/* add routing here */}
      <Routes>
        <Route path="/products/:slug" element={<ProductView />}></Route>
        <Route path="/" element={<HomeView />}></Route>

        
      </Routes>

      </main>
       </div>    
   </BrowserRouter>
    
  )
}

export default App
