
import Banner from '../Component/Home/Banner'
import ContactSection from '../Component/Home/Contact'
import FAQSection from '../Component/Home/Faq'
import Gallery from '../Component/Home/Gallery'
import HeroSection from '../Component/Home/HeroSection'
import Services from '../Component/Home/Service'
import WhyChooseUs from '../Component/Home/Whychoose'
import WhoWeAre from '../Component/Home/WhoWeAre'
import Contact from '../Component/Home/ContactSection'
const Home = () => {
  return (
    <main className="bg-[#f5f5f5]">
      <HeroSection />
      <Services />
      <Banner />
      <Gallery />
      <WhoWeAre />
      <WhyChooseUs />
      <FAQSection />
      <Contact />
      <ContactSection />
    </main>
  )
}

export default Home
