import Hero from '../Component/SingleService/hero';
import ServiceDetailContent from '../Component/SingleService/ServiceDetailContent';
import TestimonialSection from '../Component/SingleService/TestimonialSection';

const ServiceDetail = () => {
  return (
    <main className="bg-[#fafaf8]">
      <Hero />
      <ServiceDetailContent />
      <TestimonialSection />
    </main>
  );
};

export default ServiceDetail;
