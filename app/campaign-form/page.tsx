"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, FileText, User, Check } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type FormState = {
  title: string;
  name: string;
  phone: string;
};

export default function CampaignFormPage() {
  const [form, setForm] = useState<FormState>({ title: "", name: "", phone: "" });
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const brand = {
    // darker, higher-contrast palette for the left panel & accents
    dark: "#061328",
    primary: "#0d2a55",
    accent: "#13577a",
    light: "#f1f5f9",
  };

  const validate = (): boolean => {
    const e: Partial<FormState> = {};
    if (!form.title.trim()) e.title = "Title is required.";
    if (!form.name.trim()) e.name = "Full name is required.";
    const digitsOnly = (form.phone || "").replace(/\D/g, "");
    if (!digitsOnly) {
      e.phone = "Phone number is required.";
    } else if (digitsOnly.length < 8) {
      e.phone = "Phone number must be at least 8 digits.";
    } else if (digitsOnly.length > 14) {
      e.phone = "Phone number must be at most 14 digits.";
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (k: keyof FormState, v: string) => {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/compaignForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || "Submission failed");

      toast.success(json?.message || "Application submitted successfully");
      setForm({ title: "", name: "", phone: "" });
      setSuccess(true);
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-[70vh] w-full overflow-hidden font-orbitron">
      {/* Background video & overlay */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          src="/video1.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/cegaLogo.png"
        />
        {/* stronger dark overlay so form contrast is clear */}
        <div className="absolute inset-0 bg-black/60" />
        <div
          className="absolute inset-0 mix-blend-multiply"
          style={{
            background: `linear-gradient(180deg, ${brand.primary}88, ${brand.dark}AA)`,
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl shadow-2xl overflow-hidden"
        >
          <div className="md:flex bg-white/95 backdrop-blur-md border border-[#173E81]/10">
            {/* Left info */}
            <div
              className="hidden md:flex md:w-1/3 p-8 flex-col justify-center"
              style={{ background: `linear-gradient(180deg, ${brand.primary}, ${brand.dark})` }}
            >
              <div className="text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white/20 rounded-full p-2">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <h2 className="text-xl font-semibold">Campaign Application</h2>
                </div>

                <p className="text-sm opacity-90 leading-relaxed">
                  Submit a concise campaign entry. Our team will review applications and contact shortlisted
                  candidates within 3–5 business days.
                </p>

                <ul className="mt-6 text-xs space-y-2 opacity-90">
                  <li>• Keep the title clear and descriptive</li>
                  <li>• Use a reachable contact number</li>
                  <li>• No attachments required for first review</li>
                </ul>

                {success && (
                  <div className="mt-6 inline-flex items-center gap-2 bg-white/10 p-2 rounded-full">
                    <Check className="h-4 w-4 text-white" />
                    <span className="text-sm text-white">Application sent — we will reach out soon</span>
                  </div>
                )}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate className="w-full md:w-2/3 p-6 md:p-8">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-semibold text-[#0d2a55] mb-1">Apply — Campaign</h3>
                  <p className="text-sm text-gray-700">Short form — quick review.</p>
                </div>

                {/* <div className="hidden md:flex items-center space-x-3">
                  <div className="text-xs text-gray-500">Powered by</div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium text-[#173E81] bg-[#87CBDE]/20">CEGA</div>
                </div> */}
              </div>

              <div className="mt-6 space-y-4">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Title</label>
                  <div className={`relative rounded-lg shadow-sm ${errors.title ? "ring-2 ring-red-200" : "focus-within:ring-2 focus-within:ring-[#87CBDE]/60" }`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FileText className="h-4 w-4 text-[#173E81]" />
                    </div>
                    <input
                      value={form.title}
                      onChange={(e) => handleChange("title", e.target.value)}
                      className="block w-full px-10 py-3 text-sm rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none"
                      placeholder="Enter campaign title"
                      aria-invalid={!!errors.title}
                    />
                  </div>
                  {errors.title && <p className="mt-1 text-xs text-red-600">{errors.title}</p>}
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Full name</label>
                  <div className={`relative rounded-lg shadow-sm ${errors.name ? "ring-2 ring-red-200" : "focus-within:ring-2 focus-within:ring-[#87CBDE]/60" }`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-[#173E81]" />
                    </div>
                    <input
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="block w-full px-10 py-3 text-sm rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none"
                      placeholder="Your full name"
                      aria-invalid={!!errors.name}
                    />
                  </div>
                  {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-800 mb-2">Contact number</label>
                  <div className={`relative rounded-lg shadow-sm ${errors.phone ? "ring-2 ring-red-200" : "focus-within:ring-2 focus-within:ring-[#87CBDE]/60" }`}>
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-4 w-4 text-[#173E81]" />
                    </div>
                    <input
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="block w-full px-10 py-3 text-sm rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:outline-none"
                      placeholder="Phone (8–14 digits)"
                      inputMode="tel"
                      aria-invalid={!!errors.phone}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#0d2a55] to-[#13577a] text-white font-semibold shadow-lg hover:brightness-105 transition-transform disabled:opacity-60"
                  >
                    {submitting ? "Submitting…" : "Submit Application"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      <ToastContainer position="top-right" theme="colored" closeOnClick />
    </div>
  );
}
