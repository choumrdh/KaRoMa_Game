import React from "react";
import Container from "@material-ui/core/Container";

const HomePage = () => {
  return (
    <section className="full">
      <Container maxWidth="sm">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR7Rl-sNyBSubshvF8tOcfoAAhLZEBywlzVYQ&usqp=CAU" alt="CoronaVirus Icon"/>
        <h1 className="title">Karen, coRona and Mask Game</h1>
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSz3X5CayuAIi6Dvqpom-U_xdRj0LIHBnoNNA&usqp=CAU" alt="mask up"/> */}
      </Container>
    </section>
  );
};

export default HomePage;