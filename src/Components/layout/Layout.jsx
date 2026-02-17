import Navbar from './../common/Navbar/Navbar';
import Hero from './../sections/Hero/Hero';
import About from './../sections/About/About';
import Projects from './../sections/Projects/Projects';
import Experiance from './../sections/Experiance/Experiance'
import Contact from './../sections/Contact/Contact';
import Footer from '../common/Footer/Footer';
const Layout = () => {
  return <>
    <div className="min-h-screen overflow-x-hidden relative">
      <Navbar/>
      <main>
        <Hero />
        <About />
        <Projects />
        <Experiance />
        <Contact />
      </main>
      <Footer/>
  </div>
  </>
}
export default Layout ;