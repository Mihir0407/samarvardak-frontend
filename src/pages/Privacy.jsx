import React from "react";
import "./LegalPage.css";

const Privacy = () => {
  return (
    <main className="legal-page">
      <h1>Privacy Policy</h1>
      <p>Last updated: August 4, 2025</p>

      <p>
        Samarvardak values your privacy. This policy describes how we collect, use, and protect your information.
      </p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li>Name and contact details submitted through forms.</li>
        <li>Usage data through analytics tools and cookies.</li>
      </ul>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To respond to inquiries or feedback.</li>
        <li>To improve our website and services.</li>
        <li>To send service-related updates (if applicable).</li>
      </ul>

      <h2>3. Data Security</h2>
      <p>
        We implement reasonable safeguards to protect your data. However, no method of online transmission is completely secure.
      </p>

      <h2>4. Third-Party Tools</h2>
      <p>
        We may use services like Google Analytics, which collect anonymous usage data. These services are governed by their own privacy policies.
      </p>

      <h2>5. Your Rights</h2>
      <p>
        You have the right to request access to or deletion of your personal data. Please contact us at{" "}
        <a href="mailto:samarvardak@gmail.com">samarvardak@gmail.com</a> to make such a request.
      </p>

      <h2>6. Updates to This Policy</h2>
      <p>
        This privacy policy may be updated from time to time. Revisions will be posted on this page.
      </p>
    </main>
  );
};

export default Privacy;
