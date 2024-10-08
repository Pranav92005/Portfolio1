import { motion } from 'framer-motion';

export default function Togglebutton({open}:{open:React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    < div>
    <button className="md:w-[50px] md:h-[50px] rounded-full fixed bg-white border-none top-[25px] left-[25px] cursor-pointer" onClick={() => open(prev => !prev)}>
    <motion.svg variants={{
      open:{opacity:0},
      closed:{opacity:1}
    }} className="ml-1 absolute" width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7L4 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M20 12L4 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M20 17L4 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
</motion.svg>

<motion.svg  variants={{
      open:{opacity:1},
      closed:{opacity:0}
}}width="40px" className="ml-1" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#0F0F0F"/>
</motion.svg>



    </button>
      
    </div>
  )
}
