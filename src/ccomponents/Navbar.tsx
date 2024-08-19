import {motion} from 'framer-motion'
import Sidebar from './sidebarComps/sidebar'

export default function Navbar() {
  return (
    <div>
      <Sidebar/>
        
        <div className="max-w-[1366px] m-auto flex items-center justify-between p-10">
            <motion.span  className='ml-3'> Pranav</motion.span>
            <div  className="flex gap-5">
                <a href=""><img src="/insta.png" alt="" width={20} /></a>
                <a href=""><img src="/linkedin.png" alt="" width={20} /></a>
                <a href=""><img src="/mail.png" alt="" width={20} /></a>
            </div>
        </div>
      
    </div>
  )
}
