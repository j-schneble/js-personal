import { useEffect, useState, FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';


const NavItem: FunctionComponent<{
    active: string
    setActive: Function
    name: string
    route: string
 }> = ({ active, setActive, name, route }) => {
    return active !== name ? (
       <Link href={route}>
          <a>
             <span
                className='mx-2 cursor-pointer hover:border-b-4 hover:text-yellow-500'
                onClick={() => setActive(name)}>
                {name}
             </span>
          </a>
       </Link>
    ) : null
 }

const Navbar = () => {
   
    const { pathname } = useRouter()

    const [active, setActive] = useState<string>('')

    

    useEffect(() => {
        if (pathname === '/') setActive('Main')
        else if (pathname === '/projects') setActive('Projects')
        else if (pathname === '/skills') setActive('Skills')
     }, [])

     return (
        <div className='flex items-center justify-between px-5 py-3 my-3'>
           <span className='text-xl font-thin text-white border-b-2 border-lightestslate md:text-2xl'>
              {active}
           </span>
  
           <div className='text-thin text-green '>
              <NavItem
                 active={active}
                 setActive={setActive}
                 name='Main'
                 route='/'
              />
              <NavItem
                 active={active}
                 setActive={setActive}
                 name='Skills'
                 route='/skills'
              />
              <NavItem
                 active={active}
                 setActive={setActive}
                 name='Projects'
                 route='/projects'
              />
           </div>
        </div>
     )
  }
  
  export default Navbar