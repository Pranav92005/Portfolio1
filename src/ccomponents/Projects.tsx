const projects=[
    {
        title:"Blog App",
        description:"This is a blog app where you can write your blogs and share it with the world. You can also read blogs written by others. This app is made using React and Express.",
        link:"https://blog-five-rust.vercel.app/",
        img:"/blog.png",
},
{
    title:"Transaction App",
    description:"This is a transaction app where you can keep track of your transactions. This app is made using React and Express.",
    link:"https://transaction-frontend-five.vercel.app/",
    img:" tranP.png"
},
{
    title:"Project 3",
    description:"This is a project 3",
    link:"",
    img:""
},
]


export default function Projects() {
  return (
    
    <div className="max-w-[1366px] m-auto p-10">
    <h1 className="text-3xl font-bold text-purple-700">Projects</h1>
<div className="mt-10">  <a 
  href="google.com" 
  target="_blank" 

  className="w-fit  p-1 border-purple-500 border-[1px] rounded-md cursor-pointer"
>
  View all 
</a></div>
  


      <div>  

        <div >
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {projects.map((project,index)=><div key={index} className="  border-[1px] border-purple-700 p-5 rounded-md mt-5">
                    <a href={project.link} target="_blank"><img src={project.img} className=" h-60  rounded-md"   alt="" /></a>
                <p className="text-xl mt-2 font-semibold text-purple-700">{project.title}</p>
                <p className="text-sm mt-3 text-purple-500">{project.description}</p>
            </div>)}</div>
           
        </div>


      </div>
    </div>

    
  )
}
 