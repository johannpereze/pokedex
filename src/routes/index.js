import Header from "../templates/Header";
import PokeInfo from "../pages/PokeInfo";
import Home from "../pages/Home";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": PokeInfo,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");

  
  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
  header.innerHTML = await Header();
};

export default router;
