// components/AboutSection.js
import { Box, Button, Container, Skeleton, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import ExpertTourGuides from "../components/about/tour-guide";
import Reviews from "../components/review-slider";
import { SkeletonList } from "../ui/skeleton";

const AboutSection = () => {
  return (
    <Container>
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        sx={{
          my: 10,
          padding: "2rem",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          overflow: "hidden",
        }}
      >
        {/* Text Section */}
        <Box flex={1} sx={{ padding: "1rem" }}>
          <Typography
            variant="overline"
            sx={{ color: "#888", fontWeight: "bold", marginBottom: "0.5rem" }}
          >
            About Next Tour
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              color: "#333",
              marginBottom: "1rem",
              lineHeight: 1.4,
            }}
          >
            World Best Travel Agency Company Since 2008.
          </Typography>
          <Typography variant="body1" sx={{ color: "#666", marginBottom: "1.5rem" }}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
            ut labore dolore magna aliqua. Quis ipsum suspen disse ultrices gravida risus commodo
            viverra maecenas accumsan lacus vel facilisis.
          </Typography>
          <Link href={"/#pricing"}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FF7043",
                color: "#fff",
                padding: "0.75rem 2rem",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#FF5722",
                },
              }}
            >
              Find Tours
            </Button>
          </Link>
        </Box>

        {/* Image Section */}
        <Box
          flex={1}
          sx={{
            position: "relative",
            width: { xs: "100%", md: "50%" },
            height: "auto",
            padding: "0.7rem",
            bgcolor: "#f4f6f6",
            borderRadius: "8px",
          }}
        >
          <Image
            src="/about-3.jpg" // Replace with your image path
            alt="Kayaking Adventure"
            layout="responsive"
            width={500}
            height={300}
            style={{
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>

      {/* REview component */}
      <Reviews />
      <ExpertTourGuides />
    </Container>
  );
};

export default AboutSection;
