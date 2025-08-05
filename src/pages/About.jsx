import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <h2>About Samarvardak</h2>

      <p className="about-intro">
        <strong>Samarvardak</strong> means "the one who helps uplift or enhance." We believe in
        empowering people by bringing their digital visions to life.
      </p>

      <p>
        We’re a purpose-driven digital solutions company on a mission to help small and medium-sized businesses
        establish a bold, professional presence online. Whether you're launching your first site or scaling your brand,
        <strong> Samarvardak</strong> is your trusted partner for elegant, effective, and empowering web solutions.
      </p>

      {/* Vision and Mission */}
      <div className="about-vision-mission">
        <div className="about-box">
          <h3 style={{ color: "#6a00ff" }}>Our Vision</h3>
          <p>
            To be a guiding light for businesses stepping into the digital world —
            empowering them with the confidence and tools to succeed online.
          </p>
        </div>

        <div className="about-box">
          <h3 style={{ color: "#6a00ff" }}>Our Mission</h3>
          <p>
            To simplify and humanize technology by creating websites and platforms that are beautiful,
            functional, and meaningful — tailored to every client’s unique story.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="about-values">
        <h3>Our Values</h3>
        <div className="about-values-grid">
          <div className="about-value-card">
            <strong>Empowerment</strong>
            <p>We exist to make digital tools accessible and impactful for everyone.</p>
          </div>
          <div className="about-value-card">
            <strong>Integrity</strong>
            <p>Transparency and honesty guide every project and partnership.</p>
          </div>
          <div className="about-value-card">
            <strong>Innovation</strong>
            <p>We stay ahead of trends to build modern, scalable digital experiences.</p>
          </div>
          <div className="about-value-card">
            <strong>Support</strong>
            <p>Our relationships don’t end at delivery — we’re here for the long haul.</p>
          </div>
          <div className="about-value-card">
            <strong>Simplicity</strong>
            <p>We believe that the best solutions are the simplest — intuitive, elegant, and easy to use.</p>
          </div>
          <div className="about-value-card">
            <strong>Respect</strong>
            <p>We treat every client, idea, and challenge with the care and dignity it deserves.</p>
          </div>
        </div>
      </div>

      {/* Hidden Founder Section */}
      <div className="about-founder">
        <h3 style={{ color: "#ff4d6d" }}>Meet the Founder</h3>
        <p>
          Samarvardak was founded by a visionary who prefers to stay behind the curtain — quietly dedicated
          to lifting others into the spotlight. Their passion? Helping ideas grow into digital realities,
          without seeking recognition. 💡
        </p>
      </div>
    </section>
  );
};

export default About;
