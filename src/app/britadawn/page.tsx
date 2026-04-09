"use client";

import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Truly transformed my life with her gift. I am so much happier, more productive...creating more abundance and positivity.",
    name: "S.K.",
    location: "Washington, DC",
  },
  {
    quote:
      "My life has completely transformed. She has helped me realize dreams I never even knew I had...the work that we do together is magical.",
    name: "S.R.",
    location: "Flora, IL",
  },
  {
    quote:
      "When I need a focused blade to cut through my perfectionism and into my perfection, I go to Brita. She helps me move from stuck to invigorated.",
    name: "L.W.",
    location: "Berkeley, CA",
  },
  {
    quote:
      "The truth was pouring out of me for the first time in my life. Brita is ridiculously intuitive and has a strong bullshit meter.",
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
      "After working with her regularly for 2 1/2 months focusing on preparing for my soulmate, I met my husband. I highly recommend working with Brita as a truly embodied coach.",
    name: "H.H.",
    location: "Albany, NY",
  },
];

const writings = [
  {
    title: "To Rage or not to Rage",
    topic: "Anger as intelligent energy",
    url: "https://www.britadawn.com/writing/to-rage-or-not-to-rage",
  },
  {
    title: "How do I End Well?",
    topic: "Graceful transitions",
    url: "https://www.britadawn.com/writing/how-do-i-end-well",
  },
  {
    title: "I am. I can. I will. I do.",
    topic: "A framework for change",
    url: "https://www.britadawn.com/writing/i-am-i-can-i-will-i-do",
  },
  {
    title: "All the Answers are in Your Body",
    topic: "Somatic awareness",
    url: "https://www.britadawn.com/writing/all-the-answers-are-in-your-body",
  },
  {
    title: "The Art of Taking Your Time",
    topic: "Intentional pacing",
    url: "https://www.britadawn.com/writing/the-art-of-taking-your-time",
  },
  {
    title: "What does it Mean to Trust Yourself?",
    topic: "Self-trust",
    url: "https://www.britadawn.com/writing/what-does-it-mean-to-trust-yourself",
  },
];

function BodyWisdomIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="12" r="5" stroke="#A99BB5" strokeWidth="1.5" fill="none" />
      <path d="M24 18v8M20 36l4-10 4 10M16 28h16" stroke="#A99BB5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 20c-2 2-3 5-3 8s1 6 3 8M36 20c2 2 3 5 3 8s-1 6-3 8" stroke="#A99BB5" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function SelfTrustIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 8C20 12 12 16 12 24c0 7 5.5 13 12 16 6.5-3 12-9 12-16 0-8-8-12-12-16z" stroke="#A99BB5" strokeWidth="1.5" fill="none" />
      <circle cx="24" cy="24" r="4" stroke="#A99BB5" strokeWidth="1.5" fill="none" />
      <path d="M24 20v-3M24 31v-3" stroke="#A99BB5" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function CourageIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 38c4-8 10-14 16-28 6 14 12 20 16 28" stroke="#A99BB5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M14 32h20" stroke="#A99BB5" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <circle cx="24" cy="22" r="3" stroke="#A99BB5" strokeWidth="1.5" fill="none" />
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
    }, 6000);
    return () => clearInterval(interval);
  }, [activeTestimonial, goToTestimonial]);

  return (
    <div className="bd-page">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500&display=swap');

        .bd-page {
          --bd-cream: #FAF7F2;
          --bd-warm: #F3EDE4;
          --bd-sand: #E8DFD1;
          --bd-stone: #C4B5A0;
          --bd-earth: #8B7355;
          --bd-deep: #5C4A32;
          --bd-dark: #2C2418;
          --bd-accent: #7B6B8A;
          --bd-accent-light: #A99BB5;
          --bd-white: #FFFFFF;

          font-family: 'Inter', -apple-system, sans-serif;
          color: var(--bd-dark);
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
          background: rgba(250, 247, 242, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(196, 181, 160, 0.2);
          transition: all 0.3s ease;
        }

        .bd-nav-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 500;
          letter-spacing: 0.04em;
          color: var(--bd-dark);
          text-decoration: none;
        }

        .bd-nav-links {
          display: flex;
          gap: 2.5rem;
          list-style: none;
          align-items: center;
        }

        .bd-nav-links a {
          font-size: 0.95rem;
          font-weight: 400;
          color: var(--bd-earth);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.3s ease;
        }

        .bd-nav-links a:hover {
          color: var(--bd-dark);
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
              rgba(250, 247, 242, 0.55) 0%,
              rgba(243, 237, 228, 0.6) 40%,
              rgba(243, 237, 228, 0.75) 100%
            ),
            url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=80&auto=format');
          background-size: cover;
          background-position: center 40%;
        }

        .bd-hero-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 500;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: var(--bd-accent);
          margin-bottom: 2rem;
        }

        .bd-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 300;
          line-height: 1.1;
          color: var(--bd-dark);
          max-width: 800px;
          margin-bottom: 2rem;
          letter-spacing: -0.01em;
        }

        .bd-hero h1 em {
          font-style: italic;
          font-weight: 300;
          color: var(--bd-accent);
        }

        .bd-hero-sub {
          font-size: 1.25rem;
          line-height: 1.7;
          color: var(--bd-deep);
          max-width: 520px;
          font-weight: 400;
          margin-bottom: 3rem;
        }

        .bd-btn {
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 400;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 1rem 2.5rem;
          border: 1.5px solid var(--bd-dark);
          background: transparent;
          color: var(--bd-dark);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .bd-btn:hover {
          background: var(--bd-dark);
          color: var(--bd-cream);
        }

        .bd-btn-filled {
          background: var(--bd-dark);
          color: var(--bd-cream);
        }

        .bd-btn-filled:hover {
          background: var(--bd-deep);
          border-color: var(--bd-deep);
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
          color: var(--bd-stone);
          font-size: 0.75rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .bd-scroll-line {
          width: 1px;
          height: 40px;
          background: var(--bd-stone);
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
          font-size: 0.85rem;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--bd-accent);
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

        /* About / Philosophy */
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
          background: var(--bd-cream);
          border-left: 3px solid var(--bd-accent-light);
        }

        .bd-about-aside p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 400;
          font-style: italic;
          line-height: 1.6;
          color: var(--bd-deep);
        }

        /* Approach pillars */
        .bd-approach {
          background: var(--bd-warm);
        }

        .bd-approach .bd-section-heading {
          font-size: clamp(2.5rem, 5vw, 3.8rem);
        }

        .bd-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
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
          border: 1px solid var(--bd-sand);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          text-align: center;
        }

        .bd-pillar:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(44, 36, 24, 0.08);
        }

        .bd-pillar-icon {
          display: flex;
          justify-content: center;
          margin-bottom: 1.25rem;
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
          color: var(--bd-accent-light);
        }

        .bd-testimonials .bd-section-heading {
          color: var(--bd-cream);
        }

        .bd-testimonial-wrap {
          margin-top: 3rem;
          min-height: 200px;
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
          font-size: clamp(1.4rem, 3vw, 1.9rem);
          font-weight: 300;
          font-style: italic;
          line-height: 1.6;
          max-width: 750px;
          margin: 0 auto 2rem;
          color: var(--bd-sand);
        }

        .bd-testimonial-author {
          font-size: 1rem;
          font-weight: 400;
          color: var(--bd-stone);
          letter-spacing: 0.05em;
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
          border: 1.5px solid var(--bd-stone);
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .bd-testimonial-dot.active {
          background: var(--bd-accent-light);
          border-color: var(--bd-accent-light);
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
          border-color: var(--bd-accent-light);
          background: var(--bd-cream);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(44, 36, 24, 0.06);
        }

        .bd-writing-card h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 500;
          color: var(--bd-dark);
          margin-bottom: 0.5rem;
        }

        .bd-writing-card p {
          font-size: 1rem;
          color: var(--bd-earth);
          font-weight: 300;
        }

        .bd-writing-card .bd-read-arrow {
          display: inline-block;
          margin-top: 0.75rem;
          font-size: 0.85rem;
          color: var(--bd-accent);
          font-weight: 400;
          letter-spacing: 0.05em;
          transition: transform 0.3s ease;
        }

        .bd-writing-card:hover .bd-read-arrow {
          transform: translateX(4px);
        }

        /* CTA */
        .bd-cta {
          background: linear-gradient(
            180deg,
            var(--bd-cream) 0%,
            var(--bd-warm) 100%
          );
          text-align: center;
          padding: 8rem 2rem;
        }

        .bd-cta .bd-section-heading {
          margin-bottom: 1.5rem;
        }

        .bd-cta p {
          font-size: 1.15rem;
          line-height: 1.75;
          color: var(--bd-earth);
          max-width: 550px;
          margin: 0 auto 3rem;
          font-weight: 300;
        }

        /* Footer */
        .bd-footer {
          background: var(--bd-dark);
          color: var(--bd-stone);
          text-align: center;
          padding: 3rem 2rem;
        }

        .bd-footer-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          color: var(--bd-sand);
          margin-bottom: 0.75rem;
          letter-spacing: 0.04em;
        }

        .bd-footer p {
          font-size: 0.9rem;
          font-weight: 300;
          color: var(--bd-stone);
        }

        .bd-footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 1.25rem;
        }

        .bd-footer-links a {
          font-size: 0.9rem;
          color: var(--bd-stone);
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
          background: var(--bd-stone);
          margin: 0 auto 2rem;
        }
      `}</style>

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
            <a href="#connect" className="bd-btn" style={{ padding: "0.6rem 1.5rem", fontSize: "0.8rem" }}>
              Work With Me
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
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>
          About
        </a>
        <a href="#approach" onClick={() => setMobileMenuOpen(false)}>
          Approach
        </a>
        <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>
          Testimonials
        </a>
        <a href="#writing" onClick={() => setMobileMenuOpen(false)}>
          Writing
        </a>
        <a href="#connect" onClick={() => setMobileMenuOpen(false)}>
          Work With Me
        </a>
      </div>

      {/* Hero */}
      <section className="bd-hero" id="top">
        <p className="bd-hero-tagline">Brita Dawn Coaching</p>
        <h1>
          Trust Yourself.
          <br />
          Live Your Life from <em>Freedom</em>.
        </h1>
        <p className="bd-hero-sub">
          Everything you need is inside of you.
          <br />
          Coaching for people ready to come alive.
        </p>
        <a href="#connect" className="bd-btn">
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
                Where deep listening meets courageous action
              </h2>
              <p>
                Brita has been a professionally certified coach since 2013, with
                15 years of experience as a physical therapist. Her coaching
                uniquely integrates psychology, neuroscience, and body awareness
                to help people navigate life&apos;s most meaningful transitions.
              </p>
              <p>
                A former competitive gymnast and runner, she learned early how to
                push past limits. Later, she discovered something equally
                powerful: the art of sustainable pacing, deep presence, and
                trusting the wisdom already within you.
              </p>
              <p>
                Growing up in a communal environment focused on reflection and
                life&apos;s bigger questions, Brita later immersed herself in
                California&apos;s landscape of self-awareness and exploration,
                shaping a practice grounded in both rigor and tenderness.
              </p>
            </div>
            <div className="bd-about-aside">
              <p>
                &ldquo;Your sweet spot lives between leaning into the edges of
                what you think is possible, and finding a pace that is sustainable
                and enjoyable.&rdquo;
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
                physical sensations carry, turning them into clarity and
                direction.
              </p>
            </div>
            <div className="bd-pillar">
              <div className="bd-pillar-icon">
                <SelfTrustIcon />
              </div>
              <h3>Self-Trust</h3>
              <p>
                We unwind the limiting beliefs and external pressures that keep
                you from hearing your own voice. You learn to make decisions from
                what feels alive, not from what feels safe or obligatory.
              </p>
            </div>
            <div className="bd-pillar">
              <div className="bd-pillar-icon">
                <CourageIcon />
              </div>
              <h3>Courageous Action</h3>
              <p>
                Freedom doesn&apos;t come from thinking differently. It comes
                from living differently. Together we build the confidence and
                accountability to move from insight to embodied, lasting change.
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
                <p>{w.topic}</p>
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
            Start with a free 30-minute consultation. No pressure, no
            commitment. Just a conversation about what&apos;s possible when you
            trust yourself.
          </p>
          <a
            href="mailto:brita@britadawn.com"
            className="bd-btn bd-btn-filled"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bd-footer">
        <p className="bd-footer-name">Brita Dawn Coaching</p>
        <p>Certified Coach Since 2013</p>
        <div className="bd-footer-links">
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
