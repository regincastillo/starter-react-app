import React from "react";
// import PathsUrl from "@constants/PathsUrl";

const Home = React.lazy(() => import("@Pages/Home"));
const Demo = React.lazy(() => import("@Pages/Wedding/Demo"));


const WeddingRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/wedding-demo",
    element: <Demo />,
  },
  
];

export default WeddingRoutes;
