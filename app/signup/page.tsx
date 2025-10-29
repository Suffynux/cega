// "use client";

// import { FormEvent, useMemo, useState } from "react";
// import { toast } from "react-toastify";

// type StartupForm = {
//   fullName: string;
//   email: string;
//   whatsappNumber: string;
//   linkedInProfile: string;
//   startupName: string;
//   productTitle: string;
//   websiteOrPortfolio: string;
//   startupOriginCity: string;
//   teamMembersCount: string;
//   currentStage: string;
//   vertical: string;
//   challengesFaced: string;
//   problemStatement: string;
//   solutionSummary: string;
//   previousIncubationExperience: string;
//   revenueLast12Months: string;
//   motivationToApply: string;
// };

// const initialFormState: StartupForm = {
//   fullName: "",
//   email: "",
//   whatsappNumber: "",
//   linkedInProfile: "",
//   startupName: "",
//   productTitle: "",
//   websiteOrPortfolio: "",
//   startupOriginCity: "Lahore",
//   teamMembersCount: "1",
//   currentStage: "Idea",
//   vertical: "Ai/Automation",
//   challengesFaced: "",
//   problemStatement: "",
//   solutionSummary: "",
//   previousIncubationExperience: "",
//   revenueLast12Months: "0",
//   motivationToApply: "",
// };

// const cityOptions = ["Karachi", "Lahore"];

// const stageOptions = [
//   "Idea",
//   "Prototype",
//   "MVP",
//   "Launched",
//   "Revenue Generating",
//   "Scaling",
//   "Other",
// ];

// const verticalOptions = ["Ai/Automation", "Other Creative Tech", "Animation"];

// export default function SignupPage() {
//   const [form, setForm] = useState<StartupForm>(initialFormState);
//   const [submitting, setSubmitting] = useState(false);
//   const [serverMessage, setServerMessage] = useState<string | null>(null);

//   const [errorMessage, setErrorMessage] = useState<string | null>(null);

//   const canSubmit = useMemo(() => {
//     return (
//       form.fullName.trim().length >= 3 &&
//       form.email.trim().length > 0 &&
//       form.whatsappNumber.trim().length > 0 &&
//       form.productTitle.trim().length > 0 &&
//       Number(form.teamMembersCount) > 0 &&
//       Number(form.revenueLast12Months) >= 0
//     );
//   }, [form]);

//   const handleChange = (field: keyof StartupForm, value: string) => {
//     setForm((prev) => ({ ...prev, [field]: value }));
//   };

//   const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     if (!canSubmit || submitting) return;

//     setSubmitting(true);
//     setServerMessage(null);
//     setErrorMessage(null);

//     const payload = {
//       ...form,
//       teamMembersCount: Number(form.teamMembersCount),
//       revenueLast12Months: Number(form.revenueLast12Months),
//     };

//     // Strip optional empty fields so the API receives cleaner payloads
//     const cleanedPayload = Object.fromEntries(
//       Object.entries(payload).filter(
//         ([, value]) => value !== "" && value !== null
//       )
//     );

//     try {
//       const response = await fetch("/api/signUpForm", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(cleanedPayload),
//       });

//       const result = await response.json();

//       if (!response.ok || !result.success) {
//         throw new Error(result?.message || "Failed to submit your application");
//       }

