
import Banner from '../Component/Home/Banner'
import ContactSection from '../Component/Home/ContactSection'
import FAQSection from '../Component/Home/Faq'
import Gallery from '../Component/Home/Gallery'
import HeroSection from '../Component/Home/HeroSection'
import Services from '../Component/Home/Service'
import WhyChooseUs from '../Component/Home/Whychoose'
import WhoWeAre from '../Component/Home/WhoWeAre'

import About from '../Component/Home/about'
import Testimonials from '../Component/Home/TestimonialsCarousel'
const Home = () => {
  return (
    <main >
      <HeroSection />
      <Services />
      <About />
      <Testimonials />
      <Banner />
      <Gallery />
      <WhoWeAre />
      <WhyChooseUs />
      <FAQSection />
  
      <ContactSection />
    </main>
  )
}

export default Home
