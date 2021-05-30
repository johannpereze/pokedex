// let pokemonID = 150;

// console.log(document.getElementById('inputNumber').value)

// // function pokeID() {
//   var pokemonID = document.getElementById('inputNumber').value;
//   // return pokemonID
//   // }

responsePokeApi = () => {
  var pokemonID = document.getElementById('inputNumber').value;
  
  var settings = {
    url: `https://pokeapi.co/api/v2/pokemon/${pokemonID}/`,
    method: "GET",
    timeout: 0,
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    function writePokeInfo() {
      document.getElementById(
        "sprite"
      ).innerHTML = `<img src="${response.sprites.versions["generation-v"]["black-white"].animated.front_default}" alt="">`;
      document.getElementById("name").innerHTML = `${response.forms[0].name}`;
      document.getElementById("number").innerHTML = `${response.id}`;
      document.getElementById(
        "type"
      ).innerHTML = `${response.types[0].type.name}`;
      for (let index = 0; index < response.stats.length; index++) {
        document.getElementById(
          `statName${index}`
        ).innerHTML = `${response.stats[index].stat.name}`;
        document.getElementById(
          `statValue${index}`
        ).innerHTML = `${response.stats[index].base_stat}`;
      }
    }
    writePokeInfo();
  });
};
