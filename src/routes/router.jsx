import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import ChatPage from "../pages/ChatPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/chats",
    element: <ChatPage></ChatPage>,
  },
]);