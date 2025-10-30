"use client";

import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  TextField,
  Paper,
  Grid,
  Typography,
  CircularProgress,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BRAND = {
  primary: "#173E81",
  secondary: "#87CBDE",
};

type CoWorkingFormState = {
  fullName: string;
  email: string;
  area: "Lahore" | "Karachi" | "";
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
};

const now = new Date();
const pad = (n: number) => String(n).padStart(2, "0");
const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;
const currentTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

const initial: CoWorkingFormState = {
  fullName: "",
  email: "",
  area: "",
  date: today,
  time: currentTime,
};

export default function CoWorkingForm() {
  const [form, setForm] = useState<CoWorkingFormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof CoWorkingFormState, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e: Partial<Record<keyof CoWorkingFormState, string>> = {};
    if (!form.fullName.trim()) e.fullName = "Full name is required.";
    if (!form.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.area) e.area = "Please select an area.";
    if (!form.date) e.date = "Please select a date.";
    if (!form.time) e.time = "Please select a time.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = <K extends keyof CoWorkingFormState>(k: K, v: CoWorkingFormState[K]) => {
    setForm((s) => ({ ...s, [k]: v }));
    setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (submitting) return;

    if (!validate()) {
      // visible validation toast
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        area: form.area,
        date: form.date,
        time: form.time,
      };

      const res = await fetch("/api/coWorkingForm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();

      // ensure we treat API-level success flag
      if (!res.ok || (json && json.success === false)) {
        throw new Error(json?.message || "Submission failed");
      }

      toast.success(json?.message || "Request submitted — we'll contact you soon");
      setForm(initial);
      setErrors({});
    } catch (err: any) {
      // more explicit error toast
      toast.error(err?.message || "Something went wrong. Try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, px: 2 }}>
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            borderRadius: 3,
            p: { xs: 3, md: 4 },
            background: "#fff",
            boxShadow: "0 12px 30px rgba(7,18,36,0.06)",
            border: "1px solid rgba(23,62,129,0.06)",
          }}
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
            <Box>
              <Typography variant="h6" sx={{ color: BRAND.primary, fontWeight: 700 }}>
                Book Co‑Working Visit
              </Typography>
              <Typography variant="body2" sx={{ color: "#0b1724", mt: 0.5 }}>
                A Workspace Built for Game & Animation Teams — free desks, meeting rooms and labs.
              </Typography>
            </Box>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                px: 2,
                py: 0.5,
                borderRadius: 2,
                background: `linear-gradient(90deg, ${BRAND.secondary}18, ${BRAND.primary}18)`,
                color: BRAND.primary,
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              CEGA
            </Box>
          </Box>

          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid size={{xs:12}} >
                <TextField
                  label="Full Name *"
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  fullWidth
                  error={!!errors.fullName}
                  helperText={errors.fullName}
                />
              </Grid>

              <Grid size={{xs:12}}>
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

              <Grid size={{xs:12 ,sm:6}}>
                <TextField
                  select
                  label="Area *"
                  value={form.area}
                  onChange={(e) => handleChange("area", e.target.value as CoWorkingFormState["area"])}
                  fullWidth
                  error={!!errors.area}
                  helperText={errors.area}
                >
                  <MenuItem value="Lahore">Lahore</MenuItem>
                  <MenuItem value="Karachi">Karachi</MenuItem>
                </TextField>
              </Grid>

              <Grid size={{xs:12 , sm : 6}}>
                <TextField
                  label="Date *"
                  type="date"
                  value={form.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.date}
                  helperText={errors.date}
                />
              </Grid>

              <Grid size={{xs:12 , sm : 6}}>
                <TextField
                  label="Time *"
                  type="time"
                  value={form.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  error={!!errors.time}
                  helperText={errors.time}
                />
              </Grid>

              <Grid size={{xs:12}}>
                <Button
                  type="submit"
                  fullWidth
                  disabled={submitting}
                  variant="contained"
                  sx={{
                    py: 1.6,
                    fontWeight: 700,
                    background: `linear-gradient(90deg, ${BRAND.primary}, ${BRAND.secondary})`,
                    boxShadow: "0 10px 30px rgba(23,62,129,0.12)",
                    color: "#fff",
                    "&:hover": { filter: "brightness(0.95)" },
                  }}
                >
                  {submitting ? <CircularProgress size={22} sx={{ color: "#fff" }} /> : "Request Visit"}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>

      {/* Toast container so toasts show on this page */}
      <ToastContainer position="top-right" theme="colored" closeOnClick />
    </Box>
  );
}