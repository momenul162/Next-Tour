import { Box, CardMedia } from "@mui/material";

export const BgVideo = () => {
  return (
    // <CardMedia
    //   component="video"
    //   height="100%"
    //   src="/videos/bg-video.mp4"
    //   alt="bg video not loaded"
    //   autoPlay
    //   loop
    //   muted
    //   sx={{
    //     objectFit: "cover",
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     zIndex: -2,
    //     opacity: 0.2,
    //   }}
    // />

    // <Box
    //   sx={{
    //     position: "absolute",
    //     top: 0,
    //     left: 0,
    //     width: "100%",
    //     overflow: "hidden",
    //     opacity: 0.5,
    //     zIndex: -2, // Ensure the video stays behind other content
    //   }}
    // >
    <video
      autoPlay
      loop
      muted
      style={{
        height: "100%",
        width: "100%",
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -2,
        opacity: 0.2,
      }}
    >
      <source src="/videos/bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    // </Box>
  );
};
