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
import MobileMenu from '@/components/MobileMenu';
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import BackToTopButton from '@/components/BackToTopButton';
import { FaSnowflake } from "react-icons/fa";

type CardProps = {
  title: string;
  originalPrice: string;
  discountedPrice: string;
  features: string[];
};

function Card({ title, originalPrice, discountedPrice, features }: CardProps) {
  return (
    <div className="relative">
      {/* Winter Badge */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-blue-600 font-semibold px-4 py-1 rounded-full shadow-[0_0_12px_4px_rgba(255,255,255,0.6)] border border-white z-10">
        Winter Offer
      </div>

      {/* Card */}
      <div className="relative rounded-2xl p-12 flex flex-col h-full shadow-[0_0_30px_rgba(0,0,0,0.4)] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden 
                      transition-all duration-300 
                      hover:border-white hover:shadow-[0_0_20px_#ffffff80]">
        
        {/* Snowflakes */}
        {[...Array(15)].map((_, i: number) => (
          <FaSnowflake
            key={i}
            className="absolute text-white/80"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 12}px`,
              opacity: 0.7 + Math.random() * 0.3,
            }}
          />
        ))}

        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Pricing */}
        <div className="mb-6">
          <p className="text-gray-400 line-through text-lg">{originalPrice}</p>
          <p className="text-4xl font-bold text-yellow-300">{discountedPrice}</p>
        </div>

        {/* Features */}
        <ul className="space-y-3 flex-grow text-gray-200">
          {features.map((feature: string, idx: number) => (
            <li key={idx}>• {feature}</li>
          ))}
        </ul>

        <button className="mt-8 w-full py-3 rounded-lg bg-[#daba0b] text-black font-semibold hover:bg-[#c6a507] transition">
          Get {title.split(" ")[0]} Package
        </button>
      </div>
    </div>
  );
}

export default function Home() {

  return (
    <div> 
      {/* Navigation */} 
      <div
        className="
          px-4 pt-0 sticky top-0 z-20 border-white/10 shadow-lg max-w-5xl mx-auto 
          bg-black md:bg-[rgba(0,0,0,0.25)] 
          md:backdrop-blur-[34px] md:rounded-3xl
        "
      >
        <nav className="flex items-center justify-between px-5 py-2 rounded-none md:rounded-3xl">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/s8_transparent.png"
              alt="Scoutiv8 Logo"
              width={100}
              height={60}
              className="rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </Link>

          {/* DESKTOP LINKS + BUTTON */}
          <div className="hidden md:flex items-center justify-between w-full max-w-3xl mx-auto">
            {[
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Our Team", href: "#team" },
              { name: "Pricing", href: "#pricing" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-white px-4 py-2 rounded-md transition-all duration-300 hover:text-[#daba0bec] hover:scale-105 transform"
              >
                {item.name}
              </a>
            ))}

            <button className="bg-[#daba0bec] hover:bg-[#FFD700] text-black px-6 py-2 rounded-lg transition-colors font-semibold">
              Book Session
            </button>
          </div>

          {/* MOBILE MENU ICON */}
          <div className="md:hidden flex items-center">
            <MobileMenu />
          </div>
        </nav>
      </div>




      {/* Hero Section */}
      <section className="relative py-51 bg-center bg-cover overflow-hidden">
      {/* Background Slideshow */}
      <HeroBackground />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[3px]"></div>

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



      
      {/* Pricing Section */}
    <section id="pricing" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-4">
          Our Scouting Packages
        </h2>
        <p className="text-center text-gray-300 mb-20">
          Choose the right development pathway with our expert-led scouting services.
        </p>

        {/* Cards Wrapper */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* PREMIUM (12+) */}
          <Card
            title="Premium Scouting Package (12+)"
            originalPrice="£150"
            discountedPrice="£125"
            features={[
              "Video consultation to discuss aims and objectives",
              "Qualified scout attendance OR video match analysis",
              "PlayerData GPS tracker + vest provided",
              "Scouting Assessment Report (within 7 days)",
              "PlayerData Physical + Tactical report",
              "Sports Science report",
              "Individual Development Plan",
              "Post-report video consultation on next steps",
            ]}
          />

          {/* PREMIER (8–11) */}
          <Card
            title="Premier Scouting Package (8–11)"
            originalPrice="£120"
            discountedPrice="£100"
            features={[
              "Video consultation to discuss aims and objectives",
              "Qualified scout attendance at your game",
              "PlayerData GPS tracker provided",
              "Scouting Assessment Report (within 7 days)",
              "Additional PlayerData report",
              "Individual Development Plan",
              "Post-report video consultation",
            ]}
          />

          {/* ACADEMY (8–11) */}
          <Card
            title="Academy Scouting Package (8–11)"
            originalPrice="£90"
            discountedPrice="£75"
            features={[
              "Video consultation to discuss aims and objectives",
              "Qualified scout attendance at your game",
              "Scouting Assessment Report (within 7 days)",
              "Individual Development Plan",
              "Post-report video consultation",
            ]}
          />

        </div>
      </div>
    </section>


      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 shadow-[0_0_30px_rgba(0,0,0,0.4)]">

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to be the best <span className="text-[#daba0b]">YOU</span> can be?
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join hundreds of players already transforming their game with
              professional-level scouting reports and personalised performance insights.
            </p>

            <button className="
              px-10 py-4 text-lg font-semibold rounded-xl
              bg-[#daba0b] text-black
              hover:bg-[#e6c636] transition-all
              shadow-[0_0_20px_rgba(218,186,11,0.4)]
              hover:shadow-[0_0_35px_rgba(218,186,11,0.7)]
            ">
              Get Your Report Today
            </button>
            
          </div>

        </div>
      </section>



      {/* Footer */}
      <footer className="w-full bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#daba0b40] text-white px-6 py-20 md:pt-32">
        <div className="max-w-7xl mx-auto">

          {/* LEFT SIDE — Logo */}
          <div className="flex flex-col md:flex-row md:items-start">

            <div className="mb-12 md:mb-0 w-44 flex-shrink-0">
              <img
                src="/s8_transparent.png"
                alt="Scoutivate Logo"
                className="w-40 md:w-44"  
              />
            </div>

            {/* RIGHT SIDE — 3 COLUMNS (DESKTOP) */}
            <div className="hidden md:grid grid-cols-4 gap-16 md:ml-32">
              
              {/* SERVICES */}
              <div>
                <h3 className="text-sm font-semibold mb-4">Services</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><a className="hover:text-white">FA 4 Corner Model Assesment</a></li>
                  <li><a className="hover:text-white">Professional Evaluation</a></li>
                  <li><a className="hover:text-white">1-to-1 Support</a></li>
                </ul>
              </div>

              {/* ABOUT */}
              <div>
                <h3 className="text-sm font-semibold mb-4">About</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><a href="#about" className="hover:text-white">Who We Are</a></li>
                  <li><a href="#services" className="hover:text-white">Our Approach</a></li>
                  <li><a href="#" className="hover:text-white">Testimonials</a></li>
                </ul>
              </div>


              {/* CONTACT */}
              <div>
                <h3 className="text-sm font-semibold mb-4">Contact</h3>
                <ul className="space-y-3 text-sm text-gray-300">
                  <li><a href="mailto:info@scoutivate.com" className="hover:text-white">Email Us</a></li>
                  <li><a href="#contact-form" className="hover:text-white">Contact Form</a></li>
                </ul>
              </div>

            </div>

          </div>

          {/* MOBILE — TWO COLUMNS */}
          <div className="md:hidden grid grid-cols-2 gap-10 mt-12">

            {/* COL 1 = SERVICES + ABOUT */}
            <div className="space-y-10">
              <div>
                <h3 className="text-sm font-semibold mb-3">Services</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a className="hover:text-white">FA 4 Corner Model Assesment</a></li>
                  <li><a className="hover:text-white">Professional Evaluation</a></li>
                  <li><a className="hover:text-white">1-to-1 Support</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold mb-3">About</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="#about" className="hover:text-white">Who We Are</a></li>
                  <li><a href="#services" className="hover:text-white">Our Approach</a></li>
                  <li><a href="#" className="hover:text-white">Testimonials</a></li>
                </ul>
              </div>
            </div>

            {/* COL 2 = RESOURCES + CONTACT */}
            <div className="space-y-10">
              <div>
                <h3 className="text-sm font-semibold mb-3">Contact</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li><a href="mailto:info@scoutivate.com" className="hover:text-white">Email Us</a></li>
                  <li><a href="#contact-form" className="hover:text-white">Contact Form</a></li>
                </ul>
              </div>
            </div>

          </div>

          {/* BOTTOM */}
          <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between text-sm text-gray-400">
            <p>© 2025 Scoutivate</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white text-3xl text-white"><FaLinkedin /></a>
              <a href="#" className="hover:text-white text-3xl text-white"><FaInstagram /></a>
            </div>
          </div>

        </div>
      </footer>

    {/* Back To Top Button */}
      <BackToTopButton />

    </div>
  );
}