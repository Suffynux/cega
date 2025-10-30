"use client";

import React, { Fragment, useEffect, useState } from "react";
import { Hero } from "../page";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Typography,
  Paper,
  CircularProgress,
  createTheme,
  ThemeProvider,
  Grid,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    primary: { main: "#173E81" },
    secondary: { main: "#87CBDE" },
    background: { default: "#FFFFFF" },
    text: { primary: "#0b1724" },
  },
  typography: { fontFamily: '"Orbitron", sans-serif' },
});

type TrainingForm = {
  fullName: string;
  cnic: string;
  domicile: string;
  contactNumber: string;
  qualification: string;
  course: string;
  venue: string;
  organizationPlatform: string;
  email: string;
  contactConsent: boolean;
};

const initial: TrainingForm = {
  fullName: "",
  cnic: "",
  domicile: "",
  contactNumber: "",
  qualification: "Matriculation",
  course: "Pre-Production - Onsite",
  venue: "Lahore",
  organizationPlatform: "Unity",
  email: "",
  contactConsent: false,
};

const qualificationOptions = ["Matriculation", "Intermediate", "BS HONS"];
const courseOptions = [
  "Pre-Production - Onsite",
  "Production - Onsite",
  "Post-Production - Onsite",
  "Unity - Offsite",
  "Unreal - Offsite",
  "3D Animation - Onsite",
];
const venueOptions = ["Lahore", "Karachi"];
const organizationOptions = ["Unity", "Unreal", "Blender"];

export default function Training() {
  const heroVideos = ["/trainingVideo1.mp4", "/trainingVideo2.mp4"] as const;
  const [activeVideo, setActiveVideo] = useState<(typeof heroVideos)[number]>(
    heroVideos[0]
  );

  useEffect(() => {
    const rotation = setInterval(() => {
      setActiveVideo((current) => {
        const currentIndex = heroVideos.indexOf(current);
        const nextIndex = (currentIndex + 1) % heroVideos.length;
        return heroVideos[nextIndex];
      });
    }, 10000);
    return () => clearInterval(rotation);
  }, [heroVideos]);

  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Hero activeVideo={activeVideo} training />
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            px: { xs: 2, md: 4 },
            display: "flex",
            justifyContent: "center",
            background: "#f8fafc",
          }}
        >
          <Container maxWidth="md">
            <TrainingFormPanel />
          </Container>
        </Box>
        <ToastContainer position="top-right" theme="colored" />
      </Fragment>
    </ThemeProvider>
  );
}

