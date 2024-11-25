

export default function Map() {
  return (
    <div className=" md:flex p-2 m-3 ">

<div className="w-full max-w-4xl">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29964.958184780473!2d85.66740709999999!3d20.1499044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19ac3a67f90fd3%3A0xa9aff271f246badf!2sAdministrative%20Building%20IIT%20Bhubaneswar!5e0!3m2!1sen!2sin!4v1732555629290!5m2!1sen!2sin" 
      className="w-full aspect-[16/9] border-0" 
      
      loading="lazy">
    </iframe>
  </div>


    <div>
<div className="md:p-10 p-2  mt-2 lg:ml-3">
    <h1 className="font-semibold text-xl">Connect with me</h1>
    <p>Feel free to reach out to me with any questions or inquiries.</p>

    <div className="flex flex-col mt-5">

    <label htmlFor="Name">Name</label>
    <input type="text" id="Name"  className="h-8 mb-3 w-72 md:w-96 border border-black p-3 rounded-md caret-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 " />
    <label htmlFor="Email">Email</label>
    <input type="text" id="Email"  className="h-8 mb-3 w-72 md:w-96 border border-black p-3 rounded-md caret-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"  />
    <label htmlFor="Message">Message</label>
    <input type="text" id="Message"  className="h-20 mb-3 w-72 md:w-96 border border-black p-3 rounded-md caret-slate-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50" />
    <button className="bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 w-72 md:w-96 rounded">
  Send Message
</button>
<p className="text-sm text-slate-500 mt-1">I'll get back to you as soon as possible!</p>
    </div>
   
</div>

    </div>
    </div>
    
  )
}
