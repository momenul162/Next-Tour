import { CardMedia } from "@mui/material";

export const BgVideo = () => {
  return (
    <CardMedia
      component="video"
      height="100%"
      src="/videos/bg-video.mp4"
      alt="bg video not loaded"
      autoPlay
      loop
      muted
      sx={{
        objectFit: "cover",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -2,
        opacity: 0.2,
      }}
    />
  );
};
