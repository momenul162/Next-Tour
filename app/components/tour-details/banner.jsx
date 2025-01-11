import { Box } from "@mui/material";

export default function Banner({ image }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        objectFit: "cover",
        zIndex: -2,
      }}
      component="img"
      width={"100%"}
      height={"25rem"}
      src={image}
      alt="Banner"
    />
  );
}
