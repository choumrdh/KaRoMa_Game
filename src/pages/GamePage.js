import React, { useState, useEffect } from "react";
// import Header from "../components/Header/Header"; 
// import Game from "../components/Game/Game";
// import API from "../utils/API";

import Container from "@material-ui/core/Container";

const GamePage = (props) => {
  // const [userId, setUserId] = useState(0);
  // useEffect(() => {
  //   API.createUser({ userEmail: props.user.email }).then((res) => {
  //     setUserId(res.data._id);
  //     sessionStorage.setItem('userId', res.data._id)
  //   });
  // }, [props]);

  return (
    <Container>
      <h1>This is gamepage</h1>
      {/* <Header /> */}
      {/* <Game 
        user={props.user, userId} 
      /> */}
    </Container>
  );
};

export default GamePage;
