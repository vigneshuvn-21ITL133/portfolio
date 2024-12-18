import react from '../Image/reactjs.jpg'
import git from '../Image/github.jpg'
import postgres from '../Image/postgres.jpg'
import mongo from '../Image/mongodb.jpg'
import vscode from '../Image/vscode.png'
import next from '../Image/next.png'


import Image from 'next/image'
export default function Tech() {
    return(
         <div className="m-10 p-8 ml-14 shadow-md rounded-sm">
            <h2 className="text-3xl text-center underline underline-offset-1">Technologies</h2>
          <div className='flex container w-auto h-auto gap-8 justify-center items-center m-10 animate-pulse'>
            <Image src={react} alt="react" width={100} height={100} className='rounded-sm bg-white'/>
            <Image src={git} alt="git" width={100} height={100} className='rounded-sm bg-white'/>
            <Image src={postgres} alt="PostgresSQL" width={100} height={100} className='rounded-sm bg-white'/>
            <Image src={mongo} alt="MongoDB" width={100} height={100} className='rounded-sm'/>
            <Image src={vscode} alt="MongoDB" width={100} height={100} className='rounded-sm'/>
            <Image src={next} alt="Next" width={100} height={100} className='rounded-sm'/>
           </div>
         </div>
     
    )
}