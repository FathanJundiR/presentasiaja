import { createBrowserRouter, redirect } from "react-router-dom";
import Toastify from "toastify-js";
import LoginPage from "../views/LoginPage";
import BaseLayout from "../views/BaseLayout";
import HomePage from "../views/HomePage";
import GamePage from "../views/GamePage";
import { io } from "socket.io-client";

const socket = io("https://server.fathanjundirabbani.my.id", {
  autoConnect: false,
});

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.getItem("access_token")) {
        Toastify({
          text: "You're already logged in",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "left",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {},
        }).showToast();
        return redirect("/"); // Redirect to home if already logged in
      }
      return null;
    },
  },
  {
    element: <BaseLayout />,
    loader: () => {
      if (!localStorage.getItem("access_token")) {
        Toastify({
          text: "Please login first",
          duration: 3000,
          newWindow: true,
          close: true,
          gravity: "top",
          position: "left",
          stopOnFocus: true,
          style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
          onClick: function () {},
        }).showToast();
        return redirect("/login"); // Redirect to login if not authenticated
      }
      return null;
    },

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/gamePage",
        element: <GamePage socket={socket} />,
      },
    ],
  },
]);

export default router;
