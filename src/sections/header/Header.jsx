import './header.css'
import HeaderImage from '../../assets/HeaderImage.jpg';
import data from './data'
const Header = () => {
  return (
    <header id='header'>
      <div className='container  header__container'>
      <div >
        <img src={HeaderImage} alt="Header Portrait" className="header__profile"/>
      </div>
      <h3>Mohamed Amine Ben Hmida</h3>
      <p>Software Engineer</p>
      <div className="header__cta">
        <a href="#contact" className='btn primary'>Let's Talk</a>
        <a href="#portfolio" className='btn light'>My Work</a>
      </div>
      <div className="header__socials">
        {
data.map(item=><a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
        }
      </div>
      </div></header>
  )
}

export default Header