const possibleGenders = (pokemon, genders) => {
  const thisIdGender = [];
  let actualGender;
  genders.forEach((element) => {
    actualGender = element.name;
    element.pokemon_species_details.forEach((element) => {
      if (element.pokemon_species.name === pokemon.species.name) {
        thisIdGender.push(actualGender);
      }
    });
  });
  return thisIdGender;
};

export default possibleGenders;
