import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";

const PhotoGallery = ({ images }) => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h5" fontWeight="bold">
        Tour Photo Gallery
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ my: 2 }}>
        Enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur.
      </Typography>
      <ImageList sx={{ height: 450 }}>
        {images.map((item) => (
          <ImageListItem key={item.image}>
            <Box
              component={"img"}
              src={item.image}
              alt={item.name}
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                transition: "all 0.3s, 0.3s",
                "&:hover": {
                  transform: "scale(1.01)",
                },
              }}
            />
            <ImageListItemBar
              title={item.name}
              sx={{
                fontWeight: 600,
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
};

export default PhotoGallery;
