import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  IconButton,
  Container,
} from "@mui/material";
import ContactCard from "../components/contact-card";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";

const ContactPage = () => {
  return (
    <Container>
      <ContactCard />
      <Box sx={{ backgroundColor: "#f9f9f9", py: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {/* Left Side Content */}
          <Grid item xs={12} md={6}>
            <Box>
              <Typography variant="subtitle1" sx={{ color: "#555", fontWeight: "bold" }}>
                GET IN TOUCH
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: "#1c294d" }}>
                Feel Free to Contact with us
              </Typography>
              <Typography variant="body1" sx={{ color: "#666", mb: 3 }}>
                Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
                incididunt ut labore dolore magna aliqua. Quis ultrices ipsum suspendisse ultrices
                gravida Risus commodo.
              </Typography>
              <Box>
                {/* Social Icons */}
                <IconButton color="primary" sx={{ mr: 1, bgcolor: "#3b5998", color: "#fff" }}>
                  <FacebookIcon />
                </IconButton>
                <IconButton color="primary" sx={{ mr: 1, bgcolor: "#db4437", color: "#fff" }}>
                  <GoogleIcon />
                </IconButton>
                <IconButton color="primary" sx={{ bgcolor: "#1da1f2", color: "#fff" }}>
                  <TwitterIcon />
                </IconButton>
              </Box>
            </Box>
          </Grid>

          {/* Right Side Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              <Grid container spacing={2}>
                {/* Name and Email */}
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Your Name" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email Address" variant="outlined" />
                </Grid>
                {/* Phone and Subject */}
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Phone Number" variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Subject" variant="outlined" />
                </Grid>
                {/* Message */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Write Message"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                {/* Submit Button */}
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{
                      backgroundColor: "#ff7043",
                      color: "#fff",
                      py: 1.5,
                      boxShadow: 2,
                      "&:hover": { backgroundColor: "#f4511e" },
                    }}
                  >
                    Submit Now
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactPage;
