import { useState, useEffect, useRef } from 'react'
import {motion} from 'framer-motion'
import * as THREE from 'three'
import './App.css'
import './fire.js'
import image from './assets/images.jpeg'


function AddNavbar(){
  return(
    <nav className="fixed top-[0%] mt-[1%] z-[200] w-[100%] h-[fit-content] m-auto p-[0] flex flex-row align-middle justify-center text-center bg-transparent ">
      <ul className="relative w-[75%] h-[1em] m-auto p-[0] flex flex-row align-middle justify-start text-start ">
        <li className="text-2xl ml-[10%] text-white underline underline-offset-4 "><a href="#about">About Mailbot</a></li>
        <li className="text-2xl ml-[10%] text-white underline underline-offset-4 "><a href="#pricing">Pricing</a></li>
        <li className="text-2xl ml-[10%] text-white underline underline-offset-4 "><a href="#contact">Contact</a></li>
      </ul>
      <ul className="relative w-[25%] h-[1em] m-auto p-[0] text-center flex flex-row align-middle justify-center ">
        <li className="text-2xl text-violet-400 underline underline-offset-4"><a href="./dashboard/dashboard.html">Dashboard</a></li>
      </ul>
    </nav>
  )
}
export default function App(){
  return(
    <div className="relative w-[100%] h-[100%] m-auto p-0 flex flex-col align-middle justify-center text-center   ">
      <AddNavbar></AddNavbar>
      <section className="flex flex-col align-middle justify-center text-center min-h-[fit-content] max-h-[100vh] min-w-[100%] ">
        <div className="relative w-[100%] h-[100vh] m-auto p-[0] opacity-[1] blur-2xl z-[-1] ">
          <motion.div initial={{translateY: 0 + "%"}} transition={{type: "keyframes", duration: 10, repeat: Infinity}} animate={{translateY: 100 + "%"}} className="relative w-[100%] h-[50%] m-auto p-[0] bg-gradient-to-tr from-sky-400 via-sky-500 to-sky-600 "></motion.div>
          <motion.div initial={{translateY: 0 + "%"}} transition={{type: "keyframes", duration: 10, repeat: Infinity}} animate={{translateY: -100 + "%"}} className="relative w-[100%] h-[50%] m-auto p-[0] bg-gradient-to-tr from-violet-400 via-violet-500 to-violet-600 "></motion.div>
        </div>
        <div className="relative w-[100%] h-[100vh] m-auto p-[0] translate-y-[-100%] gap-[3px] grid grid-cols-2 grid-rows-2 md:grid-cols-3 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-4 xl:grid-cols-5 xl:grid-rows-5 z-[0] ">
          <div className="items flex"></div>
          <div className="items flex"></div>
          <div className="items flex"></div>
          <div className="items flex"></div>
          <div className="items hidden sm:flex"></div>
          <div className="items hidden sm:flex"></div>
          <div className="items hidden sm:flex"></div>
          <div className="items hidden sm:flex"></div>
          <div className="items hidden md:flex"></div>
          <div className="items hidden md:flex"></div>
          <div className="items hidden md:flex"></div>
          <div className="items hidden md:flex"></div>
          <div className="items hidden lg:flex "></div>
          <div className="items hidden lg:flex "></div>
          <div className="items hidden lg:flex "></div>
          <div className="items hidden lg:flex "></div>
          <div className="items hidden xl:flex"></div>
          <div className="items hidden xl:flex"></div>
          <div className="items hidden xl:flex"></div>
          <div className="items hidden xl:flex"></div>
          <div className="items hidden xl:flex"></div>
          <div className="items hidden xl:flex"></div>
          <div className="items hidden xl:flex"></div>
          <div className="items hidden xl:flex"></div>
          <div className="items hidden xl:flex"></div>
        </div>
        <div className="relative w-[100%] h-[100vh] translate-y-[-200%] m-auto p-[0] flex flex-col align-middle justify-center text-center z-[1] ">
          <div className="relative w-[30em] h-[40vh] translate-y-[50%] shadow-2xl shadow-violet-400 m-auto p-[0] flex flex-col align-middle justify-center text-center bg-gradient-to-tr from-violet-400 via-sky-500 to-violet-600 opacity-[0.2] blur-2xl ">
          </div>
          <div className="relative w-[28em] translate-y-[-80%] rounded-xl h-[38vh] m-auto p-[0] flex flex-col align-middle justify-evenly text-center bg-gray-900">
              <h1 className="text-4xl text-white">MailBot</h1>
              <p className="text-3xl text-white">
                Automate Gmails
              </p>
              <div className="relative w-[100%] h-[3em] m-0 p-[0] flex flex-row align-middle justify-center text-center ">
                <motion.button onClick={() => window.location.href = "/dashboard/dashboard.html"} initial={{scale: 1}} whileHover={{scale: 0.9}} whileTap={{scale: 1.1}} transition={{type: "spring", duration: 1}} className="relative w-[8em] h-[3em] m-auto p-[0] bg-gray-800 rounded-md cursor-pointer text-center underline underline-offset-4 text-white text-2xl ">
                  Dashboard
                </motion.button>
              </div>
          </div>
        </div>
      </section>
      <section id="about" className="flex flex-col align-middle justify-center text-center min-h-[50vh] max-h-[fit-content] min-w-[100%] translate-y-[-400%] ">
        <div className="relative w-[100%] h-[fit-content] m-0 p-[0] flex flex-row align-middle justify-center text-center ">
          <h1 className="text-4xl text-white ml-[0%] ">About Mailbot</h1>
        </div>
        <div className="relative w-[100%] h-[fit-content] mt-[2%] m-0 p-[0] flex flex-row align-middle justify-center text-center ">
          <p className="text-3xl text-white ml-[0%] ">
            Automate Gmail sending with Mailbot<br></br>
            Take the stress out of sending Gmails<br></br>
            <a href="" className="text-violet-400 underline text-2xl underline-offset-4">To the Dashbord</a>
          </p>
        </div>

      </section>
      <section id="pricing" className="flex flex-col align-middle justify-center text-center min-h-[50vh] max-h-[fit-content] min-w-[100%] translate-y-[-400%] ">
        <div className="relative w-[100%] h-[fit-content] m-0 p-[0] flex flex-col align-middle justify-center text-center">
          <h1 className="text-white text-3xl">Price list</h1>
          <p className="text-white text-2xl">Save time on Gmails</p>
        </div>
        <div className="relative w-[100%] h-[fit-content] m-0 mt-[3%] p-[0] flex flex-col align-middle justify-end text-end ">
          <div className="relative w-[100%] h-[fit-content] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
            <p className="text-2xl text-white ml-[0%] ">1 cent / $0.01 per 1 emails</p>
          </div>
          <div className="relative w-[100%] h-[fit-content] mt-[3%] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
            <p className="text-2xl text-white ml-[0%] ">100 cent / $1 per 100 emails</p>
          </div>
        </div>
      </section>
      <section id="contact" className="flex flex-col align-middle justify-center text-center min-h-[50vh] max-h-[fit-content] min-w-[100%] translate-y-[-400%] ">
        <div className="relative w-[100%] h-[fit-content] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
          <h1 className="text-3xl text-white">Contact info</h1>
        </div>
        <div className="relative w-[100%] h-[fit-content] m-auto p-[0] flex flex-row align-middle justify-center text-center ">
          <h1 className="text-2xl text-white">
            <a href="mailto:Jameschambers732@gmail.com" className="text-violet-400 underline underline-offset-4">Jameschambers732@gmail.com</a>
          </h1>
        </div>
      </section>
    </div>
  )
}
