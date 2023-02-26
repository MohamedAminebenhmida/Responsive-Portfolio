import { useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
const Contact = () => {
  const form=useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lu6rt1q', 'template_8n0wbwr', form.current, 'rRDe-qiQIw-x1X6j7');
    e.target.reset()
  };
  return (
    <section id="contact">
    <div className="contact-item">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      </div>  
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h6>mohamedaminebenhmida4@gmail.com</h6>
            <a href='mailto:mohamedaminebenhmida4@gmail.com' target='_blank' rel='noreferrer' className>Send A message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine contact__option-icon/>
            <h4>Messenger</h4>
            <h5>Mohamed Amine Ben Hmida</h5>
            <a href='https://m.me/medamine.benhamida' target='_blank' rel='noreferrer'>Send A message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp contact__option-icon/>
            <h4>WhatsApp</h4>
            <h5>+21652982300</h5>
            <a href='https://api.whatsapp.com/send?phone=+21652982300' target='_blank' rel='noreferrer'>Send A message</a>
          </article>                    
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn primary'>send message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact