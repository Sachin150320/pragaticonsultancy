import HeroSection from './Home/HeroSection'
import ServicesSection from './Home/ServicesSection'
import PredictorSection from './Home/PredictorSection'
import CollegesSection from './Home/CollegesSection'
import MbbsCollges from './Home/MbbsCollges'
import EngineeringColleges from './Home/EngineeringColleges'
import ManagementColleges from './Home/ManagementColleges'
import NursingCollge from './Home/NursingCollge'
import Clients from './Home/Clients'
import FAQSection from './Home/FAQSection'
import NewEvents from './Home/NewEvents'
import Blogs from './Home/Blogs'
import Testimonials from './Home/Testimonials'

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PredictorSection />
      <CollegesSection />
      <MbbsCollges />
       <EngineeringColleges />
       <ManagementColleges />
       <NursingCollge />
       <Clients />
      <FAQSection />
      <NewEvents />
      
      <Blogs />
      <Testimonials />
    </>
  )
}
