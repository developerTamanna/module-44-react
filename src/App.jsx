

// import { BiPlanet } from 'react-icons/bi'
import './App.css'
// import DaisyNav from './components/DaisyNav/DaisyNav'
import Navbar from './components/Navbar/Navbar'
// import { MdDescription } from 'react-icons/md'
import { Suspense } from 'react'
import PricingOptions from './components/PricingOptions/PricingOptions'
import ResultChat from './components/DaisyPricing/ResultChart/ResultChat'


const pricingPromise = fetch('pricingData.json').then(res=>res.json())





function App() {
 

  return (
    <>
   <header>
   <Navbar></Navbar>
    {/* <DaisyNav></DaisyNav> */}
    
   </header>

   <main>
    <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
   <PricingOptions
   pricingPromise ={pricingPromise}
   ></PricingOptions>
    </Suspense>


     <ResultChat></ResultChat>


   </main>
    </>
  )
}

export default App


