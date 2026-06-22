
import Banner from '../Component/Home/Banner'
import ContactSection from '../Component/Home/Contact'
import FAQSection from '../Component/Home/Faq'
import Gallery from '../Component/Home/Gallery'
import Services from '../Component/Home/Service'

const Home = () => {
  return (
    <main className="bg-[#f5f5f5]">
      <Services />
      <Banner />
      <Gallery />
      <FAQSection />
      <ContactSection />
    </main>
  )
}

export default Home
