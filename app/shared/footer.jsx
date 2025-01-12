import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import { Grid } from "@mui/material";
import Copyright from "../lib/copyright";
import { Facebook } from "@mui/icons-material";
import Link from "next/link";
import "../globals.css";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "#F5EEE6",
        textAlign: "left",
      }}
    >
      <Container sx={{ py: 4, mx: "auto" }}>
        <Grid
          container
          spacing={{ xs: 3, md: 4, lg: 6 }}
          sx={{
            width: "100%",
          }}
          item
        >
          <Grid item xs={6} sm={4} md={3}>
            <Box>
              <Typography
                sx={{
                  fontSize: "1.5rem",

                  fontWeight: "bold",
                  display: "flex",
                }}
              >
                <Link href={"/"} style={{ textDecoration: "none", color: "black" }}>
                  <Typography
                    component={"span"}
                    sx={{ color: "#FF6A3D", fontSize: "1.5rem", fontWeight: "bold" }}
                  >
                    NEXT
                  </Typography>{" "}
                  TOUR
                </Link>
              </Typography>
              <Typography variant="body2" sx={{ color: "black", mb: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum reprehenderit
                similique maxime sint.
              </Typography>
              <Stack
                direction="row"
                spacing={1}
                useFlexGap
                sx={{ justifyContent: "left", color: "#030637" }}
              >
                <IconButton
                  color="inherit"
                  size="small"
                  href="https://github.com/mui"
                  aria-label="GitHub"
                  sx={{ alignSelf: "center" }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  size="small"
                  href="https://www.facebook.com/momenul.6076"
                  aria-label="GitHub"
                  sx={{ alignSelf: "center" }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  color="inherit"
                  size="small"
                  href="https://x.com/MaterialUI"
                  aria-label="X"
                  sx={{ alignSelf: "center" }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  color="inherit"
                  size="small"
                  href="https://www.linkedin.com/company/mui/"
                  aria-label="LinkedIn"
                  sx={{ alignSelf: "center" }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            sx={{
              color: "black",
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography sx={{ fontSize: "1.1rem", fontWeight: "medium" }}>Product</Typography>
            <Link className="footer_link" variant="body2" href="#">
              Features
            </Link>
            <Link className="footer_link" variant="body2" href="#reviews">
              Reviews
            </Link>
            <Link className="footer_link" variant="body2" href="#highlights">
              Highlights
            </Link>
            <Link className="footer_link" variant="body2" href="#pricing">
              Pricing
            </Link>
            <Link className="footer_link" variant="body2" href="#">
              FAQs
            </Link>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography sx={{ fontSize: "1.1rem", fontWeight: "medium" }}>Company</Typography>
            <Link className="footer_link" variant="body2" href="/about">
              About us
            </Link>
            <Link className="footer_link" variant="body2" href="#">
              Careers
            </Link>
            <Link className="footer_link" variant="body2" href="/contact">
              Contact
            </Link>
          </Grid>
          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            <Typography sx={{ fontSize: "1.1rem", fontWeight: "medium" }}>Legal</Typography>
            <Link className="footer_link" variant="body2" href="#">
              Terms & Conditions
            </Link>
            <Link className="footer_link" variant="body2" href="#">
              Privacy & Policy
            </Link>
          </Grid>
        </Grid>
      </Container>
      <Box
        sx={{
          bgcolor: "black",
          width: "100%",
          p: 1,
          textAlign: "center",
        }}
      >
        <Copyright />
      </Box>
    </Box>
  );
}
