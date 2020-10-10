import React from "react";
import { Grid, Container } from "@material-ui/core";

const NoMatch = () => {
  return (
      <Container>
        <Grid item xs={12}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSn81upYEY7ORmVCODnRL0i08I4fZLP3J-yKg&usqp=CAU"
            alt="No Match Cat"
            width="100%"
            height="550"
          />
        </Grid>
      </Container>
  );
};

export default NoMatch;
