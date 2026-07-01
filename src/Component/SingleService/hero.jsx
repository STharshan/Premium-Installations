import { useParams } from 'react-router-dom';
import { getServiceBySlug, services } from '../../data/service';

const Hero = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug) || services[0];

  return (
    <section 
      className="relative w-full h-[400px] md:h-[500px] flex items-end overflow-hidden"
      style={{
        backgroundImage: `url('${service.heroImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2b2b2b]/75 via-[#545454]/35 to-transparent z-10" />

      {/* Content Container */}
      <div className="relative w-full max-w-[1200px] mx-auto px-6 pb-12 md:pb-16 z-20">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white font-sans">
            {service.title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
