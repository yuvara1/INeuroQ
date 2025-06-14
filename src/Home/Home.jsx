import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import TeamImage from '../assets/team.jpeg'
import CountUp, { useCountUp } from 'react-countup';
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { GiNotebook } from "react-icons/gi";
import { BsRocketTakeoff } from "react-icons/bs";
import { FaUsersGear } from "react-icons/fa6";
import { BsStars } from "react-icons/bs";
import { TbReport } from "react-icons/tb";
import { VscDebugAltSmall } from "react-icons/vsc";
import { MdAssuredWorkload } from "react-icons/md";

const sliderSteps = [
     {
          front: "Collaborative Discovery",
          back: "We work closely with your team to understand product goals, user journeys, and technical architecture."
     },
     {
          front: "Strategic QA Planning",
          back: "Every project starts with a solid test strategy, combining manual,automation, performance, and security testing."
     },
     {
          front: "AI-Powered Automation",
          back: "Our proprietary frameworks use AI for self-healing tests, predictive defect analysis, and smart test prioritization"
     },
     {
          front: "Data-Driven Reporting",
          back: "Clear, real-time dashboards and metrics that keep you informed and confident at every stage."
     }
     ,
     {
          front: "Agile & DevOps Integration",
          back: "Seamless integration into your CI/CD pipelines for faster release cycles and continuous validation."
     }
     ,
     {
          front: "Human Intelligence + Machine Precision",
          back: "Our QA experts think beyond scripts to detect UX, usability, and edge-case issues AI might miss."
     }
];

// function Slider() {
//      return (

//      );
// }

