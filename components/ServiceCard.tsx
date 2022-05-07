import { FunctionComponent } from "react"
import { IService } from '../type'

const ServiceCard:FunctionComponent<{service:IService}> = ({service:{ about, title}}) => {

  function createMarkup() {
    return {
       __html: about,
    }
 }
  return (
   
    
    <div className='flex flex-col items-center p-2 border-2 border-opacity-20 border-lightestslate rounded-3xl bg-zincdark'>
       <h6 className='text-white border-b-2 border-green'>{title}</h6>
       
       <p className='content-center p-4 font-light tracking-wider text-center text-textwhite' dangerouslySetInnerHTML={createMarkup()} />
    </div>


)
}

export default ServiceCard