//       toast.success("Application submitted! We will get in touch soon.");
//       setForm({ ...initialFormState });
//     } catch (error: any) {
//       const message =
//         error?.message || "Something went wrong. Please try again.";
//       toast.error(message);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-black text-slate-200">
//       <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 md:flex-row">
//         <section className="flex-1 space-y-6 rounded-3xl border border-purple-700/40 bg-black/40 p-8 shadow-[0_0_40px_rgba(168,85,247,0.35)] backdrop-blur">
//           <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
//             NovaForge Labs
//           </p>
//           <h1 className="text-4xl font-semibold text-white md:text-5xl">
//             Join the <span className="text-purple-400">Founders Guild</span>
//           </h1>
//           <p className="text-lg text-slate-300">
//             Submit your startup or game concept to unlock mentorship, funding,
//             and a high-energy community of dreamers building the next generation
//             of interactive experiences.
//           </p>
//           <ul className="space-y-4 text-sm text-slate-300">
//             <li className="flex items-start gap-3">
//               <span className="mt-1 h-2 w-2 rounded-full bg-purple-500" />
//               Direct access to pro dev mentors and weekly strategy scrims.
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
//               Showcase demos on our neon-lit launch nights and pitch to angels.
//             </li>
//             <li className="flex items-start gap-3">
//               <span className="mt-1 h-2 w-2 rounded-full bg-fuchsia-400" />
//               Level up with growth playbooks tailored for gaming startups.
//             </li>
//           </ul>
//         </section>

//         <section className="flex-1">
//           <form
//             onSubmit={handleSubmit}
//             className="rounded-3xl border border-purple-500/30 bg-slate-900/60 p-8 shadow-[0_0_45px_rgba(59,130,246,0.25)] backdrop-blur"
//           >
//             <h2 className="text-2xl font-semibold text-white">
//               Signup Mission Log
//             </h2>
//             <p className="mt-1 text-sm text-slate-300">
//               Complete the intel below so our scouting squad can review your
//               build.
//             </p>

//             {serverMessage && (
//               <div className="mt-4 rounded-xl border border-emerald-400/40 bg-emerald-500/10 p-4 text-sm text-emerald-300">
//                 {serverMessage}
//               </div>
//             )}

//             {errorMessage && (
//               <div className="mt-4 rounded-xl border border-rose-500/40 bg-rose-500/10 p-4 text-sm text-rose-300">
//                 {errorMessage}
//               </div>
//             )}

//             <div className="mt-6 grid gap-5 md:grid-cols-2">
//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Full Name *
//                 </span>
//                 <input
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="Juno Nightshade"
//                   value={form.fullName}
//                   onChange={(event) =>
//                     handleChange("fullName", event.target.value)
//                   }
//                   required
//                   minLength={3}
//                 />
//               </label>

//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Email *
//                 </span>
//                 <input
//                   type="email"
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="juno@novaforge.gg"
//                   value={form.email}
//                   onChange={(event) =>
//                     handleChange("email", event.target.value)
//                   }
//                   required
//                 />
//               </label>

//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   WhatsApp Number *
//                 </span>
//                 <input
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="+923001234567"
//                   value={form.whatsappNumber}
//                   onChange={(event) =>
//                     handleChange("whatsappNumber", event.target.value)
//                   }
//                   required
//                 />
//               </label>

//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   LinkedIn Profile
//                 </span>
//                 <input
//                   type="url"
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="https://linkedin.com/in/juno"
//                   value={form.linkedInProfile}
//                   onChange={(event) =>
//                     handleChange("linkedInProfile", event.target.value)
//                   }
//                 />
//               </label>

//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Startup Name
//                 </span>
//                 <input
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="NovaForge Labs"
//                   value={form.startupName}
//                   onChange={(event) =>
//                     handleChange("startupName", event.target.value)
//                   }
//                 />
//               </label>

//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Product / Game Title *
//                 </span>
//                 <input
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="Starborne Chronicles"
//                   value={form.productTitle}
//                   onChange={(event) =>
//                     handleChange("productTitle", event.target.value)
//                   }
//                   required
//                 />
//               </label>

//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Website / Portfolio
//                 </span>
//                 <input
//                   type="url"
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="https://novaforge.gg"
//                   value={form.websiteOrPortfolio}
//                   onChange={(event) =>
//                     handleChange("websiteOrPortfolio", event.target.value)
//                   }
//                 />
//               </label>

