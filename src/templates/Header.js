import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Header = async () => {
  const id = await getHash();
  const pokemon = await getData(id); 
  const headerImg = id === '/' ? './assets/images/pokedex.png' : pokemon.sprites.other["official-artwork"].front_default
  const backArrow = id === '/' ? '' : '<span class="back-arrow">flecha</span>';
  const view = `
  <div class="header-ball">
    <div class="header-ball__artwork">
    <a href="#" class="back-arrow">${backArrow}</a>
     <img src="${headerImg}">
      <div class="header-ball__button">
        <img src="${pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="${pokemon.name}">
      </div>
    </div>
  </div>`;
  return view;
};

export default Header;
