import NavLinks from "../../../data/NavLinks";
import { Brain, Menu, X } from 'lucide-react';
import Button from "../Button/Button";
import { useState } from "react";
import useNavbarScroll from "../../../hooks/useNavbarScroll";

const Navbar = () => {

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  const isScroll = useNavbarScroll() ;

  return <>

  <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${isScroll?"glass-navbar py-3":"bg-transparent py-6"}  z-50`}>
    <nav className="container mx-auto px-6 flex justify-between items-center">
      {/*start logo */}
      <div className="logo flex justify-center items-center space-x-2 cursor-pointer">
        <Brain className="text-primary hover:text-primary-foreground transition duration-300"/>
        <a className="text-2xl font-bold tracking-tight hover:text-primary transition duration-300" href="#">M.A</a>
      </div>
      {/*end logo */}

      {/* start navlinks */}
      <div className="hidden md:flex items-center gap-1">
        <div className="glass rounded-full flex items-center gap-1 px-2 py-1">
          {NavLinks.map((navlink , index)=>(
            <a key={index} href={navlink.href} className="px-4 py-2 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-surface transition duration-300"> {navlink.label} </a>
          ))}
        </div>
      </div>
      {/*end navlinks */}

      {/* start contact btn */}
      <div className="hidden md:block">
        <Button size="sm" className="cursor-pointer">
          <a href="#contact">
            Contact Me
          </a>
        </Button>
      </div>
      {/* end contact btn */}
      

      {/* -------------------------------------------------responsive side------------------------------------------------------- */}

      {/* start toggle menu btn */}
      <button onClick={()=>setMobileMenuIsOpen(!mobileMenuIsOpen)} className="md:hidden cursor-pointer">
        { mobileMenuIsOpen?<X size={25} />:<Menu size={25}/>}
      </button>
      {/* end toggle menu btn */}
    </nav>

      {/* start navlinks */}
      {mobileMenuIsOpen && <>
        <div className="md:hidden  flex ">
          <div className="glass-strong animate-fade-in rounded-lg container mx-auto px-6 py-6 mt-4 flex flex-col gap-2">

            {NavLinks.map((navlink , index)=>(
              <a onClick={()=>setMobileMenuIsOpen(!mobileMenuIsOpen)} key={index} href={navlink.href} className="py-2 px-2 rounded-md  text-base text-muted-foreground hover:text-foreground hover:bg-surface transition duration-300"> {navlink.label} </a>
            ))}

            <Button  size="sm" className="cursor-pointer">
              <a className=" w-full h-full" href="#contact" onClick={()=>setMobileMenuIsOpen(false)}>
                Contact Me
              </a>
            </Button>

          </div>
        </div>
      </>}
      {/* end navlinks */}
  </header>

  </>
}
export default Navbar ;