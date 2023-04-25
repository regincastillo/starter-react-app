import { useRoutes } from "react-router-dom";
import WeddingRoutes from "./WeddingRoutes";

const AllRoutes = () => useRoutes([...WeddingRoutes,]);

export default AllRoutes;
