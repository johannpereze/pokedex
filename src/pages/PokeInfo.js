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
        <div class="characteristics__characteristic--value"><p>${species.genera[7].genus}</p></div>
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
  <div class="description"><p>${species.flavor_text_entries[1].flavor_text}</p></div>
  <section class="stats">
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
