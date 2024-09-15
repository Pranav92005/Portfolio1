
import './App.css'
import Hero from './ccomponents/hero/Hero'
import Navbar from './ccomponents/Navbar'
import Projects from './ccomponents/Projects'
import Skills from './ccomponents/skills'
import {useState} from 'react'


function App() {
  const[mode,setMode]=useState("light")
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
    }
    
    else{
      setMode("light")
    }
    console.log(mode);
  }
  


  
  
  

  return (
    <div className={mode==="dark"?"bg-black text-slate-300":"bg-white text-black "}>
    <section id='Homepage'>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Hero />
    </section>
    <section id='Skills'>
      <Skills/>
    </section>
    {/* <section>Services</section> */}
    <section id='Projects'><Projects/></section>
    
    
    </div>
  )
}

export default App
