
import { useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);
const Showcase = () => {
  const sectionRef=useRef(null);
  const project1=useRef(null);
  const project2=useRef(null);
  const project3=useRef(null);

  

  useGSAP(()=>{
    const projects=[project1.current,project2.current,project3.current];

  projects.forEach((card,index)=>{
    gsap.fromTo(
      card,
      {
       y:50 , opacity:0
    },
    {
      y:0 ,
       opacity:1,
       duration:1,
       delay:0.3*(index+1),
       scrollTrigger:{
        trigger:card,
        start:'top 80%'
       }
    }
  )
  })
    gsap.fromTo(sectionRef.current,{opacity:0},{opacity:1,duration:1.5})
  },[])
  return (
    <section id="work" className="app-showcase" ref={sectionRef}>
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper" ref={project1}>
            <div className="image-wrapper">
              <img src="/images/home2.png" alt="airbnb-clone"/>
            </div>
            <div className="text-content">
              <h2>Book your place now!</h2>
              <p className="text-white-50 md:text-xl">
                An app built with Node.js , Express.js & TailwindCSS for user-friendly experience.
              </p>

            </div>

          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={project2}>
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/images/newlisting-removebg-preview (1).png" alt= "ADD"/>
              </div>
              <h2>Add Your Home</h2>

            </div>
            <div className="project" ref={project3}>
              <div className="image-wrapper bg-[#ffe7eb]">
                <img src="/images/login-removebg-preview.png" alt= "log-in"/>
              </div>
              <h2>Make Your account</h2>

            </div>
          </div>

        </div>

      </div>
      
    </section>
  )
}

export default Showcase
