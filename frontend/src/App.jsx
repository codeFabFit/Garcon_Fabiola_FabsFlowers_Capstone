// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import data from "./data"

function App() {

  return (
    <>
    <div>
      <header>
        <a href="/">FabsFlowers</a>
       </header>  
          <main>
            <h1>Featured Flowers</h1>
            {/* now import data so it will appear here */}
            {
              data.products.map(product => (<div key={product.id}>
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <p>{product.price}</p>
                <p>{product.description}</p>

              </div>))
            }
          </main>
      
    </div>
   
    </>
  )
}

export default App
