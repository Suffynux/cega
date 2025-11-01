"use client";

import { Box, Chip, Container, Grid, Stack, Typography } from "@mui/material";
import {
  PsychologyRounded,
  RouteRounded,
  HubRounded,
  MenuBookRounded,
  Diversity2Rounded,
  HandshakeRounded,
  GavelRounded,
  TrendingUpRounded,
  SupportAgentRounded,
} from "@mui/icons-material";
import { motion } from "framer-motion";

interface BenefitItem {
  title: string;
  description: string;
  Icon: typeof PsychologyRounded;
}

const benefits: BenefitItem[] = [
  {
    title: "Expert Mentorship",
    description:
      "Bi-monthly 1:1s with founders, product, UA, finance, and legal mentors.",
    Icon: PsychologyRounded,
  },
  {
    title: "Tailored Growth Plan",
    description:
      "Diagnostic at onboarding followed by a milestone roadmap built for your stage.",
    Icon: RouteRounded,
  },
  {
    title: "Zero-Cost Infrastructure",
    description:
      "Free co-working, meeting rooms, dev/render machines, and licensed tools.",
    Icon: HubRounded,
  },
  {
    title: "Workshops & Masterclasses",
    description:
      "Deep dives on game design, monetization, publishing, IP, and pitch craft.",
    Icon: MenuBookRounded,
  },
  {
    title: "Community & Partnerships",
    description:
      "Instant access to studios, publishers, universities, and the CEGA consortium.",
    Icon: Diversity2Rounded,
  },
  {
    title: "Investor & Publisher Access",
    description:
      "Mock pitches leading to Investor Summit spots and curated 1:1 introductions.",
    Icon: HandshakeRounded,
  },
  {
    title: "Legal & Compliance Support",
    description:
      "Guidance on IP, company setup, contracts, and due-diligence data rooms.",
    Icon: GavelRounded,
  },
  {
    title: "Measurable KPIs",
    description:
      "Baseline to endline tracking with monthly reviews so progress stays visible.",
    Icon: TrendingUpRounded,
  },
  {
    title: "Alumni & Post-Program",
    description:
      "Ongoing office hours and lifetime access to CEGA's operator network.",
    Icon: SupportAgentRounded,
  },
];

const MotionBox = motion(Box as React.ElementType);

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut", // Correct easing function
    },
  },
};

