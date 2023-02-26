import './testimonials.css'
import Avatar1 from '../../assets/avatar1.jpg';
import Avatar2 from '../../assets/avatar2.jpg';
import Avatar3 from '../../assets/avatar3.jpg';
import Avatar4 from '../../assets/avatar4.jpg';
import {Pagination,Navigation} from 'swiper'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
const data=[
{
  id:1,
  avatar:Avatar1,
  name:"Tina Snow",
  review:"Bad !"
},
{
  id:2,
  avatar:Avatar2,
  name:"Shatta Walle",
  review:"Really Impressive"
},
{
  id:3,
  avatar:Avatar3,
  name:"Emilia Stark",
  review:"Class"
},
{
  id:4,
  avatar:Avatar4,
  name:"John Snow",
  review:"Addicted to Your Work"
},
]
const Testimonials = () => {
  return (
    <section id="testimonials">
      <div className="testimonial-item">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      </div>
      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[ Pagination,Navigation]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({id,avatar,name,review})=>{
          return(
 <SwiperSlide className="testimonial" key={id}>
          <div className="client__avatar">
            <img src={avatar} alt=''/>
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>
              {review}
            </small>  
        </SwiperSlide>  
        )})}
      </Swiper>
      </section>
  )
}

export default Testimonials