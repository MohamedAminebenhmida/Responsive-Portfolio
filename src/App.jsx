import NavBar from './sections/navbar/NavBar'
import Header from './sections/header/Header'
import About from './sections/about/About'
import Services from './sections/services/Services'
import Portfolio from './sections/portfolio/Portfolio'
import Testimonials from './sections/testimonials/Testimonials'
import Contact from './sections/contact/Contact'
import Footer  from './sections/footer/Footer'
import FloatingNav from './sections/floating-nav/FloatingNav'
import Experience from './sections/experience/Experience'
const App =()=>(
<main>
<NavBar />
<Header />
<About />
<Experience/>
<Services/>
<Portfolio/>
<Testimonials/>
<Contact/>
<Footer/>
<FloatingNav/>
</main>


);

export default App 