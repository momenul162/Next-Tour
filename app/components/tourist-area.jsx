"use client";

import React from "react";
import usePlaces from "../hooks/usePlaces";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
  Container,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function PlacesList() {
  const { data, error } = usePlaces();
  const router = useRouter();

  const handleDetailsClick = (id) => {
    router.push(`/places/${id}`);
  };

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Container sx={{ py: 3 }} id="pricing">
      <Box sx={{ textAlign: "center", pb: 3 }}>
        <Typography>Modern & Beautiful</Typography>
        <Typography sx={{ fontSize: { xs: 25, md: 40, xl: 55 }, fontWeight: 500, lineHeight: 1 }}>
          Our Most Popular Adventures
        </Typography>
      </Box>
      <Grid container spacing={{ xs: 2, md: 4, lg: 6 }}>
        {data.map((place) => (
          <Grid item key={place.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                maxWidth: 340,
                maxHeight: 600,
                boxShadow: 3,
              }}
            >
              <CardMedia
                sx={{
                  transition: "all 0.3s, 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
                component="img"
                height="200"
                image={place.image}
                alt={place.name}
              />
              <CardContent>
                <Typography variant="h5">{place.name}</Typography>
                <Typography variant="body1">
                  Average Cost: {place.averageCostPerDay} per place for per person
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {place.description.substring(0, 100)}...
                </Typography>
              </CardContent>
              <Link href={`${place.id}`}>
                <Button
                  size="small"
                  fullWidth
                  sx={{ borderTop: 1, py: 1 }}
                  onClick={() => handleDetailsClick(place.id)}
                >
                  View Details
                </Button>
              </Link>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
