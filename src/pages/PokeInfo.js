import getData from "../utils/getData";
import getHash from "../utils/getHash";
import getSpecies from "../utils/getSpecies";

const PokeInfo = async () => {
  const id = await getHash();
  const pokemon = await getData(id); //${pokemon.}   ${species.}
  const species = await getSpecies(id);
  console.log(pokemon);
  console.log(species);
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
      <h2>${pokemon.types[0].type.name}</h2>
    </div>
    <div class="characteristics">
      <div class="characteristics__characteristic1">
        <span></span>
        <div class="characteristics__characteristic--name"><h2>Height</h2></div>
        <div class="characteristics__characteristic--value"><h3>${(pokemon.height / 10)} m</h3></div>
      </div>
      <div class="characteristics__characteristic2">
        <span></span>
        <div class="characteristics__characteristic--name"><h2>Category</h2></div>
        <div class="characteristics__characteristic--value"><h3>${species.genera[7].genus}</h3></div>
      </div>
      <div class="characteristics__characteristic3">
        <span></span>
        <div class="characteristics__characteristic--name"><h2>Weight</h2></div>
        <div class="characteristics__characteristic--value"><h3>${(pokemon.weight / 10)} Kg</h3></div>
      </div>
      <div class="characteristics__characteristic4">
        <span></span>
        <div class="characteristics__characteristic--name"><h2>Gender</h2></div>
        <div class="characteristics__characteristic--value"><h3>${pokemon.name}</h3></div>
      </div>
      <div class="characteristics__characteristic5">
        <span></span>
        <div class="characteristics__characteristic--name"><h2>Hability</h2></div>
        <div class="characteristics__characteristic--value"><h3>${pokemon.abilities[0].ability.name}</h3></div>
      </div>
    </div>
  </div>
  <div class="description">
    <div class="description__title"><h2>Description</h2></div>
    <div class="description__content"><p>${species.flavor_text_entries[1].flavor_text}</p></div>
  </div>
  <section class="stats">
    <div class="stats__title">
      <h2>Statistics</h2>
    </div>
    <div class="stat__name">
      <p>HP</p>
      <div class="stat__value">
        <p>${pokemon.stats[0].base_stat}</p>
      </div>
    </div>
    <div class="stat__name">
      <p>Attack</p>
      <div class="stat__value">
        <p>${pokemon.stats[1].base_stat}</p>
      </div>
    </div>
    <div class="stat__name">
      <p>Defense</p>
      <div class="stat__value">
        <p>${pokemon.stats[2].base_stat}</p>
      </div>
    </div>
    <div class="stat__name">
      <p>Special Attack</p>
      <div class="stat__value">
        <p>${pokemon.stats[3].base_stat}</p>
      </div>
    </div>
    <div class="stat__name">
      <p>Special Defense</p>
      <div class="stat__value">
        <p>${pokemon.stats[4].base_stat}</p>
      </div>
    </div>
    <div class="stat__name">
      <p>Speed</p>
      <div class="stat__value">
        <p>${pokemon.stats[5].base_stat}</p>
      </div>
    </div>
  </section>
    `;
    return view;
};

export default PokeInfo;
