import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Header = async () => {
  const id = await getHash();
  const pokemon = await getData(id);
  const headerImg =
    id === "/"
      ? "./assets/images/pokedex.png"
      : pokemon.sprites.other["official-artwork"].front_default;
  const backArrow = id === "/" ? "" : '<img src="./assets/images/icons/arrow.svg" alt="back" class="back-arrow"></a> ';
  const view = `
  <div class="header-ball">
    <a href="#" class="back-arrow">${backArrow}</a>
    <div class="header-ball__artwork">
        <img class="header-ball__artwork--img" src="${headerImg}">
        <div class="header-ball__button">
        <img src="${pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="${pokemon.name}">
      </div>
    </div>
  </div>`;
  return view;
};

export default Header;
