
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
import RightArrow from '../assets/right-arrow.gif';
import Retail from '../assets/store.png'
import EdTech from '../assets/education.png'
import Government from '../assets/government.png'
import Fintech from '../assets/fintech.png'
import Healthcare from '../assets/healthcare.png'
import FoodTech from '../assets/food.png'

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
                              <div className='neuro-two-item-main'>
                                   <div>
                                        <img src={RightArrow} alt="" />
                                        <p>Successful e-commerce adoption isn’t just about launching a digital store it’s about ensuring sustained customer adoption and growth.</p>
                                   </div>

                                   <div>
                                        <img src={RightArrow} alt="" />
                                        <p>At Wissend, we guide B2B distributors and manufacturers through this transformation with our dMAT (Digital Maturity Assessment & Transformation) Framework</p>
                                   </div>
                                   <div>
                                        <img src={RightArrow} alt="" />
                                        <p>The dMAT framework is built on four key stages that guide businesses from assessment to execution, ensuring scalable and sustainable digital success.</p>
                                   </div>
                              </div>
                              <div>
                                   <button className='neuro-btn' data-aos="zoom-in-down" data-aos-duration="1000" data-aos-delay="500">Get Free Consultation</button>
                              </div>
                         </div>
                    </div>
               </div>
               <div className="industuries">
                    <h1>Industries We Serve </h1>
                    <div className='industury-items'>
                         <div className="container">
                              <div className="card">
                                   <div className="Box">
                                        <div className='Box-title'>
                                             <img src={Retail} alt="" />
                                             <h2>Retail & E-Commerce</h2>
                                        </div>
                                        <h2>Optimizing Digital Shopping Experiences</h2>
                                        <div className="Box-text">
                                             <p>
                                                  In the fast-paced world of online shopping, ensuring seamless user experience, flawless
                                                  transactions, and high-performance websites is crucial for success. We help eCommerce
                                                  businesses deliver secure, scalable, and conversion-optimized platforms.
                                             </p>
                                        </div>
                                   </div>
                                   <div className="details">
                                        <div className="details-one">
                                             <h3>
                                                  How we Serve
                                             </h3>
                                             <ul>
                                                  <li><span>End-to-End Functional Testing –</span> Validate shopping flows, cart, checkout, and payment
                                                       gateways.</li>
                                                  <li><span>Performance & Load Testing –</span> Ensure website stability during peak sales and high traffic.</li>
                                                  <li><span>Security Testing – </span>Protect customer data and prevent fraudulent transactions.</li>
                                             </ul>
                                        </div>
                                        <div className="details-two">
                                             <h3>Case Study</h3>
                                             <ul>
                                                  <li><span>Challenge:</span> A retail giant faced checkout failures during high-traffic events like Black Friday.</li>
                                                  <li><span>Solution:</span> implemented performance and security testing, simulated real-world shopping
                                                       conditions.</li>
                                                  <li><span>Result: </span>99.9% uptime during peak sales, 20% improvement in checkout speed.</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="card">
                                   <div className="Box">
                                        <div className="Box-title">
                                             <img src={Fintech} alt="" />
                                             <h2>FinTech</h2>
                                        </div>
                                        <h2>Ensuring Security & Reliability in Financial Technology</h2>
                                        <div className="Box-text">
                                             <p>
                                                  FinTech applications handle millions of transactions daily, requiring robust security, compliance,
                                                  and seamless user experience. We specialize in testing banking platforms, digital wallets,
                                                  trading apps, and blockchain-based systems.
                                             </p>
                                        </div>
                                   </div>
                                   <div className="details">
                                        <div className="details-one">
                                             <h2>How we Serve</h2>
                                             <ul>
                                                  <li><span>Regulatory Compliance Testing (PCI-DSS, GDPR, ISO 27001) – </span>Ensure adherence to
                                                       financial security standards.</li>
                                                  <li><span>Transaction Flow Testing –</span> Validate deposits, withdrawals, and real-time payment
                                                       processing.</li>
                                                  <li><span>Load Testing for High-Frequency Transactions –</span> Ensure performance during peak trading
                                                       and transaction spikes.</li>
                                             </ul>
                                        </div>
                                        <div className="details-two">
                                             <h2>Case Study</h2>
                                             <ul>
                                                  <li><span>Challenge:</span> A digital banking app faced delayed transactions and unauthorized access
                                                       attempts.</li>
                                                  <li><span>Solution:</span> Conducted security testing, API optimization, and implemented two-factor
                                                       authentication</li>
                                                  <li><span>Result:</span> 99.99% transaction accuracy, 40% reduction in fraudulent activities.</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="card">
                                   <div className="Box">
                                        <div className="Box-title">
                                             <img src={EdTech} alt="" />
                                             <h2>EdTech</h2>
                                        </div>
                                        
                                        <h2>Ensuring Seamless & Scalable Online Learning</h2>
                                        <div className="Box-text">
                                             <p>
                                                  With education shifting online, platform stability, interactive content, and data security are
                                                  essential for EdTech platforms. We test LMS platforms, video streaming, AI-based learning
                                                  tools, and student engagement features.
                                             </p>
                                        </div>
                                   </div>
                                   <div className="details">
                                        <div className="details-one">
                                             <h4>How we Serve</h4>
                                             <ul>
                                                  <li>
                                                       <span>Cross-Device Compatibility Testing –</span> Ensure a smooth experience on mobile, tablets,
                                                       and desktops.
                                                  </li>
                                                  <li>
                                                       <span>AI & Adaptive Learning Model Validation –</span> Test AI-based learning suggestions for
                                                       accuracy.
                                                  </li>
                                                  <li>
                                                       <span>Live Session & Video Streaming Testing –</span> Validate interactive elements for smooth
                                                       engagement.
                                                  </li>
                                                  <li>
                                                       <span>Accessibility Testing (WCAG Compliance) –</span> Ensure inclusivity for learners with
                                                       disabilities.
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className="details-two">
                                             <h4>Case Study</h4>
                                             <ul>
                                                  <li>
                                                       <span>Challenge:</span> An e-learning platform experienced video buffering and login issues during peak
                                                       hours.
                                                  </li>
                                                  <li>
                                                       <span>Solution:</span> Conducted load testing, optimized video streaming algorithms, and fixed API call
                                                       failures.
                                                  </li>
                                                  <li>
                                                       <span>Result:</span> 40% improvement in streaming speed, seamless login for 1M+ users.
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="card">
                                   <div className="Box">
                                        <div className="Box-title">
                                             <img src={Healthcare} alt="" />
                                             <h2>Healthcare</h2>
                                        </div>
                                        <h2>Powering Secure & Reliable Digital Healthcare</h2>
                                        <div className="Box-text">
                                             <p>
                                                  Healthcare applications demand flawless performance, data security, and compliance with strict
                                                  regulations (HIPAA, GDPR). We ensure bug-free, secure, and accessible healthcare software
                                                  for providers and patients.
                                             </p>
                                        </div>
                                   </div>
                                   <div className="details">
                                        <div className="details-one">
                                             <h4>How we serve</h4>
                                             <ul>
                                                  <li><span>Regulatory Compliance Testing (HIPAA, GDPR) –</span> Ensure data security and patient
                                                       confidentiality.
                                                  </li>
                                                  <li><span>Performance Testing for Critical Systems –</span> Validate reliability of EHR/EMR platforms.

                                                  </li>
                                                  <li><span>Usability Testing for Patient Portals & Telehealth –</span> Optimize user experience for seamless
                                                       care.
                                                  </li>
                                                  <li><span>Security & Data Integrity Testing –</span> Prevent breaches, unauthorized access, and data
                                                       corruption.
                                                  </li>

                                             </ul>
                                        </div>
                                        <div className="details-two">
                                             <h4>Case Study</h4>
                                             <ul>
                                                  <li>
                                                       <span> Challenge:</span> A hospital’s telehealth app crashed during high-traffic hours, impacting
                                                       consultations.
                                                  </li>
                                                  <li>
                                                       <span> Solution:</span> Conducted stress testing, API optimizations, and cloud scalability enhancements.
                                                  </li>
                                                  <li>
                                                       <span>Result:</span> 70% reduction in downtime, 30% increase in appointment completion rates.
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="card">
                                   <div className="Box">
                                        <div className="Box-title">
                                             <img src={FoodTech} alt="" />
                                             <h2>FoodTech</h2>
                                        </div>
                                        <h2>Powering On-Demand Food Delivery & Restaurant Tech</h2>
                                        <div className="Box-text">
                                             <p>
                                                  From food delivery apps to smart restaurant systems, FoodTech platforms need flawless order
                                                  processing, payment integration, and delivery tracking.
                                             </p>
                                        </div>
                                   </div>
                                   <div className="details">
                                        <div className="details-one">
                                             <h4>How we Serve</h4>
                                             <ul>
                                                  <li><span>Real-Time Order Tracking Testing –</span> Validate GPS accuracy and real-time updates.</li>
                                                  <li><span>Payment Gateway & Coupon Code Testing –</span> Ensure secure, seamless transactions.</li>
                                                  <li><span>Load Testing for Peak Meal Times – </span>Simulate high traffic for dinner & lunch rushes.</li>
                                                  <li><span>AI-Powered Recommendation Testing –</span> Validate personalized food suggestions.</li>
                                             </ul>
                                        </div>
                                        <div className="details-two">
                                             <h4>case Study</h4>
                                             <ul>
                                                  <li><span>Challenge:</span> A food delivery platform experienced order delays and incorrect delivery
                                                       tracking.</li>
                                                  <li><span>Solution:</span> Optimized real-time tracking APIs, enhanced server load balancing</li>
                                                  <li><span>Result:</span> 35% faster order processing, 20% increase in repeat customers.</li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                              <div className="card">
                                   <div className="Box">
                                        <div className="Box-title">
                                             <img src={Government} alt="" />
                                             <h2>Government</h2>
                                        </div>
                                        <h2>Powering Digital Transformation in Government Services</h2>
                                        <div className="Box-text">
                                             <p>
                                                  Government platforms handle citizen data, tax filings, permits, and legal documentation,
                                                  requiring high security, accessibility, and compliance. We ensure that government applications
                                                  are reliable, secure, and citizen-friendly.
                                             </p>
                                        </div>
                                   </div>
                                   <div className="details">
                                        <div className="details-one">
                                             <h4>How we Serve</h4>
                                             <ul>
                                                  <li><span>Security Testing for Data Protection –</span> Prevent cyber threats and unauthorized data
                                                       breaches.</li>
                                                  <li><span>Performance Testing for High-Traffic Portals –</span> Ensure uptime during tax filing and voter
                                                       registration periods.</li>
          
                                                  <li><span>Interoperability Testing –</span> Ensure seamless integration between different government
                                                       systems.</li>
                                             </ul>
                                        </div>
                                        <div className="details-two">
                                             <h4>Case Study</h4>
                                             <ul>
                                                  <li><span>Challenge:</span> A government e-filing platform crashed during peak tax season, delaying
                                                       submissions.</li>
                                                  <li><span>Solution:</span> Conducted load testing, optimized server performance, and improved caching
                                                       mechanisms.</li>
                                                  <li><span>Result:</span> 60% faster processing times, 99.98% system uptime.</li>
                                             </ul>

                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default Home