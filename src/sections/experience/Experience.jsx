import './experience.css'
import {BsPatchCheckFill,BsFillBootstrapFill} from 'react-icons/bs' 
import {GrReactjs} from 'react-icons/gr'  ;
import {AiFillHtml5} from 'react-icons/ai' ;
import {FaNodeJs} from 'react-icons/fa' ;
import {SiCss3,SiJavascript,SiTailwindcss,SiExpress,SiMongodb,SiPython,SiMysql,SiPostgresql} from 'react-icons/si' ;
import {useState} from 'react'
const white={Color:"white"};
const violet={Color:'violet'}
const Experience = () => {
    const [Colore,setColore]=useState(violet);
  return (
    <section id="experience">
        <div className="experience-item">
     <h5>What skills I have</h5>
     <h2>My Experience</h2>
        </div>
     <div className='container experience__container'>
        <div className="experience__frontend" onMouseEnter={()=>setColore(white)} style={{color:Colore}}>
            
            <h3>
                <BsPatchCheckFill/>
                Frontend Developement
            </h3>
            <div className="experience__content">
                <article className='experience__details'>
                <AiFillHtml5 className='experience__details-icon'/>
                <div className='experience__details-item'>
                   <h4>HTML</h4>
                   <small className='text-light'>experienced</small>
                </div>
                </article>
                <article className='experience__details'>
                <SiCss3 className='experience__details-icon'/>
                <div className='experience__details-item'>
                  <h4>CSS</h4>
                  <small className='text-light'>experienced</small>
                </div>
                </article>
                <article className='experience__details'>
                <SiJavascript className='experience__details-icon'/>
                <div className='experience__details-item'> 
                  <h4>JavaScript</h4>
                  <small className='text-light'>experienced</small>
                </div>
                </article>
                <article className='experience__details'>
                <BsFillBootstrapFill className='experience__details-icon'/>
                <div className='experience__details-item'>
                  <h4>Bootstrap</h4>
                  <small className='text-light'>experienced</small>
                </div>
                </article>
                <article className='experience__details'>
                <SiTailwindcss className='experience__details-icon'/>
                <div className='experience__details-item'>
                  <h4>Tailwind</h4>
                  <small className='text-light'>experienced</small>
                </div>
                </article>       
                <article className='experience__details'>
                <GrReactjs className='experience__details-icon'/>
                <div className='experience__details-item'>
                  <h4>React</h4>
                  <small className='text-light'>experienced</small>
                </div>
                </article>                                                                          
            </div>
        </div>
        <div className="experience__backend">
            <h3>
                <BsPatchCheckFill/> 
                Backend Developement
            </h3>
            <div className="experience__content">
                <article className='experience__details'>
                <FaNodeJs className='experience__details-icon'/>
                <div className='experience__details-item'>
                  <h4>NodeJS</h4>
                  <small className='text-light'>experienced</small>
                </div>
                </article>
                <article className='experience__details'>
                <SiExpress className='experience__details-icon'/>
                <div className='experience__details-item'>
                  <h4>Express</h4>
                  <small className='text-light'>experienced</small>
                </div>
                </article>
                <article className='experience__details'>
                <SiMongodb className='experience__details-icon'/>
                <div className='experience__details-item'>
                  <h4>MongoDB</h4>
                  <small className='text-light'>experienced</small>
                </div>
                </article>
                <article className='experience__details'>
                <SiPython className='experience__details-icon'/>
                <div className='experience__details-item'>
                  <h4>Python</h4>
                  <small className='text-light'>experienced</small>
                </div>
                </article>
                <article className='experience__details'>
                <SiMysql className='experience__details-icon'/>
                <div className='experience__details-item'>
                  <h4>MySQL</h4>
                  <small className='text-light'>Basic</small>
                </div>
                </article>       
                <article className='experience__details'>
                <SiPostgresql className='experience__details-icon'/>
                <div className='experience__details-item'>
                <h4>PostgreSQL</h4>
                <small className='text-light'>Basic</small>
                </div>
                </article>                                                                          
            </div>            
        </div>
     </div>





    </section>
  )
}

export default Experience