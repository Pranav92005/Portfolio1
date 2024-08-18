

export default function Togglebutton({open}:{open:React.Dispatch<React.SetStateAction<boolean>>}) {
  return (
    <div>
    <button className="w-[50px] h-[50px] rounded-full fixed bg-transparent border-none top-[25px] left-[25px] cursor-pointer" onClick={() => open(prev => !prev)}>hello</button>
      
    </div>
  )
}
