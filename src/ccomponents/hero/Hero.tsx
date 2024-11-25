import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'

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

// const slidevariants={
//   initial:{
//     x:0,
//   },
//   animate:{
//     x:"70%",
//     transition:{
//       duration:5,
//       repeat:Infinity
//   }
// }}

export default function Hero() {
  const Resumelink="https://drive.google.com/file/d/1hIocJNOv0OniwqEvtfJP3cwywOlkqYtJ/view?usp=sharing";
  const navigate=useNavigate();
  return (
    <div className="h-[550px]   ">
      <div className='absolute lg:mt-[-10vh] md:ml-[30vw] ml-[15vw]  lg:ml-[60vw]  mt-12 '> <img src="/hero.png" className='lg:w-[500px] w-[300px]'  alt="" /> </div> 

<motion.div   variants={textVariants} initial="initial" animate="animate" className=" absolute ml-24  mt-96 lg:ml-96 lg:mt-36 lg:static "> 

<div className='flex m-3 justify-center md:justify-start md:ml-[20vw] lg:ml-[-10vw]'>

<div className="h-full lg:flex lg:flex-col     gap-5">

<motion.h2  variants={textVariants} className="text-lg md:text-3xl text-purple-700  font-semibold tracking-widest">PRANAV ADITYA</motion.h2>
<motion.h1 variants={textVariants} className="md:text-5xl text-3xl font-bold">Web developer </motion.h1>


 
  <div >
    <motion.button onClick={()=>{window.open(Resumelink,'_blank')}} variants={textVariants}  whileHover="hover" className="p-2 border-[1px]  cursor-pointer mr-2 border-purple-500 rounded-md bg-transparent">Resume</motion.button>
    <motion.button onClick={()=>{navigate('/#contact')}} variants={textVariants} className="p-2 border-[1px] border-purple-500 cursor-pointer rounded-md bg-transparent">Contact</motion.button>
  </div>
  </div>
</div>

  <div>
    <motion.img src="scroll.png"  className='w-8  mt-5' variants={ textVariants}animate="scrollbtn" alt="" />
  </div>
 
</motion.div>
{/* <motion.div   variants={slidevariants} initial="initial" animate="animate" className="absolute mt-10 text-9xl text-slate-800 lg:opacity-30 opacity-0">
  Aspiring Developer
</motion.div> */}


  
     
    </div>
  )
}
