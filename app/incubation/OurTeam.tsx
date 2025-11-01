import React from "react";

const mentorsData = [
  {
    id: 1,
    name: "Ali Ihsan",
    title: "Game development",
    expertise: "Game Development & Design .",
    company: "Game studio leadership",
    image: "/ourTeam/1.jpeg",
  },
  {
    id: 2,
    name: "Faizan Iftikhar",
    title: "Game Producer",
    expertise: "Game development and programming",
    // company: "Pixar Studios",
    image: "/ourTeam/2.jpeg",
  },
  {
    id: 3,
    name: "Yasir Awan",
    title: "Director, Takhleeq; Ex-Mindstorm",
    // expertise: "Game Programming & Architecture",
    // company: "Electronic Arts",
    image: "/ourTeam/3.jpg",
  },
  {
    id: 4,
    name: "Dr. Maria Garcia",
    title: "Game development",
    expertise: "Game Development & Design",
    company: "Game studio leadership",
    image: "/ourTeam/4.jpeg",
  },
  {
    id: 5,
    name: "David Chen",
    title: "Creative Director",
    expertise: "Visual Design & Art Direction",
    company: "Ubisoft Montreal",
    image: "/ourTeam/5.jpeg",
  },
  {
    id: 6,
    name: "Lisa Thompson",
    title: "Product Manager",
    expertise: "Game Production & Publishing",
    company: "Epic Games",
    image: "/ourTeam/6.jpeg",
  },
  {
    id: 7,
    name: "Robert Kim",
    title: "Animation Supervisor",
    expertise: "Character Animation & Rigging",
    company: "DreamWorks Animation",
    image: "/ourTeam/7.jpeg",
  },
  {
    id: 8,
    name: "Emily Davis",
    title: "Technical Artist",
    expertise: "Shader Development & Pipeline",
    company: "Naughty Dog",
    image: "/ourTeam/8.jpg",
  },
  {
    id: 9,
    name: "Ahmed Ali",
    title: "Startup Mentor",
    expertise: "Entrepreneurship & Funding",
    company: "TechStars",
    image: "/ourTeam/9.png",
  },
  {
    id: 10,
    name: "Jennifer Wilson",
    title: "UX Designer",
    expertise: "User Experience & Interface Design",
    company: "Riot Games",
    image: "/ourTeam/10.jpg",
  },
  {
    id: 11,
    name: "Michael Brown",
    title: "Sound Designer",
    expertise: "Audio Design & Music Production",
    company: "Blizzard Entertainment",
    image: "/ourTeam/11.jpg",
  },
  {
    id: 12,
    name: "Fatima Khan",
    title: "Marketing Director",
    expertise: "Digital Marketing & Community Management",
    company: "Activision",
    image: "/ourTeam/12.jpeg",
  },
];

const OurTeam = () => {
  return (
    <section className="from-slate-50 via-white to-slate-100 bg-linear-to-br">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-slate-900/95 p-10 shadow-2xl backdrop-blur-sm md:p-14">
          {/* Background effects */}
          <div aria-hidden className="absolute inset-0">
            <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />
            <div className="absolute inset-0 bg-linear-to-br from-slate-900/90 via-slate-800/95 to-slate-900/90" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="mb-16 text-center">
              <span className="font-orbitron text-xs uppercase tracking-[0.4em] text-cyan-400">
                Expert Guidance
              </span>
              <h2 className="font-orbitron mt-4 text-3xl font-semibold tracking-wide text-white md:text-4xl lg:text-5xl">
                Mentors & Trainers
              </h2>
              <p className="font-outfit mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
                Learn from established founders, seasoned experts, and
                innovative leaders who will guide you through your
                entrepreneurial journey.
              </p>
            </div>

            {/* Mentors Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mentorsData.map((mentor) => (
                <div key={mentor.id}>
                  <div className="group relative">
                    {/* Mentor Card */}
                    <div className="relative overflow-hidden rounded-2xl bg-slate-800/60 p-6 shadow-lg shadow-slate-900/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 backdrop-blur-sm border border-slate-700/50">
                      {/* Avatar with Border Effect */}
                      <div className="relative mx-auto mb-4 h-24 w-24">
                        <div className="absolute inset-0 rounded-full bg-linear-to-r from-cyan-400 to-sky-500 p-1">
                          <div className="h-full w-full rounded-full bg-slate-800 p-1">
                            <img
                              src={mentor.image}
                              alt={mentor.name}
                              className="h-full w-full rounded-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="text-center space-y-2">
                        <h3 className="font-orbitron text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                          {mentor.name}
                        </h3>
                        <p className="font-outfit text-sm text-cyan-400 font-medium">
                          {mentor.title}
                        </p>
                        <p className="font-outfit text-xs text-slate-400 leading-relaxed">
                          {mentor.expertise}
                        </p>
                        <p className="font-outfit text-xs text-slate-500 mt-2">
                          {mentor.company}
                        </p>
                      </div>

                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-cyan-500/10 to-sky-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-linear-to-r from-cyan-500/20 to-sky-500/20 px-8 py-4 font-outfit text-cyan-300 border border-cyan-500/30">
                <svg
                  className="h-5 w-5 text-cyan-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Join our community of innovators and learn from the best in the
                industry
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
