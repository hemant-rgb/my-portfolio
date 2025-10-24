
// import LogoSection from "./sections/LogoSection.jsx";
import Navbar from "./components/Navbar.jsx";
import Contact from "./sections/Contact.jsx";
import FeatureCards from "./sections/FeatureCards.jsx";
import Hero from "./sections/hero.jsx";
import Showcase from "./sections/Showcase.jsx";
// import Experience from "./sections/Experience.jsx";
import TechStack from "./sections/TechStack.jsx";
// import Testimonials from "./sections/Testimonials.jsx";

import Footer from "./sections/Footer.jsx";

const App = () => {
  return (
    <>
    <Navbar/>
    <Hero />
    <Showcase/>
    {/* <LogoSection/>    this section contains scrolling logos animations that I will use later  */}
    <FeatureCards/>
    {/* <Experience/>  this section will include the experience that I have and will update the gpt generated text later with real reviews*/}
    <TechStack/>
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>
    
    </>

  )
}

export default App
