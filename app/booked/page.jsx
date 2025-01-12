import { Container, Typography } from "@mui/material";

const BookedPage = () => {
  // TODO:Fetch the data to get from database using API call and implement table

  return (
    <Container sx={{ my: 16 }}>
      <Typography variant="h4" textAlign={"center"}>
        Booked list
      </Typography>
    </Container>
  );
};

export default BookedPage;
