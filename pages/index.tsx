import ServiceCard from '../components/ServiceCard'
import {services} from '../data'
import { FaLaptop, FaCode,  } from 'react-icons/fa'
import { AiOutlineLine } from 'react-icons/ai'
import { BsDot, BsLaptop } from 'react-icons/bs'
import { MdLaptopChromebook} from 'react-icons/md'

// import{ GetServerSidePropsContext, GetStaticPropsContext } from 'next'

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">
      <h6 className="mt-6 mb-2 text-base font-light tracking-wider text-center text-lightestslate">
        
        A developer who has a love for tech and believes in discovering the "why." 
        I constantly find myself seeking for new ways to understand and create.
      
      </h6>
      <div/>
 
      <div
        className="flex-grow p-2 mt-4 border-2 border-opacity-50 border-zinclight bg-zincc "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        
     <div className='py-2 my-1 text-center ' >

     <h5 className='mt-1 text-3xl font-light text-center text-white font-lg'>What I Do </h5>
        <div className='grid gap-12 md:grid-cols-2 place-items-center'   >
        <div className='p-4 bg-black border-2 rounded-full border-opacity-20 border-lightestslate bg-origin-content'>
        <FaLaptop className="text-xs service-icon" />
        </div>
        <div className='p-4 bg-black border-2 rounded-full border-opacity-20 border-lightestslate bg-origin-content'>
        <FaCode className="bg-opacity-50 service-icon" />
        </div>
        </div>
        </div>
      
        
        <div className="grid justify-center gap-10 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="items-center col-span-2 p-2 text-base font-thin tracking-wider text-center rounded-lg md:col-span-1"
              key={service.title}
            >
              
              <ServiceCard   service={service} />
            </div>
          
          ))}
        </div>
      </div>
    </div>
  );
};

export default index

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
//   )=>{

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props:{
//       services: data.services,
//     },
//   }
// }


// export const getStaticProps = async (
//   context: GetStaticPropsContext
//   )=>{

//   const res = await fetch('http://localhost:3000/api/services')
//   const data = await res.json()

//   console.log('SERVER', services)

//   return {
//     props:{
//       services: data.services,
//     },
//   }
// }