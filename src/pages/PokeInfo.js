import getData from "../utils/getData";
import getHash from "../utils/getHash";

const PokeInfo = async () => {
  const id = await getHash();
  const pokemon = await getData(id); //${pokemon.}
  const view = `
  <div class="social-menu">
    <div class="social-men__favorites">
      <img src="./assets/images/icons/favorite.svg" alt="favorite-button">
    </div>
    <div class="social-men__share">
      <img src="./assets/images/icons/share.svg" alt="share-button">
    </div>
  </div>
  <div class="poke-info">
    <div class="poke-info__name">
      <h1>${pokemon.name}</h1>
    </div>
    <div class="poke-info__type">
      <span><img src="" alt=""></span>
      <p>${pokemon.types[0].type.name}</p>
    </div>
    <div class="characteristics">
      <div class="characteristics__characteristic1">
        <span></span>
        <div class="characteristics__characteristic--name">Height</div>
        <div class="characteristics__characteristic--value"><p>${(pokemon.height / 10)} m</p></div>
      </div>
      <div class="characteristics__characteristic2">
        <span></span>
        <div class="characteristics__characteristic--name">Category</div>
        <div class="characteristics__characteristic--value"><p>${pokemon.name}</p></div>
      </div>
      <div class="characteristics__characteristic3">
        <span></span>
        <div class="characteristics__characteristic--name">Weight</div>
        <div class="characteristics__characteristic--value"><p>${(pokemon.weight / 10)} Kg</p></div>
      </div>
      <div class="characteristics__characteristic4">
        <span></span>
        <div class="characteristics__characteristic--name">Gender</div>
        <div class="characteristics__characteristic--value"><p>${pokemon.name}</p></div>
      </div>
      <div class="characteristics__characteristic5">
        <span></span>
        <div class="characteristics__characteristic--name">Hability</div>
        <div class="characteristics__characteristic--value"><p>${pokemon.abilities[0].ability.name}</p></div>
      </div>
    </div>
  </div>
    `;
    return view;
};

export default PokeInfo
