let stats = [
  {
      "base_stat": 35,
      "effort": 0,
      "stat": {
          "name": "hp",
          "url": "https://pokeapi.co/api/v2/stat/1/"
      }
  },
  {
      "base_stat": 55,
      "effort": 0,
      "stat": {
          "name": "attack",
          "url": "https://pokeapi.co/api/v2/stat/2/"
      }
  },
  {
      "base_stat": 40,
      "effort": 0,
      "stat": {
          "name": "defense",
          "url": "https://pokeapi.co/api/v2/stat/3/"
      }
  },
  {
      "base_stat": 50,
      "effort": 0,
      "stat": {
          "name": "special-attack",
          "url": "https://pokeapi.co/api/v2/stat/4/"
      }
  },
  {
      "base_stat": 50,
      "effort": 0,
      "stat": {
          "name": "special-defense",
          "url": "https://pokeapi.co/api/v2/stat/5/"
      }
  },
  {
      "base_stat": 90,
      "effort": 2,
      "stat": {
          "name": "speed",
          "url": "https://pokeapi.co/api/v2/stat/6/"
      }
  }
]

responsePokeApi = () => {
      function writePokeInfo() {
      document.getElementById(
        "sprite"
      ).innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/25.gif" alt="">`;
      document.getElementById("name").innerHTML = `Pikachu`;
      document.getElementById("number").innerHTML = `25`;
      document.getElementById(
        "type"
      ).innerHTML = `electric`;
      for (let index = 0; index < stats.length; index++) {
        document.getElementById(
          `statName${index}`
        ).innerHTML = stats[index].stat.name;
        document.getElementById(
          `statValue${index}`
        ).innerHTML = stats[index].base_stat;
      }
    }
    writePokeInfo();
  }

  responsePokeApi()
