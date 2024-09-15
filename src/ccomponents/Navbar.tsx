
import Sidebar from './sidebarComps/sidebar'


export default function Navbar({mode, toggleMode}: {mode: string, toggleMode: () => void}) {
  
  return (
    <div >
      <Sidebar/>
        
        <div className="max-w-[1366px] m-auto  flex items-center justify-between p-10 ">
          <div></div>
            <div  className="flex  justify-end gap-5">
                <a href=""><img src="/insta.png" alt="" width={20} /></a>
                <a href=""><img src="/linkedin.png" alt="" width={20} /></a>
                <a href=""><img src="/mail.png" alt="" width={20} /></a>
                <button onClick={toggleMode}>{mode==="light"?<img src='/dark.png' width={20}></img>:<img src='/light.png'  className="rounded-md" width={20}></img>} </button>
            </div>
        </div>
      
    </div>
  )
}
