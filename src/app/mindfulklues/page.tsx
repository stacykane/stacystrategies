"use client";

import { useState } from "react";

/* ─── data ─── */

const services = [
  {
    title: "Yoga Instruction",
    description:
      "From gentle restorative sessions to power vinyasa flows, Nicole brings intention and presence to every class. Offerings include chair yoga for accessibility, yoga sculpt for strength, and Sunday Morning Flow — a fast-paced, Rocket-inspired practice with arm balances and inversions.",
    icon: "🧘",
    details: [
      "Private & group classes (in-person and virtual)",
      "Power Vinyasa, Gentle Yoga, Chair Yoga",
      "Yoga Sculpt — breath-connected strength",
      "All experience levels welcome",
    ],
  },
  {
    title: "Mindfulness & Meditation",
    description:
      "Guided meditation and mindfulness techniques grounded in evidence-based practice. Nicole helps individuals and teams cultivate presence, reduce anxiety, and build resilience — tools she discovered through her own journey with anxiety and self-doubt.",
    icon: "🌿",
    details: [
      "Individual and group meditation sessions",
      "Stress reduction and anxiety management",
      "Breathwork and body awareness practices",
      "Daily mindfulness integration strategies",
    ],
  },
  {
    title: "Wellness Workshops & Retreats",
    description:
      "Immersive experiences designed for growth, healing, and transformation. Whether it's a half-day corporate wellness workshop or a weekend retreat, Nicole creates spaces where participants can pause, reconnect, and rediscover their inner strength.",
    icon: "✨",
    details: [
      "Half-day and full-day workshops",
      "Weekend wellness retreats",
      "Team-building through mindful movement",
      "Customized programs for your group's needs",
    ],
  },
  {
    title: "Education & Instructional Design",
    description:
      "With a Master's degree, PhD-level coursework in Education Technology, and years leading learning systems for DC Public Schools and the DC Bar, Nicole brings deep expertise in designing transformative learning experiences.",
    icon: "📚",
    details: [
      "Curriculum design for wellness programs",
      "Learning management system strategy",
      "Professional development for educators",
      "Educator wellness and burnout prevention",
    ],
  },
  {
    title: "Corporate & Organizational Wellness",
    description:
      "Bringing mindfulness into the workplace. Nicole partners with organizations to design wellness programs that reduce burnout, improve focus, and build healthier team cultures — blending her consulting expertise with her wellness practice.",
    icon: "🏢",
    details: [
      "Workplace mindfulness programs",
      "Leadership wellness coaching",
      "Burnout prevention strategies",
      "Lunch & learn series",
    ],
  },
];

const credentials = [
  { label: "M.A.", detail: "University of Illinois System" },
  { label: "B.A.", detail: "Political Science & Communication, Northern Illinois University" },
  { label: "PhD Coursework", detail: "Education / Instructional Technology, University of Missouri - St. Louis" },
  { label: "Education Pioneers Fellow", detail: "Educational Technology" },
  { label: "Yoga Instructor", detail: "Multiple styles including Power, Vinyasa, Gentle, Chair, and Sculpt" },
];

const experience = [
  {
    role: "Co-Founder",
    org: "YogiTown",
    description: "Co-founded a yoga and wellness community offering live, virtual, and on-demand classes, workshops, and retreats in Washington, D.C.",
  },
  {
    role: "Director, Learning Systems Innovation",
    org: "DC Public Schools",
    description: "Led professional learning and online platform strategy, connecting thousands of educators through innovative Canvas LMS implementations.",
  },
  {
    role: "Education & Workforce Consultant",
    org: "Safal Partners",
    description: "Senior consultant leading education initiatives including the CRIMSI project, leveraging technology platforms to deliver professional learning at scale.",
  },
  {
    role: "Learning Systems Innovation Director",
    org: "DC Bar",
    description: "Designed and managed professional development and online learning programs for legal professionals.",
  },
];

const testimonials = [
  {
    quote:
      "Nicole has a rare ability to make everyone in the room feel seen and supported. Her classes are a perfect blend of challenge and calm.",
    author: "Workshop Participant",
  },
  {
    quote:
      "Working with Nicole transformed how our team approaches stress. She doesn't just teach mindfulness — she embodies it.",
    author: "Corporate Client",
  },
  {
    quote:
      "I came to Nicole during a really difficult time. Her patience and warmth helped me find a practice that became my anchor.",
    author: "Private Client",
  },
];

