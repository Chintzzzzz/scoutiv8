export default function ReviewsPage() {
  const reviews = [
    {
      text: "The report was very detailed with areas he does well and areas for him to focus his development on. We also received a PlayerData GPS tracker report and Sports Science analysis report with things like distance covered, his top speed and heat maps.Scoutiv8 has been brilliant in helping us know what my son needs to assist his football development and putting a training plan together for him.",
      author: "Parent of Luke(Under 13 player)",
    },
    {
      text:     "I was recommended Scoutiv8 by a friend and my boy absolutely loves it, Paul himself is very honest and easy to talk to and Sam just loves working with and being coached by professional players and big Sean the spirit coach, it's all very professional and improvement can be noticed already.",
      author: "Scott(Sam's Parent)",
    },
    {
      text: "The professsionalism of the assessments and level of detail in the reports  we've not seen anywhere else. Paul has put together a development plan providing access to specialist sprint coaching (with Sparta Sprint Academy), and technical development  through 1-2-1 sessions with The Finishing Touch. Scoutiv8 have been really good to work with and the advice and guidance Paul and the Team can provide is second to none.",
      author: "Parent of Harris(Under 13 player)",
    },
    {
      text: "Wee update on Matthew and his path with Scoutiv8.  First and most importantly he is really enjoying the gym sessions working with Kevin @ Elation and Cammy doing the football technical skills and 1-2-1 sessions.  His game has improved significantly as a result cumulating in a man of the match performance against an academy side last Friday.  He is now attacking the box and having 3-4 shots per game when playing as the 8, and covers every blade of Astro as the 6.  Thanks for your help with him and I would recommend to anyone who believes their son or daughter has potential to team up with Scoutiv8.",
      author: "Parent of Matthew(U16 Player)",
    },
    {
      text: "The physical and tactical insights were fantastic. The report felt like something from a professional academy.",
      author: "Grassroots Coach",
    },
    {
      text: "Having a structured development plan made a huge difference to my confidence and performance.",
      author: "U16 Player",
    },
  ];

  return (
    <section className="bg-linear-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-[#daba0b] uppercase tracking-widest text-sm mb-4">
            Trusted By Players
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Player <span className="text-[#daba0b]">Reviews</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear from players and parents who have used Scoutiv8
            to support their football development journey.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-xl bg-black border border-[#daba0b44] transition-all duration-300 hover:-translate-y-1"
              style={{
                boxShadow: "6px 6px 0px #daba0b",
              }}
            >
              <div className="flex flex-col h-full">

                <p className="text-lg mb-6 grow">
                  “{review.text}”
                </p>

                <p className="font-bold tracking-wide text-[#daba0b]">
                  — {review.author}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}