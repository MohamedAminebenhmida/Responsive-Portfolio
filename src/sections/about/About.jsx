import './about.css'
import AboutImage from '../../assets/AboutImage.jpg';
import {HiDownload} from 'react-icons/hi'
import CV from '../../assets/CV-Mohamed-Amine-Ben-Hmida.pdf';
import Card from '../../components/Card';
import data from './data'
const about = () => {
  return (
    <section id="about">
      <div className="conatiner about__container">
     <div className="about__left">
    <div className="about__portrait">
      <img src={AboutImage} alt="AboutImage"/>
    </div>
     </div>   
     <div className="about__right">
      <h2>About Me</h2>  
      <div className="about__cards">
        {data.map(item=><Card key={item.id} className="about__card">
          <span className="about__card-icon">{item.icon}</span>
          <h5>{item.title}</h5>
          <small>{item.desc}</small>
        </Card>)}
      </div>
      <p>
Building Projects have always been my passion.
Being in the web developement industy for over 3 years and serving more than 70 happy clients worldwide, I'm always seeking for more!
      </p>
      <p>
Hi, My name is Mohamed Amine Ben Hmida from Bizerte ,Tunisia.
I'm a full-stack web developer with an engineering degree in Mechatronics.
My Top priority is to get your buisness online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online.
Get in touch today with the details of your project and let's get started!
Check my resume below!
      </p>
      
      <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
      </div> 
</div>
    </section>
  )
}

export default about
