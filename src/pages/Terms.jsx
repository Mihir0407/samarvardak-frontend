import React from "react";
import "./LegalPage.css";

const Terms = () => {
  return (
    <main className="legal-page">
      <h1>Terms & Conditions</h1>
      <p>Last updated: August 4, 2025</p>

      <p>
        Welcome to Samarvardak. By accessing our website or using our services, you agree to the following Terms and Conditions. Please read them carefully.
      </p>

      <h2>1. Services</h2>
      <p>
        Samarvardak provides website design, development, and related digital services. We reserve the right to modify or discontinue any service at any time.
      </p>

      <h2>2. User Responsibilities</h2>
      <ul>
        <li>Provide accurate and up-to-date information when requested.</li>
        <li>Do not use our services for illegal or harmful activities.</li>
        <li>Respect intellectual property rights and terms outlined herein.</li>
      </ul>

      <h2>3. Intellectual Property</h2>
      <p>
        All content, graphics, branding, and source code provided by Samarvardak are the intellectual property of Samarvardak and may not be reused without written permission.
      </p>

      <h2>4. Termination</h2>
      <p>
        We reserve the right to suspend or terminate your access to our services if you violate any of these terms.
      </p>

      <h2>5. Changes to Terms</h2>
      <p>
        These terms may be updated occasionally. Continued use of our services implies acceptance of the revised terms.
      </p>

      <h2>6. Contact</h2>
      <p>
        For any questions about these terms, please email us at{" "}
        <a href="mailto:samarvardak@gmail.com">samarvardak@gmail.com</a>.
      </p>
    </main>
  );
};

export default Terms;
