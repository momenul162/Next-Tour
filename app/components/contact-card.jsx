import { Grid, Card, CardContent, Typography, Avatar, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

const ContactCard = () => {
  return (
    <Container sx={{ backgroundColor: "#f9f9f9", mt: 13, mb: 4 }}>
      <Grid container justifyContent="center" spacing={{ xs: 1, md: 3, lg: 5 }}>
        {/* Address Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: 2,
              borderRadius: 3,
              p: 3,
            }}
          >
            <Avatar sx={{ p: 1, margin: "0 auto", bgcolor: "#FFEBEE" }}>
              <LocationOnIcon color="error" />
            </Avatar>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Address
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Binodpur, 6206,
                <br />
                Rajshahi, Bangladesh
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Phone Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: 2,
              borderRadius: 3,
              p: 3,
            }}
          >
            <Avatar sx={{ p: 1, margin: "0 auto", bgcolor: "#FFEBEE" }}>
              <PhoneIcon color="error" />
            </Avatar>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Phone
              </Typography>
              <Typography variant="body2" color="textSecondary">
                +31 666 888 0001
                <br />
                +31 666 888 0023
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Email Card */}
        <Grid item xs={12} sm={6} md={4}>
          <Card
            sx={{
              display: "flex",
              alignItems: "center",
              boxShadow: 2,
              borderRadius: 3,
              p: 3,
            }}
          >
            <Avatar sx={{ p: 1, margin: "0 auto", bgcolor: "#FFEBEE" }}>
              <EmailIcon color="error" />
            </Avatar>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Email
              </Typography>
              <Typography variant="body2" color="textSecondary">
                info@example.com
                <br />
                info@example.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactCard;
