
import Sidebar from './sidebarComps/sidebar'


export default function Navbar({mode, toggleMode}: {mode: string, toggleMode: () => void}) {
  
  return (
    <div >
      <Sidebar/>
        
        <div className="max-w-[1366px] m-auto  flex items-center justify-between p-10 ">
          <div></div>
            <div  className="flex  justify-end gap-5">
                <a href="https://instagram.com/aditya6267_" target='_blank'><img src="/insta.png" alt="" width={20} /></a>
                <a href="https://www.linkedin.com/in/pranav-aditya-21459928a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target='_blank'><img src="/linkedin.png" alt="" width={20} /></a>
                <a href="mailto:pranavaditya92005@gmail.com" target='_blank'><img src="/mail.png" alt="" width={20} /></a>
                <button onClick={toggleMode}>{mode==="light"?<img src='/dark.png' width={20}></img>:<img src='/light.png'  className="rounded-md" width={20}></img>} </button>
            </div>
        </div>
      
    </div>
  )
}
