import getData from "@utils/getData";
import getHash from "@utils/getHash";
import getSpecies from "@utils/getSpecies";
import getGenders from "@utils/getGender";
import getPossibleGenders from "@utils/getPossibleGenders";
import renderGenders from "@utils/renderGenders";
import favoriteIcon from "@images/icons/favorite.svg";
import shareIcon from "@images/icons/share.svg";
import heightIcon from "@images/icons/height.svg";
import categoryIcon from "@images/icons/category.svg";
import weightIcon from "@images/icons/weight.svg";
import genderIcon from "@images/icons/gender.svg";
import abilityIcon from "@images/icons/ability.svg";
import normal from "@images/icons/normal.png";
import fire from "@images/icons/fire.png";
import water from "@images/icons/water.png";
import grass from "@images/icons/grass.png";
import electric from "@images/icons/electric.png";
import ice from "@images/icons/ice.png";
import fighting from "@images/icons/fighting.png";
import poison from "@images/icons/poison.png";
import ground from "@images/icons/ground.png";
import flying from "@images/icons/flying.png";
import psychic from "@images/icons/psychic.png";
import bug from "@images/icons/bug.png";
import rock from "@images/icons/rock.png";
import ghost from "@images/icons/ghost.png";
import dark from "@images/icons/dark.png";
import dragon from "@images/icons/dragon.png";
import steel from "@images/icons/steel.png";
import fairy from "@images/icons/fairy.png";

const genders = [];
const pokemonGenders = [];

const PokeInfo = async () => {
  const id = await getHash();
  const pokemon = await getData(id);
  const species = await getSpecies(id);
  const genders = await getGenders(id);
  const possibleGenders = getPossibleGenders(pokemon, genders);
  const renderedGenders = renderGenders(possibleGenders);

  console.log("Posibles Géneros: ", possibleGenders);

  //Obtener el ícono del tipo
  let typeIcon;
  switch (pokemon.types[0].type.name) {
    case "normal":
      typeIcon = normal;
      break;
    case "fire":
      typeIcon = fire;
      break;
    case "water":
      typeIcon = water;
      break;
    case "grass":
      typeIcon = grass;
      break;
    case "electric":
      typeIcon = electric;
      break;
    case "ice":
      typeIcon = ice;
      break;
    case "fighting":
      typeIcon = fighting;
      break;
    case "poison":
      typeIcon = poison;
      break;
    case "ground":
      typeIcon = ground;
      break;
    case "flying":
      typeIcon = flying;
      break;
    case "psychic":
      typeIcon = psychic;
      break;
    case "bug":
      typeIcon = bug;
      break;
    case "rock":
      typeIcon = rock;
      break;
    case "ghost":
      typeIcon = ghost;
      break;
    case "dark":
      typeIcon = dark;
      break;
    case "dragon":
      typeIcon = dragon;
      break;
    case "steel":
      typeIcon = steel;
      break;
    case "fairy":
      typeIcon = fairy;
      break;
  }

  console.log("pokemon: ", pokemon);
  console.log("species: ", species);
  console.log("genders: ", genders);

  const view = `
  <div class="social-menu">
    <div class="social-menu__favorites">
      <img src="${favoriteIcon}" alt="favorite-button">
    </div>
    <div class="social-menu__share">
      <img src="${shareIcon}" alt="share-button">
    </div>
  </div>
  <div class="poke-info">
    <div class="poke-info__name">
      <h1>${pokemon.name}</h1>
    </div>
    <div class="poke-info__type">
      <span><img src="${typeIcon}" alt="${pokemon.types[0].type.name}"></span>
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
        <div class="characteristics__container--value">
          ${renderedGenders}</div>
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
