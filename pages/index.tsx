import ServiceCard from '../components/ServiceCard'
import {services} from '../data'
// import{ GetServerSidePropsContext, GetStaticPropsContext } from 'next'

const index = () => {

return (
  <div>
    <h5>Vivamus iaculis interdum ex, vitae posuere massa mattis sed. Cras vulputate dolor eu diam 
      feugiat, eget congue elit ornare. Curabitur finibus eget dui et commodo. Mauris euismod nisi 
      a turpis pulvinar, vel condimentum neque facilisis. Nulla porta pulvinar lorem. Pellentesque 
      cursus massa massa, sed convallis augue semper nec. Ut nec dolor quis erat te
      </h5>
      <div>
        <h6>
          Skills
        </h6>
        <div>
          {
            services.map(service=>
            <ServiceCard service={service} />)
          }
        </div>
      </div>
  </div>

  )
}


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