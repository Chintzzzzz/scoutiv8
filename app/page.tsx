import Link from 'next/link';
import { FadeInSection } from "@/components/fadeIn";
import { FaFire } from "react-icons/fa6";
import { GiPush, GiSoccerKick } from "react-icons/gi";
import { MdScience } from "react-icons/md";
import { VscFeedback } from "react-icons/vsc";
import { IoAccessibilitySharp } from "react-icons/io5";
import Image from "next/image";



export default function Home() {
  return (
    <div>
      {/* Navigation */}
      <div className="px-6 pt-1 sticky top-6 z-20 border-white/10 rounded-3xl shadow-lg max-w-5xl mx-auto"
      style={{
      backdropFilter: 'blur(34px)',
      backgroundColor: 'rgba(0, 0, 0, 0.25)',
      }}>
      <nav className="container mx-auto px-5 py-1 border-white/10 shadow-lg rounded-3xl">
        <div className="flex items-center justify-between">
          {/* Clickable Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/s8_transparent.png" // <-- place your logo image in /public/logo.png
              alt="Scoutiv8 Logo"
              width={100}
              height={60}
              className="rounded-md hover:scale-105 transition-transform duration-200 cursor-pointer"
            />
          </Link>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-[#daba0bec] transition-colors">
              Services
            </a>
            <a href="#about" className="text-white hover:text-[#daba0bec] transition-colors">
              About Paul
            </a>
            <a href="#pricing" className="text-white hover:text-[#daba0bec] transition-colors">
              Our Team
            </a>
            <a href="#pricing" className="text-white hover:text-[#daba0bec] transition-colors">
              Pricing
            </a>
          </div>
          <button className="bg-[#daba0bec] hover:bg-#FFD700 text-[black] px-6 py-2 rounded-lg transition-colors font-semibold">
            Book Session
          </button>
        </div>
      </nav>
      </div>

      {/* Hero Section */}
      <section className="relative py-40 bg-center bg-cover" style={{ backgroundImage: "url('/fb1.jpg')" }}>
      
      {/* Dark blurred overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent inline-block">
          Get Your Professional
          <span className="text-[#daba0bec] block">Scout Report</span>
        </h1>
        <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto">
          Player centred individual football development.
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
      <section className="py-20 bg-[black]/90">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl text-center leading-relaxed font-bold bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-5">
            {"Empowering Every Player's Journey"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Card 1 */}
            <FadeInSection delay={0}>
              <div className="w-118 h-70 bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-[#daba0bec] mb-2 flex items-center gap-2">
                  <FaFire className="text-3xl text-[#daba0bec]" />
                  Our Motivation
                </h3>
                <p className="font-semibold text-white mb-4">Helping Players Reach Their Potential</p>
                <p className="text-gray-400">
                  We aim to provide tailored individual support for grassroots players — male and female — helping them become the best version of themselves both on and off the field.
                </p>
              </div>
            </FadeInSection>

            {/* Card 2 */}
            <FadeInSection delay={150}>
              <div className="w-118 h-70 bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-[#daba0bec] mb-2 flex items-center gap-2">
                  <GiPush className="text-6xl text-[#daba0bec]" />
                  Challenges in Grassroots Development
                </h3>
                <p className="font-semibold text-white mb-4">Bridging the Support Gap</p>
                <p className="text-gray-400">
                  Many young players lack an Individual Development Plan (IDP) and access to specialist coaches. Our mission is to fill that gap with expert guidance and structured development goals.
                </p>
              </div>
            </FadeInSection>

            {/* Card 3 */}
            <FadeInSection delay={300}>
              <div className="w-118 h-70 bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-[#daba0bec] mb-2 flex items-center gap-2">
                  <MdScience className="text-4xl text-[#daba0bec]" />
                  Our Methodology
                </h3>
                <p className="font-semibold text-white mb-4">From Observation to Action</p>
                <p className="text-gray-400">
                  {"Experienced scouts assess players in their natural environment, producing detailed reports that inform each player's personalised IDP. Recommendations for specialist courses and coaching are then tailored to individual goals."}
                </p>
              </div>
            </FadeInSection>

            {/* Card 4 */}
            <FadeInSection delay={450}>
              <div className="w-118 h-70 bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-[#daba0bec] mb-2 flex items-center gap-2">
                  <GiSoccerKick className="text-4xl text-[#daba0bec]" />
                  Player Development Approach
                </h3>
                <p className="font-semibold text-white mb-4">The 4-Corner Model</p>
                <p className="text-gray-400">
                  Our programmes target all areas of player growth — Technical, Tactical, Physical, and Psychological — delivered by top coaches, ex-professionals, sports scientists, and performance experts.
                </p>
              </div>
            </FadeInSection>

            {/* Card 5 */}
            <FadeInSection delay={600}>
              <div className="w-118 h-70 bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-[#daba0bec] mb-2 flex items-center gap-2">
                  <VscFeedback className="text-4xl text-[#daba0bec]" />
                  Monitoring & Feedback
                </h3>
                <p className="font-semibold text-white mb-4">Track Progress with Our App</p>
                <p className="text-gray-400">
                  Members gain access to a private account on our app to view reports, IDPs, training data, and feedback from coaches. The app also offers chat support, physical testing data, and exclusive insights from professionals.
                </p>
              </div>
            </FadeInSection>

            {/* Card 6 */}
            <FadeInSection delay={750}>
              <div className="w-118 h-70 bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
                <h3 className="text-2xl font-bold text-[#daba0bec] mb-2 flex items-center gap-2">
                  <IoAccessibilitySharp className="text-4xl text-[#daba0bec]" />
                  Membership & Access
                </h3>
                <p className="font-semibold text-white mb-4">Join the Journey</p>
                <p className="text-gray-400">
                  Open to boys and girls aged 8+, with no upper limit. A monthly subscription unlocks all features, discounts, and exclusive content. While we don’t guarantee professional trials, we help every player maximise their development and enjoyment.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Services Section Trial2 */}
      <section id="services" className="py-20 bg-black/90">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center leading-relaxed bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent mb-10">
            Professional Analysis in Four Key Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Technical Analysis</h3>
              <p className="text-gray-300 mb-6">
                Detailed breakdown of your ball control, passing accuracy, shooting technique, and tactical awareness on the pitch.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• First touch assessment</li>
                <li>• Passing range & accuracy</li>
                <li>• Decision making under pressure</li>
                <li>• Position-specific skills</li>
              </ul>
            </div>

            <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Physical Assessment</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive evaluation of your speed, stamina, strength, and overall athletic performance on the field.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Sprint speed & acceleration</li>
                <li>• Endurance & recovery</li>
                <li>• Agility & coordination</li>
                <li>• Injury risk assessment</li>
              </ul>
            </div>

            <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-yellow-400 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Psychological Profile</h3>
              <p className="text-gray-300 mb-6">
                Mental strength analysis covering confidence, leadership, pressure handling, and competitive mindset.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Mental resilience</li>
                <li>• Leadership qualities</li>
                <li>• Communication skills</li>
                <li>• Competitive drive</li>
              </ul>
            </div>

            <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
              <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2m0 0V9a2 2 0 012-2m0 0V7a2 2 0 012-2h12a2 2 0 012 2v2M7 7V6a1 1 0 011-1h8a1 1 0 011 1v1m-9 6h2m2 0h2" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Tactical Awareness</h3>
              <p className="text-gray-300 mb-6">
                Strategic understanding and game intelligence assessment covering positioning, decision-making, and tactical implementation.
              </p>
              <ul className="text-gray-400 space-y-2">
                <li>• Positional awareness</li>
                <li>• Game reading ability</li>
                <li>• Formation understanding</li>
                <li>• Strategic decision-making</li>
              </ul>
            </div>
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