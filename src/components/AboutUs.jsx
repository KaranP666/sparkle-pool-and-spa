import React from "react";
import commertial from '../assets/images/commertial.jpg'
import residential from '../assets/images/residential.jpg'

const Card = ({ image, title, description, buttonText, buttonLink }) => (
  <div className="w-full md:w-1/2 px-4 mb-8 rounded-xl">
    <div className="relative h-64 bg-blue-600 text-white flex items-center justify-center rounded-xl ">
      <img className="absolute h-full w-full object-cover object-center opacity-50" src={image} alt={title} rounded-xl />
      <h3 className="relative text-2xl font-semibold">{title}</h3>
    </div>
    <div className="text-center mt-4">
      <p className="text-lg text-gray-700 mb-4">{description}</p>
      {/* <a href={buttonLink} className="bg-blue-600 text-white py-2 px-4 rounded">{buttonText}</a> */}
    </div>
  </div>
);

const AboutUs = () => {
  return (
    <div id="about-us" className="flex justify-center">
      <div className="relative w-[1300px]">
        <div className="relative pt-28 text-center">
          <h2 className="block antialiased tracking-normal font-sans leading-[1.3] text-black mb-4 text-[40px] font-semibold lg:text-[50px]">
            About us
          </h2>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-black mb-5 opacity-70">
            Welcome to Sparkle Pool and Spa, your trusted partner in pool and
            spa services since 2005. Serving from San Leandro to Milpitas, we
            pride ourselves on delivering fast, reliable, and high-quality
            service to both residential and commercial clients. With a
            commitment to excellence and customer satisfaction, we have built a
            reputation for having respectful employees who do the job
            efficiently and professionally.
          </p>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-black mb-5 opacity-70">
            At Sparkle Pool and Spa, we specialize in comprehensive residential
            and commercial pool services, including repairs, maintenance, and
            equipment installation. Our team understands each client's unique
            needs, ensuring that we provide personalized solutions that meet all
            your pool requirements. Our excellent connections and references
            attest to our high standards and proven track record.
          </p>
          <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-black mb-5 opacity-70">
            With over 55 years of combined experience, you can rely on Sparkle
            Pool and Spa for all your pool and spa needs. Whether it's routine
            maintenance or an urgent repair, our quick response time ensures
            your pool remains pristine and enjoyable year-round. Contact us to
            schedule a service request today.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mt-10">
          <Card
            image={residential} // replace with actual image path
            title="Residential"
            description="We know it can be frustrating when your pool isn't working at full capacity. We can help with repairs to your pool and spa system."
            // buttonText="REQUEST REPAIR"
            // buttonLink="/request-repair" // replace with actual link
          />
          <Card
            image={commertial} // replace with actual image path
            title="Commercial"
            description="We offer regular service plans that cater to the varying needs of our customers. Click below to find the right plan that works best for you."
            // buttonText="LEARN MORE"
            // buttonLink="/learn-more" 
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
