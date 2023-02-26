import './floatingNav.css';
import {AiOutlineHome,AiOutlineUser} from 'react-icons/ai';
import {BiBook} from 'react-icons/bi';
import {RiServiceLine} from 'react-icons/ri';
import {BiMessageSquareDetail} from 'react-icons/bi';
import {SiCountingworkspro} from 'react-icons/si';
import {useState} from 'react'
const FloatingNav = () => {
    const [activeNav,setActiveNav]=useState('# ')
  return (
    <div className='nav1'>
        <a href="# " className={activeNav==="# " ? 'active' : ''} onClick={()=>setActiveNav('# ')}><AiOutlineHome/></a>
        <a href="#about" className={activeNav==="#about" ? 'active' : ''} onClick={()=>setActiveNav('#about')}><AiOutlineUser/></a>
        <a href="#experience" className={activeNav==="#experience" ? 'active' : ''} onClick={()=>setActiveNav('#experience')}><BiBook/></a>
        <a href="#services" className={activeNav==="#services" ? 'active' : ''} onClick={()=>setActiveNav('#services')}><RiServiceLine/></a>
        <a href="#portfolio" className={activeNav==="#portfolio" ? 'active' : ''} onClick={()=>setActiveNav('#portfolio')}><SiCountingworkspro/></a>
        <a href="#contact" className={activeNav==="#contact" ? 'active' : ''} onClick={()=>setActiveNav('#contact')}><BiMessageSquareDetail/></a>
    </div>
  )
}

export default FloatingNav