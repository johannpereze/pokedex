const randomId = () => {
    const NUMBER_OF_POKEMONS = 649;
    const id = Math.floor(Math.random() * NUMBER_OF_POKEMONS);
    return id;
};

export default randomId;