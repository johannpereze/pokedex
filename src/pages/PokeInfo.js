import getData from "../utils/getData";
import getHash from "../utils/getHash";
import getSpecies from "../utils/getSpecies";
import logoPD from "../assets/images/pokedex.png"
import heightIcon from "../assets/images/icons/height.png"
import categoryIcon from "../assets/images/icons/category.png"
import weightIcon from "../assets/images/icons/weight.png"
import genderIcon from "../assets/images/icons/gender.png"
import abilityIcon from "../assets/images/icons/ability.png" 


const PokeInfo = async () => {
  const id = await getHash();
  const pokemon = await getData(id); //${pokemon.}   ${species.}
  const species = await getSpecies(id);
  console.log(pokemon);
  console.log(species);
  const view = `
  <div class="social-menu">
    <div class="social-menu__favorites">
      <img src="./assets/images/icons/favorite.svg" alt="favorite-button">
    </div>
    <div class="social-menu__share">
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
  </div>
  <div class="section__characteristics">
    <div class="characteristics">
      <div class="characteristics__container">
        <span class="characteristics__container--icon1 characteristics__container--icon" style="background-image: url(${heightIcon});"></span>
        <div class="characteristics__container--name"><h2>Height</h2></div>
        <div class="characteristics__container--value"><h3>${
          pokemon.height / 10
        } m</h3></div>
      </div>
      <div class="characteristics__container">
        <span class="characteristics__container--icon2 characteristics__container--icon" style="background-image: url(${categoryIcon});"></span>
        <div class="characteristics__container--name"><h2>Category</h2></div>
        <div class="characteristics__container--value"><h3>${
          species.genera[7].genus
        }</h3></div>
      </div>
      <div class="characteristics__container">
        <span class="characteristics__container--icon3 characteristics__container--icon" style="background-image: url(${weightIcon});"></span>
        <div class="characteristics__container--name"><h2>Weight</h2></div>
        <div class="characteristics__container--value"><h3>${
          pokemon.weight / 10
        } Kg</h3></div>
      </div>
      <div class="characteristics__container">
        <span class="characteristics__container--icon4 characteristics__container--icon" style="background-image: url(${genderIcon});"></span>
        <div class="characteristics__container--name"><h2>Gender</h2></div>
        <div class="characteristics__container--value"><h3>${
          pokemon.name
        }</h3></div>
      </div>
      <div class="characteristics__container">
        <span class="characteristics__container--icon5 characteristics__container--icon" style="background-image: url(${abilityIcon});"></span>
        <div class="characteristics__container--name"><h2>Ability</h2></div>
        <div class="characteristics__container--value"><h3>${
          pokemon.abilities[0].ability.name
        }</h3></div>
      </div>
    </div>
  </div>
  
  <div class="description">
    <div class="description__title"><h2>Description</h2></div>
    <div class="description__content"><p>${
      species.flavor_text_entries[1].flavor_text
    }</p></div>
  </div>  
<section class="section__stats">
  <div class="stats">  
    <div class="stats__title">
      <h2>Statistics</h2>
    </div>
    <div class="stats__container"><div class="stats__name">
      <h3>HP:</h3>
      
    </div><div class="stats__value">
        <h3>${pokemon.stats[0].base_stat}</h3>
      </div></div>
    <div class="stats__container"><div class="stats__name">
      <h3>Attack:</h3>
      
    </div><div class="stats__value">
        <h3>${pokemon.stats[1].base_stat}</h3>
      </div></div>
    <div class="stats__container"><div class="stats__name">
      <h3>Defense:</h3>
      
    </div><div class="stats__value">
        <h3>${pokemon.stats[2].base_stat}</h3>
      </div></div>
    <div class="stats__container"><div class="stats__name">
      <h3>Special Attack:</h3>
      
    </div><div class="stats__value">
        <h3>${pokemon.stats[3].base_stat}</h3>
      </div></div>
    <div class="stats__container"><div class="stats__name">
      <h3>Special Defense:</h3>
      
    </div><div class="stats__value">
        <h3>${pokemon.stats[4].base_stat}</h3>
      </div></div>
    <div class="stats__container"><div class="stats__name">
      <h3>Speed:</h3>
      
    </div><div class="stats__value">
        <h3>${pokemon.stats[5].base_stat}</h3>
      </div></div>    
  </div>
</section>
    `;
  return view;
};

export default PokeInfo;


