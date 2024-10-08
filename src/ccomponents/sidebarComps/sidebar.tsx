import Links from './Links'
import { useState } from 'react';
import Togglebutton from './Togglebutton'
import {  motion } from 'framer-motion';

export default function Sidebar() {
  const[isOpen,setIsOpen]=useState(false);
  const variants={
    open:{
      
      opacity:1,
      transition:{
        
        type:"spring",
        stiffness:20,}

    },
    closed:{
      opacity:0,

      transition:{
        delay:0.2,

type:"spring",
stiffness:400,
damping:40
      }

    }
  }

  return (
    <motion.div animate={isOpen?"open":"closed"}   className="flex  z-10 absolute flex-col items-center justify-center  bg-white text-black " >

      < motion.div className="fixed top-0 left-0 bottom-0 md:w-[400px] w-[250px] bg-white" variants={variants} initial={{opacity:0}}>
        <Links/>
        
      </motion.div>
      <div>
        <Togglebutton  open={setIsOpen}/>
      </div>
      
    </motion.div>
  )
}
