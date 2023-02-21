import React from "react";

const LandingPage = () => {
  return (
    <div className="p-4">
      <Hero />
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <ContactForm />
    </div>
  );
};

export default LandingPage;
const Hero = () => {
  return (
    <section className="hero bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          The Best Coffee Machines on the Market
        </h1>
        <p className="text-gray-700 mb-8">
          Our selection of coffee machines is carefully curated to offer you the
          best options for brewing delicious coffee at home.
        </p>
        <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full">
          Shop Now
        </button>
      </div>
    </section>
  );
};
const HeroSection = () => {
  return (
    <div className="relative bg-gray-900 py-32 px-4">
      <img
        src="https://your-image-url.com/illustration.png"
        className="absolute top-0 right-0 mt-12 mr-12 w-1/3"
      />
      <h1 className="text-4xl font-bold text-white">Welcome to Our Company</h1>
      <p className="text-xl font-light text-white">
        We offer content creation and digital marketing services to help your
        business succeed online.
      </p>
      <a
        href="/services"
        className="inline-block py-2 px-4 rounded bg-blue-500 text-white font-bold mt-4"
      >
        Learn More
      </a>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-2xl font-bold">Our Services</h2>
      <p>
        We offer a range of content creation and digital marketing services,
        including:
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <i className="material-icons md-48">file_copy</i>
          <p className="font-bold mt-2">Content Writing</p>
          <p>
            We offer professional content writing and copywriting services to
            help you communicate your message and attract customers.
          </p>
        </div>
        <div>
          <i className="material-icons md-48">twitter</i>
          <p className="font-bold mt-2">Social Media</p>
          <p>
            We can manage and advertise on your social media platforms to help
            you build a strong online presence and engage with customers.
          </p>
        </div>
        <div>
          <i className="material-icons md-48">search</i>
          <p className="font-bold mt-2">SEO</p>
          <p>
            Our SEO services will help your website rank higher in search engine
            results, attracting more organic traffic and potential customers.
          </p>
        </div>
        <div>
          <i className="material-icons md-48">email</i>
          <p className="font-bold mt-2">Email Marketing</p>
          <p>
            We can create and manage effective email marketing campaigns to help
            you reach and engage with your customers and grow your business.
          </p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  return (
    <div className="py-12 px-4 bg-gray-200">
      <h2 className="text-2xl font-bold">Testimonials</h2>
      <div className="py-4">
        <p className="font-bold">John Doe</p>
        <p>
          The team at Our Company did a great job creating content for my
          website and improving my social media presence. I've seen a
          significant increase in website traffic and customer engagement since
          working with them.
        </p>
      </div>
      <div className="py-4">
        <p className="font-bold">Jane Smith</p>
        <p>
          Our Company provided excellent digital marketing services for my
          business. They helped me reach new customers and grow my online
          presence. I highly recommend their services.
        </p>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <div className="py-12 px-4">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p>
        Ready to improve your online presence? Contact us to discuss your
        project and get a quote:
      </p>
      <p className="font-bold">Our Company</p>
      <p>Email: info@ourcompany.com</p>
      <p>Phone: 555-555-5555</p>
      <p>Address: 123 Main Street, Anytown USA</p>
    </div>
  );
};

const ContactForm = () => {
  return (
    <form className="py-12 px-4">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p>
        Ready to improve your online presence? Contact us to discuss your
        project and get a quote:
      </p>
      <label className="block py-2 font-bold">
        Name:
        <input type="text" className="py-2 px-4 rounded w-full" />
      </label>
      <label className="block py-2 font-bold">
        Email:
        <input type="email" className="py-2 px-4 rounded w-full" />
      </label>
      <label className="block py-2 font-bold">
        Message:
        <textarea className="py-2 px-4 rounded w-full" />
      </label>
      <button
        type="submit"
        className="inline-block py-2 px-4 rounded bg-blue-500 text-white font-bold mt-4"
      >
        Submit
      </button>
    </form>
  );
};
