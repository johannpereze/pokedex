const API = "https://pokeapi.co/api/v2/pokemon/";

const getData = async (id) =>{
    id === '/' ? id = 25 : id;
    const apiURL = id ? `${API}${id}`: `${API}${25}`;
    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error  );
    }
};

export default getData;