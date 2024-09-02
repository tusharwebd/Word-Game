import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const GamePage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Word game</h1>
      <TextField
        id="outlined-basic"
        label="Enter UserName"
        variant="outlined"
      />
      <br />
      <br />
      <TextField id="outlined-basic" label="Enter Room Id" variant="outlined" />
      <br></br>
      <br></br>
      <Button variant="contained">Join Room</Button> <br />
      <br></br>
      <Button variant="contained">Create Room</Button> <br />
      <br />
    </div>
  );
};

export default GamePage;
