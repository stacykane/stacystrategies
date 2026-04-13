"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Brita has truly transformed my life with her gift. I am so much happier, more productive...and creating more abundance and positivity in the universe each day because of the incredible coaching and support that she has provided. She has helped me awaken, which seems like it must truly be the greatest gift in life.",
    name: "S.K.",
    location: "Washington, DC",
  },
  {
    quote:
      "I have been working with Brita for over a year now, and my life has completely transformed. She has helped me realize dreams I never even knew I had...it has empowered me to be who I really want to be in this world. The work that we do together is magical and it makes a huge impact on not only my personal life, but for the people in my family and in my community.",
    name: "S.R.",
    location: "Flora, IL",
  },
  {
    quote:
      "When I need a focused blade to cut through my perfectionism and into my perfection, I go to Brita. She helps me laser in on my next right step, and partners with me in re-igniting the fire that gets that next scary step done...She is a natural guide for people who want to move from stuck to invigorated.",
    name: "L.W.",
    location: "Berkeley, CA",
  },
  {
    quote:
      "I felt like the truth was pouring out of me for the first time in my life. Through her listening, the depths of my soul came out of my mouth. Brita is ridiculously intuitive and has a strong bullshit meter...she truly has this gift.",
    name: "B.L.",
    location: "Seattle, WA",
  },
  {
    quote:
      "She is radiant and powerful. She consistently meets me with deep listening and discerning feedback and questions. I trust her completely.",
    name: "S.B.",
    location: "Twisp, WA",
  },
  {
    quote:
      "After working with her regularly for 2 1/2 months focusing on preparing for my soulmate, I met my husband. She then supported me in navigating the beginning of the relationship. I highly recommend working with Brita as a truly embodied coach.",
    name: "H.H.",
    location: "Albany, NY",
  },
  {
    quote:
      "Coaching with Brita is to embark on a unique, heartfelt, and enlivening journey of deep self-exploration, healing, and growth...I know and trust myself more and feel more solid in myself, capable of handling what life throws my way. Her meeting of me where I was at launched me into a journey of profound transformation.",
    name: "M.E.",
    location: "Western Maryland",
  },
];

const writings = [
  {
    title: "To Rage or not to Rage",
    desc: "What if anger isn't something to suppress, but intelligent energy calling you toward action? Exploring how to tell the difference between old wounds and current-moment truth.",
    url: "https://www.britadawn.com/writing/to-rage-or-not-to-rage",
  },
  {
    title: "How do I End Well?",
    desc: "Leaving a job, a relationship, a chapter of your life. How do you honor what was, release the guilt, and move forward with grace?",
    url: "https://www.britadawn.com/writing/how-do-i-end-well",
  },
  {
    title: "All the Answers are in Your Body",
    desc: "Your emotions carry profoundly intelligent information. Learning to be aware of what you feel without being consumed by it changes everything.",
    url: "https://www.britadawn.com/writing/all-the-answers-are-in-your-body",
  },
  {
    title: "The Art of Taking Your Time",
    desc: "What happens when you stop rushing toward the next thing and start paying attention to the pace that is actually yours?",
    url: "https://www.britadawn.com/writing/the-art-of-taking-your-time",
  },
  {
    title: "What does it Mean to Trust Yourself?",
    desc: "It's not about always getting it right. It's about making choices based on what feels alive instead of what feels safe.",
    url: "https://www.britadawn.com/writing/what-does-it-mean-to-trust-yourself",
  },
  {
    title: "I am. I can. I will. I do.",
    desc: "A framework for moving from clarity about who you are, through exploring what's possible, into commitment and action.",
    url: "https://www.britadawn.com/writing/i-am-i-can-i-will-i-do",
  },
];

function BodyWisdomIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M24 18v8M20 36l4-10 4 10M16 28h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 20c-2 2-3 5-3 8s1 6 3 8M36 20c2 2 3 5 3 8s-1 6-3 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function SelfTrustIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8C20 12 12 16 12 24c0 7 5.5 13 12 16 6.5-3 12-9 12-16 0-8-8-12-12-16z" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M24 20v-3M24 31v-3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function CourageIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 38c4-8 10-14 16-28 6 14 12 20 16 28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M14 32h20" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export default function BritaDawnPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [testimonialFading, setTestimonialFading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const goToTestimonial = useCallback(
    (index: number) => {
      if (index === activeTestimonial) return;
      setTestimonialFading(true);
      setTimeout(() => {
        setActiveTestimonial(index);
        setTestimonialFading(false);
      }, 400);
    },
    [activeTestimonial]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      goToTestimonial((activeTestimonial + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [activeTestimonial, goToTestimonial]);

  return (
    <div className="bd-page">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Lato:wght@300;400;700&family=Montserrat:wght@500;600&display=swap');

        .bd-page {
          --bd-forest: #3A6B4C;
          --bd-deep-green: #2D5A3F;
          --bd-sage: #7A9A7E;
          --bd-olive: #8B9A6D;
          --bd-teal: #2A8B8B;
          --bd-teal-light: #6BB5B5;
          --bd-earth: #5C4A3A;
          --bd-dark: #2C3530;
          --bd-charcoal: #363636;
          --bd-cream: #F7F5F0;
          --bd-warm: #EDE9E0;
          --bd-sand: #DDD5C8;
          --bd-mint: #D8E8DC;
          --bd-light-sage: #E4EDE5;
          --bd-white: #FFFFFF;

          font-family: 'Lato', -apple-system, sans-serif;
          color: var(--bd-charcoal);
          background: var(--bd-cream);
          overflow-x: hidden;
          -webkit-font-smoothing: antialiased;
        }

        .bd-page * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        /* Navigation */
        .bd-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 1.25rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(247, 245, 240, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(122, 154, 126, 0.15);
          transition: all 0.3s ease;
        }

        .bd-nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.9rem;
          font-weight: 500;
          letter-spacing: 0.02em;
          color: var(--bd-deep-green);
          text-decoration: none;
        }

        .bd-nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          align-items: center;
        }

        .bd-nav-links a {
          font-family: 'Lato', sans-serif;
          font-size: 0.95rem;
          font-weight: 400;
          color: var(--bd-earth);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.3s ease;
        }

        .bd-nav-links a:hover {
          color: var(--bd-deep-green);
        }

        .bd-hamburger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .bd-hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--bd-dark);
          margin: 6px 0;
          transition: all 0.3s ease;
        }

        .bd-mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .bd-nav-links {
            display: none;
          }
          .bd-hamburger {
            display: block;
          }
          .bd-mobile-menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--bd-cream);
            z-index: 200;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease;
          }
          .bd-mobile-menu.open {
            opacity: 1;
            pointer-events: all;
          }
          .bd-mobile-menu a {
            font-family: 'Cormorant Garamond', serif;
            font-size: 2rem;
            color: var(--bd-dark);
            text-decoration: none;
            letter-spacing: 0.02em;
          }
          .bd-mobile-close {
            position: absolute;
            top: 1.25rem;
            right: 2rem;
            background: none;
            border: none;
            font-size: 2rem;
            color: var(--bd-dark);
            cursor: pointer;
          }
        }

        /* Hero */
        .bd-hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 8rem 2rem 6rem;
          position: relative;
          background-image:
            linear-gradient(
              180deg,
              rgba(44, 53, 48, 0.35) 0%,
              rgba(44, 53, 48, 0.25) 40%,
              rgba(44, 53, 48, 0.45) 100%
            ),
            url('https://images.unsplash.com/photo-1511497584788-876760111969?w=1920&q=80&auto=format');
          background-size: cover;
          background-position: center 30%;
        }

        .bd-hero-tagline {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: var(--bd-teal-light);
          margin-bottom: 2rem;
        }

        .bd-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 300;
          line-height: 1.1;
          color: var(--bd-white);
          max-width: 800px;
          margin-bottom: 2rem;
          letter-spacing: -0.01em;
        }

        .bd-hero h1 em {
          font-style: italic;
          font-weight: 300;
          color: var(--bd-teal-light);
        }

        .bd-hero-sub {
          font-size: 1.25rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          max-width: 540px;
          font-weight: 300;
          margin-bottom: 3rem;
        }

        .bd-btn {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          padding: 1.1rem 2.8rem;
          border: none;
          background: var(--bd-teal);
          color: var(--bd-white);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .bd-btn:hover {
          background: var(--bd-deep-green);
        }

        .bd-btn-outline {
          background: transparent;
          border: 1.5px solid var(--bd-white);
          color: var(--bd-white);
        }

        .bd-btn-outline:hover {
          background: var(--bd-white);
          color: var(--bd-deep-green);
        }

        .bd-btn-dark {
          background: var(--bd-deep-green);
        }

        .bd-btn-dark:hover {
          background: var(--bd-forest);
        }

        .bd-scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }

        .bd-scroll-line {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.5);
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); }
          50% { opacity: 1; transform: scaleY(1); }
        }

        /* Section shared */
        .bd-section {
          padding: 7rem 2rem;
        }

        .bd-section-inner {
          max-width: 1000px;
          margin: 0 auto;
        }

        .bd-section-label {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--bd-teal);
          margin-bottom: 1.5rem;
        }

        .bd-section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          font-weight: 300;
          line-height: 1.2;
          color: var(--bd-dark);
          margin-bottom: 2rem;
        }

        /* About */
        .bd-about {
          background: var(--bd-white);
        }

        .bd-about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 5rem;
          align-items: start;
        }

        @media (max-width: 768px) {
          .bd-about-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }

        .bd-about-text p {
          font-size: 1.1rem;
          line-height: 1.85;
          color: var(--bd-earth);
          margin-bottom: 1.5rem;
          font-weight: 300;
        }

        .bd-about-aside {
          padding: 2.5rem;
          background: var(--bd-light-sage);
          border-left: 3px solid var(--bd-sage);
        }

        .bd-about-aside p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.45rem;
          font-weight: 400;
          font-style: italic;
          line-height: 1.6;
          color: var(--bd-deep-green);
        }

        .bd-about-cta {
          margin-top: 2rem;
        }

        /* Approach */
        .bd-approach {
          background: var(--bd-light-sage);
        }

        .bd-approach .bd-section-heading {
          font-size: clamp(2.5rem, 5vw, 3.8rem);
        }

        .bd-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          margin-top: 3rem;
        }

        @media (max-width: 768px) {
          .bd-pillars {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .bd-pillar {
          padding: 2.5rem;
          background: var(--bd-white);
          border: 1px solid var(--bd-mint);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }

        .bd-pillar:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(42, 90, 63, 0.08);
        }

        .bd-pillar-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 1.25rem;
          color: var(--bd-sage);
        }

        .bd-pillar h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          font-weight: 500;
          color: var(--bd-dark);
          margin-bottom: 1rem;
        }

        .bd-pillar p {
          font-size: 1.05rem;
          line-height: 1.75;
          color: var(--bd-earth);
          font-weight: 300;
        }

        /* Testimonials */
        .bd-testimonials {
          background: var(--bd-dark);
          color: var(--bd-cream);
          text-align: center;
        }

        .bd-testimonials .bd-section-label {
          color: var(--bd-teal-light);
        }

        .bd-testimonials .bd-section-heading {
          color: var(--bd-cream);
        }

        .bd-testimonial-wrap {
          margin-top: 3rem;
          min-height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .bd-testimonial-content {
          opacity: 1;
          transition: opacity 0.4s ease;
        }

        .bd-testimonial-content.fading {
          opacity: 0;
        }

        .bd-testimonial-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.3rem, 2.5vw, 1.7rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.65;
          max-width: 780px;
          margin: 0 auto 2rem;
          color: var(--bd-sand);
        }

        .bd-testimonial-author {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--bd-sage);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 3rem;
        }

        .bd-testimonial-dots {
          display: flex;
          justify-content: center;
          gap: 0.75rem;
        }

        .bd-testimonial-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1.5px solid var(--bd-sage);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .bd-testimonial-dot.active {
          background: var(--bd-teal-light);
          border-color: var(--bd-teal-light);
        }

        /* Writing */
        .bd-writing {
          background: var(--bd-white);
        }

        .bd-writing-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          margin-top: 3rem;
        }

        @media (max-width: 768px) {
          .bd-writing-grid {
            grid-template-columns: 1fr;
          }
        }

        .bd-writing-card {
          display: block;
          padding: 2rem;
          border: 1px solid var(--bd-sand);
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none;
        }

        .bd-writing-card:hover {
          border-color: var(--bd-sage);
          background: var(--bd-light-sage);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(42, 90, 63, 0.06);
        }

        .bd-writing-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--bd-dark);
          margin-bottom: 0.6rem;
        }

        .bd-writing-card .bd-card-desc {
          font-size: 1rem;
          line-height: 1.65;
          color: var(--bd-earth);
          font-weight: 300;
          margin-bottom: 0.75rem;
        }

        .bd-writing-card .bd-read-arrow {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--bd-teal);
          transition: transform 0.3s ease;
        }

        .bd-writing-card:hover .bd-read-arrow {
          transform: translateX(4px);
        }

        /* CTA */
        .bd-cta {
          background:
            linear-gradient(
              180deg,
              rgba(42, 90, 63, 0.92) 0%,
              rgba(42, 139, 139, 0.88) 100%
            ),
            url('https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80&auto=format');
          background-size: cover;
          background-position: center;
          text-align: center;
          padding: 8rem 2rem;
        }

        .bd-cta .bd-section-label {
          color: var(--bd-teal-light);
        }

        .bd-cta .bd-section-heading {
          color: var(--bd-white);
          margin-bottom: 1.5rem;
        }

        .bd-cta p {
          font-size: 1.15rem;
          line-height: 1.75;
          color: rgba(255, 255, 255, 0.85);
          max-width: 550px;
          margin: 0 auto 2.5rem;
          font-weight: 300;
        }

        .bd-cta-buttons {
          display: flex;
          gap: 1.25rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        /* Footer */
        .bd-footer {
          background: var(--bd-dark);
          color: var(--bd-sage);
          text-align: center;
          padding: 3.5rem 2rem;
        }

        .bd-footer-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          color: var(--bd-cream);
          margin-bottom: 0.75rem;
          letter-spacing: 0.04em;
        }

        .bd-footer p {
          font-size: 0.9rem;
          font-weight: 300;
          color: var(--bd-sage);
        }

        .bd-footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1.25rem;
          flex-wrap: wrap;
        }

        .bd-footer-links a {
          font-size: 0.9rem;
          color: var(--bd-sage);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .bd-footer-links a:hover {
          color: var(--bd-cream);
        }

        /* Divider */
        .bd-divider {
          width: 60px;
          height: 1px;
          background: rgba(255, 255, 255, 0.3);
          margin: 0 auto 2rem;
        }

        /* Contact float button */
        .bd-contact-float {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 90;
        }

        .bd-contact-float a {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-family: 'Montserrat', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.9rem 1.6rem;
          background: var(--bd-teal);
          color: var(--bd-white);
          text-decoration: none;
          box-shadow: 0 6px 24px rgba(42, 139, 139, 0.35);
          transition: all 0.3s ease;
        }

        .bd-contact-float a:hover {
          background: var(--bd-deep-green);
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(42, 139, 139, 0.45);
        }
      `}</style>

      {/* Floating contact button */}
      <div className="bd-contact-float">
        <a href="mailto:brita@britadawn.com">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
          Talk to Brita
        </a>
      </div>

      {/* Navigation */}
      <nav className="bd-nav">
        <a href="#top" className="bd-nav-logo">
          Brita Dawn Coaching
        </a>
        <ul className="bd-nav-links">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#approach">Approach</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#writing">Writing</a>
          </li>
          <li>
            <a href="#connect" className="bd-btn" style={{ padding: "0.6rem 1.5rem", fontSize: "0.75rem" }}>
              Talk to Brita
            </a>
          </li>
        </ul>
        <button
          className="bd-hamburger"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`bd-mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <button
          className="bd-mobile-close"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#approach" onClick={() => setMobileMenuOpen(false)}>Approach</a>
        <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
        <a href="#writing" onClick={() => setMobileMenuOpen(false)}>Writing</a>
        <a href="#connect" onClick={() => setMobileMenuOpen(false)}>Talk to Brita</a>
      </div>

      {/* Hero */}
      <section className="bd-hero" id="top">
        <p className="bd-hero-tagline">Brita Dawn Coaching</p>
        <h1>
          Live your life from <em>freedom</em>.
        </h1>
        <p className="bd-hero-sub">
          Everything you need is inside of you.
          <br />
          Coaching for people ready to come alive.
        </p>
        <a href="#connect" className="bd-btn bd-btn-outline">
          Begin the Conversation
        </a>
        <div className="bd-scroll-hint">
          <div className="bd-scroll-line" />
        </div>
      </section>

      {/* About */}
      <section className="bd-section bd-about" id="about">
        <div className="bd-section-inner">
          <div className="bd-about-grid">
            <div className="bd-about-text">
              <p className="bd-section-label">About Brita</p>
              <h2 className="bd-section-heading">
                Ascend with support
              </h2>
              <p>
                No matter how well your life is going at this moment, you know
                deep down that there is more possible. You&apos;ve learned a ton about
                yourself over the years, and you know that you need deeper solutions
                to uncover the next level of freedom and effectiveness in your life.
              </p>
              <p>
                The beautiful thing is that everything you need to get where you want
                to go is not outside. It&apos;s not in fixing a relationship, becoming
                better at your job, or getting your routine right. It&apos;s inside of you.
              </p>
              <p>
                Brita has been a professional certified coach since 2013 and a physical
                therapist for 15 years. Her work uniquely integrates psychology,
                neuroscience, and body awareness to help people navigate life&apos;s most
                meaningful transitions.
              </p>
              <a href="mailto:brita@britadawn.com" className="bd-btn bd-btn-dark bd-about-cta">
                Set Up a Free Consultation
              </a>
            </div>
            <div className="bd-about-aside">
              <p>
                &ldquo;Your sweet spot lives between leaning into the edges of
                what you think is possible, and finding a pace that is sustainable
                and enjoyable. The way that is uniquely yours.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bd-section bd-approach" id="approach">
        <div className="bd-section-inner">
          <p className="bd-section-label">The Approach</p>
          <h2 className="bd-section-heading">
            How we work together
          </h2>
          <div className="bd-pillars">
            <div className="bd-pillar">
              <div className="bd-pillar-icon">
                <BodyWisdomIcon />
              </div>
              <h3>Body Wisdom</h3>
              <p>
                All the answers are in your body. Through somatic awareness, we
                access the profoundly intelligent information your emotions and
                physical sensations carry, turning them into clarity and direction.
              </p>
            </div>
            <div className="bd-pillar">
              <div className="bd-pillar-icon">
                <SelfTrustIcon />
              </div>
              <h3>Self-Trust</h3>
              <p>
                You have the opportunity and the capacity to unwind limiting beliefs
                and rewire the way you relate to life. You learn to sense true desires
                and make decisions from what feels alive, not what feels obligatory.
              </p>
            </div>
            <div className="bd-pillar">
              <div className="bd-pillar-icon">
                <CourageIcon />
              </div>
              <h3>Courageous Action</h3>
              <p>
                Sometimes the simplest solutions are the most challenging to access.
                Together we build the confidence and accountability to move in the
                most effortless way toward what you actually want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bd-section bd-testimonials" id="testimonials">
        <div className="bd-section-inner">
          <p className="bd-section-label">Client Voices</p>
          <h2 className="bd-section-heading">
            What happens when you trust the process
          </h2>
          <div className="bd-testimonial-wrap">
            <div
              className={`bd-testimonial-content ${
                testimonialFading ? "fading" : ""
              }`}
            >
              <p className="bd-testimonial-quote">
                &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
              </p>
              <p className="bd-testimonial-author">
                {testimonials[activeTestimonial].name} &mdash;{" "}
                {testimonials[activeTestimonial].location}
              </p>
            </div>
            <div className="bd-testimonial-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`bd-testimonial-dot ${
                    i === activeTestimonial ? "active" : ""
                  }`}
                  onClick={() => goToTestimonial(i)}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Writing */}
      <section className="bd-section bd-writing" id="writing">
        <div className="bd-section-inner">
          <p className="bd-section-label">Writing</p>
          <h2 className="bd-section-heading">Reflections on living fully</h2>
          <div className="bd-writing-grid">
            {writings.map((w, i) => (
              <a
                className="bd-writing-card"
                key={i}
                href={w.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <h3>{w.title}</h3>
                <p className="bd-card-desc">{w.desc}</p>
                <span className="bd-read-arrow">Read &rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bd-cta" id="connect">
        <div className="bd-section-inner">
          <div className="bd-divider" />
          <p className="bd-section-label">Take the First Step</p>
          <h2 className="bd-section-heading">
            More freedom is within reach
          </h2>
          <p>
            Set up a free 30-minute consultation. No pressure, no
            commitment. Just a conversation about what&apos;s possible when you
            trust yourself.
          </p>
          <div className="bd-cta-buttons">
            <a
              href="mailto:brita@britadawn.com"
              className="bd-btn"
              style={{ background: "var(--bd-white)", color: "var(--bd-deep-green)" }}
            >
              Email Brita
            </a>
            <a
              href="https://www.britadawn.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="bd-btn bd-btn-outline"
            >
              Contact Form
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bd-footer">
        <p className="bd-footer-name">Brita Dawn Coaching</p>
        <p>Certified Coach Since 2013</p>
        <div className="bd-footer-links">
          <a
            href="https://www.instagram.com/britadawn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@britagrothe4426"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            href="https://www.facebook.com/Brita-Dawn-Coaching-556637824370248/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/in/britadawn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://www.britadawn.com/contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </footer>
    </div>
  );
}
