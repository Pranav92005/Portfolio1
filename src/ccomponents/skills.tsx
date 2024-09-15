
const skills: string[] = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB',  'PostgreSQL',  'C', 'C++', 'TypeScript', 'Bootstrap', 'Tailwind CSS',  'Data Structures', 'Algorithms']

export default function Skills() {
  return (
    <div >
      

        <div className="max-w-[1366px] m-auto  p-10">
            <h1 className="text-3xl font-bold text-purple-700">Skills</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
            {skills.map((skill, index) => (
                <div key={index} className="border-[1px] border-purple-700 p-3 rounded-md">
                <p className="text-lg font-semibold text-purple-700">{skill}</p>
                </div>
            ))}
            </div>
        </div>

      
    </div>
  )
}
