import {motion} from 'framer-motion'

const variant={
  open:{
    transition:{
      staggerChildren:0.1,
      
    }
  }
  
}
const itemvaianst={
  open:{
    y:0,
    opacity:1
  },
  closed:{
    y:50,
    opacity:0
  }
}


const items=["Homepage","About","Projects","Contact","Links"]

export default function Links() {
  return (
    <motion.div variants={variant}   className="absolute w-full h-full  flex flex-col items-center justify-center gap-5 ">
     {items.map((item,index)=><motion.a variants={itemvaianst} whileHover={{scale:1.1}} whileTap={{scale:0.9}} key={index} href={`#${item}`} className="text-2xl">{item}</motion.a>)}
    </motion.div>
  )
}
