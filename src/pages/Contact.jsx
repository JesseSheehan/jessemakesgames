import React from "react";

function Contact() {
  return (
    <div className="container mt-5" style={{ maxWidth: "700px" }}>
      <h1>Get In Touch</h1>
      <p style={{ color: "var(--text-muted)" }}>
        Below are links to several of my socials. 
        <br/>
        To contact me or request my resume, please reach out on LinkedIn.
      </p>

      <div className="d-flex gap-3 flex-wrap">
        <a
          href="https://www.linkedin.com/in/jessetsheehan/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social-btn contact-social-btn--linkedin"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "0.5rem" }}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>
        <a
          href="https://github.com/jessesheehan"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social-btn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "0.5rem" }}>
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
        <a
          href="https://vimeo.com/jessetsheehan"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social-btn contact-social-btn--vimeo"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: "0.5rem" }}>
            <path d="M23.9 7.9c-.1 1.7-1.3 4-3.7 6.9-2.5 3.1-4.6 4.7-6.2 4.7-1.1 0-2.1-1-2.9-3.1-.5-1.8-1-3.6-1.4-5.5-.5-2-1.1-2.9-1.9-2.9-.1 0-.6.3-1.5.9l-.9-1.2c.9-.8 1.8-1.6 2.7-2.3 1.2-.9 2.1-1.4 2.8-1.5 1.5-.1 2.4.9 2.8 3.2.4 2.5.7 4.1 1.1 4.8.6 1.4 1.3 2 2.2 2 .7 0 1.6-.4 2.6-1.3 1-.8 1.6-1.7 1.8-2.7.2-1 .2-1.8-.1-2.5-.3-.8-1.1-1.2-2.3-1.2-.9 0-1.8.2-2.8.6 0-1.7.6-3.1 1.7-4.2 1.1-1.1 2.6-1.6 4.3-1.4 1.8.2 2.8 1.3 2.9 3.2z"/>
          </svg>
          Vimeo
        </a>
      </div>

    </div>
  );
}

export default Contact;