//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Origin City
//                 </span>
//                 <select
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   value={form.startupOriginCity}
//                   onChange={(event) =>
//                     handleChange("startupOriginCity", event.target.value)
//                   }
//                 >
//                   {cityOptions.map((city) => (
//                     <option key={city} value={city} className="bg-slate-900">
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//               </label>

//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Team Members *
//                 </span>
//                 <input
//                   type="number"
//                   min={1}
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   value={form.teamMembersCount}
//                   onChange={(event) =>
//                     handleChange("teamMembersCount", event.target.value)
//                   }
//                   required
//                 />
//               </label>

//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Current Stage
//                 </span>
//                 <select
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   value={form.currentStage}
//                   onChange={(event) =>
//                     handleChange("currentStage", event.target.value)
//                   }
//                 >
//                   {stageOptions.map((stage) => (
//                     <option key={stage} value={stage} className="bg-slate-900">
//                       {stage}
//                     </option>
//                   ))}
//                 </select>
//               </label>

//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Vertical Focus
//                 </span>
//                 <select
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   value={form.vertical}
//                   onChange={(event) =>
//                     handleChange("vertical", event.target.value)
//                   }
//                 >
//                   {verticalOptions.map((vertical) => (
//                     <option
//                       key={vertical}
//                       value={vertical}
//                       className="bg-slate-900"
//                     >
//                       {vertical}
//                     </option>
//                   ))}
//                 </select>
//               </label>

//               <label className="md:col-span-2 flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Biggest Challenges
//                 </span>
//                 <textarea
//                   className="min-h-[110px] rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="Tell us where the grind gets real..."
//                   value={form.challengesFaced}
//                   onChange={(event) =>
//                     handleChange("challengesFaced", event.target.value)
//                   }
//                 />
//               </label>

//               <label className="md:col-span-2 flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Problem Statement
//                 </span>
//                 <textarea
//                   className="min-h-[110px] rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="What boss-level problem are you solving?"
//                   value={form.problemStatement}
//                   onChange={(event) =>
//                     handleChange("problemStatement", event.target.value)
//                   }
//                 />
//               </label>

//               <label className="md:col-span-2 flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Solution Summary
//                 </span>
//                 <textarea
//                   className="min-h-[110px] rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="How does your build change the game?"
//                   value={form.solutionSummary}
//                   onChange={(event) =>
//                     handleChange("solutionSummary", event.target.value)
//                   }
//                 />
//               </label>

//               <label className="md:col-span-2 flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Previous Incubation Experience
//                 </span>
//                 <textarea
//                   className="min-h-[90px] rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="Have you quested with other incubators before?"
//                   value={form.previousIncubationExperience}
//                   onChange={(event) =>
//                     handleChange(
//                       "previousIncubationExperience",
//                       event.target.value
//                     )
//                   }
//                 />
//               </label>

//               <label className="flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Revenue (Last 12 Months) *
//                 </span>
//                 <input
//                   type="number"
//                   min={0}
//                   className="rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   value={form.revenueLast12Months}
//                   onChange={(event) =>
//                     handleChange("revenueLast12Months", event.target.value)
//                   }
//                   required
//                 />
//               </label>

//               <label className="md:col-span-2 flex flex-col gap-2">
//                 <span className="text-sm font-medium text-slate-200">
//                   Motivation To Apply
//                 </span>
//                 <textarea
//                   className="min-h-[110px] rounded-xl border border-purple-500/30 bg-black/60 px-4 py-3 text-sm text-white outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-500/40"
//                   placeholder="Why are you ready to enter the arena now?"
//                   value={form.motivationToApply}
//                   onChange={(event) =>
//                     handleChange("motivationToApply", event.target.value)
//                   }
//                 />
//               </label>
//             </div>

//             <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
//               <button
//                 type="submit"
//                 disabled={!canSubmit || submitting}
//                 className="inline-flex items-center justify-center rounded-xl border border-purple-500/60 bg-linear-to-r from-purple-600 via-fuchsia-600 to-blue-500 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-[0_8px_25px_rgba(129,140,248,0.35)] transition hover:scale-[1.02] hover:shadow-[0_12px_35px_rgba(129,140,248,0.45)] disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 {submitting ? "Submitting..." : "Launch Application"}
//               </button>

