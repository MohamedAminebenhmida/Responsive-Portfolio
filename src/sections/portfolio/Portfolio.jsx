import './portfolio.css'
import Img1 from '../../assets/portfolio1.jpg';
import Img2 from '../../assets/portfolio2.jpg';
import Img3 from '../../assets/portfolio3.jpg';
import Img4 from '../../assets/portfolio4.jpg';
import Img5 from '../../assets/portfolio5.png';
import Img6 from '../../assets/portfolio6.jpg';
const data=[
  {
    id:1,
    image:Img1,
    title:"Crypto Currency Dashboard & Financial Visualisation",
    githun:'https://github.com/MohamedAminebenhmida',
    demo:'https://github.com/MohamedAminebenhmida'
  },
   {
    id:2,
    image:Img2,
    title:"Charts templates & infographics in Figma",
    githun:'https://github.com/MohamedAminebenhmida',
    demo:'https://github.com/MohamedAminebenhmida'
  }, 
  {
    id:3,
    image:Img3,
    title:"Figma Dashboard UI kit for data design",
    githun:'https://github.com/MohamedAminebenhmida',
    demo:'https://github.com/MohamedAminebenhmida'
  }, 
  {
    id:4,
    image:Img4,
    title:"Maintaining tasks and tracking progress",
    githun:'https://github.com/MohamedAminebenhmida',
    demo:'https://github.com/MohamedAminebenhmida'
  }, 
  {
    id:5,
    image:Img5,
    title:"Charts templates & infographics in Figma",
    githun:'https://github.com/MohamedAminebenhmida',
    demo:'https://github.com/MohamedAminebenhmida'
  }, 
  {
    id:6,
    image:Img6,
    title:"Crypto Currency Dashboard & Financial Visualisation",
    githun:'https://github.com/MohamedAminebenhmida',
    demo:'https://github.com/MohamedAminebenhmida'
  }, 
]
const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="portfolio-item">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      </div>
      <div className="container portfolio__container">
        {data.map(({id,image,title,github,demo})=>{
          return(
        <article className="portfolio__item" key={id}>
        <div className="portfolio__item-image">
          <img src={image} alt={title}/>
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
          <a href={github} className='btn dark'>Github</a>
          <a href={demo} className='btn prple' target='_blank' rel='noreferrer'> Demo</a>  </div>            
        </article>)})}

      </div>
    </section>
  )
}

export default Portfolio