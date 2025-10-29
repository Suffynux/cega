
	"use client";

import { useState, useMemo, FormEvent } from "react";
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
} from "@mui/material";
import Grid from "@mui/material/Grid";
import { toast } from "react-toastify";

const theme = createTheme({
  palette: {
    primary: { main: "#173E81" }, // Deep Blue
    secondary: { main: "#87CBDE" }, // Aqua Blue
    background: { default: "#FFFFFF" },
    text: { primary: "#000000" },
  },
  typography: { fontFamily: '"Orbitron", sans-serif' },
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

export default function SignupPage({homepage}:any) {
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
        // sx={{
        //   minHeight: "100vh",
        //   background: "linear-gradient(135deg, #173E81 40%, #87CBDE 90%)",
        //   display: "flex",
        //   alignItems: "center",
        //   py: { xs: 6, md: 10 },
        // }}
		   sx={{
    minHeight: "100vh",
    background: "linear-gradient(135deg, #173E81 40%, #87CBDE 90%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: { xs: 4, sm: 6, md: 10 },
    px: { xs: 2, sm: 4 },
    overflowY: "auto", // allow scroll on small screens
  }}
      >
        <Container maxWidth="xl">
          <Grid
            // container
            // spacing={6}
            // alignItems="stretch"
            // justifyContent="center"
			 container
  spacing={{ xs: 2, sm: 4, md: 6 }}
  alignItems="flex-start"
  justifyContent="center"
  sx={{
    flexDirection: { xs: "column", md: "row" }, // stack on small screens
    gap: { xs: 3, md: 0 },
  }}
          >
			{homepage ? (
				 <Grid size={{ xs: 12, md: 12, lg: 12	 }}>
              <Paper
                // elevation={8}
                // sx={{
                //   p: { xs: 3, md: 5 },
                //   borderRadius: "20px",
                //   backgroundColor: "#FFFFFF",
                // }}
				 elevation={8}
  sx={{
    p: { xs: 2.5, sm: 4, md: 5 },
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    width: "100%",
    maxWidth: { xs: "100%", md: "800px", lg: "900px" },
    mx: "auto",
    boxShadow: "0 10px 25px rgba(23, 62, 129, 0.1)",
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
                    <Grid size={{ xs: 12, sm: 3 , }}>
                      <TextField
                        label="Full Name"
                        fullWidth
                        required
                        value={form.fullName}
                        onChange={(e: any) =>
                          handleChange("fullName", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                      <TextField
                        label="Email"
                        fullWidth
                        type="email"
                        required
                        value={form.email}
                        onChange={(e: any) =>
                          handleChange("email", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                      <TextField
                        label="WhatsApp Number"
                        fullWidth
                        required
                        value={form.whatsappNumber}
                        onChange={(e: any) =>
                          handleChange("whatsappNumber", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                      <TextField
                        label="LinkedIn Profile"
                        fullWidth
                        value={form.linkedInProfile}
                        onChange={(e: any) =>
                          handleChange("linkedInProfile", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                      <TextField
                        label="Startup Name"
                        fullWidth
                        value={form.startupName}
                        onChange={(e: any) =>
                          handleChange("startupName", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                      <TextField
                        label="Product / Game Title"
                        fullWidth
                        required
                        value={form.productTitle}
                        onChange={(e: any) =>
                          handleChange("productTitle", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 3 }}>
                      <TextField
                        label="Website / Portfolio"
                        fullWidth
                        value={form.websiteOrPortfolio}
                        onChange={(e: any) =>
                          handleChange("websiteOrPortfolio", e.target.value)
                        }
                      />
                    </Grid>

                    {/* Select Menus */}
                    <Grid size={{ xs: 12, sm: 3 }}>
                      <TextField
                        select
                        label="Origin City"
                        fullWidth
                        value={form.startupOriginCity}
                        onChange={(e: any) =>
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

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        select
                        label="Current Stage"
                        fullWidth
                        value={form.currentStage}
                        onChange={(e: any) =>
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

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        select
                        label="Vertical Focus"
                        fullWidth
                        value={form.vertical}
                        onChange={(e: any) =>
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
                    <Grid size={{ xs: 12 ,sm:6}}>
                      <TextField
                        label="Challenges Faced"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.challengesFaced}
                        onChange={(e: any) =>
                          handleChange("challengesFaced", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12 , sm:6}}>
                      <TextField
                        label="Problem Statement"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.problemStatement}
                        onChange={(e: any) =>
                          handleChange("problemStatement", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        label="Solution Summary"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.solutionSummary}
                        onChange={(e: any) =>
                          handleChange("solutionSummary", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        label="Motivation to Apply"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.motivationToApply}
                        onChange={(e: any) =>
                          handleChange("motivationToApply", e.target.value)
                        }
                      />
                    </Grid>

                    {/* Submit */}
                    <Grid size={{ xs: 12 }}>
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
                          boxShadow: "0px 6px 15px rgba(23, 62, 129, 0.3)",
                        }}
                      >
                        {submitting ? (
                          <CircularProgress size={24} sx={{ color: "#FFFFFF" }} />
                        ) : (
                          "Submit Application"
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Grid>
			):(
				<>
				<Grid container spacing={2} alignContent={"flex-start"} alignItems={"flex-start"}>
      <Grid
              size={{ xs: 12, md: 5, lg: 5 }}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
			  spacing={{ xs: 2, sm: 4, md: 6 }}
            >
              <Paper
                // elevation={6}
                // sx={{
                //   p: { xs: 3, md: 5 },
                //   backgroundColor: "#FFFFFF",
                //   color: "#000000",
                //   borderLeft: "5px solid #87CBDE",
                //   height: "100%",
                // }}
				 elevation={8}
  sx={{
    p: { xs: 2.5, sm: 4, md: 5 },
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    width: "100%",
    maxWidth: { xs: "100%", md: "800px", lg: "900px" },
    mx: "auto",
    boxShadow: "0 10px 25px rgba(23, 62, 129, 0.1)",
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
                  sx={{
                    mt: 2,
                    fontWeight: 700,
                    color: "#173E81",
                    lineHeight: 1.3,
                  }}
                >
                  Join the{" "}
                  <span style={{ color: "#87CBDE" }}>Innovation Program</span>
                </Typography>
                <Typography sx={{ mt: 2, color: "#000000" }}>
                  Submit your startup or animation concept to access mentorship,
                  funding, and CEGA’s creative ecosystem. Build, grow, and
                  innovate with the best minds in gaming & animation.
                </Typography>

                <Box component="ul" sx={{ mt: 3, color: "#173E81", pl: 3 }}>
                  <li>Exclusive mentorship with industry leaders.</li>
                  <li>Showcase projects to global investors.</li>
                  <li>Collaborate with creative and technical experts.</li>
                </Box>
              </Paper>
            </Grid>

            {/* Right Section (Form) */}
            <Grid size={{ xs: 12, md: 7, lg: 6 }}>
              <Paper
                // elevation={8}
                // sx={{
                //   p: { xs: 3, md: 5 },
                //   borderRadius: "20px",
                //   backgroundColor: "#FFFFFF",
                // }}
				 elevation={8}
  sx={{
    p: { xs: 2.5, sm: 4, md: 5 },
    borderRadius: "20px",
    backgroundColor: "#FFFFFF",
    width: "100%",
    maxWidth: { xs: "100%", md: "800px", lg: "900px" },
    mx: "auto",
    boxShadow: "0 10px 25px rgba(23, 62, 129, 0.1)",
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
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Full Name"
                        fullWidth
                        required
                        value={form.fullName}
                        onChange={(e: any) =>
                          handleChange("fullName", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Email"
                        fullWidth
                        type="email"
                        required
                        value={form.email}
                        onChange={(e: any) =>
                          handleChange("email", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="WhatsApp Number"
                        fullWidth
                        required
                        value={form.whatsappNumber}
                        onChange={(e: any) =>
                          handleChange("whatsappNumber", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="LinkedIn Profile"
                        fullWidth
                        value={form.linkedInProfile}
                        onChange={(e: any) =>
                          handleChange("linkedInProfile", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Startup Name"
                        fullWidth
                        value={form.startupName}
                        onChange={(e: any) =>
                          handleChange("startupName", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Product / Game Title"
                        fullWidth
                        required
                        value={form.productTitle}
                        onChange={(e: any) =>
                          handleChange("productTitle", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        label="Website / Portfolio"
                        fullWidth
                        value={form.websiteOrPortfolio}
                        onChange={(e: any) =>
                          handleChange("websiteOrPortfolio", e.target.value)
                        }
                      />
                    </Grid>

                    {/* Select Menus */}
                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        select
                        label="Origin City"
                        fullWidth
                        value={form.startupOriginCity}
                        onChange={(e: any) =>
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

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        select
                        label="Current Stage"
                        fullWidth
                        value={form.currentStage}
                        onChange={(e: any) =>
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

                    <Grid size={{ xs: 12, sm: 6 }}>
                      <TextField
                        select
                        label="Vertical Focus"
                        fullWidth
                        value={form.vertical}
                        onChange={(e: any) =>
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
                    <Grid size={{ xs: 12, sm:6 }}>
                      <TextField
                        label="Challenges Faced"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.challengesFaced}
                        onChange={(e: any) =>
                          handleChange("challengesFaced", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12,sm:6 }}>
                      <TextField
                        label="Problem Statement"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.problemStatement}
                        onChange={(e: any) =>
                          handleChange("problemStatement", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        label="Solution Summary"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.solutionSummary}
                        onChange={(e: any) =>
                          handleChange("solutionSummary", e.target.value)
                        }
                      />
                    </Grid>

                    <Grid size={{ xs: 12 }}>
                      <TextField
                        label="Motivation to Apply"
                        fullWidth
                        multiline
                        minRows={3}
                        value={form.motivationToApply}
                        onChange={(e: any) =>
                          handleChange("motivationToApply", e.target.value)
                        }
                      />
                    </Grid>

                    {/* Submit */}
                    <Grid size={{ xs: 12 }}>
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
                          boxShadow: "0px 6px 15px rgba(23, 62, 129, 0.3)",
                        }}
                      >
                        {submitting ? (
                          <CircularProgress size={24} sx={{ color: "#FFFFFF" }} />
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
			</>
			)}
            {/* Left Section */}
      
		  </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
