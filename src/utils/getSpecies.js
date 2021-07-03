const API_SPECIES = "https://pokeapi.co/api/v2/pokemon-species/"

const getSpecies = async (id) =>{
    id === '/' ? id = 25 : id;
    const apiSpeciesUrl = id ? `${API_SPECIES}${id}`: `${API_SPECIES}${25}`;
    try {
        const responseSpecies = await fetch(apiSpeciesUrl);
        const dataSpecies = await responseSpecies.json();
        return dataSpecies;
    } catch (error) {
        console.log('Error:', error  );
    }
};

export default getSpecies;