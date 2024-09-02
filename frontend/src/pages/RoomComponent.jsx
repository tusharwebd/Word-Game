import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const socket = io("http://localhost:5000"); // Replace with your Flask server URL

const RoomComponent = () => {
  const [roomId, setRoomId] = useState("");
  const [members, setMembers] = useState([]);

  useEffect(() => {
    // Handle room events
    socket.on("room_joined", (data) => {
      setRoomId(data.room_id);
      setMembers(data.members);
    });

    socket.on("room_left", (data) => {
      setMembers(data.members);
    });

    // Clean up the event listeners
    return () => {
      socket.off("room_joined");
      socket.off("room_left");
    };
  }, []);

  const joinRoom = () => {
    const newRoomId = prompt("Enter a room ID:");
    socket.emit("join_room", { room_id: newRoomId });
  };

  const leaveRoom = () => {
    socket.emit("leave_room", { room_id });
  };

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
      {roomId && (
        <div>
          <p>Room ID: {roomId}</p>
          <p>Members: {members.length}</p>
          <button onClick={leaveRoom}>Leave Room</button>
        </div>
      )}
    </div>
  );
};

export default RoomComponent;
