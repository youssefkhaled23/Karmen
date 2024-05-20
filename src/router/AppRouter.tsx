import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Login from "../pages/Login";
import Trending from "../pages/Trending";
import Rings from "../pages/Rings";
import Necklaces from "../pages/Necklaces";
import NoseRaings from "../pages/NoseRaings"
import Watches from "../pages/Watches";
import Register from "../pages/Register";
import Anklet from "../pages/Anklet";
import WishList from "../pages/WishList";
import Earrings from "../pages/Earrings";
import Cart from "../pages/Cart";
import Braceletes from "../pages/Braceletes";
import Descrption from "../pages/Descrption";

function AppRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Trending/> },
        { path: "login", element: <Login /> },
        { path: "rings", element: <Rings /> },
        { path: "necklaces", element: <Necklaces /> },
        { path: "noseRaings", element: <NoseRaings /> },
        { path: "watches", element: <Watches /> },
        { path: "register", element: <Register /> },
        { path: "Anklet", element: <Anklet /> },
        { path: "WishList", element: <WishList /> },
        { path: "Anklet", element: <Anklet /> },
        { path: "Earrings", element: <Earrings /> },
        { path: "cart", element: <Cart /> },
        { path: "Braceletes", element: <Braceletes /> },
        { path: "Descrption", element: <Descrption /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default AppRouter;