export default function BenefitSection() {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: { xs: 12, md: 16 },
        background:
          "linear-gradient(160deg, #f5f8ff 0%, #e7f1ff 28%, #dff7ff 100%)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: { xs: 240, md: 320 },
            height: { xs: 240, md: 320 },
            top: { xs: "-8%", md: "-12%" },
            right: { xs: "-20%", md: "-8%" },
            background:
              "radial-gradient(circle at center, rgba(19,194,182,0.25), transparent 65%)",
            filter: "blur(12px)",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            width: { xs: 220, md: 340 },
            height: { xs: 220, md: 340 },
            bottom: { xs: "-12%", md: "-18%" },
            left: { xs: "-16%", md: "-6%" },
            background:
              "radial-gradient(circle at center, rgba(23,62,129,0.3), transparent 65%)",
            filter: "blur(22px)",
          }}
        />
      </Box>

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          alignItems="stretch"
          justifyContent="space-between"
        >
          <Grid container component="div">
            <MotionBox
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 3,
              }}
            >
              <Stack spacing={2} alignItems="flex-start">
                <Chip
                  label="Benefits"
                  size="small"
                  className="font-outfit"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: "0.32em",
                    fontWeight: 600,
                    px: 2,
                    bgcolor: "rgba(23,62,129,0.08)",
                    color: "#173E81",
                    border: "1px solid rgba(23,62,129,0.12)",
                  }}
                />

                <Typography
                  variant="h3"
                  component="h2"
                  className="font-orbitron"
                  sx={{
                    fontSize: { xs: "2.35rem", md: "3.05rem" },
                    lineHeight: 1.2,
                    color: "#0d2a55",
                  }}
                >
                  What You Get at CEGA
                </Typography>
                <Typography
                  variant="body1"
                  className="font-outfit"
                  sx={{
                    color: "#4f6da5",
                    fontSize: { xs: "1rem", md: "1.1rem" },
                    lineHeight: 1.7,
                  }}
                >
                  Each cohort unlocks an operational backbone tuned for gaming
                  ventures — from strategy and infrastructure to lifelong
                  community. Dive into the benefits that make CEGA the launchpad
                  for high-performing studios.
                </Typography>
              </Stack>

              <Box
                sx={{
                  mt: 4,
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                  background:
                    "linear-gradient(140deg, rgba(23,62,129,0.92), rgba(19,194,182,0.72))",
                  color: "#F5FAFF",
                  px: { xs: 3.5, md: 4 },
                  py: { xs: 4, md: 5 },
                  boxShadow:
                    "0 35px 70px rgba(10,22,48,0.18), inset 0 0 0 1px rgba(255,255,255,0.08)",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    opacity: 0.4,
                    background:
                      "radial-gradient(circle at top left, rgba(255,255,255,0.4), transparent 55%)",
                  }}
                />
                <Stack spacing={1.6} sx={{ position: "relative", zIndex: 1 }}>
                  <Typography
                    variant="subtitle2"
                    className="font-outfit"
                    sx={{
                      textTransform: "uppercase",
                      letterSpacing: "0.32em",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    Dedicated outcomes
                  </Typography>
                  <Typography
                    variant="h5"
                    className="font-orbitron"
                    sx={{ fontWeight: 700 }}
                  >
                    360° Enablement from Day One
                  </Typography>
                  <Typography
                    variant="body2"
                    className="font-outfit"
                    sx={{ color: "rgba(237,246,255,0.85)", lineHeight: 1.7 }}
                  >
                    We combine structured operating cadence with specialist
                    mentors to accelerate your creative and commercial KPIs.
                    Expect measurable growth sprints, investor readiness, and a
                    support system that extends well beyond demo day.
                  </Typography>
                </Stack>
              </Box>
            </MotionBox>
          </Grid>

          <Grid container size={{ xs: 12, md: 12 }} component="div">
            <Box
              sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                py: 1,
              }}
            >
              <style>{`
                @keyframes benefitScroll {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-50%); }
                }
              `}</style>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  width: "max-content",
                  animation: "benefitScroll 32s linear infinite",
                }}
              >
                {[...benefits, ...benefits].map(
                  ({ title, description, Icon }, index) => (
                    <MotionBox
                      key={title + index}
                      custom={index}
                      variants={itemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.35 }}
                      whileHover={{ y: -8, scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      sx={{
                        minWidth: { xs: 220, sm: 260, md: 240 },
                        maxWidth: { xs: 240, sm: 280, md: 260 },
                        borderRadius: 3,
                        px: 2,
                        py: 2.5,
                        display: "flex",
                        flexDirection: "column",
                        gap: 1.2,
                        background:
                          "linear-gradient(150deg, rgba(255,255,255,0.95), rgba(235,244,255,0.9))",
                        border: "1px solid rgba(23,62,129,0.12)",
                        boxShadow:
                          "0 10px 25px rgba(16,45,92,0.08), inset 0 0 0 1px rgba(255,255,255,0.6)",
                        transition:
                          "box-shadow 0.35s ease, transform 0.35s ease",
                        "&:hover": {
                          boxShadow:
                            "0 18px 40px rgba(16,45,92,0.14), inset 0 0 0 1px rgba(19,194,182,0.35)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: 2.5,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background:
                            "linear-gradient(135deg, rgba(19,194,182,0.18), rgba(23,62,129,0.18))",
                          boxShadow: "0 8px 18px rgba(23,62,129,0.12)",
                        }}
                      >
                        <Icon sx={{ fontSize: 20, color: "#173E81" }} />
                      </Box>
                      <Box>
                        <Typography
                          variant="h6"
                          className="font-orbitron"
                          sx={{
                            fontSize: { xs: "0.98rem", md: "1.05rem" },
                            color: "#0d2a55",
                            mb: 0.3,
                            whiteSpace: "normal",
                          }}
                        >
                          {title}
                        </Typography>
                        <Typography
                          variant="body2"
                          className="font-outfit"
                          sx={{
                            color: "#4f6da5",
                            lineHeight: 1.5,
                            fontSize: { xs: "0.85rem", md: "0.92rem" },
                            whiteSpace: "normal",
                          }}
                        >
                          {description}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          inset: "auto 0 -1px auto",
                          height: 4,
                          borderRadius: "0 0 12px 12px",
                          background:
                            "linear-gradient(90deg, rgba(19,194,182,0.9), rgba(23,62,129,0.9))",
                        }}
                      />
                    </MotionBox>
                  )
                )}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
