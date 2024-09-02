import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import RoomComponent from "./pages/RoomComponent.jsx";
import GamePage from "./pages/GamePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RoomComponent />,
  },
  {
    path: "/createroom",
    element: <GamePage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
