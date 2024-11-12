import React from 'react'
import Headers from './components/Headers'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-[url('..\public\Mask_group.png')] bg-cover bg-center h-screen w-full m-0 absolute ">
      <div className='bg-black/80 w-full h-full bg-cover absolute'>
        <Headers />
        <Body />
        <Footer/>
      </div>


    </div>
  )
}

export default App