/* ─── components ─── */

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="text-3xl mb-3">{service.icon}</div>
      <h3 className="text-lg font-semibold text-stone-900 mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-stone-500 leading-relaxed">
        {service.description}
      </p>
      <button
        onClick={() => setOpen(!open)}
        className="mt-3 text-sm font-medium text-teal-700 hover:text-teal-900 cursor-pointer transition-colors"
      >
        {open ? "Show less" : "What's included →"}
      </button>
      {open && (
        <ul className="mt-3 space-y-1.5">
          {service.details.map((d) => (
            <li
              key={d}
              className="flex gap-2 text-sm text-stone-600"
            >
              <span className="text-teal-500 mt-0.5">✓</span>
              {d}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ─── page ─── */

export default function NicoleKluesPage() {
  const [formSent, setFormSent] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900" style={{ fontFamily: "'Geist', system-ui, -apple-system, sans-serif" }}>
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/mindfulklues" className="flex items-center gap-2">
            <img
              src="/mindfulklues/yogitown-logo.png"
              alt="Mindful Klues"
              className="h-8 w-auto"
            />
            <span className="font-semibold text-stone-900 tracking-tight">
              Mindful Klues
            </span>
          </a>
          <div className="hidden md:flex items-center gap-6 text-sm text-stone-500">
            <a href="#about" className="hover:text-stone-900 transition-colors">
              About
            </a>
            <a href="#services" className="hover:text-stone-900 transition-colors">
              Services
            </a>
            <a href="#experience" className="hover:text-stone-900 transition-colors">
              Experience
            </a>
            <a href="#writing" className="hover:text-stone-900 transition-colors">
              Writing
            </a>
            <a href="#testimonials" className="hover:text-stone-900 transition-colors">
              Kind Words
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full bg-teal-700 text-white text-sm font-medium hover:bg-teal-800 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative overflow-hidden">
        {/* Warm abstract background — organic shapes */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-amber-50/40 to-rose-50/20" />
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute -top-20 -right-20 w-[500px] h-[500px] opacity-[0.08]"
            viewBox="0 0 500 500"
            fill="none"
          >
            <circle cx="250" cy="250" r="200" stroke="#0d9488" strokeWidth="1" />
            <circle cx="250" cy="250" r="160" stroke="#0d9488" strokeWidth="0.5" />
            <circle cx="250" cy="250" r="120" stroke="#0d9488" strokeWidth="0.5" />
            <circle cx="250" cy="250" r="80" stroke="#0d9488" strokeWidth="0.5" />
          </svg>
          <svg
            className="absolute -bottom-32 -left-32 w-[400px] h-[400px] opacity-[0.06]"
            viewBox="0 0 400 400"
            fill="none"
          >
            <circle cx="200" cy="200" r="180" stroke="#d97706" strokeWidth="1" />
            <circle cx="200" cy="200" r="140" stroke="#d97706" strokeWidth="0.5" />
            <circle cx="200" cy="200" r="100" stroke="#d97706" strokeWidth="0.5" />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28 lg:py-32">
          <div className="md:flex md:items-center md:gap-12 lg:gap-16">
            {/* Hero visual — warm abstract illustration instead of photo */}
            <div className="flex-shrink-0 mb-10 md:mb-0 flex justify-center md:justify-start">
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                {/* Layered warm circles — evokes sunrise, openness, calm */}
                <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
                  {/* Outermost glow */}
                  <circle cx="200" cy="200" r="195" fill="url(#outerGlow)" />
                  {/* Warm gradient ring */}
                  <circle cx="200" cy="200" r="170" fill="url(#warmRing)" />
                  {/* Inner calm */}
                  <circle cx="200" cy="200" r="140" fill="url(#innerCalm)" />
                  {/* Lotus / breath shape */}
                  <g transform="translate(200,200)" opacity="0.6">
                    {/* Petals */}
                    <ellipse cx="0" cy="-50" rx="22" ry="45" fill="#0d9488" opacity="0.3" transform="rotate(0)" />
                    <ellipse cx="0" cy="-50" rx="22" ry="45" fill="#0d9488" opacity="0.25" transform="rotate(45)" />
                    <ellipse cx="0" cy="-50" rx="22" ry="45" fill="#0d9488" opacity="0.3" transform="rotate(90)" />
                    <ellipse cx="0" cy="-50" rx="22" ry="45" fill="#0d9488" opacity="0.25" transform="rotate(135)" />
                    <ellipse cx="0" cy="-50" rx="22" ry="45" fill="#0d9488" opacity="0.3" transform="rotate(180)" />
                    <ellipse cx="0" cy="-50" rx="22" ry="45" fill="#0d9488" opacity="0.25" transform="rotate(225)" />
                    <ellipse cx="0" cy="-50" rx="22" ry="45" fill="#0d9488" opacity="0.3" transform="rotate(270)" />
                    <ellipse cx="0" cy="-50" rx="22" ry="45" fill="#0d9488" opacity="0.25" transform="rotate(315)" />
                    {/* Center */}
                    <circle cx="0" cy="0" r="20" fill="#0d9488" opacity="0.4" />
                    <circle cx="0" cy="0" r="10" fill="#fff" opacity="0.6" />
                  </g>
                  {/* Text inside */}
                  <text x="200" y="348" textAnchor="middle" fill="#0d9488" fontSize="13" fontWeight="500" letterSpacing="3" opacity="0.5">
                    BREATHE &middot; GROW &middot; THRIVE
                  </text>
                  {/* Gradients */}
                  <defs>
                    <radialGradient id="outerGlow" cx="0.5" cy="0.5" r="0.5">
                      <stop offset="0.7" stopColor="#f0fdfa" />
                      <stop offset="1" stopColor="#ccfbf1" stopOpacity="0" />
                    </radialGradient>
                    <radialGradient id="warmRing" cx="0.4" cy="0.3" r="0.6">
                      <stop offset="0" stopColor="#fef3c7" />
                      <stop offset="0.5" stopColor="#ccfbf1" />
                      <stop offset="1" stopColor="#f0fdfa" />
                    </radialGradient>
                    <radialGradient id="innerCalm" cx="0.5" cy="0.4" r="0.5">
                      <stop offset="0" stopColor="#ffffff" />
                      <stop offset="1" stopColor="#f0fdfa" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <p className="text-teal-700 font-medium text-sm tracking-wider uppercase mb-3">
                Yoga &middot; Mindfulness &middot; Wellness &middot; Education
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.1]">
                Nicole Klues
              </h1>
              <p className="mt-2 text-xl md:text-2xl text-stone-500 font-light">
                Mindful Klues
              </p>
              <p className="mt-6 text-base md:text-lg text-stone-600 leading-relaxed max-w-xl">
                Helping individuals and organizations find strength through
                stillness. Nicole combines deep expertise in education and
                instructional design with a lifelong practice of yoga and
                mindfulness to create transformative experiences.
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-teal-700 text-white font-medium hover:bg-teal-800 transition-colors shadow-sm"
                >
                  Work With Me
                </a>
                <a
                  href="#services"
                  className="px-6 py-3 rounded-full border border-stone-300 text-stone-700 font-medium hover:bg-white transition-colors"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-teal-700 font-medium text-sm tracking-wider uppercase mb-3">
            About Nicole
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-6">
            From the boardroom to the mat
          </h2>
          <div className="space-y-4 text-base text-stone-600 leading-relaxed">
            <p>
              Nicole came to yoga during a period of high stress and intense
              self-doubt. As a Type A professional in Washington, D.C., she was
              running at full speed — building learning systems for DC Public
              Schools, leading instructional design initiatives, and pushing
              herself to excel in every arena. Yoga gave her permission to
              pause.
            </p>
            <p>
              Through her practice, Nicole found tools to manage her history of
              anxiety and body dysmorphia. She discovered an inner strength she
              didn&apos;t know she had — and knew she had to share it. That
              journey led her to become a certified yoga instructor, teaching
              everything from gentle restorative sessions to high-energy power
              vinyasa flows.
            </p>
            <p>
              Today, Nicole brings together two decades of professional
              experience in education, technology, and organizational leadership
              with her deep personal practice. She co-founded{" "}
              <a
                href="https://yogi-town.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-700 underline decoration-teal-300 hover:decoration-teal-700 transition-colors"
              >
                YogiTown
              </a>
              , a yoga and wellness community in D.C., and created Mindful
              Klues to help individuals and organizations integrate mindfulness
              into their daily lives.
            </p>
          </div>

          {/* Values */}
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🤲</div>
              <h3 className="font-semibold text-stone-900 mb-1">
                Warmth First
              </h3>
              <p className="text-sm text-stone-500">
                Every interaction begins with compassion. Nicole creates spaces
                where you feel safe to show up exactly as you are.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold text-stone-900 mb-1">
                Evidence-Based
              </h3>
              <p className="text-sm text-stone-500">
                With advanced degrees and years in instructional design, Nicole
                grounds her practice in what actually works.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-3xl mb-3">🌱</div>
              <h3 className="font-semibold text-stone-900 mb-1">
                Meet You Where You Are
              </h3>
              <p className="text-sm text-stone-500">
                Whether you&apos;re brand new to mindfulness or deepening an
                existing practice, Nicole tailors her approach to your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pull quote from Substack */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-teal-700 to-teal-800 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <blockquote className="text-xl md:text-2xl lg:text-3xl font-light leading-relaxed italic">
            &ldquo;The world doesn&apos;t need more perfect. It needs more real.&rdquo;
          </blockquote>
          <p className="mt-4 text-teal-200 text-sm">
            &mdash; Nicole Klues,{" "}
            <a
              href="https://mindfulklues.substack.com/p/what-if-it-is-all-working-out"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-teal-400 hover:decoration-white transition-colors"
            >
              &ldquo;What If It Is All Working Out?&rdquo;
            </a>
          </p>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-12 bg-stone-100/50 border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {credentials.map((c) => (
              <div key={c.label} className="text-center">
                <p className="text-sm font-semibold text-teal-700">
                  {c.label}
                </p>
                <p className="text-xs text-stone-500 max-w-[200px]">
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-700 font-medium text-sm tracking-wider uppercase mb-3">
              Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
              How we can work together
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Whether you&apos;re an individual seeking personal transformation
              or an organization looking to invest in your team&apos;s
              wellbeing, there&apos;s a path forward.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.title} service={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-700 font-medium text-sm tracking-wider uppercase mb-3">
              Experience
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
              Where Nicole has led
            </h2>
            <p className="text-stone-500 max-w-xl mx-auto">
              Two decades of leadership across education, technology, and
              wellness.
            </p>
          </div>

          <div className="space-y-6">
            {experience.map((exp) => (
              <div
                key={exp.org}
                className="flex gap-4 p-5 rounded-xl border border-stone-200 bg-stone-50"
              >
                <div className="w-1 bg-teal-300 rounded-full flex-shrink-0" />
                <div>
                  <p className="text-sm font-bold text-stone-900">
                    {exp.role}
                  </p>
                  <p className="text-sm font-medium text-teal-700">
                    {exp.org}
                  </p>
                  <p className="mt-1 text-sm text-stone-500 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        id="testimonials"
        className="py-16 md:py-24 bg-gradient-to-br from-teal-50 to-amber-50/30"
      >
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-teal-700 font-medium text-sm tracking-wider uppercase mb-3">
              Kind Words
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900">
              What people are saying
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 shadow-sm border border-stone-100"
              >
                <div className="text-teal-300 text-4xl leading-none mb-3">
                  &ldquo;
                </div>
                <p className="text-sm text-stone-600 leading-relaxed italic">
                  {t.quote}
                </p>
                <p className="mt-4 text-xs font-semibold text-stone-400 uppercase tracking-wider">
                  — {t.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Writing */}
      <section id="writing" className="py-16 md:py-24 bg-white border-b border-stone-200 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="md:flex md:items-start md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-teal-700 font-medium text-sm tracking-wider uppercase mb-3">
                Newsletter
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-3">
                Mindful Klues: Returning to Yourself
              </h2>
              <p className="text-stone-500 leading-relaxed mb-4 italic">
                &ldquo;Real talk, nervous system repair, and the soft rebellion
                of choosing peace over performance.&rdquo;
              </p>
              <p className="text-stone-600 leading-relaxed mb-6">
                Nicole writes for the high-achieving, soul-curious, quietly
                spiraling humans learning they&apos;re not broken — they&apos;re
                coming home. Honest healing, real tools, and space for it all.
              </p>
              <a
                href="https://mindfulklues.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500 text-white font-medium text-sm hover:bg-orange-600 transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
                </svg>
                Read on Substack
              </a>
            </div>
            <div className="md:w-1/2 space-y-4">
              <a
                href="https://mindfulklues.substack.com/p/the-key-is-already-in-your-hand"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-stone-200 bg-stone-50 p-5 hover:bg-stone-100 transition-colors"
              >
                <p className="text-xs text-stone-400 mb-1">March 2026</p>
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  The Key Is Already In Your Hand
                </h4>
                <p className="text-xs text-stone-500 italic">
                  &ldquo;In order for something to exist, you must first believe
                  in it.&rdquo;
                </p>
              </a>
              <a
                href="https://mindfulklues.substack.com/p/what-if-it-is-all-working-out"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-stone-200 bg-stone-50 p-5 hover:bg-stone-100 transition-colors"
              >
                <p className="text-xs text-stone-400 mb-1">July 2025</p>
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  What If It Is All Working Out?
                </h4>
                <p className="text-xs text-stone-500 italic">
                  &ldquo;There comes a point when the version of you that got
                  you here can&apos;t take you where you&apos;re going.&rdquo;
                </p>
              </a>
              <a
                href="https://mindfulklues.substack.com/p/welcome-to-am-i-the-fd-up-one"
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-stone-200 bg-stone-50 p-5 hover:bg-stone-100 transition-colors"
              >
                <p className="text-xs text-stone-400 mb-1">May 2025</p>
                <h4 className="text-sm font-bold text-stone-900 mb-1">
                  Welcome to &ldquo;Am I the F*cked Up One?&rdquo;
                </h4>
                <p className="text-xs text-stone-500 italic">
                  &ldquo;A space for the high-achieving, quietly spiraling,
                  soul-curious ones who are ready to come home to
                  themselves.&rdquo;
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* YogiTown callout */}
      <section className="py-12 bg-white border-y border-stone-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm text-stone-400 uppercase tracking-wider mb-2">
            Co-Founder
          </p>
          <h3 className="text-2xl font-bold text-stone-900 mb-2">
            YogiTown
          </h3>
          <p className="text-stone-500 max-w-lg mx-auto mb-4">
            A yoga and wellness community in Washington, D.C. offering live,
            virtual, and on-demand classes, workshops, and retreats for every
            level.
          </p>
          <a
            href="https://yogi-town.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-teal-300 text-teal-700 font-medium text-sm hover:bg-teal-50 transition-colors"
          >
            Visit YogiTown
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="md:flex md:gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-teal-700 font-medium text-sm tracking-wider uppercase mb-3">
                Get in Touch
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
                Let&apos;s connect
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                Whether you&apos;re looking for private yoga instruction, a
                corporate wellness program, or a retreat for your team,
                I&apos;d love to hear from you. Every journey starts with a
                conversation.
              </p>
              <div className="space-y-3 text-sm text-stone-600">
                <div className="flex items-center gap-3">
                  <span className="text-lg">📍</span>
                  <span>Washington, D.C. (available virtually nationwide)</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🌐</span>
                  <a
                    href="https://mindfulklues.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:underline"
                  >
                    mindfulklues.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">🧘</span>
                  <a
                    href="https://yogi-town.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:underline"
                  >
                    yogi-town.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">📸</span>
                  <a
                    href="https://www.instagram.com/mindfulklues/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:underline"
                  >
                    @mindfulklues
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-lg">✍️</span>
                  <a
                    href="https://mindfulklues.substack.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-700 hover:underline"
                  >
                    Newsletter on Substack
                  </a>
                </div>
              </div>
            </div>

            <div className="md:w-1/2">
              {formSent ? (
                <div className="rounded-2xl bg-teal-50 border border-teal-200 p-8 text-center">
                  <div className="text-4xl mb-3">🙏</div>
                  <h3 className="text-lg font-semibold text-teal-900 mb-2">
                    Thank you!
                  </h3>
                  <p className="text-sm text-teal-700">
                    Your message has been received. Nicole will be in touch
                    soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSent(true);
                  }}
                  className="rounded-2xl bg-white border border-stone-200 p-6 shadow-sm space-y-4"
                >
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      I&apos;m interested in...
                    </label>
                    <select className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-stone-600">
                      <option>Private yoga instruction</option>
                      <option>Corporate / organizational wellness</option>
                      <option>Workshop or retreat</option>
                      <option>Mindfulness coaching</option>
                      <option>Education / instructional design consulting</option>
                      <option>Something else</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-stone-700 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-stone-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Tell me a little about what you're looking for..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-teal-700 text-white font-medium hover:bg-teal-800 transition-colors cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="md:flex md:items-start md:justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img
                  src="/mindfulklues/yogitown-logo.png"
                  alt="Mindful Klues"
                  className="h-7 w-auto brightness-0 invert"
                />
                <span className="font-semibold tracking-tight">
                  Mindful Klues
                </span>
              </div>
              <p className="text-sm text-stone-400 max-w-sm">
                Yoga, mindfulness, wellness, and education — rooted in
                compassion, grounded in evidence. Based in Washington, D.C.,
                serving clients nationwide.
              </p>
            </div>
            <div className="mt-6 md:mt-0 flex gap-6">
              <a
                href="https://yogi-town.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-400 hover:text-white transition-colors"
              >
                YogiTown
              </a>
              <a
                href="https://mindfulklues.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-400 hover:text-white transition-colors"
              >
                mindfulklues.com
              </a>
              <a
                href="https://www.instagram.com/mindfulklues/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-400 hover:text-white transition-colors"
              >
                @mindfulklues
              </a>
              <a
                href="https://mindfulklues.substack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-stone-400 hover:text-white transition-colors"
              >
                Substack
              </a>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-stone-800 text-xs text-stone-500">
            © {new Date().getFullYear()} Mindful Klues. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
