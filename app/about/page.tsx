import Link from 'next/link';

export default function Aboutpage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
            Scout<span className="text-blue-400">iv8</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/#services" className="text-white hover:text-blue-400 transition-colors">Services</Link>
            <Link href="/#about" className="text-white hover:text-blue-400 transition-colors">About Paul</Link>
            <Link href="/#pricing" className="text-white hover:text-blue-400 transition-colors">Pricing</Link>
            <Link href="/about" className="text-blue-400 font-semibold">About Us</Link>
          </div>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          About <span className="text-blue-400">Scoutiv8</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Empowering grassroots players to reach their full potential through holistic individual development
        </p>
      </section>

      {/* Type of Business */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Type of Business</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Player centred individual football development.
            </p>
          </div>
        </div>
      </section>

      {/* Motivation */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
            <h2 className="text-3xl font-bold text-green-400 mb-6">Motivation for Business Creation</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To provide additional individual support to grassroots players, both male and female, to help them become the best version of themselves on and off the field.
            </p>
          </div>
        </div>
      </section>

      {/* Issues */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
            <h2 className="text-3xl font-bold text-orange-400 mb-6">Issues Currently Faced by Developing Grassroots Players</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              No Individual Development Plan to provide short, medium and long term goals to work towards and lack of access to specialist coaches required to enhance all aspects of individual player development.
            </p>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">Methodology of the Business</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Deploying experienced and qualified professional scouts to observe the player in their grassroots environment and compile a detailed player scouting report.
              </p>
              <p>
                Focusing on the player&apos;s attributes and development needs, forms the basis of the Individual Development Plan (IDP) for the player.
              </p>
              <p>
                Using the vast football experience and network of the company founder and Director, the player will receive, as part of their IDP, recommendations on relevant courses available with some of Scotland&apos;s leading professionals across a wide scope of essential support functions, in line with the player&apos;s individual development needs and their own aims and objectives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Assessment - 4 Corners */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-4">
              How is Performance Assessed and Individual Programmes Delivered?
            </h2>
            <p className="text-lg text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Members who subscribe to the business will unlock priority access and members only discounts to the country&apos;s leading specialist coaching programmes which aids and supports the player&apos;s individual development across all 4 corners of player development.
            </p>

            {/* 4 Corners Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-blue-500">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-2">Technical</h3>
                <p className="text-gray-400 text-sm">Ball control, passing, shooting, and fundamental skills</p>
              </div>

              <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-green-500">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 00-2 2v2m0 0V9a2 2 0 012-2m0 0V7a2 2 0 012-2h12a2 2 0 012 2v2M7 7V6a1 1 0 011-1h8a1 1 0 011 1v1m-9 6h2m2 0h2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">Tactical</h3>
                <p className="text-gray-400 text-sm">Game understanding, positioning, and decision-making</p>
              </div>

              <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-orange-500">
                <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-orange-400 mb-2">Physical</h3>
                <p className="text-gray-400 text-sm">Speed, strength, stamina, and athletic performance</p>
              </div>

              <div className="bg-slate-700/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2">Psychological</h3>
                <p className="text-gray-400 text-sm">Mental strength, confidence, and competitive mindset</p>
              </div>
            </div>

            {/* Professional Support */}
            <div className="bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
              <h3 className="text-2xl font-bold text-white mb-6">Our Professional Support Network</h3>
              <p className="text-gray-300 mb-6">
                The business is committed to delivering the very best programmes by utilising the services and partnerships with:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                  <span>Athletic Performance coaches working on speed, acceleration and agility</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                  <span>Current and ex professional footballers and Professional club Academy coaches to deliver Technical and Tactical 121 and online programmes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3 mt-2"></div>
                  <span>Experienced physiotherapists with vast football backgrounds working in professional club environments</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                  <span>Bio-mechanics professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                  <span>Sports Psychologists, all with vast experience of working with young footballers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Recording */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">How is Player Performance Recorded and Monitored?</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Players who subscribe as members of the business will receive access to the business app, which they can use to access their own private account. The player&apos;s account will give them direct access to their scouting report, IDP and to their individual programmes. They will have messaging features which will allow them to have direct contact with the coaching and development staff, for advice and support.
              </p>
              <p>
                Through the app, which can be accessed via iPhone and Android devices as well as Laptop/Tablet, players can monitor their own development and recovery feedback reports from all coaches they work with.
              </p>
              <p>
                Physical testing sessions which will utilise the same testing battery used by professional clubs will be available for members to purchase. The player&apos;s testing data will be made available to the player via their private account on the app.
              </p>
              <p>
                Members will also receive bonus features including content from current and ex professional players and coaches, giving insight to their own football journey and experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-12 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
            <h2 className="text-3xl font-bold text-green-400 mb-6">Who is Eligible to Subscribe as a Member?</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                The business will be open to anyone, boys and girls from the age of 8 years old. There is no upper age cap as individual circumstances and player&apos;s objectives and support needs will always be considered.
              </p>
              <p>
                Although primarily aimed at children and youth age grassroots players looking to enhance their development and performance, support can also be provided for players registered with professional clubs who would like access to the additional support network provided by the business.
              </p>
              <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
                <p className="italic text-blue-200 text-base">
                  *Players should always inform their club of additional sessions they undertake outside of their club programme, ensuring they have permission and support of their lead coach/Head of phase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-700/30 backdrop-blur-sm p-8 rounded-xl border border-slate-600">
            <h2 className="text-3xl font-bold text-purple-400 mb-6">How Much Will It Cost and How Do I Pay?</h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                A monthly subscription which will allow access to the player&apos;s private account and to the many features on the app including player IDP and exclusive member only discounts and bonus content is required.
              </p>
              <p>
                Professional scouting reports, physical testing sessions and all specialist coaching programmes can be purchased directly via the app.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee - Highlighted */}
      <section className="py-12 bg-gradient-to-r from-blue-600/20 to-blue-800/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-slate-700/50 backdrop-blur-sm p-8 rounded-xl border-2 border-blue-400">
            <h2 className="text-3xl font-bold text-blue-300 mb-6">
              Does Becoming a Member Guarantee Me a Trial with a Professional Club Academy?
            </h2>
            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p className="text-2xl font-bold text-white">
                No.
              </p>
              <p>
                The business is a holistic individual development hub, utilising the knowledge and network of professional coaches, scouts and skilled, qualified individuals with many years experience of working with developing athletes, particularly young footballers, created to offer a service which allows players to gain access to this support network in order to aid their football development and be the best version of themselves, whichever level that may be at.
              </p>
              <p>
                Young players gaining more enjoyment of their football at any level due to their increased confidence and level of performance is the main aim of the business.
              </p>
              <p>
                Although many of the staff working within the business will have current or past connections to several professional clubs, there is no affiliation between the business and any club.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Development Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our holistic player development programme and unlock your full potential on and off the field.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Get Your Scout Report
            </Link>
            <Link href="/#pricing" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              View Pricing
            </Link>
          </div>
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
            <p>&copy; 2024 Scoutivate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}