function TrainingFormPanel() {
  const [form, setForm] = useState<TrainingForm>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof TrainingForm, string>>>(
    {}
  );
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const e: Partial<Record<keyof TrainingForm, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    const cnicDigits = (form.cnic || "").replace(/\D/g, "");
    if (!cnicDigits) e.cnic = "CNIC / B-Form is required.";
    else if (cnicDigits.length > 13) e.cnic = "CNIC must be 13 digits or less.";
    const phoneDigits = (form.contactNumber || "").replace(/\D/g, "");
    if (!phoneDigits) e.contactNumber = "Contact number is required.";
    else if (phoneDigits.length < 8)
      e.contactNumber = "Phone must be at least 8 digits.";
    else if (phoneDigits.length > 14)
      e.contactNumber = "Phone must be at most 14 digits.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address.";
    if (!form.qualification) e.qualification = "Qualification is required.";
    if (!form.course) e.course = "Course is required.";
    if (!form.venue) e.venue = "Venue is required.";
    if (!form.organizationPlatform) e.organizationPlatform = "Organization is required.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = <K extends keyof TrainingForm>(key: K, value: TrainingForm[K]) => {
    setForm((s) => ({ ...s, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = async (ev?: React.FormEvent) => {
    ev?.preventDefault();
    if (submitting) return;
    if (!validate()) {
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/trainingForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.message || "Submission failed");
      toast.success(json?.message || "Application submitted successfully");
      setForm(initial);
      setErrors({});
    } catch (err: any) {
      toast.error(err?.message || "Something went wrong. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Paper
      elevation={8}
      sx={{
        borderRadius: 3,
        p: { xs: 3, md: 4 },
        background: "#ffffff",
        boxShadow: "0 12px 30px rgba(7,18,36,0.08)",
      }}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Box>
          <Typography variant="h6" sx={{ color: "#173E81", fontWeight: 700 }}>
            Training Registration
          </Typography>
          <Typography variant="body2" sx={{ color: "#0b1724", mt: 0.5 }}>
            Free, hands-on training — fill the form below to apply.
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            gap: 1,
            px: 2,
            py: 0.5,
            borderRadius: 2,
            background: "linear-gradient(90deg,#87CBDE1A,#173E811A)",
            color: "#173E81",
            fontSize: 12,
            fontWeight: 600,
          }}
        >
          CEGA
        </Box>
      </Box>

      <Box component="form" onSubmit={handleSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid  size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Full Name *"
              value={form.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              fullWidth
              error={!!errors.fullName}
              helperText={errors.fullName}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="CNIC / B-Form Number"
              value={form.cnic}
              onChange={(e) => handleChange("cnic", e.target.value)}
              fullWidth
              error={!!errors.cnic}
              helperText={errors.cnic || "Enter up to 13 digits"}
              inputProps={{ maxLength: 13 }}
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Domicile"
              value={form.domicile}
              onChange={(e) => handleChange("domicile", e.target.value)}
              fullWidth
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Contact Number *"
              value={form.contactNumber}
              onChange={(e) => handleChange("contactNumber", e.target.value)}
              fullWidth
              error={!!errors.contactNumber}
              helperText={errors.contactNumber}
              inputMode="tel"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              label="Qualification *"
              value={form.qualification}
              onChange={(e) => handleChange("qualification", e.target.value)}
              fullWidth
              error={!!errors.qualification}
              helperText={errors.qualification}
            >
              {qualificationOptions.map((q) => (
                <MenuItem key={q} value={q}>
                  {q}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              label="Course *"
              value={form.course}
              onChange={(e) => handleChange("course", e.target.value)}
              fullWidth
              error={!!errors.course}
              helperText={errors.course}
            >
              {courseOptions.map((c) => (
                <MenuItem key={c} value={c}>
                  {c}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              label="Venue *"
              value={form.venue}
              onChange={(e) => handleChange("venue", e.target.value)}
              fullWidth
              error={!!errors.venue}
              helperText={errors.venue}
            >
              {venueOptions.map((v) => (
                <MenuItem key={v} value={v}>
                  {v}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              select
              label="Organization / Platform *"
              value={form.organizationPlatform}
              onChange={(e) => handleChange("organizationPlatform", e.target.value)}
              fullWidth
              error={!!errors.organizationPlatform}
              helperText={errors.organizationPlatform}
            >
              {organizationOptions.map((o) => (
                <MenuItem key={o} value={o}>
                  {o}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              label="Email *"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              fullWidth
              error={!!errors.email}
              helperText={errors.email}
              type="email"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6 }} sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
              <input
                id="contactConsent"
                type="checkbox"
                checked={form.contactConsent}
                onChange={(e) => handleChange("contactConsent", e.target.checked)}
                style={{ width: 18, height: 18 }}
              />
              <label htmlFor="contactConsent" style={{ fontSize: 13, color: "#0b1724" }}>
                I agree to be contacted via WhatsApp / email
              </label>
            </Box>
          </Grid>

          <Grid size={{ xs: 12 }} sx={{ mt: 1 }}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={submitting}
              sx={{
                py: 1.6,
                fontWeight: 700,
                background: "linear-gradient(90deg,#173E81,#87CBDE)",
                boxShadow: "0 8px 25px rgba(23,62,129,0.15)",
                "&:hover": { filter: "brightness(0.95)" },
              }}
            >
              {submitting ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Submit Application"}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}