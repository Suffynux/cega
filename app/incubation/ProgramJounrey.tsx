"use client";

import { Box, Grid, Typography, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { Fragment, useMemo } from "react";

const steps = [
  {
    id: 1,
    title: "Screening",
    subtitle: "Application",
    description:
      "Two-stage review (internal + external) to shortlist high-potential teams.",
  },
  {
    id: 2,
    title: "Selection",
    subtitle: "Orientation",
    description:
      "Cohort kickoff, mentor matching, and product/market diagnostics.",
  },
  {
    id: 3,
    title: "Months 1–5",
    subtitle: "Mentorship",
    description:
      "Weekly clinics on design, pipelines, GTM, monetization, branding.",
  },
  {
    id: 4,
    title: "Month 6",
    subtitle: "Production Sprint",
    description:
      "Mock pitches, unit economics, publishing deal advisory.",
  },
  {
    id: 5,
    title: "Investor Access",
    subtitle: "Investor Readiness",
    description:
      "Demo to investors, publishers, and partners for deals and funding.",
  },
];

export default function ProgramJourney() {
  const theme = useTheme();

  const connectorColor = useMemo(
    () => theme.palette.secondary.main || "#87CBDE",
    [theme]
  );

  return (
    <Fragment></Fragment>
  );
}
