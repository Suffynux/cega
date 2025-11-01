"use client";

import Image from "next/image";

import { Box, Container, Typography, Chip, Stack, Grid } from "@mui/material";

interface Step {
  number: number;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Screening",
    subtitle: "Application",
    description:
      "Two-stage review (internal + external) to shortlist high-potential teams.",
    icon: "/processIcon/1.svg",
  },
  {
    number: 2,
    title: "Selection",
    subtitle: "Orientation",
    description:
      "Cohort kickoff, mentor matching, and product/market diagnostics.",
    icon: "/processIcon/2.svg",
  },
  {
    number: 3,
    title: "Months 1–5",
    subtitle: "Mentorship",
    description:
      "Weekly clinics on design, pipelines, GTM, monetization, branding.",
    icon: "/processIcon/3.svg",
  },
  {
    number: 4,
    title: "Months 6",
    subtitle: "Production Sprint",
    description: "Mock pitches, unit economics, publishing deal advisory.",
    icon: "/processIcon/4.svg",
  },
  {
    number: 5,
    title: "Investor Access",
    subtitle: "Investor Readiness",
    description:
      "Demo to investors, publishers, and partners for deals and funding.",
    icon: "/processIcon/5.svg",
  },
];

export default function ProgramJourney() {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 10, md: 14 },
        background:
          "linear-gradient(135deg, #05102b 0%, #091a3f 45%, #0e2652 100%)",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 1, color: "#EEF3FF" }}
      >
        <Stack
          spacing={2.5}
          alignItems={{ xs: "center", md: "flex-start" }}
          textAlign={{ xs: "center", md: "left" }}
          mb={{ xs: 6, md: 10 }}
        >
          <Chip
            className="font-outfit"
            label="Process"
            size="small"
            sx={{
              bgcolor: "rgba(19,194,182,0.16)",
              color: "#9ddbea",
              fontWeight: 600,
              px: 1.8,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              backdropFilter: "blur(4px)",
              border: "1px solid rgba(19,194,182,0.4)",
            }}
          />
          <Typography
            variant="h3"
            component="h2"
            fontWeight={700}
            sx={{
              fontSize: { xs: "2.5rem", md: "3.25rem" },
              lineHeight: 1.2,
              color: "#F5FAFF",
            }}
            className="font-orbitron"
          >
            Effortless Process, Continuous Growth
          </Typography>
          <Box
            sx={{
              width: { xs: "80%", md: "45%" },
              height: "2px",
              bgcolor: "rgba(157,219,234,0.35)",
              borderRadius: 999,
              alignSelf: { xs: "center", md: "flex-start" },
            }}
          />
        </Stack>

        <Grid
          container
          spacing={{ xs: 4, md: 3 }}
          justifyContent="center"
          alignItems="stretch"
        >
          {steps.map((step) => (
            <Grid
              key={step.number}
              size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}
              sx={{ display: "flex" }}
            >
              <Box
                sx={{
                  position: "relative",
                  isolation: "isolate",
                  flex: 1,
                  background:
                    "linear-gradient(160deg, rgba(13,28,64,0.88), rgba(9,21,51,0.78))",
                  borderRadius: 4,
                  px: { xs: 2.5, md: 3.5 },
                  py: { xs: 3, md: 4 },
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                  border: "1px solid rgba(157,219,234,0.16)",
                  boxShadow:
                    "0 35px 60px rgba(3,14,38,0.45), inset 0 0 0 1px rgba(255,255,255,0.05)",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "0 45px 80px rgba(3,14,38,0.55), inset 0 0 0 1px rgba(135,203,222,0.35)",
                  },
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    inset: 0,
                    background:
                      "radial-gradient(circle at top right, rgba(157,219,234,0.15), transparent 60%)",
                    opacity: 0.85,
                    zIndex: -1,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: { xs: 1.5, md: 2 },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 68, md: 80 },
                      height: { xs: 68, md: 80 },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      filter: "drop-shadow(0 22px 35px rgba(19,194,182,0.35))",
                    }}
                  >
                    <Image
                      src={step.icon}
                      alt={`Step ${step.number}`}
                      width={80}
                      height={80}
                      style={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                </Box>

                <Box>
                  <Typography
                    variant="subtitle1"
                    className="font-outfit"
                    sx={{
                      color: "rgba(157,219,234,0.7)",
                      textTransform: "uppercase",
                      letterSpacing: "0.18em",
                      fontSize: { xs: "0.75rem", md: "0.8rem" },
                      mb: 1,
                    }}
                  >
                    {step.subtitle}
                  </Typography>
                  <Typography
                    variant="h6"
                    className="font-orbitron"
                    sx={{
                      fontSize: { xs: "1.2rem", md: "1.35rem" },
                      color: "#F2F7FF",
                      mb: 1.5,
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-outfit"
                    sx={{
                      color: "rgba(208,223,255,0.75)",
                      fontSize: { xs: "0.92rem", md: "1.02rem" },
                      lineHeight: 1.7,
                      fontFamily: "'Outfit', sans-serif",
                    }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
