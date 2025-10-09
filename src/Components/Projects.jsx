import { useState} from "react";
import TextScroll from "./textScroll";
import Internship from "./Internship";
import TeamMember from "./TeamMember";
import { motion } from "framer-motion";
import Gallery from "./gallery"
import Contacts from "./Contacts";
import Footer from "./Footer";
const Projects = () => {

  const projects = [
    {
    title: ' EXPERTISE',
    description: 'Our expertise in cutting-edge technologies ensures innovative and scalable solutions.',
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" 
        width="25" height="25" 
        viewBox="0 0 16 16">
        <path fill="currentColor" d="M9.07 6.746a2 2 0 0 0 2.91.001l.324-.344c.297.14.577.316.835.519l-.126.422a2 2 0 0 0 1.456 2.518l.348.083a4.7 4.7 0 0 1 .011 1.017l-.46.117a2 2 0 0 0-1.431 2.479l.156.556q-.383.294-.822.497l-.337-.357a2 2 0 0 0-2.91-.002l-.325.345a4.3 4.3 0 0 1-.835-.519l.126-.423a2 2 0 0 0-1.456-2.518l-.35-.083a4.7 4.7 0 0 1-.01-1.016l.462-.118a2 2 0 0 0 1.43-2.478l-.156-.557q.383-.294.822-.497zm-1.423-4.6a.5.5 0 0 1 .707 0C9.594 3.39 10.97 4 12.5 4a.5.5 0 0 1 .5.5v1.1a5.5 5.5 0 0 0-1-.392v-.227c-1.48-.112-2.815-.725-4-1.792c-1.186 1.066-2.52 1.68-4 1.792v2.52c0 1.432.362 2.561 1.019 3.44c.052.661.221 1.29.487 1.864C3.846 11.59 3 9.81 3 7.5v-3a.5.5 0 0 1 .5-.5c1.53 0 2.904-.61 4.147-1.854M10.501 9.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/>
        </svg>
    )
    },
    {
    title: ' COLLABORATION',
    description: 'We provide exceptional customer service and support throughout the project lifecycle.',
    icon: (
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 4.5A1.75 1.75 0 1 0 12 8a1.75 1.75 0 0 0 0-3.5M8.75 6.25a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M5 6.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M2 8a3 3 0 1 1 6 0a3 3 0 0 1-6 0m15.5 0a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0M19 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6M7.5 12.75c0-.966.784-1.75 1.75-1.75h5.5c.966 0 1.75.784 1.75 1.75v3.75a4.5 4.5 0 1 1-9 0zm1.75-.25a.25.25 0 0 0-.25.25v3.75a3 3 0 1 0 6 0v-3.75a.25.25 0 0 0-.25-.25zm-2.64-.522q-.109.369-.11.772v.81l-2.814.754a.25.25 0 0 0-.177.306l.712 2.657a3 3 0 0 0 3.161 2.212c.315.486.705.919 1.153 1.282a4.5 4.5 0 0 1-5.763-3.107l-.712-2.656a1.75 1.75 0 0 1 1.237-2.143zm8.855 8.793q.125.042.253.076a4.5 4.5 0 0 0 5.511-3.182l.712-2.656a1.75 1.75 0 0 0-1.237-2.144l-3.314-.888q.109.37.11.773v.81l2.816.754a.25.25 0 0 1 .176.306l-.712 2.657a3 3 0 0 1-3.162 2.212a5.5 5.5 0 0 1-1.153 1.282"/></svg>
    )
    },
    {
    title: ' INNOVATION',
    description: ' Our teams vast experience in various industries allows us to deliver customized solutions tailored to specific business needs.',
    icon: (
     <svg xmlns="http://www.w3.org/2000/svg" 
     width="25" 
     height="25" 
     viewBox="0 0 24 24">
     <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 18v-5.25m0 0a6 6 0 0 0 1.5-.189m-1.5.189a6 6 0 0 1-1.5-.189m3.75 7.478a12.1 12.1 0 0 1-4.5 0m3.75 2.383a14.4 14.4 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"/>
     </svg>
    )
    },
  ]

  return (
    <div>
       <section className="bg-[url('/Images/bg-mid.png')] bg-cover bg-center bg-no-repeat mx-auto relative h-[550vh]">
        <div className='min-h-screen py-20'>
          <div className="flex items-center justify-center">
              <div className="w-16 border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 uppercase text-sm font-rajdhani">WHY CHOOSE INTELLISEVEN</span>
              <div className="w-16 border-t border-gray-300"></div>
            </div>

            <div className='max-w-5xl py-10 mx-auto'>
               <div className='grid md:grid-cols-1 lg:grid-cols-3 justify-items-center'>
                {projects.map((item) => (
                   <div className='mt-7 bg-white shadow-top-only rounded-3xl py-7 px-6 mb-4 max-w-xs'>
                       <div>
                        <div className='flex gap-4 justify-start -space-x-3 mb-2'>
                           <span className="text-main">
                            {item.icon}
                           </span>
                              <h1 className='text-sm font-rajdhani tracking-wide font-light mt-1 uppercase'>{item.title}</h1>
                        </div>
                           <div className='px-2 py-1'>
                               <p className="font-rajdhani tracking-wider text-xs uppercase ">{item.description}</p>
                           </div>
                       </div>
                   </div>
                    ))}
               </div>
           </div>
           <div className="max-h-screen">
                 <TextScroll />
           </div>
            <div className="h-screen"> 
               <Internship/>
               <TeamMember className=""/>
               <Gallery/>
               <Contacts/>
               <Footer/>
            </div>
        </div>
        </section>
    </div>
  )
}

export default Projects
