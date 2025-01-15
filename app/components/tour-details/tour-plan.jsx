import { Box, Grid, Typography, Divider } from "@mui/material";

export default function TourPlan({ localPlace }) {
  if (!localPlace || !localPlace.length) return null;

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5" fontWeight="bold">
        Tour Plan
      </Typography>
      <Typography variant="body1" paragraph sx={{ my: 2 }}>
        Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Typography>

      {/* Number Circle */}
      {localPlace?.map((item, index) => (
        <Grid
          container
          spacing={2}
          key={item.id || index}
          sx={{
            alignItems: "flex-start",
            marginBottom: 4,
          }}
        >
          {/* Number Circle */}
          <Grid item xs={2} sm={1}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                boxShadow: "0px 4px 10px rgba(255, 87, 34, 0.5)",
                backgroundColor: "#FF6A3D",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 16,
                margin: "auto",
              }}
            >
              {index + 1}
            </Box>
            {/* <Divider
              orientation="horizontal"
              sx={{
                height: "calc(100% - 40px)",
                margin: "0 auto",
                borderWidth: "2px",
                borderColor: "#FF5722",
               
              }}
            /> */}
          </Grid>

          {/* Content */}
          <Grid item xs={10} sm={11}>
            <Typography variant="subtitle2" color="#FF6A3D">
              {" "}
              Recommended Visit Time: {item.recommendedVisitTime}
            </Typography>
            <Typography variant="h6" gutterBottom>
              Day {index + 1}: {item.name}
            </Typography>
            <Typography variant="body2" paragraph>
              {item.description}
            </Typography>
            <ul>
              <li>
                <Typography variant="body2">Entry Fees: {item.entryFee}</Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}
