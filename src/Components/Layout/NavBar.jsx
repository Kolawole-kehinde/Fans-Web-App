import { HiMenuAlt3 } from "react-icons/hi";
const NavBar = () => {
  return (
    <header className="py-3 md:py-5 px-2 md:px-0 font-roboto text-primary-200 border-b border-primary-100 font-display-primary">
        <nav className="wrapper flex justify-between items-center">
            {/* Left Side */}
            <div className="flex items-center space-x-6">
                <div >
                   <img src="/images/logo.svg" alt="Logo" className='size-[57.41px]'/>
                </div>
                <menu className=" hidden md:flex  items-center space-x-6">
                    <li>Home</li>
                    <li>How to Get Started</li>
                    <li>Membership Benefits</li>
                </menu>

            </div>
            {/* Right Side */}
            <div className="flex items-center space-x-3">
                    <button className=" py-2 px-6  border rounded-lg font-semibold text-xs text-primary-200">Login</button>
                    <button className=" py-2 px-6  border rounded-lg font-semibold text-xs text-secondary">Register</button>
                </div>
                <HiMenuAlt3 className="text-4xl md:text-3xl md:hidden block"/>
        
        </nav>
    </header>
  )
}

export default NavBar