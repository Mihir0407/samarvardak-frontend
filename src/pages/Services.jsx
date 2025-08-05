import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  return (
    <div>
      {/* Services Section */}
      <section className="services scroll-fade-in" id="services">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Tailored solutions to build, scale, and elevate your digital identity.</p>

        <div className="service-list">
          <div className="service-card scroll-fade-in scroll-fade-delay-1">
            <div className="service-icon">💻</div>
            <h3>Website Development</h3>
            <p>Fast, responsive, and modern websites built to perform seamlessly across all devices.</p>
          </div>
          <div className="service-card scroll-fade-in scroll-fade-delay-2">
            <div className="service-icon">🎨</div>
            <h3>UI/UX Design</h3>
            <p>User-focused interfaces that balance aesthetics with usability for better conversion.</p>
          </div>
          <div className="service-card scroll-fade-in scroll-fade-delay-3">
            <div className="service-icon">📈</div>
            <h3>SEO & Marketing</h3>
            <p>Boost your brand visibility, rankings, and audience engagement with tailored strategies.</p>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="process-timeline scroll-fade-in scroll-fade-delay-4">
        <h2 className="section-title">Our Process</h2>
        <div className="timeline">
          <div className="timeline-step">
            <div className="step-circle">1</div>
            <h4>Discovery</h4>
            <p>We understand your goals, audience, and brand to tailor our strategy.</p>
          </div>
          <div className="timeline-step">
            <div className="step-circle">2</div>
            <h4>Design</h4>
            <p>Creating wireframes and layouts that define structure and aesthetics.</p>
          </div>
          <div className="timeline-step">
            <div className="step-circle">3</div>
            <h4>Development</h4>
            <p>Turning designs into reality using clean, scalable code.</p>
          </div>
          <div className="timeline-step">
            <div className="step-circle">4</div>
            <h4>Launch</h4>
            <p>We test, deploy, and monitor the launch for smooth performance.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack scroll-fade-in scroll-fade-delay-5">
        <h2 className="section-title">Our Tech Stack</h2>
        <div className="stack-list">
          <div className="stack-item">React</div>
          <div className="stack-item">Next.js</div>
          <div className="stack-item">Node.js</div>
          <div className="stack-item">MongoDB</div>
          <div className="stack-item">Tailwind CSS</div>
          <div className="stack-item">Figma</div>
          <div className="stack-item">SEO Tools</div>
        </div>
      </section>

      {/* Service Comparison Table */}
      <section className="comparison-table scroll-fade-in scroll-fade-delay-6">
        <h2 className="section-title">Service Comparison</h2>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Responsive Design</td>
                <td>✔️</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Custom UI/UX</td>
                <td>❌</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>SEO Optimization</td>
                <td>❌</td>
                <td>✔️</td>
                <td>✔️</td>
              </tr>
              <tr>
                <td>Analytics Integration</td>
                <td>❌</td>
                <td>❌</td>
                <td>✔️</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="use-cases scroll-fade-in scroll-fade-delay-7">
        <h2 className="section-title">Real-World Applications</h2>
        <div className="use-case-list">
          <div className="use-case-card">
            <h4>Startups</h4>
            <p>Launch faster with a lean, scalable website that grows with you.</p>
          </div>
          <div className="use-case-card">
            <h4>Personal Brands</h4>
            <p>Showcase your work and personality with a portfolio that speaks for you.</p>
          </div>
          <div className="use-case-card">
            <h4>Local Businesses</h4>
            <p>Get found online and convert local traffic into loyal customers.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta scroll-fade-in scroll-fade-delay-8">
        <div className="cta-container">
          <h3>Ready to Build Something Great?</h3>
          <p>Let’s turn your vision into a powerful digital presence. Get in touch to start your journey today!</p>
          <Link to="/contact" className="cta-button">Get in Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
