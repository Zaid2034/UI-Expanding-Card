/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import bgImage from './assets/bgImage.jpg'

function App() {
const [active,setIsActive]=useState(1)
  return (
    <>
      <div className='flex flex-col h-screen justify-center'>
        <div className='flex h-[90%] justify-center items-center mx-24'>
          <div className={`bg-custom-bg h-[90%] ${active==1? 'w-[60%]':'w-[10%]'} m-4 text-center border rounded-[60px] transition-all duration-500 ease-in-out`} onClick={()=>{setIsActive(1)}}></div>
          <div className={`bg-custom-bg h-[90%] ${active==2? 'w-[60%]':'w-[10%]'} m-4 text-center border rounded-[60px] transition-all duration-500 ease-in-out`} onClick={()=>{setIsActive(2)}}></div>
          <div className={`bg-custom-bg h-[90%] ${active==3? 'w-[60%]':'w-[10%]'} m-4 text-center border rounded-[60px] transition-all duration-500 ease-in-out`} onClick={()=>{setIsActive(3)}}></div>
          <div className={`bg-custom-bg h-[90%] ${active==4? 'w-[60%]':'w-[10%]'} m-4 text-center border rounded-[60px] transition-all duration-500 ease-in-out`} onClick={()=>{setIsActive(4)}}></div>
          <div className={`bg-custom-bg h-[90%] ${active==5? 'w-[60%]':'w-[10%]'} m-4 text-center border rounded-[60px] transition-all duration-500 ease-in-out`} onClick={()=>{setIsActive(5)}}></div>
        </div>
      </div>
    </>
  )
}

export default App
