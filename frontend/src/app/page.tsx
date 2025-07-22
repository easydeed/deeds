'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
  };

  return (
    <div className="landing-page">
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <div className="banner-text" data-aos="fade-right" data-aos-duration="1500">
              <h1>Automated Deed Creation & Recording Services</h1>
              <p>Want to know more? Check out our video! 🎥</p>
            </div>

            <div className="video-section" data-aos="fade-in" data-aos-duration="1500">
              <div className="video-thumbnail">
                <button className="play-button" onClick={openVideoModal}>
                  <div className="play-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M8 5v14l11-7z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="waves-block">
                    <div className="waves wave-1"></div>
                    <div className="waves wave-2"></div>
                    <div className="waves wave-3"></div>
                  </div>
                </button>
              </div>
            </div>

            <Link href="/login" className="login-button" data-aos="fade-in" data-aos-duration="1500">
              LOGIN
            </Link>
          </div>
        </div>

        <div className="banner-images" data-aos="fade-in" data-aos-duration="1500">
          <div className="image-grid">
            <div className="banner-screen screen1">
              <div className="document-preview">Doc-1</div>
            </div>
            <div className="banner-screen screen2">
              <div className="document-preview">Doc-2</div>
            </div>
            <div className="banner-screen screen3">
              <div className="document-preview">Doc-3</div>
            </div>
            <div className="banner-screen screen4">
              <div className="document-preview">Doc-4</div>
            </div>
            <div className="banner-screen screen5">
              <div className="document-preview">Doc-5</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Section */}
      <section className="trusted-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
            <h2>Utilized by the <span>Escrow & Lending</span> Industry</h2>
            <p>Escrow Officers and lenders along with their clients benefit from <br /> our self-service recording platform.</p>
          </div>

          <div className="company-logos" data-aos="fade-in" data-aos-duration="1500">
            <div className="logo-slider">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <div key={i} className="logo-item">
                  <div className="logo-placeholder">Partner {i}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="container">
          <div className="section-title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <h2><span>Easy</span> to use platform.</h2>
            <p>We have designed our interface with you in mind. We want deed creation to be done with a few simple clicks.</p>
          </div>

          <div className="features-grid">
            <div className="feature-box" data-aos="fade-up" data-aos-duration="1500">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Automate everything</h4>
                <p>Streamline your deed creation process with our automated workflow that handles all the complex steps for you.</p>
              </div>
            </div>

            <div className="feature-box" data-aos="fade-up" data-aos-duration="1700">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="currentColor"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Secure & Compliant</h4>
                <p>All documents are processed with bank-level security and full compliance with real estate recording standards.</p>
              </div>
            </div>

            <div className="feature-box" data-aos="fade-up" data-aos-duration="1900">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" fill="currentColor"/>
                </svg>
              </div>
              <div className="feature-text">
                <h4>Instant Notifications</h4>
                <p>Get real-time updates on your deed status with instant email and text notifications throughout the process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About App Section */}
      <section className="about-app-section">
        <div className="container">
          <div className="about-content">
            <div className="about-image" data-aos="fade-in" data-aos-duration="1500">
              <div className="app-preview">
                <div className="preview-frame">
                  <div className="preview-screen">App Preview</div>
                </div>
              </div>
            </div>
            
            <div className="about-text">
              <div className="section-title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100">
                <h2>Some awesome words <span>about our platform.</span></h2>
                <p>
                  DeedPro revolutionizes the way real estate professionals handle property transfers. 
                  Our platform combines cutting-edge technology with industry expertise to deliver 
                  a seamless experience for creating and recording deeds.
                </p>

                <ul className="feature-list">
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                    </svg>
                    Automated document generation
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                    </svg>
                    Real-time status tracking
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                    </svg>
                    Secure payment processing
                  </li>
                  <li data-aos="fade-up" data-aos-duration="1500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
                    </svg>
                    24/7 customer support
                  </li>
                </ul>
              </div>

              <Link href="/login" className="cta-button" data-aos="fade-in" data-aos-duration="1500">
                START FREE TRIAL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works" id="how-it-work">
        <div className="container">
          <div className="section-title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <h2><span>How it works</span> - 4 easy steps</h2>
            <p>Using our self service platform is extremely easy. <br /> Below are the steps you need to get started.</p>
          </div>

          <div className="steps-container">
            <div className="step-item" data-aos="fade-right" data-aos-duration="1500">
              <div className="step-content">
                <div className="step-number">01</div>
                <div className="step-text">
                  <h4>Create Your Account</h4>
                  <span>Complete Verification Process</span>
                  <p>Quickly sign up and let us know who you are.</p>
                </div>
                <div className="step-image">
                  <div className="step-icon">Account</div>
                </div>
              </div>
            </div>

            <div className="step-item" data-aos="fade-left" data-aos-duration="1500">
              <div className="step-content">
                <div className="step-number">02</div>
                <div className="step-text">
                  <h4>Create Your Document</h4>
                  <span>Or if you have one ready great!</span>
                  <p>You can use our document creation wizard or upload yours.</p>
                </div>
                <div className="step-image">
                  <div className="step-icon">Document</div>
                </div>
              </div>
            </div>

            <div className="step-item" data-aos="fade-right" data-aos-duration="1500">
              <div className="step-content">
                <div className="step-number">03</div>
                <div className="step-text">
                  <h4>Create Your Order</h4>
                  <span>Doc type, County, etc.</span>
                  <p>Create your order using our easy wizard.</p>
                </div>
                <div className="step-image">
                  <div className="step-icon">Order</div>
                </div>
              </div>
            </div>

            <div className="step-item" data-aos="fade-left" data-aos-duration="1500">
              <div className="step-content">
                <div className="step-number">04</div>
                <div className="step-text">
                  <h4>Pay Your Fees</h4>
                  <span>Directly on our website.</span>
                  <p>We provide the estimate for your recording. Pay them directly on our website.</p>
                </div>
                <div className="step-image">
                  <div className="step-icon">Payment</div>
                </div>
              </div>
            </div>
          </div>

          <div className="video-section" data-aos="fade-in" data-aos-duration="1500">
            <div className="video-thumbnail">
              <button className="play-button" onClick={openVideoModal}>
                <div className="play-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M8 5v14l11-7z" fill="currentColor"/>
                  </svg>
                </div>
                <div className="waves-block">
                  <div className="waves wave-1"></div>
                  <div className="waves wave-2"></div>
                  <div className="waves wave-3"></div>
                </div>
              </button>
              <div className="video-text">
                Let&apos;s see virtually how it works
                <span>Watch video</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <h2>Best & simple <span>pricing</span></h2>
            <p>Choose the plan that fits your needs. <br /> All plans include our core features.</p>
          </div>

          <div className="pricing-grid" data-aos="fade-up" data-aos-duration="1500">
            <div className="pricing-card">
              <div className="pricing-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                </svg>
              </div>
              <div className="pricing-header">
                <h3>Document Preparation</h3>
                <span>For the basics</span>
              </div>
              <div className="pricing-price">$15</div>
              <ul className="pricing-features">
                <li>Up to 5 documents per month</li>
                <li>Basic templates included</li>
                <li>Email support</li>
                <li>Standard processing time</li>
              </ul>
              <Link href="/login" className="pricing-button">GET STARTED</Link>
            </div>

            <div className="pricing-card featured">
              <div className="pricing-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                </svg>
              </div>
              <div className="pricing-header">
                <h3>Real Estate Recordings</h3>
                <span>For the professionals</span>
              </div>
              <div className="pricing-price">$50</div>
              <ul className="pricing-features">
                <li>Unlimited documents</li>
                <li>Premium templates</li>
                <li>Priority processing</li>
                <li>24/7 phone support</li>
                <li>Advanced analytics</li>
              </ul>
              <Link href="/login" className="pricing-button">GET STARTED</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-title" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300">
            <h2><span>FAQ</span> - Frequently Asked Questions</h2>
            <p>Find answers to common questions about our platform. <br /> Can&apos;t find what you&apos;re looking for? Contact us.</p>
          </div>

          <div className="faq-container" data-aos="fade-up" data-aos-duration="1500">
            <div className="faq-item">
              <div className="faq-question">
                <h4>How can I pay?</h4>
                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
                </svg>
              </div>
              <div className="faq-answer">
                <p>We accept all major credit cards, debit cards, and bank transfers. All payments are processed securely through Stripe, ensuring your financial information is protected.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h4>How to setup account?</h4>
                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
                </svg>
              </div>
              <div className="faq-answer">
                <p>Setting up your account is simple. Click the &quot;Get Started&quot; button, fill in your basic information, verify your email, and you&apos;re ready to create your first deed.</p>
              </div>
            </div>

            <div className="faq-item">
              <div className="faq-question">
                <h4>What is the process to get a refund?</h4>
                <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor"/>
                </svg>
              </div>
              <div className="faq-answer">
                <p>If you&apos;re not satisfied with our service, we offer a 30-day money-back guarantee. Contact our support team with your order number and reason for the refund request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <div className="section-title" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
              <h2>Subscribe newsletter</h2>
              <p>Be the first to receive all latest updates in your inbox</p>
            </div>
            <form className="newsletter-form" data-aos="fade-in" data-aos-duration="1500" data-aos-delay="100">
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <button type="submit" className="submit-button">SUBMIT</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="video-modal" onClick={closeVideoModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeVideoModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"/>
              </svg>
            </button>
            <div className="video-container">
              <iframe
                src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"
                title="DeedPro Platform Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .landing-page {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: var(--text);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        /* Banner Section */
        .banner-section {
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--accent) 100%);
          color: white;
          padding: 80px 0 120px;
          position: relative;
          overflow: hidden;
        }

        .banner-content {
          text-align: center;
          margin-bottom: 60px;
        }

        .banner-text h1 {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .banner-text p {
          font-size: 1.25rem;
          opacity: 0.9;
          margin-bottom: 40px;
        }

        .video-section {
          margin: 40px 0;
        }

        .video-thumbnail {
          position: relative;
          display: inline-block;
        }

        .play-button {
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          width: 80px;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
        }

        .play-button:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: scale(1.1);
        }

        .play-icon {
          color: white;
          margin-left: 4px;
        }

        .waves-block {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .waves {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: wave 2s infinite;
        }

        .wave-1 { width: 100px; height: 100px; animation-delay: 0s; }
        .wave-2 { width: 120px; height: 120px; animation-delay: 0.5s; }
        .wave-3 { width: 140px; height: 140px; animation-delay: 1s; }

        @keyframes wave {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(1.2); opacity: 0; }
        }

        .banner-images {
          margin-top: 60px;
        }

        .image-grid {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .banner-screen {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 20px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .document-preview {
          width: 120px;
          height: 160px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
        }

        /* Trusted Section */
        .trusted-section {
          padding: 80px 0;
          background: var(--background);
        }

        .section-title {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-title h2 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: var(--text);
        }

        .section-title h2 span {
          color: var(--accent);
        }

        .section-title p {
          font-size: 1.125rem;
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .company-logos {
          margin-top: 40px;
        }

        .logo-slider {
          display: flex;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
        }

        .logo-item {
          background: var(--card-bg);
          border-radius: 12px;
          padding: 20px;
          border: 1px solid var(--border);
        }

        .logo-placeholder {
          width: 120px;
          height: 60px;
          background: var(--secondary-light);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          color: var(--text-secondary);
        }

        /* Features Section */
        .features-section {
          padding: 80px 0;
          background: var(--background);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .feature-box {
          background: var(--card-bg);
          border-radius: 16px;
          padding: 40px;
          border: 1px solid var(--border);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-box:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          color: var(--accent);
          margin-bottom: 24px;
        }

        .feature-text h4 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 16px;
          color: var(--text);
        }

        .feature-text p {
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* About App Section */
        .about-app-section {
          padding: 80px 0;
          background: var(--background);
        }

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .about-image {
          position: relative;
        }

        .app-preview {
          position: relative;
        }

        .preview-frame {
          background: var(--card-bg);
          border-radius: 20px;
          padding: 20px;
          border: 1px solid var(--border);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .preview-screen {
          width: 100%;
          height: 300px;
          background: var(--secondary-light);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.125rem;
          color: var(--text-secondary);
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin: 30px 0;
        }

        .feature-list li {
          display: flex;
          align-items: center;
          margin-bottom: 16px;
          color: var(--text);
        }

        .feature-list li svg {
          color: var(--accent);
          margin-right: 12px;
          flex-shrink: 0;
        }

        .cta-button {
          display: inline-block;
          background: var(--accent);
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .cta-button:hover {
          background: var(--accent-dark);
          transform: translateY(-2px);
        }

        /* How It Works Section */
        .how-it-works {
          padding: 80px 0;
          background: var(--background);
        }

        .steps-container {
          margin: 60px 0;
        }

        .step-item {
          margin-bottom: 60px;
        }

        .step-content {
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 40px;
          align-items: center;
        }

        .step-number {
          background: var(--accent);
          color: white;
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
        }

        .step-text h4 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text);
        }

        .step-text span {
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 8px;
          display: block;
        }

        .step-text p {
          color: var(--text-secondary);
        }

        .step-image {
          width: 120px;
          height: 120px;
          background: var(--card-bg);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border);
        }

        .step-icon {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        /* Pricing Section */
        .pricing-section {
          padding: 80px 0;
          background: var(--background);
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
          margin-top: 60px;
        }

        .pricing-card {
          background: var(--card-bg);
          border-radius: 20px;
          padding: 40px;
          border: 1px solid var(--border);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
        }

        .pricing-card.featured {
          border: 2px solid var(--accent);
          transform: scale(1.05);
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .pricing-icon {
          color: var(--accent);
          margin-bottom: 24px;
        }

        .pricing-header h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: var(--text);
        }

        .pricing-header span {
          color: var(--text-secondary);
          font-size: 0.875rem;
        }

        .pricing-price {
          font-size: 3rem;
          font-weight: 700;
          color: var(--accent);
          margin: 24px 0;
        }

        .pricing-features {
          list-style: none;
          padding: 0;
          margin: 30px 0;
          text-align: left;
        }

        .pricing-features li {
          padding: 8px 0;
          color: var(--text-secondary);
          position: relative;
          padding-left: 24px;
        }

        .pricing-features li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--accent);
          font-weight: bold;
        }

        .pricing-button {
          display: inline-block;
          background: var(--accent);
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          width: 100%;
        }

        .pricing-button:hover {
          background: var(--accent-dark);
        }

        /* FAQ Section */
        .faq-section {
          padding: 80px 0;
          background: var(--background);
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          background: var(--card-bg);
          border-radius: 12px;
          margin-bottom: 16px;
          border: 1px solid var(--border);
          overflow: hidden;
        }

        .faq-question {
          padding: 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .faq-question:hover {
          background: var(--secondary-light);
        }

        .faq-question h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text);
          margin: 0;
        }

        .faq-icon {
          color: var(--text-secondary);
          transition: transform 0.3s ease;
        }

        .faq-answer {
          padding: 0 24px 24px;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        /* Newsletter Section */
        .newsletter-section {
          padding: 80px 0;
          background: linear-gradient(135deg, var(--primary-dark) 0%, var(--accent) 100%);
          color: white;
        }

        .newsletter-content {
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
        }

        .newsletter-content .section-title h2 {
          color: white;
        }

        .newsletter-content .section-title p {
          color: rgba(255, 255, 255, 0.9);
        }

        .newsletter-form {
          display: flex;
          gap: 16px;
          margin-top: 40px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .form-group {
          flex: 1;
          min-width: 250px;
        }

        .form-control {
          width: 100%;
          padding: 16px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          font-size: 1rem;
        }

        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.7);
        }

        .submit-button {
          background: white;
          color: var(--primary-dark);
          padding: 16px 32px;
          border: none;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-button:hover {
          background: var(--secondary-light);
          transform: translateY(-2px);
        }

        /* Video Modal */
        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          position: relative;
          width: 90%;
          max-width: 800px;
          background: var(--card-bg);
          border-radius: 16px;
          overflow: hidden;
        }

        .close-button {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.5);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: white;
          z-index: 1;
        }

        .video-container {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
        }

        .video-container iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .banner-text h1 {
            font-size: 2.5rem;
          }

          .about-content {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .step-content {
            grid-template-columns: 1fr;
            gap: 20px;
            text-align: center;
          }

          .newsletter-form {
            flex-direction: column;
          }

          .form-group {
            min-width: auto;
          }

          .pricing-card.featured {
            transform: none;
          }
        }

        @media (max-width: 480px) {
          .banner-text h1 {
            font-size: 2rem;
          }

          .section-title h2 {
            font-size: 2rem;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }
        }

        .login-button {
          display: inline-block;
          background: var(--accent);
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: all 0.3s ease;
          margin-top: 20px;
        }

        .login-button:hover {
          background: var(--accent-dark);
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}
