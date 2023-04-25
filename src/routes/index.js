import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Loading } from "@Components";

import AllRoutes from "./AllRoutes";

const Routes = () => (
  <Router>
    <React.Suspense fallback={<Loading type="fullScreen" />}>
      <AllRoutes />
    </React.Suspense>
  </Router>
);

export default Routes;