//               <p className="text-xs text-slate-400">
//                 By submitting you certify that your data is accurate and
//                 you&apos;re ready for lift-off.
//               </p>
//             </div>
//           </form>
//         </section>
//       </div>
//     </div>
//   );
// }


"use client";

import { useState, useMemo, FormEvent } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { toast } from "react-toastify";

const theme = createTheme({
  palette: {
    primary: {
      main: "#173E81", // Deep Blue
    },
    secondary: {
      main: "#87CBDE", // Aqua Blue
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#000000",
    },
  },
  typography: {
    fontFamily: '"Orbitron", sans-serif',
  },
});

type StartupForm = {
  fullName: string;
  email: string;
  whatsappNumber: string;
  linkedInProfile: string;
  startupName: string;
  productTitle: string;
  websiteOrPortfolio: string;
  startupOriginCity: string;
  teamMembersCount: string;
  currentStage: string;
  vertical: string;
  challengesFaced: string;
  problemStatement: string;
  solutionSummary: string;
  previousIncubationExperience: string;
  revenueLast12Months: string;
  motivationToApply: string;
};

const initialFormState: StartupForm = {
  fullName: "",
  email: "",
  whatsappNumber: "",
  linkedInProfile: "",
  startupName: "",
  productTitle: "",
  websiteOrPortfolio: "",
  startupOriginCity: "Lahore",
  teamMembersCount: "1",
  currentStage: "Idea",
  vertical: "Ai/Automation",
  challengesFaced: "",
  problemStatement: "",
  solutionSummary: "",
  previousIncubationExperience: "",
  revenueLast12Months: "0",
  motivationToApply: "",
};

const cityOptions = ["Karachi", "Lahore"];
const stageOptions = [
  "Idea",
  "Prototype",
  "MVP",
  "Launched",
  "Revenue Generating",
  "Scaling",
  "Other",
];
const verticalOptions = ["Ai/Automation", "Other Creative Tech", "Animation"];

