"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import usePlaces from "../hooks/usePlaces";
import { useState } from "react";
import { Avatar, Box, Card, Container, Rating, Typography } from "@mui/material";

export default function Reviews() {
  const { data, error } = usePlaces();

  const allReviews = data.flatMap((item) =>
    item.reviews.map((review) => ({
      ...review,
      item: item.name,
    }))
  );

  return (
    <Container sx={{ mb: 4 }} id="reviews">
      <Box sx={{ textAlign: "center", pb: 3 }}>
        <Typography>Reviews & Testimonials</Typography>
        <Typography sx={{ fontSize: { xs: 25, md: 40, xl: 55 }, fontWeight: 500, lineHeight: 1 }}>
          Top Reviews for Travel Lovers
        </Typography>
      </Box>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {allReviews &&
          allReviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  p: 3,
                  textAlign: "center",
                  boxShadow: 5,
                  height: 270,
                  borderRadius: 2,
                  position: "relative",
                }}
              >
                <Rating value={review.rating} readOnly sx={{ mb: 2 }} />
                <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                  "{review.comment}"
                </Typography>
                <Avatar
                  src="/static/images/avatar/3.jpg"
                  alt={review.username}
                  sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)",
                    bottom: "22%",
                    width: 64,
                    height: 64,
                    boxShadow: 10,
                    mt: 4,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "5%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  <Typography variant="h6" fontWeight="bold">
                    {review.username}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    Traveler
                  </Typography>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
}
