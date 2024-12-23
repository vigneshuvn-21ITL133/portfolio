import Image from 'next/image'
import profile from '../Image/vigneshu.jpg'
export default function Aboutme() {
    return(
  
         <div className='grid grid-cols-2 m-10 p-16 gap-5 ml-10 shadow-lg rounded-sm'> 
         <div className='col-span-1 w-auto h-96  ml-16'>
         <h3 className="font-mono m-1">Hello,welcome</h3>
            <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-white font-bold">I m Vigneshu</h1>
            <p className="text-2xl font-mono">
            Creative and detail-oriented web developer specializing in building responsive and user-friendly websites. Passionate about transforming ideas into functional digital solutions using modern technologies.
            </p>
            <button className="bg-orange-400 text-white px-4 py-2 rounded-md mt-4 hover:bg-orange-500">
            <a href='https://drive.google.com/file/d/1M0RqIQOjLriHOSwHO-5eKcF0l7kqWCbV/view?usp=sharing'>Resume</a>
            </button>
            
         </div>
         <div className='col-span-1 w-auto h-96 ml-64'>
          <Image src={profile} alt="profile" width={250} height={250} className='rounded-full'/>
          </div>
         </div>
    )
}
