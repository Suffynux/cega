import { Grid } from "@mui/material";
import React from "react";

const processSteps = [
  {
    id: 1,
    title: "Eligibility Check",
    description: "Ensure submissions of accurate information to be eligible.",
    icon: (
      <svg
        className="h-8 w-8 text-sky-600"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Verification",
    description:
      "CEGA verifies your information through a rigorous screening process.",
    icon: (
      <svg
        className="h-8 w-8 text-sky-600"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Final Selection",
    description:
      "Pitching ideas to industry experts as part of final selection into cohort.",
    icon: (
      <svg
        className="h-8 w-8 text-sky-600"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
];

const Process = () => {
  return (
    <section className="from-sky-50 via-white to-blue-100 bg-linear-to-br">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-white/80 p-10 shadow-xl backdrop-blur-sm md:p-14">
          {/* Background effects */}
          <div aria-hidden className="absolute inset-0">
            <div className="absolute -top-24 -right-16 h-56 w-56 rounded-full bg-sky-200/60 blur-3xl" />
            <div className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-sky-300/40 blur-3xl" />
            <div className="absolute inset-0 bg-linear-to-br from-transparent via-white/60 to-sky-100/80" />
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="mb-16 text-center">
              <span className="font-orbitron text-xs uppercase tracking-[0.4em] text-sky-600">
                Selection Process
              </span>
              <h2 className="font-orbitron mt-4 text-3xl font-semibold tracking-wide text-slate-900 md:text-4xl lg:text-5xl">
                Our Three-Step Journey
              </h2>
              <p className="font-outfit mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-700">
                Navigate through our carefully designed selection process to
                join the next generation of gaming and animation innovators.
              </p>
            </div>

            {/* Process Steps Grid */}
            <Grid container spacing={4}>
              {processSteps.map((step, index) => (
                <Grid size={{ xs: 12, md: 4 }} key={step.id}>
                  <div className="group relative h-full">
                    {/* Step Card */}
                    <div className="relative h-full overflow-hidden rounded-2xl bg-white/90 p-8 shadow-lg shadow-sky-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-300/60">
                      {/* Step Number */}
                      <div className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 font-orbitron text-lg font-bold text-white shadow-lg">
                        {step.id}
                      </div>

                      {/* Icon */}
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-sky-100 transition-colors duration-300 group-hover:bg-sky-200">
                        {step.icon}
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <h3 className="font-orbitron text-xl font-semibold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="font-outfit leading-relaxed text-slate-700">
                          {step.description}
                        </p>
                      </div>

                      {/* Progress Arrow (not for last item) */}
                      {index < processSteps.length - 1 && (
                        <div className="absolute -right-6 top-1/2 hidden -translate-y-1/2 transform md:block">
                          <div className="flex h-8 w-12 items-center justify-center">
                            <svg
                              className="h-6 w-6 text-sky-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>

            {/* Call to Action */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-6 py-3 font-outfit text-sky-700">
                <svg
                  className="h-5 w-5 text-sky-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Ready to start your journey? Submit your application today.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
