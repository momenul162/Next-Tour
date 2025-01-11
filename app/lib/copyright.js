import { Link, Typography } from "@mui/material";

export default function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "white", mt: 1 }}>
      {"Copyright © "}
      <Link sx={{ color: "white", textDecoration: "none" }} href="/">
        NextTravel
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}
