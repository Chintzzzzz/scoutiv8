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
import FinanceModal from "@/components/FinanceModal";
import FaqSection from "@/components/FaqSection";
import { Afacad } from "next/font/google";

const afacad = Afacad({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const partners = [
  {
    name: "PlayerData",
    logo: "/logos/playerdata.jpeg",
    link: "https://playerdata.com/en-gb",
  },
  {
    name: "ProScore Academy",
    logo: "/logos/psa.jpeg",
    link: "https://proscoreacademy.co.uk/",
  },
  {
    name: "TheSoccerLab",
    logo: "/logos/soccerlab.jpeg",
    link: "https://www.instagram.com/thesoccerlabglasgow/",
  },
  {
    name: "Sparta Speed Academy",
    logo: "/logos/sparta.jpeg",
    link: "https://www.instagram.com/sparta_speed_academy?igsh=MWp5dGx4MWVqNWM3ag==",
  },
  {
    name: "The Finishing Touch",
    logo: "/logos/tft.jpeg",
    link: "https://www.instagram.com/thefinishingtouchcoaching?igsh=NmUxYmNtNDhhZGt4",
  },
  {
    name: "Kevin O'Connor",
    logo: "/logos/kev.jpeg",
    link: "https://www.instagram.com/elationkev?igsh=OTA2ZGN4aTBoOTky",
  },
];

type CardProps = {
  title: string;
  originalPrice: string;
  discountedPrice: string;
  features: string[];
};

function Card({ title, originalPrice, discountedPrice, features }: CardProps) {
  return (
    <div className="relative">
      

      {/* Card */}
      <div className="relative rounded-2xl p-12 flex flex-col h-full shadow-[0_0_30px_rgba(0,0,0,0.4)] border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden 
                      transition-all duration-300 
                      hover:border-[#daba0b] hover:shadow-[0_0_20px_#ffffff80]">
        
        
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Pricing */}
        <div className="mb-6">
          <p className="text-gray-400 line-through text-lg">{originalPrice}</p>
          <p className="text-4xl font-bold text-yellow-300">{discountedPrice}</p>
        </div>

        {/* Features */}
        <ul className="space-y-3 grow text-gray-200">
          {features.map((feature: string, idx: number) => (
            <li key={idx}>• {feature}</li>
          ))}
        </ul>

        <FinanceModal
        email="ncu75afc@hotmail.com"
        trigger={  
        <button className="mt-8 w-full py-3 rounded-lg bg-[#daba0b] text-black font-semibold hover:bg-[#c6a507] transition">
          Get {title.split(" ")[0]} Package
        </button>
        }
        />
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
          <Link href="/" className="flex items-center gap-4">
            <Image
              src="/s8_transparent.png"
              alt="Scoutiv8 Logo"
              width={100}
              height={60}
              className="rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </Link>

          {/* DESKTOP LINKS + BUTTON */}
          <div className="hidden md:flex items-center justify-between w-full max-w-4xl mx-auto">
            {[
              { name: "Services", href: "#services" },
              { name: "About", href: "#about" },
              { name: "Our Story", href: "#story" },
              { name: "Partners", href: "#partners" },
              { name: "Pricing", href: "#pricing" },
              { name: "Reviews", href: "#reviews" },
              { name: "FAQs", href: "#faqs" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="text-white px-4 py-2 rounded-md transition-all duration-300 hover:text-[#daba0bec] hover:scale-105 transform"
              >
                {item.name}
              </a>
            ))}

            <FinanceModal
              email="ncu75afc@hotmail.com"
              trigger={
                <button className="bg-[#daba0b] text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">
                  Book Session
                </button>
              }
            />
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
        <h1
          className={`${afacad.className} tracking-wide text-5xl md:text-7xl font-bold mb-6 text-white bg-clip-text inline-block`}
        >
          Get Your Professional
          <span className="text-[#daba0bec] block tracking-wide">Scout Report</span>
        </h1>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          Be the Best <span className="text-[#daba0b] font-bold">YOU</span> can be.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <FinanceModal
              email="ncu75afc@hotmail.com"
              trigger={
                <button className="bg-[#daba0b] text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                  Get Your Report Now
                </button>
              }
          />

        </div>
      </div>
      </section>



      {/* Cards Section */}
      <section id='about' className="py-20 bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#daba0b40]">
      {/*<section className="py-20 bg-[radial-gradient(circle_at_center,_#0a0a0a,_#1a1a1a,_#daba0b40)]"> */}
        <div className="container mx-auto px-6">
          <AnimatedHeader delay={0} className={`${afacad.className} mb-5`}>
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
        <section id="services" className="py-20 bg-linear-to-b from-[#daba0b40] via-[#1a1a1a] to-[#0a0a0a]">
          <div className="container mx-auto px-6">
          <AnimatedHeader delay={0} className={`${afacad.className} mb-14 pt-20`}>
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

      {/* === OUR STORY (FOUNDER) === */}
<section id="story" className=" py-24 bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
  
  {/* Header */}
  <AnimatedHeader className={`${afacad.className} mb-8`}>
    Our Story...
  </AnimatedHeader>

  <div className="container mx-auto px-6">
    
    {/* Outer Box */}
    <div className="relative max-w-5xl mx-auto bg-linear-to-br from-[#111111] via-[#151515] to-[#0a0a0a] border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden">
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <div className="relative flex justify-center ">
          <a
            href="https://linkedin.com/in/PAUL_LINKEDIN"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block w-[80%] md:w-[90%] lg:w-[85%] group"
          >
            <Image
              src="/Images/founder.jpeg"
              alt="Founder"
              width={500}
              height={500}
              className="rounded-xl object-cover w-full transition duration-500 group-hover:scale-[1.03]"
            />

            {/* Overlays */}
            <div className="absolute inset-0 rounded-xl bg-black/40"></div>
            <div className="absolute inset-0 rounded-xl bg-[#daba0b]/10 mix-blend-overlay"></div>

            {/* Hover CTA */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-white text-sm font-medium bg-black/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm">
                View LinkedIn ↗
              </span>
            </div>
          </a>
        </div>

        {/* Content */}
        <div>
          <p className="text-white/70 leading-[1.7] md:leading-[1.9] text-[15px] md:text-[16px] lg:text-[14px] max-w-150">
            I have spent over 40 years in football, playing at both professional and semi-professional levels, with experience spanning grassroots coaching and multiple roles at Partick Thistle FC, including Academy Coach, Pre-Academy Manager, Parent Liaison Officer, and Senior Academy Scout. In April 2023, I was appointed Head of Academy Recruitment at St Mirren FC, and Scoutiv8 was developed from years of experience and a clear vision to better support young players, particularly at grassroots level, in becoming the best version of themselves. I founded Scoutiv8 in late 2025 as a means of using my experience and network to support, mentor, and educate young players and their parents through a holistic approach, combining scouting reports, data-driven physical and tactical analysis, and sports science provision to provide players with a benchmark of their current level and a clear individual training and development plan to work towards their personal goals.
          </p>

          {/* Signature */}
          <div className="mt-8">
            <p className="text-[#daba0b] text-lg font-semibold tracking-wide">
              Paul Cooper
            </p>
            <p className="text-white/50 text-sm tracking-wide">
              Founder and Head of Player Development
            </p>
          </div>
        </div>

      </div>

      {/* Subtle glow effect */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-[#daba0b]/10 blur-3xl"></div>
    </div>
  </div>
</section>


{/* === OUR PARTNERS === */}
<section id="partners" className="py-24 bg-black text-center overflow-hidden">
  <div className="container mx-auto px-6">
    
    {/* Header */}
    <AnimatedHeader className={`${afacad.className} mt-0`}>
      Our Partners
    </AnimatedHeader>

    <p className="text-gray-400 max-w-2xl mx-auto mb-16 text-sm md:text-base">
      Collaborating with specialists across all areas of player development.
    </p>

    {/* MOBILE: Scrollable Row */}
    <div className="flex md:hidden gap-10 overflow-x-auto no-scrollbar px-2">
      {partners.map((partner, i) => (
        <a
          key={i}
          href={partner.link}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0"
        >
          <Image
            src={partner.logo}
            alt={partner.name}
            width={120}
            height={60}
            className="h-16 w-auto opacity-70 grayscale"
          />
        </a>
      ))}
    </div>

    {/* DESKTOP: Infinite Scroll */}
    <div className="hidden md:block relative overflow-hidden">
      {/* LEFT FADE */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-linear-to-r from-black to-transparent z-10"></div>

      {/* RIGHT FADE */}
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-linear-to-l from-black to-transparent z-10"></div>

      {/* SCROLLING ROW */}
      <div className="flex gap-12 md:gap-16 animate-scroll whitespace-nowrap min-w-max">
        
        {[...partners, ...partners, ...partners].map((partner, i) => (
          <a
            key={i}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group shrink-0"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              width={160}
              height={80}
              className="h-18 md:h-20 w-auto opacity-60 grayscale 
                        group-hover:opacity-100 group-hover:grayscale-0 
                        transition duration-300"
            />
          </a>
        ))}
      </div>
    </div>

  </div>
</section>



      
      {/* Pricing Section */}
    <section id="pricing" className="py-20 bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`${afacad.className} text-5xl font-bold text-center mb-4`}>
          Scouting Packages
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

      {/* Reviews */}     
      <section id="reviews" className="py-24 bg-black text-white" >
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
    
    {/* LEFT TEXT */}
    <div>
      <h2 className={`${afacad.className} text-4xl md:text-5xl font-bold leading-tight mb-6 text-white`}>
        Trusted by players. <br /> Proven by results.
      </h2>

      <p className="text-gray-300 mb-8 max-w-md">
        Our scouting insights, data-driven analysis and development planning
        have helped young athletes elevate their game and unlock new pathways.
      </p>

      <Link
        href="/reviews"
        className="flex items-center gap-2 text-[#daba0b] font-semibold hover:opacity-80 transition"
      >
        View More Reviews →
      </Link>
    </div>

    {/* RIGHT SIDE */}
    {/* DESKTOP STATIC STACK */}
<div className="hidden md:grid grid-cols-1 gap-10 auto-rows-fr">
  {/* CARD 1 */}
  <div className="relative p-6 rounded-xl bg-black border-4 border-white
      transition-transform duration-300 hover:-translate-y-2 
      hover:shadow-[0_0_25px_6px_rgba(218,186,11,0.45)]
      flex flex-col justify-between"
      style={{ boxShadow: "6px 6px 0px #daba0b" }}
  >
    <p className="text-lg mb-4 grow">
      
"The report was very detailed with areas he does well and areas for him to focus his development on. We also received a PlayerData GPS tracker report and Sports Science analysis report with things like distance covered, his top speed and heat maps.
Scoutiv8 has been brilliant in helping us know what my son needs to assist his football development and putting a training plan together for him."
    </p>
    <p className="font-bold tracking-wide text-[#daba0b]">
      — Parent of Luke(Under 13 player)
    </p>
  </div>

  {/* CARD 2 */}
  <div className="relative p-6 rounded-xl bg-black border-4 border-white
      transition-transform duration-300 hover:-translate-y-2 
      hover:shadow-[0_0_25px_6px_rgba(218,186,11,0.45)]
      flex flex-col justify-between md:translate-x-16"
      style={{ boxShadow: "6px 6px 0px #daba0b" }}
  >
    <p className="text-lg mb-4 grow">
      "I was recommended Scoutiv8 by a friend and my boy absolutely loves it, Paul himself is very honest and easy to talk to and Sam just loves working with and being coached by professional players and big Sean the spirit coach, it's all very professional and improvement can be noticed already."
    </p>
    <p className="font-bold tracking-wide text-[#daba0b]">
      — Scott(Sam's Parent)
    </p>
  </div>

  {/* CARD 3 */}
  <div className="relative p-6 rounded-xl bg-black border-4 border-white
      transition-transform duration-300 hover:-translate-y-2 
      hover:shadow-[0_0_25px_6px_rgba(218,186,11,0.45)]
      flex flex-col justify-between"
      style={{ boxShadow: "6px 6px 0px #daba0b" }}
  >
    <p className="text-lg mb-4 grow">
      "The professsionalism of the assessments and level of detail in the reports  we've not seen anywhere else. Paul has put together a development plan providing access to specialist sprint coaching (with Sparta Sprint Academy), and technical development  through 1-2-1 sessions with The Finishing Touch. 
       Scoutiv8 have been really good to work with and the advice and guidance Paul and the Team can provide is second to none."     
    </p>
    <p className="font-bold tracking-wide text-[#daba0b]">
      — Parent of Harris(Under 13 player)
    </p>
  </div>
</div>


{/* MOBILE CAROUSEL */}
<div className="md:hidden flex gap-6 overflow-x-auto snap-x snap-mandatory 
    pb-6 mt-6 no-scrollbar animate-[slide_25s_linear_infinite]">

  {/* CARD 1 */}
  <div
    className="snap-center min-w-[85%] bg-black border border-[#daba0b40] p-6 rounded-xl
      shadow-[0_0_18px_rgba(218,186,11,0.25)]
      transition-transform duration-300 hover:-translate-y-2 
      hover:shadow-[0_0_25px_6px_rgba(218,186,11,0.45)]
      flex flex-col justify-between h-full"
    style={{ boxShadow: "6px 6px 0px #daba0b" }}
  >
    <p className="text-gray-200 mb-4 text-base grow">
      "The report was very detailed with areas he does well and areas for him to focus his development on. We also received a PlayerData GPS tracker report and Sports Science analysis report with things like distance covered, his top speed and heat maps.
Scoutiv8 has been brilliant in helping us know what my son needs to assist his football development and putting a training plan together for him."
    </p>
    <p className="font-bold tracking-wide text-[#daba0b] text-sm">
      — Parent of Luke(Under 13 player)
    </p>
  </div>

  {/* CARD 2 */}
  <div
    className="snap-center min-w-[85%] bg-black border border-[#daba0b40] p-6 rounded-xl
      shadow-[0_0_18px_rgba(218,186,11,0.25)]
      transition-transform duration-300 hover:-translate-y-2 
      hover:shadow-[0_0_25px_6px_rgba(218,186,11,0.45)]
      flex flex-col justify-between h-full"
    style={{ boxShadow: "6px 6px 0px #daba0b" }}
  >
    <p className="text-gray-200 mb-4 text-base grow">
    "I was recommended Scoutiv8 by a friend and my boy absolutely loves it, Paul himself is very honest and easy to talk to and Sam just loves working with and being coached by professional players and big Sean the spirit coach, it's all very professional and improvement can be noticed already."

    </p>
    <p className="font-bold tracking-wide text-[#daba0b] text-sm">
      — Scott(Sam's Parent)
    </p>
  </div>

  {/* CARD 3 */}
  <div
    className="snap-center min-w-[85%] bg-black border border-[#daba0b40] p-6 rounded-xl
      shadow-[0_0_18px_rgba(218,186,11,0.25)]
      transition-transform duration-300 hover:-translate-y-2 
      hover:shadow-[0_0_25px_6px_rgba(218,186,11,0.45)]
      flex flex-col justify-between h-full"
    style={{ boxShadow: "6px 6px 0px #daba0b" }}
  >
    <p className="text-gray-200 mb-4 text-base grow">
      "The professsionalism of the assessments and level of detail in the reports  we've not seen anywhere else. Paul has put together a development plan providing access to specialist sprint coaching (with Sparta Sprint Academy), and technical development  through 1-2-1 sessions with The Finishing Touch. 
       Scoutiv8 have been really good to work with and the advice and guidance Paul and the Team can provide is second to none."
    </p>
    <p className="font-bold tracking-wide text-[#daba0b] text-sm">
      — Parent of Harris(Under 13 player)
    </p>
  </div>

</div>
</div>
</section>

{/* FAQs Section */}
<FaqSection />

      {/* CTA Section */}
      <section className="py-24 bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-6 text-center">

          {/* Card */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 shadow-[0_0_30px_rgba(0,0,0,0.4)]">

            <h2
              className={`${afacad.className}  text-4xl md:text-5xl font-bold text-white mb-6`}
            >
              Ready to be the best <span className="text-[#daba0b]">YOU</span> can be?
            </h2>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join hundreds of players already transforming their game with
              professional-level scouting reports and personalised performance insights.
            </p>
            
            
            <FinanceModal
              email="ncu75afc@hotmail.com"
              trigger={
                <button
                  className="
                    px-10 py-4 text-lg font-semibold rounded-xl
                    bg-[#daba0b] text-black
                    hover:bg-[#e6c636] transition-all
                    shadow-[0_0_20px_rgba(218,186,11,0.4)]
                    hover:shadow-[0_0_35px_rgba(218,186,11,0.7)]
                  "
                >
                  Get Your Report Today
                </button>
              }
            />
            
          </div>

        </div>
      </section> 

      {/* Footer */}
      <footer className="w-full bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#daba0b40] text-white px-6 py-20 md:pt-32">
        <div className="max-w-7xl mx-auto">

          {/* LEFT SIDE — Logo */}
          <div className="flex flex-col md:flex-row md:items-start">

            <div className="mb-12 md:mb-0 w-44 shrink-0">
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
              <a href="https://www.instagram.com/scoutiv8?igsh=YWw3amNzcHJnMWc2" className="hover:text-white text-3xl text-white"><FaInstagram /></a>
            </div>
          </div>

        </div>
      </footer>

    {/* Back To Top Button */}
      <BackToTopButton />

    </div>
  );
}