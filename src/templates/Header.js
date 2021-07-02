import getData from "../utils/getData";
import getHash from "../utils/getHash";

const Header = async () => {
  const id = await getHash();
  console.log(id);
  const pokemon = await getData(id); //aun no se como llamar a pikachu en la primera
  let headerImg = id === '/' ? './assets/images/pokedex.png' : pokemon.sprites.other["official-artwork"].front_default
  const view = `
  <div class="header-ball"><p>Este es el header</p>
    <div class="header-ball__artwork">
    <!-- <span class="back-arrow"></span> Todavía no se modificar el template de acuerdo a la página. No se como ponerlo en pokeinfo y quitarlo en home -->
      <img src="${headerImg}">
      <div class="header-ball__button">
        <img src="${pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="${pokemon.name}">
      </div>
    </div>
  </div>`;
  return view;
};

export default Header;
