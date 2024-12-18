import Image from 'next/image'
import project1 from '../Image/cricket.webp'
import project2 from '../Image/drip.webp'
import project3 from '../Image/blind.webp'


export default function Project() {
     return(
    <div>
    <h2 className="text-2xl text-center">Projects</h2>
    <div className="grid grid-cols-3 m-10 gap-10 p-8 ml-32 shadow-sm rounded-sm">
    <div className="col-span-1 w-auto h-auto justify-center items-center">
     <Image src={project1} alt="project1" width={250} height={250} className='rounded-xl'/>
     <p className='font-mono'>E-commerce website for sports products in Reactjs,MongoDB.</p>
     <a href=''className='text-orange-600'>click here</a>
    </div>
    <div className="col-span-1 w-auto h-auto justify-center items-center">
     <Image src={project2} alt="project2" width={250} height={250} className='rounded-xl'/>
    <p className='font-mono'>E-commerce for website for srividhyaa Enterprises</p>
    <a href='' className='text-orange-600'>click here</a>
    </div>
    <div className="col-span-1 w-auto h-auto justify-center items-center">
     <Image src={project3} alt="project3" width={250} height={250} className='rounded-xl'/>
        <p className='font-mono'>Developing a blind stick projects using IOT components.</p>
        <a href='' className='text-orange-600'>click here</a>
    </div>
    </div>
    </div>
    )
}
