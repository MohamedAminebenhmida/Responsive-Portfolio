import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id="services">
      <div className="service-item">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      </div>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>User Interface (UI) Design</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>User Experience (UX) Design</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>Web Portals</p>
            </li>
             <li>
             <BiCheck className='service__list-icon'/> 
            <p>Portfolio Showcase</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>Testimonials</p>
            </li>           
          </ul>
        </article>
        {/*End of UI/UX */}
        <article className='service'>
                  <div className="service__head">
            <h3>Web Developement</h3>
          </div>
          <ul className='service__list'>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>Password-Protected Page</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>Email Newsletter</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>Web Hosting</p>
            </li>
             <li>
             <BiCheck className='service__list-icon'/> 
            <p>Web Site Maintenance</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>(CRM) Integration</p>
            </li>           
          </ul>
          </article>
        {/*End of Web Developement */}
        <article className='service'>
                  <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>Social Media Integration</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>Business Directory</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>Booking / Availability System</p>
            </li>
             <li>
             <BiCheck className='service__list-icon'/> 
            <p>Blog / News Management</p>
            </li>
            <li>
             <BiCheck className='service__list-icon'/> 
            <p>Membership System</p>
            </li>           
          </ul>
          </article>
        {/*Content Creation */}
      </div>

      </section>
  )
}

export default Services