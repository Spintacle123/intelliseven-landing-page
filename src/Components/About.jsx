const About = () => {
  return (
    <div className=''>
      <div className='flex  justify-center'>
        <div className='mt-20 lg:mt-52 max-w-2xl text-center'>

          <div className="flex items-center justify-center mt-28">
              <div className="w-16 border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500 uppercase text-sm">About Us</span>
              <div className="w-16 border-t border-gray-300"></div>
            </div>
        </div>
      </div>  

      <div className='h-full'>
        <div className=" justify-center max-w-7xl  mx-auto mt-7 
                bg-white shadow-top-only rounded-4xl p-14">
          <div className="mb-10 text-left">
                 <p className="font-rajdhani  font-medium text-sm uppercase">
                   Intelliseven is an innovative IT company dedicated to providing comprehensive
                   and tailored solutions to meet the evolving needs of businesses. Our team of
                   experienced professionals utilizes the latest technologies to deliver scalable
                   and cost-effective solutions, while ensuring exceptional customer service and
                   support throughout the project lifecycle. We strive to exceed expectations and
                   drive success for our clients.
                 </p>
                 <span className='text-main font-rajdhani text-xs'><a href="">READ MORE...</a></span>
              </div>
            </div>
               <div className="flex items-center justify-center bg-white">
                <div className="grid grid-cols-3  max-w-7xl mx-auto ">
                  <div className="max-w-xs">
                    <h1 className="font-rajdhani text-sm text-gray-400 tracking-wider uppercase pb-4">
                      Mission
                    </h1>
                    <p className="font-rajdhani uppercase text-sm leading-relaxed text-gray-700">
                      At IntelliSeven Solutions Inc., our mission is to empower businesses in the Philippines 
                      and beyond by delivering comprehensive IT solutions and services that drive digital 
                      transformation, foster innovation, and enable sustainable growth. We strive to be the 
                      trusted partner that leverages technology to unlock the full potential of our clients’ 
                      businesses.
                    </p>
                  </div>
                  <div className="relative w-full flex items-center justify-center">
                    <img
                      src="/Images/blueBall.svg"
                      alt="Blue Ball"
                      className="absolute left-0 w-50 top-2 translate-x-[-1rem] drop-shadow-xl"
                    />
                    <img
                      src="/Images/whiteBall.svg"
                      alt="White Ball"
                      className="z-10 translate-x-[-2rem] translate-y-[-3rem] w-full h-full drop-shadow-2xl"
                    />
                    <img
                      src="/Images/pinkBall.svg"
                      alt="Pink Ball"
                      className="absolute z-20 w-60 translate-x-[4rem]  translate-y-[1rem] drop-shadow-xl"
                    />
                  </div>
                    <div className="max-w-xs self justify-self-end text-left">
                    <h1 className="font-rajdhani text-sm text-gray-400 tracking-wider uppercase pb-4">
                      Vision
                    </h1>
                    <p className="font-rajdhani uppercase text-sm leading-relaxed text-gray-700">
                      Our vision is to be the premier provider of innovative and transformative IT solutions, 
                      empowering businesses in the Philippines and globally to thrive in the digital age. 
                      We aspire to be the catalyst for positive change, driving digital transformation, fostering 
                      innovation, and creating sustainable value for our clients and communities.
                    </p>
                  </div>
                </div>
              </div>

          </div>

    </div>
  )
}

export default About
