
import Rates from "./pages/rates.js";
import Home from "./pages/home.js";


var indexRoutes = [
  { path: "/bill-generator", name: "Rates", component: Rates },
  { path: "/", name: "Home", component: Home }
];

export default indexRoutes;
