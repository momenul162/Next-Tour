// components/ExpertTourGuides.js
import { Box, Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";

const tourGuides = [
  {
    name: "Merrie Lewis",
    title: "Tour Guide",
    image: "/guide/team-1.jpg", // Replace with the actual path to your images
  },
  {
    name: "Parks Missie",
    title: "Tour Guide",
    image: "/guide/team-2.jpg",
  },
  {
    name: "Mariana Buenos",
    title: "Tour Guide",
    image: "/guide/team-3.jpg",
  },
];

const ExpertTourGuides = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      {/* Section Header */}
      <Box sx={{ textAlign: "center", pb: 3 }}>
        <Typography>Tour Guide</Typography>
        <Typography sx={{ fontSize: { xs: 20, md: 35, xl: 42 }, fontWeight: 500, lineHeight: 1 }}>
          Expert Tour Guides
        </Typography>
      </Box>

      {/* Cards Grid */}
      <Grid container spacing={4} justifyContent="center">
        {tourGuides.map((guide, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                borderRadius: "12px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Image */}
              <CardMedia component="img" height="350" image={guide.image} alt={guide.name} />
              {/* Text */}
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#333", marginBottom: "0.5rem" }}
                >
                  {guide.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#666" }}>
                  {guide.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExpertTourGuides;