export default function SignupPage() {
  const [form, setForm] = useState<StartupForm>(initialFormState);
  const [submitting, setSubmitting] = useState(false);

  const canSubmit = useMemo(() => {
    return (
      form.fullName.trim().length >= 3 &&
      form.email.trim().length > 0 &&
      form.whatsappNumber.trim().length > 0 &&
      form.productTitle.trim().length > 0 &&
      Number(form.teamMembersCount) > 0 &&
      Number(form.revenueLast12Months) >= 0
    );
  }, [form]);

  const handleChange = (field: keyof StartupForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!canSubmit || submitting) return;

    setSubmitting(true);

    try {
      const response = await fetch("/api/signUpForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (!response.ok || !result.success)
        throw new Error(result?.message || "Submission failed.");

      toast.success("Application submitted successfully!");
      setForm(initialFormState);
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #173E81 40%, #87CBDE 90%)",
          display: "flex",
          alignItems: "center",
          py: 10,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="flex-start">
            {/* Left Section */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={6}
                sx={{
                  p: 4,
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  borderLeft: "5px solid #87CBDE",
                }}
              >
                <Typography
                  variant="overline"
                  sx={{ color: "#173E81", letterSpacing: "0.2em" }}
                >
                  CEGA INCUBATION
                </Typography>
                <Typography
                  variant="h4"
                  sx={{ mt: 2, fontWeight: 700, color: "#173E81" }}
                >
                  Join the{" "}
                  <span style={{ color: "#87CBDE" }}>Innovation Program</span>
                </Typography>
                <Typography sx={{ mt: 2, color: "#000000" }}>
                  Submit your startup or animation concept to access mentorship,
                  funding, and CEGA’s creative ecosystem. Build, grow, and
                  innovate with the best minds in gaming & animation.
                </Typography>

                <Box component="ul" sx={{ mt: 3, color: "#173E81" }}>
                  <li>Exclusive mentorship with industry leaders.</li>
                  <li>Showcase projects to global investors.</li>
                  <li>Collaborate with creative and technical experts.</li>
                </Box>
              </Paper>
            </Grid>

            {/* Right Section (Form) */}
            <Grid item xs={12} md={7}>
              <Paper
                elevation={8}
                sx={{
                  p: 5,
                  borderRadius: "20px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ mb: 3, fontWeight: 600, color: "#173E81" }}
                >
                  Startup Registration Form
                </Typography>

                <Box component="form" onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    {/* Text Fields */}
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Full Name"
                        fullWidth
                        required
                        value={form.fullName}
                        onChange={(e :any) =>
                          handleChange("fullName", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Email"
                        fullWidth
                        type="email"
                        required
                        value={form.email}
                        onChange={(e :any) => handleChange("email", e.target.value)}
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        label="WhatsApp Number"
                        fullWidth
                        required
                        value={form.whatsappNumber}
                        onChange={(e :any) =>
                          handleChange("whatsappNumber", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        label="LinkedIn Profile"
                        fullWidth
                        value={form.linkedInProfile}
                        onChange={(e:any) =>
                          handleChange("linkedInProfile", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Startup Name"
                        fullWidth
                        value={form.startupName}
                        onChange={(e :any) =>
                          handleChange("startupName", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Product / Game Title"
                        fullWidth
                        required
                        value={form.productTitle}
                        onChange={(e:any) =>
                          handleChange("productTitle", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Website / Portfolio"
                        fullWidth
                        value={form.websiteOrPortfolio}
                        onChange={(e:any) =>
                          handleChange("websiteOrPortfolio", e.target.value)
                        }
                      />
                    </Grid>

                    {/* Select Menus */}
                    <Grid item xs={12} md={6}>
                      <TextField
                        select
                        label="Origin City"
                        fullWidth
                        value={form.startupOriginCity}
                        onChange={(e:any) =>
                          handleChange("startupOriginCity", e.target.value)
                        }
                      >
                        {cityOptions.map((city) => (
                          <MenuItem key={city} value={city}>
                            {city}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        select
                        label="Current Stage"
                        fullWidth
                        value={form.currentStage}
                        onChange={(e:any) =>
                          handleChange("currentStage", e.target.value)
                        }
                      >
                        {stageOptions.map((stage) => (
                          <MenuItem key={stage} value={stage}>
                            {stage}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <TextField
                        select
                        label="Vertical Focus"
                        fullWidth
                        value={form.vertical}
                        onChange={(e:any) =>
                          handleChange("vertical", e.target.value)
                        }
                      >
                        {verticalOptions.map((v) => (
                          <MenuItem key={v} value={v}>
                            {v}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>

                    {/* Text Areas */}
                    <Grid item xs={12}>
                      <TextField
                        label="Challenges Faced"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.challengesFaced}
                        onChange={(e:any) =>
                          handleChange("challengesFaced", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        label="Problem Statement"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.problemStatement}
                        onChange={(e:any) =>
                          handleChange("problemStatement", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        label="Solution Summary"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.solutionSummary}
                        onChange={(e:any) =>
                          handleChange("solutionSummary", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <TextField
                        label="Motivation to Apply"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.motivationToApply}
                        onChange={(e:any) =>
                          handleChange("motivationToApply", e.target.value)
                        }
                      />
                    </Grid>

                    {/* Submit */}
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        fullWidth
                        size="large"
                        disabled={!canSubmit || submitting}
                        sx={{
                          mt: 2,
                          py: 1.5,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          boxShadow:
                            "0px 6px 15px rgba(23, 62, 129, 0.3)",
                        }}
                      >
                        {submitting ? (
                          <CircularProgress
                            size={24}
                            sx={{ color: "#FFFFFF" }}
                          />
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
