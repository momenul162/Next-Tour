import { Card, CardContent, Container, Grid, Skeleton } from "@mui/material";

export const SkeletonCard = () => {
  return (
    <Card>
      <Skeleton variant="rectangular" height={200} />
      <CardContent>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="text" width="90%" />
      </CardContent>
      <Skeleton variant="rectangular" height={36} width="50%" sx={{ margin: 2 }} />
    </Card>
  );
};

export const SkeletonList = () => {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" padding={4}>
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SkeletonCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export const ReviewSkeleton = () => {
  return (
    <Container>
      <Grid container spacing={4} justifyContent="center" padding={4}>
        {[1, 2, 3].map((_, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <SkeletonCard />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
