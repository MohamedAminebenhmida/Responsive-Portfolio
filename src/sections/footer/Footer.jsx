import './footer.css'
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillLinkedin} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
const Footer = () => {
  return (
    <footer>
      <a href='# ' className='footer__logo'>Mohamed Amine Ben Hmida</a>
      <ul className='permalinks'>
        <li><a href='# '>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href='https://www.facebook.com/medamine.benhamida'><AiFillFacebook/></a>
        <a href='https://www.linkedin.com/in/mohamed-amine-ben-hmida-goldenboy/'><AiFillLinkedin/></a>
        <a href='https://github.com/MohamedAminebenhmida'><AiFillGithub/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; All rights are reserved.</small>
      </div>
    </footer>
  )
}

export default Footer