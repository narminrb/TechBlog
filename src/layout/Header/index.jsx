import React from 'react'
import { Link } from 'react-router-dom'
import HeaderItems from './HeaderItems';


const Header = () => {
  const navbarElements = [{
    id:1,
    name:"Home",
    url:'/'
  },
  {
    id:2,
    name:"About",
    url: "/about"
  },
  {
    id:3,
    name:"Blogs",
    url: "/blogs"
  },
  {
    id:4,
    name:"Contact",
    url: "/contact"
  },


]
  return (
    <header className="bg-white shadow-lg py-4 sticky top-0 z-50">
  <div className="container mx-auto flex items-center justify-between px-4">
    <Link to="#" className="flex items-center text-primary hover:text-secondary">
      <svg className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707.707m12.728 0l.707.707M6.343 17.657l.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <span className="text-2xl font-bold">MyBrand</span>
    </Link>

    <div className="md:hidden">
      <button id="menu-toggle"
                    className="text-gray-800 hover:text-primary focus:outline-none transition-colors duration-300">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                </svg>
            </button>
    </div>

    <nav className="hidden md:block">
      <HeaderItems navbarItems={navbarElements}/>
    </nav>
  </div>

  {/* <nav id="mobile-menu"
    className="hidden md:hidden bg-gray-50 border-t border-gray-200 transition-height duration-300 ease-in-out">
    <ul className="px-4 py-2">
      <li><Link to="#" className="block py-2 hover:text-primary">Home</Link></li>
      <li><Link to="#" className="block py-2 hover:text-primary">About</Link></li>
      <li>
        <Link to="#" id="services-dropdown-toggle" className="block py-2 hover:text-primary">Services</Link>
        <ul id="services-dropdown" className="hidden pl-4">
          <li><Link to="#" className="block py-2 hover:text-primary">Service 1</Link></li>
          <li><Link to="#" className="block py-2 hover:text-primary">Service 2</Link></li>
          <li><Link to="#" className="block py-2 hover:text-primary">Service 3</Link></li>
        </ul>
      </li>
      <li><Link to="#" className="block py-2 hover:text-primary">Contact</Link></li>
      <li><Link to="#"
          className="block py-2 bg-primary hover:bg-secondary text-white rounded-md text-center transition-colors duration-300">Get
          Started</Link></li>
    </ul>
  </nav> */}
</header>
  )
}

export default Header