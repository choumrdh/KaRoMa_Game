import React, { useState, useEffect } from "react";
import Header from "../Components/Header/Header"; 
// import Game from "../Components/Game/Game";
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
      <Header />
      {/* <Game 
        user={props.user, userId} 
      /> */}
    </Container>
  );
};

export default GamePage;
