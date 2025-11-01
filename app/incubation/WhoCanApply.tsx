import React from "react";

const criteria = [
  "Have at least one founder with a valid CNIC.",
  "Can pitch your startup in one clear line.",
  "Have a business or revenue model in mind.",
  "Have a 3–6 month roadmap or defined tech stack.",
  "Have a 1–10 person founding team with relevant skills.",
  "Know your USP vs. top competitors.",
];

const WhoCanApply = () => {
  return (
    <section className="bg-linear-to-br from-sky-50 via-white to-blue-100 py-8 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white/80 p-6 sm:p-8 md:p-10 lg:p-14 shadow-xl backdrop-blur-sm">
          <div aria-hidden className="absolute inset-0">
            <div className="absolute -top-12 -right-8 sm:-top-24 sm:-right-16 h-32 w-32 sm:h-56 sm:w-56 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="absolute -bottom-10 -left-5 sm:-bottom-20 sm:-left-10 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-sky-300/40 blur-3xl" />
            <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/60 to-sky-100/80" />
          </div>

          <div className="relative z-10 flex flex-col gap-8 lg:gap-12 xl:flex-row xl:items-start xl:justify-between">
            <div className="space-y-4 sm:space-y-6 xl:max-w-lg xl:shrink-0">
              <span className="font-orbitron text-xs sm:text-sm uppercase tracking-[0.3em] sm:tracking-[0.4em] text-sky-600">
                Incubation Program
              </span>
              <h2 className="font-orbitron text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-wide text-slate-900 leading-tight">
                Who Can Apply?
              </h2>
              <p className="font-outfit text-base sm:text-lg leading-relaxed text-slate-700 max-w-2xl xl:max-w-none">
                Early-stage gaming or animation studios and indie teams with a
                clear market focus, at least two committed founders, and
                operations based in Pakistan (hybrid participation supported).
              </p>
            </div>

            <div className="w-full xl:flex-1 xl:max-w-2xl">
              <div className="grid gap-3 sm:gap-4">
                {criteria.map((item) => (
                  <div
                    key={item}
                    className="font-outfit flex items-center gap-3 sm:gap-4 rounded-full bg-sky-500/90 px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-base text-white shadow-lg shadow-sky-300/40 transition-all duration-200 hover:-translate-y-1 hover:shadow-sky-400/60 w-full"
                  >
                    <span className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-white/90 shrink-0">
                      <svg
                        className="h-3 w-3 sm:h-4 sm:w-4 text-sky-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.5 7.5a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414L8.5 11.586l6.793-6.793a1 1 0 0 1 1.414 0Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="leading-snug flex-1 text-left">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanApply;
