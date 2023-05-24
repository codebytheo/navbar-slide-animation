import { AnimatePresence } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar'
// import lib
import { useState} from 'react'

function App() {

  const [state,setState] = useState({
    initial:false,
    clicked:null,
    menuName:"menu"
  })
  const [isDisabled,setIsDisabled] = useState(false)

  const setDisableDelay = () => {
    setIsDisabled(!isDisabled)
    setTimeout(() => {
      setIsDisabled(false)
    },1200)
  }

  const handleClick = () => {
    setDisableDelay()

    if(state.initial === false){
      setState({
        initial:null,
        clicked:true,
        menuName:"close"
      })
    }
    if(state.clicked === true){
      setState({
        clicked:false,
        menuName:"menu"
      })
    }
    if(state.clicked === false){
      setState({
        clicked:true,
        menuName:"close"
      })
    }

  }

  return (
    <>
      <AnimatePresence mode="wait">
        {state.clicked === true && 
          <Navbar />
        }
      </AnimatePresence>
      <div className='flex justify-between w-full py-4 px-[2rem]'>
        <h1 className='font-semibold text-xl text-yellow-600 mix-blend-exclusion relative z-50'>Navigation</h1>
        <button className="relative font-semibold text-yellow-600 z-50 mix-blend-exclusion outline-none" disabled={isDisabled} onClick={handleClick}>{state.menuName}</button>
      </div>
      <div>
        <h1 className='text-[120px] text-[#0e0e0e] text-center font-bold'>SUBS</h1>
      </div>
      <img src="/img/meme.jpg" alt="meme" className='w-1/4 m-auto' />
    </>
  )
}

export default App
