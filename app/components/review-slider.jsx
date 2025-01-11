"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import usePlaces from "../hooks/usePlaces";
import { useState } from "react";
import { Box, Container, Rating, Typography } from "@mui/material";

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
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {allReviews &&
          allReviews.map((review, index) => (
            <SwiperSlide key={index}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Rating sx={{ my: 2 }} name="read-only" value={review.rating} readOnly />
                <Typography mb={3} px={2} variant="body1">
                  {review.comment}
                </Typography>
                <Box>
                  <Typography variant="h6">{review.username}</Typography>
                  <Typography mb={2} variant="body2">
                    Traveler
                  </Typography>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
      </Swiper>
    </Container>
  );
}
