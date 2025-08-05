import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", feedback: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.feedback.trim()) newErrors.feedback = "Feedback is required";
    return newErrors;
  };

 const handleSubmit = (e) => {
  e.preventDefault();

  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  setErrors({});

  // Send feedback to backend
  fetch("https://samarvardak-backend.onrender.com/api/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to submit feedback");
      }
      return res.json();
    })
    .then(() => {
      setSubmitted(true);
      setFormData({ name: "", feedback: "" });
      setTimeout(() => setSubmitted(false), 4000);
    })
    .catch((error) => {
      console.error("Feedback error:", error);
      alert("There was a problem submitting your feedback. Please try again.");
    });
};

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-info-columns">
          <div className="footer-column">
            <p className="footer-copy">
              &copy; 2025 Samavardhak. All rights reserved.
            </p>
            <p className="footer-tagline">
              Empowering your digital growth worldwide.
            </p>
          </div>

          <div className="footer-column">
            <address className="footer-contact">
              <a
                href="mailto:contact@samavardhak.com"
                className="footer-contact-link"
              >
                samarvardak@gmail.com
              </a>
              <br />
              <a href="tel:+919876543210" className="footer-contact-link">
                +91 98765 43210
              </a>
            </address>
          </div>

          <div className="footer-column">
            <nav className="footer-links" aria-label="Footer navigation">
              <Link to="/terms" className="footer-link" tabIndex={0}>
                Terms & Conditions
              </Link>
              <Link to="/privacy" className="footer-link" tabIndex={0}>
                Privacy Policy
              </Link>
              <Link to="/contact" className="footer-link" tabIndex={0}>
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="footer-column">
            <div className="footer-social" aria-label="Social Media Links">
              {[
                {
                  href: "https://www.facebook.com/profile.php?id=61579193963624",
                  icon: <FaFacebookF />,
                  label: "Facebook",
                },
                {
                  href: "https://twitter.com/yourpage",
                  icon: <FaTwitter />,
                  label: "Twitter",
                },
                {
                  href: "https://www.instagram.com/samarvardak/?utm_source=ig_web_button_share_sheet",
                  icon: <FaInstagram />,
                  label: "Instagram",
                },
                {
                  href: "https://linkedin.com/yourpage",
                  icon: <FaLinkedinIn />,
                  label: "LinkedIn",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="social-icon"
                  tabIndex={0}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="footer-feedback-form"
          noValidate
        >
          <h2 className="feedback-title">We'd love to hear from you!</h2>

          <div className="form-group">
            <label htmlFor="name" className="footer-feedback-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`footer-feedback-input ${
                errors.name ? "input-error" : ""
              }`}
              value={formData.name}
              onChange={handleChange}
              aria-describedby="name-error"
              required
            />
            {errors.name && (
              <span id="name-error" className="error-message">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="feedback" className="footer-feedback-label">
              Your Feedback
            </label>
            <textarea
              id="feedback"
              name="feedback"
              rows="4"
              className={`footer-feedback-textarea ${
                errors.feedback ? "input-error" : ""
              }`}
              value={formData.feedback}
              onChange={handleChange}
              aria-describedby="feedback-error"
              required
            />
            {errors.feedback && (
              <span id="feedback-error" className="error-message">
                {errors.feedback}
              </span>
            )}
          </div>

          <button type="submit" className="footer-feedback-button">
            Submit
          </button>

          {submitted && (
            <p role="alert" className="feedback-success-message">
              Thank you for your feedback!
            </p>
          )}
        </form>
      </div>
    </footer>
  );
};

export default Footer;
