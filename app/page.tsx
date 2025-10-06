export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Scout<span className="text-blue-400">iv8</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-white hover:text-blue-400 transition-colors">Services</a>
            <a href="#about" className="text-white hover:text-blue-400 transition-colors">About Paul</a>
            <a href="#pricing" className="text-white hover:text-blue-400 transition-colors">Pricing</a>
            <a href="/about" className="text-white hover:text-blue-400 transition-colors">About Us</a>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
            Book Session
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Get Your Professional
          <span className="text-blue-400 block">Scout Report</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Professional-grade football analysis for everyday players. Get the reality check you need to take your game to the next level.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Get Your Report Now
          </button>
          <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Book 1-on-1 with Paul
          </button>
        </div>
      </section>

      {/* Services Section Trial */}
      <section id="services" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
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
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
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

      {/* About Paul Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Meet Paul Cooper</h2>
              <p className="text-gray-300 mb-6 text-lg">
                With over 15 years of professional scouting experience, Paul has evaluated talent for Premier League clubs and identified future stars before they broke through.
              </p>
              <p className="text-gray-300 mb-8">
                Now he&apos;s bringing that same professional-grade analysis to everyday players who want an honest assessment of their abilities and a clear path to improvement.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">15+ years in professional football scouting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">Former scout for Premier League clubs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-4"></div>
                  <span className="text-gray-300">UEFA coaching qualifications</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-4">1-on-1 Guidance Sessions</h3>
              <p className="text-gray-300 mb-6">
                Book a personal consultation with Paul to discuss your report, get specific training recommendations, and create a development plan.
              </p>
              <ul className="text-gray-400 space-y-3 mb-6">
                <li>• 60-minute video consultation</li>
                <li>• Personalized development roadmap</li>
                <li>• Training drill recommendations</li>
                <li>• Career pathway guidance</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors">
                Book Session with Paul
              </button>
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
                <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
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
            <p>&copy; 2024 Scoutivate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}