import Link from 'next/link';
import { FadeInSection } from "@/components/fadeIn";
import { FaFire } from "react-icons/fa6";
import { GiPush, GiSoccerKick } from "react-icons/gi";
import { MdScience } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { IoAccessibilitySharp } from "react-icons/io5";
import Image from "next/image";
import AnimatedHeader from '@/components/AnimatedHeader';
import HeroBackground from "@/components/HeroBackground";




export default function Home() {

  return (
    <div>
      {/* Navigation */}
      <div
        className="px-4 pt-0 sticky top-0 z-20 border-white/10 rounded-3xl shadow-lg max-w-5xl mx-auto"
        style={{
          backdropFilter: 'blur(34px)',
          backgroundColor: 'rgba(0, 0, 0, 0.25)',
        }}
      >
        <nav className="container mx-auto px-5 py-1 border-white/10 shadow-lg rounded-3xl">
          <div className="flex items-center justify-between">
            {/* Clickable Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/s8_transparent.png"
                alt="Scoutiv8 Logo"
                width={100}
                height={60}
                className="rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer"
              />
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {[
                { name: 'Services', href: '#services' },
                { name: 'About', href: '#about' },
                { name: 'Our Team', href: '#team' },
                { name: 'Pricing', href: '#pricing' },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="text-white px-3 py-2 rounded-md transition-all duration-300 
                            hover:text-[#daba0bec] hover:scale-105 transform"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Button */}
            <button className="bg-[#daba0bec] hover:bg-[#FFD700] text-black px-6 py-2 rounded-lg transition-colors font-semibold">
              Book Session
            </button>
          </div>
        </nav>
      </div>



      {/* Hero Section */}
      <section className="relative py-51 bg-center bg-cover overflow-hidden">
      {/* Background Slideshow */}
      <HeroBackground />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[3px]"></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent inline-block">
          Get Your Professional
          <span className="text-[#daba0bec] block">Scout Report</span>
        </h1>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          Be the Best <span className="text-[#daba0b] font-bold">YOU</span> can be.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            className="bg-[#daba0bec] text-black border-2 border-yellow-400 px-8 py-4 rounded-lg text-lg font-semibold 
             transition-all duration-300 transform hover:scale-105">
            Get Your Report Now
          </button>
        </div>
      </div>
      </section>



      {/* Cards Section */}
      <section id='about' className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#daba0b40]">
      {/*<section className="py-20 bg-[radial-gradient(circle_at_center,_#0a0a0a,_#1a1a1a,_#daba0b40)]"> */}
        <div className="container mx-auto px-6">
          <AnimatedHeader delay={0} className='mb-5'>
            {"Empowering Every Player's Journey"}
          </AnimatedHeader>
          <p className="text-center text-gray-300 max-w-5xl mx-auto text-lg leading-relaxed mb-10">
            <span className="text-[#daba0b] font-bold text-2xl">Scoutiv8</span> is a pioneering business dedicated to providing professional scouting reports for grassroots footballers across Glasgow and nearby regions. With over 40 years of experience at SPL Academy and first-team levels, our fully qualified scouts deliver both live and video-based assessments, offering detailed insights across the four key pillars of development — <span className="text-white font-semibold">Technical, Tactical, Physical,</span> and <span className="text-white font-semibold">Psychological</span>. Partnering with experts in sports science, sprint coaching, conditioning, psychology, and tactical training, we create bespoke development plans tailored to every player’s unique goals.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Card 1 */}
            <FadeInSection delay={0}>
              <div className="card">
                <h3>
                  <div className="icon-glow">
                    <FaFire />
                  </div>
                  Our Motivation
                </h3>
                <p className="subtitle">Helping Players Reach Their Potential</p>
                <p className="description">
                  We aim to provide tailored individual support for grassroots players — male and female — helping them become the best version of themselves both on and off the field.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={150}>
              <div className="card">
                <h3>
                  <div className="icon-glow">
                    <GiPush />
                  </div>
                  Challenges in Grassroots Development
                </h3>
                <p className="subtitle">Bridging the Support Gap</p>
                <p className="description">
                  Many young players lack an Individual Development Plan (IDP) and access to specialist coaches. Our mission is to fill that gap with expert guidance and structured development goals.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={300}>
              <div className="card">
                <h3>
                  <div className="icon-glow">
                    <MdScience />
                  </div>
                  Our Methodology
                </h3>
                <p className="subtitle">From Observation to Action</p>
                <p className="description">
                  {"Experienced scouts assess players in their natural environment, producing detailed reports that inform each player's personalised IDP. Recommendations for specialist courses and coaching are then tailored to individual goals."}
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={450}>
              <div className="card">
                <h3>
                  <div className="icon-glow">
                    <GiSoccerKick />
                  </div>
                  Player Development Approach
                </h3>
                <p className="subtitle">The 4-Corner Model</p>
                <p className="description">
                  Our programmes target all areas of player growth — Technical, Tactical, Physical, and Psychological — delivered by top coaches, ex-professionals, sports scientists, and performance experts.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="card">
                <h3>
                  <div className="icon-glow">
                    <VscFeedback />
                  </div>
                  Monitoring & Feedback
                </h3>
                <p className="subtitle">Track Progress with Our App</p>
                <p className="description">
                  Members gain access to a private account on our app to view reports, IDPs, training data, and feedback from coaches. The app also offers chat support, physical testing data, and exclusive insights from professionals.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={750}>
              <div className="card">
                <h3>
                  <div className="icon-glow">
                    <IoAccessibilitySharp />
                  </div>
                  Membership & Access
                </h3>
                <p className="subtitle">Join the Journey</p>
                <p className="description">
                  Open to boys and girls aged 8+, with no upper limit. A monthly subscription unlocks all features, discounts, and exclusive content. While we don’t guarantee professional trials, we help every player maximise their development and enjoyment.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gradient-to-b from-[#daba0b40] via-[#1a1a1a] to-[#0a0a0a]">
          <div className="container mx-auto px-6">
          <AnimatedHeader delay={0} className="mb-14 pt-20">
            Professional Analysis in Four Key Areas
          </AnimatedHeader>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="key-card">
              <div className="icon-box bg-blue-600">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3>Technical Analysis</h3>
              <p>
                Detailed breakdown of your ball control, passing accuracy, shooting technique, and tactical awareness on the pitch.
              </p>
              <ul>
                <li>• First touch assessment</li>
                <li>• Passing range & accuracy</li>
                <li>• Decision making under pressure</li>
                <li>• Position-specific skills</li>
              </ul>
            </div>

            <div className="key-card">
              <div className="icon-box bg-green-600">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3>Physical Assessment</h3>
              <p>Comprehensive evaluation of your speed, stamina, and strength.</p>
              <ul>
                <li>• Sprint speed & acceleration</li>
                <li>• Endurance & recovery</li>
                <li>• Agility & coordination</li>
                <li>• Injury risk assessment</li>
              </ul>
            </div>

            <div className="key-card">
              <div className="icon-box bg-yellow-400">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3>Psychological Profile</h3>
              <p>
                Mental strength analysis covering confidence, leadership, pressure handling, and competitive mindset.
              </p>
              <ul>
                <li>• Mental resilience</li>
                <li>• Leadership qualities</li>
                <li>• Communication skills</li>
                <li>• Competitive drive</li>
              </ul>
            </div>

            <div className="key-card">
              <div className="icon-box bg-orange-600">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2m0 0V9a2 2 0 012-2m0 0V7a2 2 0 012-2h12a2 2 0 012 2v2M7 7V6a1 1 0 011-1h8a1 1 0 011 1v1m-9 6h2m2 0h2"
                  />
                </svg>
              </div>
              <h3>Tactical Awareness</h3>
              <p>
                Strategic understanding and game intelligence assessment covering positioning, decision-making, and tactical
                implementation.
              </p>
              <ul>
                <li>• Positional awareness</li>
                <li>• Game reading ability</li>
                <li>• Formation understanding</li>
                <li>• Strategic decision-making</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* === OUR TEAM SECTION === */}
      
      <section id="team" className="py-20 bg-black text-center">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <AnimatedHeader>
            Meet <span className="text-[#daba0b]">Our Team</span>
          </AnimatedHeader>
          <p className="text-gray-300 max-w-3xl mx-auto mb-16 text-lg">
            At the heart of our mission is a dedicated team of experienced scouts, coaches, and performance specialists 
            who share a passion for developing players to their fullest potential. Every member of our team is committed 
            to empowering players on and off the pitch through expertise, mentorship, and care.
          </p>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                name: "Paul Smith",
                role: "Founder & Lead Scout",
                location: "Glasgow, Scotland",
                bio: "A UEFA-qualified scout with over 20 years of experience in player development and talent identification.",
                img: "/Images/trial1.png",
                imgHover: "/Images/trial1-fun.png",
              },
              {
                name: "Sarah McLean",
                role: "Performance Coach",
                location: "Edinburgh, Scotland",
                bio: "Specialist in strength, conditioning, and injury prevention for developing athletes.",
                img: "/team2.jpg",
                imgHover: "/team2-fun.jpg",
              },
              {
                name: "James Taylor",
                role: "Technical Analyst",
                location: "Manchester, England",
                bio: "Experienced data analyst focused on technical and tactical performance insights.",
                img: "/team3.jpg",
                imgHover: "/team3-fun.jpg",
              },
              {
                name: "Emily Watson",
                role: "Sports Psychologist",
                location: "London, England",
                bio: "Helps players build confidence, manage pressure, and strengthen their mental resilience.",
                img: "/team4.jpg",
                imgHover: "/team4-fun.jpg",
              },
              {
                name: "Mark Robertson",
                role: "Tactical Coach",
                location: "Aberdeen, Scotland",
                bio: "Former academy coach bringing deep understanding of tactical frameworks and match preparation.",
                img: "/team5.jpg",
                imgHover: "/team5-fun.jpg",
              },
              {
                name: "Hannah Lee",
                role: "Physiotherapist",
                location: "Dundee, Scotland",
                bio: "Experienced physio supporting recovery, biomechanics, and long-term player well-being.",
                img: "/team6.jpg",
                imgHover: "/team6-fun.jpg",
              },
              {
                name: "David Kerr",
                role: "Athletic Development Lead",
                location: "Perth, Scotland",
                bio: "Focuses on speed, agility, and explosive movement development for youth players.",
                img: "/team7.jpg",
                imgHover: "/team7-fun.jpg",
              },
              {
                name: "Lauren White",
                role: "Player Liaison & Support",
                location: "Glasgow, Scotland",
                bio: "Dedicated to ensuring every player’s journey is guided, supported, and focused on holistic growth.",
                img: "/team8.jpg",
                imgHover: "/team8-fun.jpg",
              },
            ].map((member, i) => (
              <div
                key={i}
                className="group relative rounded-xl p-6 text-left bg-slate-800/30 overflow-hidden transition-all duration-500"
              >
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#bfa008] to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500 "></div>

                {/* Image Container */}
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden group">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg transition-opacity duration-500 group-hover:opacity-0"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    priority
                  />
                  <Image
                    src={member.imgHover}
                    alt={member.name}
                    fill
                    className="object-cover rounded-lg opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-[#daba0b] text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-sm italic mb-3">{member.location}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Reality Check Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Get the Reality Check You Need
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Stop wondering where you stand. Our professional analysis gives you an honest, detailed assessment of your current level and exactly what you need to work on to improve.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-white mb-4">Track Your Progress</h3>
              <p className="text-gray-300">
                Get baseline measurements and regular reassessments to monitor your development over time.
              </p>
            </div>
            <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-slate-600">
              <h3 className="text-xl font-bold text-white mb-4">Honest Assessment</h3>
              <p className="text-gray-300">
                No sugar-coating. Get the truth about your abilities and realistic expectations for your football journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Choose Your Assessment
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Basic Report</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">£49</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>• Technical analysis</li>
                <li>• Written report (8-10 pages)</li>
                <li>• Improvement recommendations</li>
                <li>• Video analysis highlights</li>
              </ul>
              <button className="w-full bg-slate-600 hover:bg-slate-500 text-white py-3 rounded-lg font-semibold transition-colors">
                Get Basic Report
              </button>
            </div>

            <div className="bg-blue-600/20 backdrop-blur-sm p-8 rounded-xl border-2 border-blue-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Complete Analysis</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">£129</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>• Technical + Physical + Psychological + Tactical</li>
                <li>• Comprehensive report (15-20 pages)</li>
                <li>• Detailed improvement plan</li>
                <li>• Video analysis with commentary</li>
                <li>• Progress tracking tools</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Get Complete Analysis
              </button>
            </div>

            <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">Elite Package</h3>
              <div className="text-4xl font-bold text-blue-400 mb-6">£299</div>
              <ul className="text-gray-300 space-y-3 mb-8">
                <li>• Complete analysis</li>
                <li>• 60-min 1-on-1 with Paul</li>
                <li>• Personalized training program</li>
                <li>• 3-month follow-up assessment</li>
                <li>• Career pathway consultation</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Get Elite Package
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Discover Your True Potential?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of players who&apos;ve already received their professional scout reports and started their improvement journey.
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Start Your Assessment Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">
                Scout<span className="text-blue-400">iv8</span>
              </div>
              <p className="text-gray-400">
                Professional football analysis for everyday players.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="text-gray-400 space-y-2">
                <li>Technical Analysis</li>
                <li>Physical Assessment</li>
                <li>Psychological Profile</li>
                <li>Tactical Awareness</li>
                <li>1-on-1 Coaching</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">About</h4>
              <ul className="text-gray-400 space-y-2">
                <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                <li>Paul Cooper</li>
                <li>Our Method</li>
                <li>Success Stories</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="text-gray-400 space-y-2">
                <li>hello@scoutivate.com</li>
                <li>+44 20 1234 5678</li>
                <li>London, UK</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Scoutiv8. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}