import React from "react";
import "./Home.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import dishaConstruction from "../assets/Disha.png";

const Home = () => {
  return (
    <div>
      {/* Hero Banner Section */}
      <section className="home">
        <div className="overlay"></div>
        <div className="home-content">
          <h1>
            Empowering <span className="highlight">Your Digital Presence</span>
          </h1>
          <p className="home-subtext">
            At <strong>Samarvardak</strong>, we create stunning websites that
            speak your brand’s vision.
          </p>
          <a href="/contact" className="home-btn">
            Let’s Build Together
          </a>
          <div className="home-note">Trusted by businesses globally 🌐</div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="services-preview">
        <h2 className="section-title">What We Offer</h2>
        <div className="service-cards">
          <div className="service-card">
            <div className="icon">🌐</div>
            <h3>Website Design</h3>
            <p>
              Modern, responsive layouts built with user experience in mind.
            </p>
          </div>
          <div className="service-card">
            <div className="icon">⚙️</div>
            <h3>Web Development</h3>
            <p>Custom functionality with clean and scalable code.</p>
          </div>
          <div className="service-card">
            <div className="icon">🚀</div>
            <h3>SEO & Marketing</h3>
            <p>Improve visibility, rankings, and drive targeted traffic.</p>
          </div>
          <div className="service-card">
            <div className="icon">🛒</div>
            <h3>E-Commerce</h3>
            <p>Launch your online store with powerful shopping features.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us scroll-fade-in">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="choose-us-cards">
          <div className="choose-us-card scroll-fade-in scroll-fade-delay-1">
            <h3>✅ Expertise</h3>
            <p>
              Our team has years of hands-on experience in designing and
              building web solutions.
            </p>
          </div>
          <div className="choose-us-card scroll-fade-in scroll-fade-delay-2">
            <h3>🚀 Speed</h3>
            <p>
              Quick project turnaround with agile development to keep your
              business moving fast.
            </p>
          </div>
          <div className="choose-us-card scroll-fade-in scroll-fade-delay-3">
            <h3>💡 Innovation</h3>
            <p>
              We don’t just build websites—we build smart, scalable, and
              innovative platforms.
            </p>
          </div>
          <div className="choose-us-card scroll-fade-in scroll-fade-delay-4">
            <h3>📞 Support</h3>
            <p>
              We provide ongoing support and are always here when you need us.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
<section className="featured-projects scroll-fade-in">
  <h2 className="section-title">Featured Projects</h2>
  <div className="project-cards">
    <div className="project-card">
      <img src={project1} alt="Shri Hari Madhur Bandhar Website" />
      <h3>Shri Hari Madhur Bandhar</h3>
      <p>
        A custom promotional website built for Mr. Vyas' organic honey
        brand, showcasing high-quality honey products, brand values, and
        contact information — all with a smooth, mobile-friendly design.
      </p>
      <a
        href="https://kzmgt54padsx4odyttu3.lite.vusercontent.net/"
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Live ↗
      </a>
    </div>

    <div className="project-card">
      <img src={project2} alt="Tandoori Flame Website" />
      <h3>TANDORI FLAME</h3>
      <p>
        A custom restaurant website built for Tandoori Flame – a fine
        dining destination offering authentic Indian cuisine. The site
        highlights their rich menu, reservation system, and culinary story
        through a sleek, mobile-optimized design with elegant visuals and
        smooth navigation.
      </p>
      <a
        href="https://tandori.vercel.app/"
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Live ↗
      </a>
    </div>

    {/* NEW PROJECT: DISHA CONSTRUCTION */}
    <div className="project-card">
      <img
        src={dishaConstruction}
        alt="Disha Construction Website"
      />
      <h3>Disha Construction</h3>
      <p>
        A professional corporate website designed for Disha Construction,
        showcasing their government road contracting expertise, past
        projects, and service offerings. Built with a black-and-yellow theme
        for a bold, industry-appropriate look, fully responsive and
        performance-optimized.
      </p>
      <a
        href="https://disha-contruction-frontend.vercel.app"
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Live ↗
      </a>
    </div>
  </div>
</section>
    

      {/* Client Testimonials Section */}
      <section className="testimonials scroll-fade-in">
        <h2 className="section-title">What Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              “Samarvardak gave our brand a bold and trustworthy digital
              presence. Their team was professional, innovative, and truly
              committed to quality.”
            </p>
            <strong>– Mr. Vyas, Shri Hari Madhur Bandhar</strong>
          </div>
          <div className="testimonial-card">
            <p>
              “From idea to execution, their team nailed it. Highly recommended
              for any business going digital.”
            </p>
            <strong>– TANDORI FLAME</strong>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