function Home() {
     useEffect(() => {
          AOS.init({ once: true });
          AOS.refresh();
     }, []);

     useCountUp({
          ref: 'counter-number',
          start: 0,
          end: 100,
          duration: 2,
          enableScrollSpy: true,
          scrollSpyDelay: 1000,
          delay: 100,
     });

     return (
          <div>
               <Navbar />
               <main className="home-main">
                    <div className="home-container">
                         <div className="home-heading">
                              <h2 className='home-title' data-aos="fade-up" data-aos-duration="1000" >AI-Driven Automation Testing for
                                   <br />Flawless Software Quality</h2>
                              <h3 className='home-title2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">Enhance your software's reliability with iNeuro's cutting-edge AI automation and expert-led manual testing.</h3>
                         </div>
                         <div>
                              <button className='consult-btn' data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="500">Get Free Consultation</button>
                         </div>
                    </div>
               </main>
               <div className='who-we-are'>
                    <h1 className='who-we-are-h1'>Who we are ?</h1>
                    <h3 className='who-we-are-h3'>Passionate QA Innovators Empowering Digital Excellence</h3>
                    <p className='who-we-are-p'>At iNeuroQ, we’re more than just a testing service, we’re your quality assurance partner. <span className='marker'> Founded by a team of passionate QA experts, iNeuroQ was born out of a vision to combine human intelligence with AI innovation </span>to deliver impeccable digital experiences.</p>
                    <p className='who-we-are-p2'>
                         10+ years of QA excellence <br />
                         Trusted by startups & enterprises worldwide <br />
                         Agile, scalable, and ready to adapt to your unique challenges <br />
                    </p>
                    <div className='counter'>
                         <div className='counter-item'>
                              <h1> <CountUp className='counter-number' start={0} end={10} duration={2} enableScrollSpy /><span>+</span></h1>
                              <p className='counter-text'>Years of Experience</p>
                         </div>
                         <div className='counter-item'>
                              <h1> <CountUp className='counter-number' start={0} end={250} duration={2} enableScrollSpy /><span>+</span></h1>
                              <p className='counter-text'>B2B e-commerce Experts</p>
                         </div>
                         <div className='counter-item'>
                              <h1> <CountUp className='counter-number' start={0} end={40} duration={2} enableScrollSpy /><span>+</span></h1>
                              <p className='counter-text'>Marketing Professionals</p>
                         </div>
                         <div className='counter-item'>
                              <h1> <CountUp className='counter-number' start={0} end={10} duration={2} enableScrollSpy /><span>+</span></h1>
                              <p className='counter-text'>Analytics Experts</p>
                         </div>
                    </div>
               </div>
               <div className='how-we-do-it'>
                    <h2 className='who-we-are-h1'>Our Service: Enabling Ecommerce Adoption </h2>
                    <h3>We don’t just test software—we design intelligent QA ecosystems that scale with your business. Here’s how we do it differently:</h3>
                    <div className='slider'>
                         {sliderSteps.map((step, idx) => (
                              <div className='slide-item' key={idx}>
                                   <div className='slide-item-inner'>
                                        <div className='slide-item-front'>
                                             <h3 className='slide-item-h3'>{step.front}</h3>
                                             <span className="slide-number">{idx + 1}</span>
                                        </div>
                                        <div className='slide-item-back'>
                                             <h3 className='slide-item-h3'>{step.back}</h3>
                                        </div>
                                   </div>
                              </div>
                         ))}
                    </div>
               </div>
               <div className="how-neuro-work">
                    <div className='neuro-one'>
                         <div className='neuro-side'>
                              <div className='neuro-one-items'>
                                   <div>
                                        <GiNotebook className='neuro-icon' />
                                   </div>
                                   <div className='neuro-one-items-text'>
                                        <p>Understanding Requirements</p>
                                        <p>We analyze business needs and testing scope.</p>
                                   </div>
                              </div>

                              <div className='neuro-one-items'>
                                   <div>
                                        <BsRocketTakeoff className='neuro-icon' />
                                   </div>
                                   <div className='neuro-one-items-text'>
                                        <p>Test Strategy & Planning</p>
                                        <p>Crafting a tailored testing approach.</p>
                                   </div>
                              </div>

                              <div className='neuro-one-items'>
                                   <div>
                                        <FaUsersGear className='neuro-icon' />
                                   </div>
                                   <div className='neuro-one-items-text'>
                                        <p>Test Case Design & Development</p>
                                        <p>Creating comprehensive test cases for all scenarios.</p>
                                   </div>
                              </div>

                              <div className='neuro-one-items'>
                                   <div>
                                        <BsStars className='neuro-icon' />
                                   </div>
                                   <div className='neuro-one-items-text'>
                                        <p>AI-Powered Automation</p>
                                        <p>Faster, smarter testing with AI-enhanced scripts</p>
                                   </div>
                              </div>
                              <div className='neuro-one-items'>
                                   <div>
                                        <TbReport className='neuro-icon' />
                                   </div>
                                   <div className='neuro-one-items-text'>
                                        <p>Continuous Monitoring & Reporting</p>
                                        <p>Real-time insights with actionable reports.</p>
                                   </div>
                              </div>
                              <div className='neuro-one-items'>
                                   <div>
                                        <VscDebugAltSmall className='neuro-icon' />
                                   </div>
                                   <div className='neuro-one-items-text'>
                                        <p>Bug Fix & Retesting</p>
                                        <p>Ensuring flawless software with rigorous validation.</p>
                                   </div>
                              </div>
                              <div className='neuro-one-items'>
                                   <div>
                                        <MdAssuredWorkload className='neuro-icon' />
                                   </div>
                                   <div className='neuro-one-items-text'>
                                        <p>Final Quality Assurance</p>
                                        <p>Delivering a robust, defect-free product.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className='neuro-two'>

                         <div className='neuro-two-items'>
                              <h1>How iNeuroQ Works ?</h1>
                              <p>Successful e-commerce adoption isn’t just about launching a digital store—it’s about ensuring sustained customer adoption and growth.</p>
                              <p>At Wissend, we guide B2B distributors and manufacturers through this transformation with our dMAT (Digital Maturity Assessment & Transformation) Framework</p>
                              <p>The dMAT framework is built on four key stages that guide businesses from assessment to execution, ensuring scalable and sustainable digital success.</p>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Home
