import {motion} from 'framer-motion'

const textVariants={
  initial:{
    oapcity:0,
    x:-500
  },
  animate:{
    opacity:1,
    x:0,
    transition:{
    staggerChildren:0.1,
      duration:1
    }
  },
  scrollbtn:{
    opacity:0,
    y:10,
    transition:{
      repeat:Infinity,
      duration:2
    }
  }
}

const slidevariants={
  initial:{
    x:0,
  },
  animate:{
    x:"70%",
    transition:{
      duration:5,
      repeat:Infinity
  }
}}

export default function Hero() {
  return (
    <div className="h-[calc(100vh-240px)]    bg-gradient-to-b from-[#0c0c1d] to-[#111132]  ">

<motion.div   variants={textVariants} initial="initial" animate="animate" className="ml-60 mt-36 ">  
<div className="h-full flex flex-col justify-center gap-5">
<motion.h2  variants={textVariants} className="text-lg text-purple-700  font-semibold tracking-widest">PRANAV ADITYA</motion.h2>
<motion.h1 variants={textVariants} className="text-5xl font-bold">Web developer </motion.h1>


 
  <div >
    <motion.button variants={textVariants}  whileHover="hover" className="p-2 border-[1px]  cursor-pointer mr-2 border-white rounded-md bg-transparent">Resume</motion.button>
    <motion.button  variants={textVariants} className="p-2 border-[1px] border-white cursor-pointer rounded-md bg-transparent">Contact</motion.button>
  </div>
  </div>
  <div>
    <motion.img src="scroll.png"  className='w-8 bg-slate-50 rounded-md mt-5' variants={ textVariants}animate="scrollbtn" alt="" />
  </div>
 
</motion.div>
<motion.div   variants={slidevariants} initial="initial" animate="animate" className="absolute mt-10 text-9xl text-[#ffffff09] ">
  Aspiring Developer
</motion.div>
<div> <img src="/hero.png" className="absolute  top-32 right-28" alt="" /></div>


     
    </div>
  )
}
